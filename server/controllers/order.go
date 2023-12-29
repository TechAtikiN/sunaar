package controllers

import (
	"fmt"
	"sunaar/initializers"
	"sunaar/models"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

// Return all orders
func GetOrders(c *fiber.Ctx) error {

	// get customer id from query params
	customerID := c.Query("customer_id")

	var orders []models.Order

	// check if customer id is present in query params
	if customerID != "" {
		// fetch orders by customer id
		if err := initializers.DB.Preload("Products").Where("customer_id = ?", customerID).Find(&orders).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "failed to get orders",
			})
		}
	} else {
		// fetch all orders
		if err := initializers.DB.Preload("Products").Find(&orders).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "failed to get orders",
			})
		}
	}

	// return response
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success", "orders": orders,
	})
}

// Return a single order
func GetOrder(c *fiber.Ctx) error {
	// get order id from params
	orderID := c.Params("id")

	// parse order id
	id, err := uuid.Parse(orderID)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// get order
	var order models.Order
	if err := initializers.DB.Preload("Products").Where("id = ?", id).First(&order).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "failed to get order",
		})
	}

	// return response
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success", "data": order,
	})
}

// Create a new order
func CreateOrder(c *fiber.Ctx) error {
	// get the request body
	var payload *models.OrderInput

	// parse the request body into the payload
	if err := c.BodyParser(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// validate the request body
	errors := models.ValidateStuct(payload)
	if errors != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": errors,
		})
	}
	// parse customer id
	customerID, err := uuid.Parse(payload.CustomerID)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// get products from payload
	products := []models.Product{}
	for _, product := range payload.Products {
		// parse product id
		productID, err := uuid.Parse(product.ID)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": err.Error(),
			})
		}

		// check if product exists in database
		var productExists models.Product
		if err := initializers.DB.Where("id = ?", productID).First(&productExists).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "Product does not exist",
			})
		}

		// append product to products
		products = append(products, models.Product{
			ID:       &productID,
			Name:     product.Name,
			Category: product.Category,
			Weight:   product.Weight,
			Image:    product.Image,
		})
	}

	// create order
	order := models.Order{
		CustomerID:    &customerID,
		CustomerName:  payload.CustomerName,
		CustomerEmail: payload.CustomerEmail,
		CustomerPhone: payload.CustomerPhone,
		OrderRemark:   payload.OrderRemark,
		OrderWeight:   payload.OrderWeight,
		OrderValue:    payload.OrderValue,
		Products:      products,
	}

	// save order
	if err := initializers.DB.Create(&order).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// return response
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"status": "success", "message": "order created successfully", "data": order,
	})
}

// Update order status
func UpdateStatus(c *fiber.Ctx) error {
	// get order id from params
	orderID := c.Params("id")

	// parse order id
	id, err := uuid.Parse(orderID)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// get request body
	var payload *models.OrderUpdateInput

	// parse request body into payload
	if err := c.BodyParser(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	fmt.Println("order status", payload.Status)

	// validate request body
	errors := models.ValidateOrderUpdateInput(payload)
	if errors != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": errors,
		})
	}

	// check if the order status is valid
	if payload.Status != models.Active && payload.Status != models.InProgress && payload.Status != models.Cancelled && payload.Status != models.Completed {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "invalid order status",
		})
	}

	// update order
	if err := initializers.DB.Model(&models.Order{}).Where("id = ?", id).Update("status", payload.Status).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// return response
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success", "message": "order updated successfully",
		"data": fiber.Map{
			"order_id": id, "status": payload.Status,
		},
	})
}

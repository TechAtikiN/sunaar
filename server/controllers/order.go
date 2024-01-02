package controllers

import (
	"fmt"
	"strconv"
	"sunaar/initializers"
	"sunaar/models"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

// Return all orders
func GetOrders(c *fiber.Ctx) error {

	// get query params
	customerID := c.Query("customer_id")
	query := c.Query("query")
	currentPage := c.Query("page")
	limit := c.Query("limit")

	// converting the currentPage and limit to int
	currentPageInt, err := strconv.Atoi(currentPage)
	if err != nil {
		currentPageInt = 1
	}

	limitInt, err := strconv.Atoi(limit)
	if err != nil {
		limitInt = 8
	}

	// get all orders
	var orders []models.Order

	// check if customer id is present in query params
	if customerID != "" {
		// fetch orders by customer id
		if err := initializers.DB.Preload("Products").Where("customer_id = ?", customerID).Find(&orders).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "failed to get orders",
			})
		}
	} else if query != "" {
		// fetching all orders with pagination and search query, search for customer name, customer email, and company name
		if err := initializers.DB.Preload("Products").Where("customer_name LIKE ? OR customer_email LIKE ? OR company_name LIKE ?", "%"+query+"%", "%"+query+"%", "%"+query+"%").Offset((currentPageInt - 1) * limitInt).Limit(limitInt).Order("created_at desc").Find(&orders).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "failed to get orders",
			})
		}

	} else {
		// fetch all orders with pagination
		if err := initializers.DB.Preload("Products").Offset((currentPageInt - 1) * limitInt).Limit(limitInt).Order("created_at desc").Find(&orders).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "failed to get orders",
			})
		}
	}

	// return response
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success", "orders": &orders,
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

	// calculate order weight
	var orderWeight float64
	for _, product := range products {
		// convert product weight from string to float
		productWeight, err := strconv.ParseFloat(product.Weight, 64)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": err.Error(),
			})
		}

		orderWeight += productWeight
	}

	// calculate order value
	var orderValue float64
	for _, product := range products {
		// convert product weight from string to float
		productWeight, err := strconv.ParseFloat(product.Weight, 64)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": err.Error(),
			})
		}

		orderValue += productWeight * 6000
	}

	// create order
	order := models.Order{
		CustomerID:    &customerID,
		CustomerName:  payload.CustomerName,
		CustomerEmail: payload.CustomerEmail,
		CustomerPhone: payload.CustomerPhone,
		CompanyName:   payload.CompanyName,
		OrderRemark:   payload.OrderRemark,
		OrderWeight:   strconv.FormatFloat(orderWeight, 'f', -1, 64),
		OrderValue:    strconv.FormatFloat(orderValue, 'f', -1, 64),
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

// Delete order
func DeleteOrder(c *fiber.Ctx) error {
	// get order id from params
	orderID := c.Params("id")

	// parse order id
	id, err := uuid.Parse(orderID)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// delete order
	if err := initializers.DB.Where("id = ?", id).Delete(&models.Order{}).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// return response
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success", "message": "order deleted successfully",
	})
}

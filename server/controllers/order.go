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
		if err := initializers.DB.Preload("Products").Where("company_name LIKE ?", "%"+query+"%").Offset((currentPageInt - 1) * limitInt).Limit(limitInt).Order("created_at desc").Find(&orders).Error; err != nil {
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
	// get request body
	var payload *models.OrderInput

	// parse request body into payload
	if err := c.BodyParser(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// validate request body
	errors := models.ValidateStuct(payload)
	if errors != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": errors,
		})
	}

	// get customer
	var customer models.Customer
	if err := initializers.DB.Where("id = ?", payload.CustomerID).First(&customer).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "customer not found",
		})
	}

	// get products
	var products []models.Product

	// calculate order weight and value
	var orderWeight float64
	var orderValue float64

	// parse product ids and quantity from payload
	for _, orderProduct := range payload.OrderProducts {
		// get product
		var product models.Product
		if err := initializers.DB.Where("id = ?", orderProduct.ProductID).First(&product).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "product not found",
			})
		}

		// append product to products
		products = append(products, product)

		weight, err := strconv.ParseFloat(product.Weight, 64)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "failed to parse product weight",
			})
		}

		orderWeight += weight * float64(orderProduct.Quantity)
		orderValue += 6000 * float64(orderWeight)
	}

	fmt.Println("order weight", orderWeight)

	// create order
	order := models.Order{
		CustomerID:  payload.CustomerID,
		CompanyName: customer.CompanyName,
		OrderRemark: payload.OrderRemark,
		OrderValue:  fmt.Sprintf("%.2f", orderValue),
		OrderWeight: fmt.Sprintf("%.2f", orderWeight),
		Products:    products,
	}

	// create order
	if err := initializers.DB.Create(&order).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": err,
		})
	}

	// return response
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"status": "success", "message": "order created successfully",
		"data": order,
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

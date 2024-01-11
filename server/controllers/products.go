package controllers

import (
	"fmt"
	"strconv"
	"sunaar/initializers"
	"sunaar/models"

	"github.com/gofiber/fiber/v2"
)

// get all products
func GetProducts(c *fiber.Ctx) error {
	// get query params
	category := c.Query("category")
	fmt.Println(category)
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

	// get all products
	var products []models.Product

	// fetch products based on category
	if category != "" {
		if err := initializers.DB.Where("category LIKE ?", "%"+category+"%").Offset((currentPageInt - 1) * limitInt).Limit(limitInt).Find(&products).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "failed to get products",
			})
		}
	} else {
		// fetch all products
		if err := initializers.DB.Offset((currentPageInt - 1) * limitInt).Limit(limitInt).Find(&products).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status": "fail", "message": "failed to get products",
			})
		}
	}

	// return response
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success", "products": &products,
	})
}

// get single product
func GetProduct(c *fiber.Ctx) error {
	// get product id
	id := c.Params("id")

	// get product
	var product models.Product
	if err := initializers.DB.Where("id = ?", id).First(&product).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "failed to get product",
		})
	}

	// return response
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success", "product": &product,
	})
}

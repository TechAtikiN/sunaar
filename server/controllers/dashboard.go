package controllers

import (
	"strconv"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"sunaar/initializers"
	"sunaar/models"
)

func GetDashboard(c *fiber.Ctx) error {
	
	// Total customers 
	var totalCustomers int64
	if err := initializers.DB.Model(&models.Customer{}).Count(&totalCustomers).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "failed to get customers",
		})
	}

	// Total orders
	var totalOrders int64
	if err := initializers.DB.Model(&models.Order{}).Count(&totalOrders).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "failed to get orders",
		})
	}

	// Total revenue
	var totalRevenue float64
	var orders []models.Order

	if err := initializers.DB.Find(&orders).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "failed to get orders",
		})
	} 

	for _, order := range orders {
		orderAmount, err := strconv.ParseFloat(order.OrderValue, 64)
		if err != nil {
			fmt.Println(err)
		}
		totalRevenue += orderAmount
	}

	// top 3 recent orders
	var recentOrders []models.Order
	if err := initializers.DB.Order("created_at desc").Limit(3).Find(&recentOrders).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "failed to get recent orders",
		})
	}

	var topOrders []models.Order
	if err := initializers.DB.Order("order_value desc").Limit(3).Find(&topOrders).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "failed to get top orders",
		})
	}

	// return the total customers, total orders and total revenue
	return c.JSON(fiber.Map{
		"status": "success", 
		"message": "Dashboard Data",
		"totalCustomers": totalCustomers, 
		"totalOrders": totalOrders, 
		"totalRevenue": totalRevenue,
		"recentOrders": recentOrders,
		"topOrders": topOrders,
	})
}
package controllers

import (
	"github.com/gofiber/fiber/v2"
	"sunaar/models"
)

// GetUser is used to get the user
func GetUser(c *fiber.Ctx) error {
	// get the user from the context
	user := c.Locals("user").(models.UserResponse)

	// return the user
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success", "data": fiber.Map{"user": user},
	})
}

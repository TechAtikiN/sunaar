package controllers

import (
	"strconv"
	"strings"
	"sunaar/initializers"
	"sunaar/models"
	"time"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

// Get all customers //
func GetCustomers(c *fiber.Ctx) error {
	// get the request query
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

	// get all the customer from the database
	var customers []models.Customer

	// totalCustomers of customers
	var totalCustomers int64

	if err := initializers.DB.Model(&models.Customer{}).Count(&totalCustomers).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "fail", "message": "failed to get customers",
		})
	}

	var totalPages int64 = totalCustomers / int64(limitInt)

	hasMore := currentPageInt - 1 < int(totalPages)

	// check if there is a query in the request query and get the customers from the database with pagination
	if query != "" {
		// get the customers from the database with pagination and search query, search for name, email, comapany name
		initializers.DB.Where("first_name LIKE ? OR last_name LIKE ? OR email LIKE ? OR company_name LIKE ?",
			"%"+query+"%", "%"+query+"%", "%"+query+"%", "%"+query+"%").Offset((currentPageInt - 1) * limitInt).Limit(limitInt).Find(&customers)
	} else {
		// get the customers from the database with pagination
		initializers.DB.Offset((currentPageInt - 1) * limitInt).Limit(limitInt).Find(&customers)
	}

	// check if there was an error getting the customers from the database
	if err := initializers.DB.Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "fail", "message": err.Error(),
		})
	}

	// return the customers
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status":    "success",
		"message":   "Customers retrieved successfully",
		"customers": &customers, "totalCustomers": totalCustomers, "hasMore": hasMore,
	})
}

// Get a customer //
func GetCustomer(c *fiber.Ctx) error {
	// get the customer id from the request params
	customerID := c.Params("id")

	// get the customer from the database
	var customer models.Customer

	result := initializers.DB.First(&customer, "id = ?", customerID)

	// check if there was an error getting the customer from the database
	if result.Error != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "fail", "message": result.Error.Error(),
		})
	}

	// return the customer
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status":   "success",
		"message":  "Customer retrieved successfully",
		"customer": &customer,
	})
}

// Create customer //
func CreateCustomer(c *fiber.Ctx) error {
	// get the request body
	var payload *models.CustomerInput

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

	// create a new customer
	newCustomer := models.Customer{
		FirstName:      payload.FirstName,
		LastName:       payload.LastName,
		Email:          strings.ToLower(payload.Email),
		Phone:          payload.Phone,
		City:           payload.City,
		State:          payload.State,
		PostalCode:     payload.PostalCode,
		Address:        payload.Address,
		CompanyName:    payload.CompanyName,
		CompanyEmail:   payload.CompanyEmail,
		CompanyPhone:   payload.CompanyPhone,
		CompanyAddress: payload.CompanyAddress,
		Remark:         payload.Remark,
	}

	// save the customer to the database
	result := initializers.DB.Create(&newCustomer)

	// check if there was an error saving the customer to the database
	if result.Error != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "fail", "message": result.Error.Error(),
		})
	}

	// return the customer
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"status": "success", "message": "Customer created successfully", "data": &newCustomer,
	})
}

// Update a customer //
func UpdateCustomer(c *fiber.Ctx) error {
	// get the customer id from the request params
	customerID := c.Params("id")

	// get the request body
	var payload *models.CustomerUpdateInput

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

	// get the customer from the database
	var customer models.Customer
	result := initializers.DB.First(&customer, "id = ?", customerID)
	if err := result.Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"status":  "fail",
				"message": "No customer with that Id exists"})
		}
		return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{"status": "fail", "message": err.Error()})
	}

	// update the customer by merging the payload and the customer
	updates := make(map[string]interface{})
	if payload.FirstName != "" {
		updates["first_name"] = payload.FirstName
	}
	if payload.LastName != "" {
		updates["last_name"] = payload.LastName
	}
	if payload.Email != "" {
		updates["email"] = payload.Email
	}
	if payload.Phone != "" {
		updates["phone"] = payload.Phone
	}
	if payload.City != "" {
		updates["city"] = payload.City
	}
	if payload.State != "" {
		updates["state"] = payload.State
	}
	if payload.PostalCode != "" {
		updates["postal_code"] = payload.PostalCode
	}
	if payload.Address != "" {
		updates["address"] = payload.Address
	}
	if payload.CompanyName != "" {
		updates["company_name"] = payload.CompanyName
	}
	if payload.CompanyEmail != "" {
		updates["company_email"] = payload.CompanyEmail
	}
	if payload.CompanyPhone != "" {
		updates["company_phone"] = payload.CompanyPhone
	}
	if payload.CompanyAddress != "" {
		updates["company_address"] = payload.CompanyAddress
	}
	if payload.Remark != "" {
		updates["remark"] = payload.Remark
	}

	updates["updated_at"] = time.Now()

	initializers.DB.Model(&customer).Updates(updates)

	// check if there was an error updating the customer in the database
	if result.Error != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "fail", "message": result.Error.Error(),
		})
	}

	// return the updated customer
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status":  "success",
		"message": "Customer updated successfully",
		"data":    fiber.Map{"customer": &customer}})
}

// Delete a customer //
func DeleteCustomer(c *fiber.Ctx) error {
	// get the customer id from the request params
	customerId := c.Params("id")

	// delete the customer from the database
	result := initializers.DB.Delete(&models.Customer{}, "id = ?", customerId)

	// check if there was an error deleting the customer from the database
	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"status":  "fail",
			"message": "No customer with that Id exists",
		})
	} else if result.Error != nil {
		return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"status":  "error",
			"message": result.Error,
		})
	}

	// return a status code of 204
	return c.SendStatus(fiber.StatusNoContent)
}

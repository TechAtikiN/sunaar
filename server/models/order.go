package models

import (
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/google/uuid"
)

type Status int

// defining the status of the order as a constant iota (0, 1, 2, 3, 4)
const (
	Active = iota
	InProgress
	Completed
	Cancelled
	Invalid
)

func (s Status) String() string {
	switch s {
	case Active:
		return "Active"
	case InProgress:
		return "In Progress"
	case Completed:
		return "Completed"
	case Cancelled:
		return "Cancelled"
	default:
		return "Unknown"
	}
}

// MarshalJSON and UnmarshalJSON are used to convert the status to and from JSON
func (s Status) MarshalJSON() ([]byte, error) {
	return []byte(`"` + s.String() + `"`), nil
}

func (s *Status) UnmarshalJSON(b []byte) error {
	switch string(b) {
	case `"Active"`:
		*s = Active
	case `"In Progress"`:
		*s = InProgress
	case `"Completed"`:
		*s = Completed
	case `"Cancelled"`:
		*s = Cancelled
	default:
		*s = Invalid
	}
	return nil
}

// Order is the model for the order table
type Order struct {
	ID         *uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	CustomerID *uuid.UUID `gorm:"type:uuid;not null"`
	Products   []Product  `gorm:"many2many:order_products;"`
	// status is an integer, 0 = Active, 1 = InProgress, 2 = Completed, 3 = Cancelled, 4 = Unknown
	Status        Status     `gorm:"type:integer;not null;default:0"`
	CustomerName  string     `gorm:"type:varchar(255);not null"`
	CustomerEmail string     `gorm:"type:varchar(255);not null"`
	CustomerPhone string     `gorm:"type:varchar(255);not null"`
	CompanyName   string     `gorm:"type:varchar(255);not null"`
	OrderRemark   string     `gorm:"type:varchar(1000);not null"`
	CreatedAt     *time.Time `gorm:"not null;default:now()"`
	UpdatedAt     *time.Time `gorm:"not null;default:now()"`
	OrderWeight   string     `gorm:"type:varchar(255);not null"`
	OrderValue    string     `gorm:"type:varchar(255);not null"`
}

// Product is the model for the product table
type Product struct {
	ID       *uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	Name     string     `gorm:"type:varchar(255);not null"`
	Category string     `gorm:"type:varchar(255);not null"`
	Weight   string     `gorm:"type:varchar(255);not null"`
	Image    string     `gorm:"type:varchar(1000);not null"`
}

// OrderProduct is the model for the order_products table which is a join table for order and product
type OrderProduct struct {
	OrderID   *uuid.UUID `gorm:"type:uuid;not null"`
	ProductID *uuid.UUID `gorm:"type:uuid;not null"`
}

// OrderInput is the model for the order input
type OrderInput struct {
	CustomerID    string `json:"customer_id"`
	CustomerName  string `json:"customer_name"`
	CustomerEmail string `json:"customer_email"`
	CompanyName   string `json:"company_name"`
	CustomerPhone string `json:"customer_phone"`
	OrderRemark   string `json:"order_remark"`
	OrderWeight   string `json:"order_weight"`
	OrderValue    string `json:"order_value"`
	Products      []struct {
		ID       string `json:"product_id"`
		Name     string `json:"name"`
		Category string `json:"category"`
		Weight   string `json:"weight"`
		Image    string `json:"image"`
	} `json:"products"`
}

// OrderUpdateInput is the model for the order update input
type OrderUpdateInput struct {
	Status Status `json:"status"`
}

// OrderResponse is the model for the order response
type OrderResponse struct {
	ID            uuid.UUID `json:"id,omitempty"`
	CustomerID    uuid.UUID `json:"customer_id,omitempty"`
	CustomerName  string    `json:"customer_name,omitempty"`
	CustomerEmail string    `json:"customer_email,omitempty"`
	CustomerPhone string    `json:"customer_phone,omitempty"`
	CompanyName   string    `json:"company_name,omitempty"`
	OrderRemark   string    `json:"order_remark,omitempty"`
	OrderWeight   string    `json:"order_weight,omitempty"`
	OrderValue    string    `json:"order_value,omitempty"`
	Status        string    `json:"status,omitempty"`
	Products      []struct {
		Name     string `json:"name,omitempty"`
		Category string `json:"category,omitempty"`
		Weight   string `json:"weight,omitempty"`
		Image    string `json:"image,omitempty"`
	} `json:"products,omitempty"`
	CreatedAt time.Time `json:"created_at,omitempty"`
	UpdatedAt time.Time `json:"updated_at,omitempty"`
}

// OrderUpdateResponse is the model for the order update response
type OrderUpdateResponse struct {
	ID     uuid.UUID `json:"id,omitempty"`
	Status string    `json:"status,omitempty"`
}

// ValidateOrderInput validates the order input and returns an array of errors
func ValidateOrderUpdateInput(input *OrderUpdateInput) []*ErrorResponse {
	var errors []*ErrorResponse
	err := validate.Struct(input)

	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			var element ErrorResponse
			element.Field = err.Field()
			element.Tag = err.Tag()
			element.Value = err.Param()
			errors = append(errors, &element)
		}
	}
	return errors
}

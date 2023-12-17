package models

import (
	"time"

	"github.com/google/uuid"
)

type Product struct {
	ID       *uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	Name     string     `gorm:"type:varchar(255);not null"`
	Category string     `gorm:"type:varchar(255);not null"`
	Weight   string     `gorm:"type:varchar(255);not null"`
	Image    string     `gorm:"type:varchar(1000);not null"`
}

type Order struct {
	ID            *uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	CustomerID    *uuid.UUID `gorm:"type:uuid;not null"`
	Products      []Product  `gorm:"many2many:order_products;"`
	Status        string     `gorm:"type:varchar(100);default:'active';not null"`
	CustomerName  string     `gorm:"type:varchar(255);not null"`
	CustomerEmail string     `gorm:"type:varchar(255);not null"`
	CustomerPhone string     `gorm:"type:varchar(255);not null"`
	OrderRemark   string     `gorm:"type:varchar(1000);not null"`
	CreatedAt     *time.Time `gorm:"not null;default:now()"`
	UpdatedAt     *time.Time `gorm:"not null;default:now()"`
	OrderWeight   string     `gorm:"type:varchar(255);not null"`
	OrderValue    string     `gorm:"type:varchar(255);not null"`
}

type OrderInput struct {
	CustomerID    string `json:"customer_id"`
	CustomerName  string `json:"customer_name"`
	CustomerEmail string `json:"customer_email"`
	CustomerPhone string `json:"customer_phone"`
	OrderRemark   string `json:"order_remark"`
	OrderWeight   string `json:"order_weight"`
	OrderValue    string `json:"order_value"`
	Products      []struct {
		ID       string `json:"id"`
		Name     string `json:"name"`
		Category string `json:"category"`
		Weight   string `json:"weight"`
		Image    string `json:"image"`
	} `json:"products"`
}

type OrderUpdateInput struct {
	Status string `json:"status"`
}

type OrderResponse struct {
	ID            uuid.UUID `json:"id,omitempty"`
	CustomerID    uuid.UUID `json:"customer_id,omitempty"`
	CustomerName  string    `json:"customer_name,omitempty"`
	CustomerEmail string    `json:"customer_email,omitempty"`
	CustomerPhone string    `json:"customer_phone,omitempty"`
	OrderRemark   string    `json:"order_remark,omitempty"`
	OrderWeight   string    `json:"order_weight,omitempty"`
	OrderValue    string    `json:"order_value,omitempty"`
	Status        string    `json:"status,omitempty"`
	Products      []struct {
		ID       uuid.UUID `json:"id,omitempty"`
		Name     string    `json:"name,omitempty"`
		Category string    `json:"category,omitempty"`
		Weight   string    `json:"weight,omitempty"`
		Image    string    `json:"image,omitempty"`
	} `json:"products,omitempty"`
	CreatedAt time.Time `json:"created_at,omitempty"`
	UpdatedAt time.Time `json:"updated_at,omitempty"`
}

type OrderUpdateResponse struct {
	ID     uuid.UUID `json:"id,omitempty"`
	Status string    `json:"status,omitempty"`
}

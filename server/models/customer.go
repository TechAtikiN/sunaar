package models

import (
	"time"

	"github.com/google/uuid"
)

// Customer model
type Customer struct {
	ID             *uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	FirstName      string     `gorm:"type:varchar(255);not null"`
	LastName       string     `gorm:"type:varchar(255);not null"`
	Email          string     `gorm:"type:varchar(255);uniqueIndex;not null"`
	Phone          string     `gorm:"type:varchar(255);uniqueIndex;not null"`
	City           string     `gorm:"type:varchar(255);not null"`
	State          string     `gorm:"type:varchar(255);not null"`
	PostalCode     string     `gorm:"type:varchar(255);not null"`
	Address        string     `gorm:"type:varchar(255);not null"`
	CompanyName    string     `gorm:"type:varchar(255);not null"`
	CompanyEmail   string     `gorm:"type:varchar(255);not null"`
	CompanyPhone   string     `gorm:"type:varchar(255);not null"`
	CompanyAddress string     `gorm:"type:varchar(255);not null"`
	Remark         string     `gorm:"type:varchar(1000);not null"`
	CreatedAt      *time.Time `gorm:"not null;default:now()"`
	UpdatedAt      *time.Time `gorm:"not null;default:now()"`
}

// CustomerInput model (request body)
type CustomerInput struct {
	FirstName      string `json:"first_name"`
	LastName       string `json:"last_name"`
	Email          string `json:"email"`
	Phone          string `json:"phone"`
	City           string `json:"city"`
	State          string `json:"state"`
	PostalCode     string `json:"postal_code"`
	Address        string `json:"address"`
	CompanyName    string `json:"company_name"`
	CompanyEmail   string `json:"company_email"`
	CompanyPhone   string `json:"company_phone"`
	CompanyAddress string `json:"company_address"`
	Remark         string `json:"remark"`
}

// CustomerUpdateInput model (request body)
type CustomerUpdateInput struct {
	FirstName      string `json:"first_name"`
	LastName       string `json:"last_name"`
	Email          string `json:"email"`
	Phone          string `json:"phone"`
	City           string `json:"city"`
	State          string `json:"state"`
	PostalCode     string `json:"postal_code"`
	Address        string `json:"address"`
	CompanyName    string `json:"company_name"`
	CompanyEmail   string `json:"company_email"`
	CompanyPhone   string `json:"company_phone"`
	CompanyAddress string `json:"company_address"`
	Remark         string `json:"remark"`
}

// CustomerResponse model (response body)
type CustomerResponse struct {
	ID             uuid.UUID `json:"id,omitempty"`
	FirstName      string    `json:"first_name,omitempty"`
	LastName       string    `json:"last_name,omitempty"`
	Email          string    `json:"email,omitempty"`
	Phone          string    `json:"phone,omitempty"`
	City           string    `json:"city,omitempty"`
	State          string    `json:"state,omitempty"`
	PostalCode     string    `json:"postal_code,omitempty"`
	Address        string    `json:"address,omitempty"`
	CompanyName    string    `json:"company_name,omitempty"`
	CompanyEmail   string    `json:"company_email,omitempty"`
	CompanyPhone   string    `json:"company_phone,omitempty"`
	CompanyAddress string    `json:"company_address,omitempty"`
	Remark         string    `json:"remark,omitempty"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}

// CustomerUpdateResponse model (response body)
type CustomerUpdateResponse struct {
	ID             uuid.UUID `json:"id,omitempty"`
	FirstName      string    `json:"first_name,omitempty"`
	LastName       string    `json:"last_name,omitempty"`
	Email          string    `json:"email,omitempty"`
	Phone          string    `json:"phone,omitempty"`
	City           string    `json:"city,omitempty"`
	State          string    `json:"state,omitempty"`
	PostalCode     string    `json:"postal_code,omitempty"`
	Address        string    `json:"address,omitempty"`
	CompanyName    string    `json:"company_name,omitempty"`
	CompanyEmail   string    `json:"company_email,omitempty"`
	CompanyPhone   string    `json:"company_phone,omitempty"`
	CompanyAddress string    `json:"company_address,omitempty"`
	Remark         string    `json:"remark,omitempty"`
}

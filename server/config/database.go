package config

import (
	"fmt"
	"sunaar/helper"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectionDB(config *Config) *gorm.DB {
	sqlInfo := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		config.DBHost,
		config.DBPort,
		config.DBUser,
		config.DBPassword,
		config.DBName,
	)

	db, err := gorm.Open(postgres.Open(sqlInfo), &gorm.Config{})
	helper.ErrorPanic(err)

	fmt.Println("Database connected")
	return db
}

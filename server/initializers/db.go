package initializers

import (
	"fmt"
	"log"
	"os"

	"sunaar/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func ConnectDB(config *Config) {
	// connect to the database
	var err error
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai", config.DBHost, config.DBUserName, config.DBUserPassword, config.DBName, config.DBPort)

	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database \n", err.Error())
		os.Exit(1)
	}

	// create the extension if not exists in the database to generate uuid v4 automatically for the id field
	DB.Exec("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\"")
	DB.Logger = logger.Default.LogMode(logger.Info)

	log.Println("Running Migrations")

	// run migration for user and customer table and handle error if any
	err = DB.AutoMigrate(&models.User{}, &models.Customer{}, &models.Order{}, &models.Product{})
	if err != nil {
		log.Fatal("Failed to run migration \n", err.Error())
		os.Exit(1)
	}

	log.Println("🚀 Connected Successfully to the Database")

}

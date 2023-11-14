package main

import (
	"net/http"
	"sunaar/helper"

	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	// Handle GET request at /
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, "Welcome")
	})

	// server at port 8080
	server := &http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	// listen and serve
	err := server.ListenAndServe()
	helper.ErrorPanic(err)

}

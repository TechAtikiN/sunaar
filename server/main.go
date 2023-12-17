package main

import (
	"fmt"
	"log"

	"sunaar/controllers"
	"sunaar/initializers"
	"sunaar/middleware"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

// init is invoked before main()
func init() {
	// load the environment variables
	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatalln("Failed to load environment variables! \n", err.Error())
	}
	initializers.ConnectDB(&config)
}

func main() {
	// create a new fiber app
	app := fiber.New()
	micro := fiber.New()

	// mount the micro app to the main app
	app.Mount("/api", micro)

	// register the middleware
	app.Use(logger.New())

	// register the CORS middleware
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "*",
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowMethods:     "GET, POST, PUT, DELETE,",
		AllowCredentials: true,
	}))

	// register the auth routes
	micro.Route("/auth", func(router fiber.Router) {
		router.Post("/register", controllers.SignUpUser)
		router.Post("/login", controllers.SignInUser)
		router.Get("/logout", middleware.DeserializeUser, controllers.LogoutUser)
	})

	// register the customer routes
	micro.Route("/customers", func(router fiber.Router) {
		router.Post("/", middleware.DeserializeUser, controllers.CreateCustomer)
		router.Get("/", middleware.DeserializeUser, controllers.GetCustomers)
		router.Get("/:id", middleware.DeserializeUser, controllers.GetCustomer)
		router.Put("/:id", middleware.DeserializeUser, controllers.UpdateCustomer)
		router.Delete("/:id", middleware.DeserializeUser, controllers.DeleteCustomer)
	})

	micro.Get("/users/me", middleware.DeserializeUser, controllers.GetUser)

	micro.All("*", func(c *fiber.Ctx) error {
		path := c.Path()
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"status":  "fail",
			"message": fmt.Sprintf("Path: %v does not exists on this server", path),
		})
	})

	log.Fatal(app.Listen(":8000"))
}

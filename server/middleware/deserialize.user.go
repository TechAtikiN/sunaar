package middleware

import (
	"fmt"
	"strings"

	"sunaar/initializers"
	"sunaar/models"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
)

func DeserializeUser(c *fiber.Ctx) error {
	// get the token from the request
	var tokenString string
	authorization := c.Get("Authorization")
	fmt.Println(authorization)

	// check if the token is in the header
	if strings.HasPrefix(authorization, "Bearer ") {
		tokenString = strings.TrimPrefix(authorization, "Bearer ")
	} else if c.Cookies("token") != "" {
		tokenString = c.Cookies("token")
	}

	// check if the token is empty
	if tokenString == "" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status": "fail", "message": "You are not logged in",
		})
	}

	// parse the token
	config, _ := initializers.LoadConfig(".")

	tokenByte, err := jwt.Parse(tokenString, func(jwtToken *jwt.Token) (interface{}, error) {
		if _, ok := jwtToken.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %s", jwtToken.Header["alg"])
		}
		return []byte(config.JwtSecret), nil
	})

	// check if there was an error parsing the token
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status": "fail", "message": fmt.Sprintf("invalidate token: %v", err),
		})
	}

	// check if the token is valid
	claims, ok := tokenByte.Claims.(jwt.MapClaims)
	if !ok || !tokenByte.Valid {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status": "fail", "message": "invalid token claim",
		})
	}

	// check if the user exists
	var user models.User
	initializers.DB.First(&user, "id = ?", fmt.Sprint(claims["sub"]))

	// check if the user exists
	if user.ID.String() != claims["sub"] {
		return c.Status(fiber.StatusForbidden).JSON(fiber.Map{"status": "fail", "message": "the user belonging to this token no logger exists"})
	}

	// set the user in the context
	c.Locals("user", models.FilterUserRecord(&user))

	// return the next middleware
	return c.Next()
}

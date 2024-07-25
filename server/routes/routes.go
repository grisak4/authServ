package routes

import (
	"auth-test/middleware"
	"auth-test/services/auth"
	"auth-test/services/welcome"
	"database/sql"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func LoginRoutes(router *gin.Engine, db *sql.DB) {
	router.POST("/login", func(c *gin.Context) {
		auth.PostLogin(c, db)
	})
	router.GET("/welcome", middleware.AuthMiddleware(), welcome.GetWelcome)
}

func CorsConfig(r *gin.Engine) {
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
}

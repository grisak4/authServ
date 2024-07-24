package routes

import (
	db "auth-test/database"
	"auth-test/middleware"
	"auth-test/services/auth"
	"auth-test/services/welcome"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func LoginRoutes(router *gin.Engine) {
	db := db.InitDb()
	auth.Initialize(db)

	router.POST("/login", auth.PostLogin)
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

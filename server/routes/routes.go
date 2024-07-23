package routes

import (
	"auth-test/services/auth"
	"auth-test/services/welcome"

	"github.com/gin-gonic/gin"
)

func LoginRoutes(router *gin.Engine) {
	router.POST("/login", auth.PostLogin)
	router.GET("/welcome", welcome.GetWelcome)
}

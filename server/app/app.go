package app

import (
	"auth-test/database"
	"auth-test/routes"

	"github.com/gin-gonic/gin"
)

func Run() {
	database.ConnectDB()

	r := gin.Default()
	routes.LoginRoutes(r)

	r.Run(":8080")
}

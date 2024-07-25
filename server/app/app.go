package app

import (
	"auth-test/database"
	"auth-test/routes"

	"github.com/gin-gonic/gin"
)

func Run() {
	database.ConnectDB()
	defer database.CloseDB()

	r := gin.Default()
	routes.CorsConfig(r)
	routes.LoginRoutes(r, database.InitDb())

	r.Run(":8080")
}

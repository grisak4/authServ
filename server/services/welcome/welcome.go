package welcome

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetWelcome(c *gin.Context) {
	username, _ := c.Get("username")
	c.JSON(http.StatusOK, gin.H{"message": "Welcome " + username.(string)})
}

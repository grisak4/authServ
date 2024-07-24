package auth

import (
	"auth-test/config"
	"auth-test/models"
	"database/sql"
	"log"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

var db *sql.DB

func Initialize(database *sql.DB) {
	db = database
}

func PostLogin(c *gin.Context) {
	var creds struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	rows, err := db.Query("SELECT * FROM Users")
	if err != nil {
		log.Println("Error with getTasks: ", err)
		c.IndentedJSON(http.StatusConflict, gin.H{"error": "Error with database"})
		return
	}

	var users []models.User

	for rows.Next() { // вывод с базы
		var user models.User
		if err := rows.Scan(&user.ID, &user.Username, &user.Password); err != nil {
			log.Println("Error with scan")
			c.IndentedJSON(http.StatusConflict, gin.H{"error": "Error with database"})
			return
		}
		users = append(users, user)
	}

	if err := c.BindJSON(&creds); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request"})
		return
	}

	for _, user := range users { // проверка с базы есть ли такой пользователь
		if creds.Username != user.Username || creds.Password != user.Password {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid credentials"})
			return
		}
	}

	expirationTime := time.Now().Add(5 * time.Minute) // создание времени существования токена
	claims := &models.Claims{
		Username: creds.Username,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims) // создание токена
	tokenString, err := token.SignedString(config.ReadConfigJWT())
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not create token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": tokenString})
}

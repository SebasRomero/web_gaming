package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type Game struct {
	Id          int
	Title       string
	Description string
	Game_url    string
}

func getGamesApi(c *fiber.Ctx) error {
	var game Game

	sliceGames := [6]int{328, 286, 179, 24, 452, 220} //Here we define the Id corresponding to check in the API
	sliceStructGames := []Game{}
	for i := 0; i < 6; i++ {
		numId := sliceGames[i]
		url := "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + strconv.Itoa(numId) //Here we add that Id to the link
		req, _ := http.NewRequest("GET", url, nil)

		req.Header.Add("X-RapidAPI-Key", "d47846e642msh6d466f56e28c32ep12d99cjsnb6873f80f11d")
		req.Header.Add("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com")

		res, _ := http.DefaultClient.Do(req)

		body, _ := ioutil.ReadAll(res.Body)
		defer res.Body.Close()

		json.Unmarshal([]byte(body), &game)
		game.Description = truncateString(game.Description) + "..." //Here we use the function to make the description short and be able to use in the front
		sliceStructGames = append(sliceStructGames, game)
	}

	return c.Status(fiber.StatusOK).JSON(sliceStructGames)
}

func truncateString(stringToTruncate string) string {
	var numRunes = 0
	for index, _ := range stringToTruncate {
		numRunes++
		if numRunes > 100 {
			return stringToTruncate[:index]
		}
	}
	return stringToTruncate
}

func main() {
	app := fiber.New()

	app.Use(cors.New())
	app.Static("/", "./public")

	app.Get("/games", getGamesApi)

	app.Listen(":3000")
	fmt.Println("Server on port 3000...")
}

package main

import (
	"fmt"
	"net/http"
	"walmart_backend/workspace/config"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"github.com/urfave/negroni"

	"walmart_backend/database"
	"walmart_backend/workspace/routes"
)

var neg *negroni.Negroni

func main() {
	initialize()
	run()
}

func initialize() {

	r := mux.NewRouter()

	n := negroni.Classic()

	n.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"HEAD", "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"},
		AllowedHeaders:   []string{"Origin", "Authorization", "X-Requested-With", "Content-Type", "Accept", "Signature"},
		ExposedHeaders:   []string{"Content-Length"},
		AllowCredentials: true,
	}))

	n.UseHandler(r)

	//Init Tasks
	bootTasks()

	//Routes
	apiRoutes(r)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./web")))

	//Run server
	http.Handle("/", r)

	neg = n

}

func run() {
	err := http.ListenAndServe(":"+config.FetchValueByKey("PORT"), neg)
	if err != nil {
		fmt.Printf("ERROR en el servidor: %v \n", err)
		return
	}

	fmt.Println("Backend is running")
}

func bootTasks() {
	database.MongoConnectDB()
}

func apiRoutes(r *mux.Router) {
	routes.ProductApi(r)
}

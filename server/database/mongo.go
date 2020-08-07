package database

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"walmart_backend/workspace/config"
	"walmart_backend/workspace/constants"
)

type Database struct {
	Name               string
	Url                string
	Client             *mongo.Client
	ProductCollection  *mongo.Collection
}

var Conn Database

func MongoConnectDB() {

	dbUrl := config.FetchValueByKey("MONGO_URL")
	dbName := config.FetchValueByKey("MONGO_DB")

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(dbUrl))
	if err != nil {
		panic(err)
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		panic(err)
	}

	productCollection := client.Database(dbName).Collection(constants.Products)

	Conn = Database{
		Name:   dbName,
		Url:    dbUrl,
		Client: client,
		ProductCollection: productCollection,
	}
}
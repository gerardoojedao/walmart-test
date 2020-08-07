package models

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"

	"walmart_backend/database"
	"walmart_backend/workspace/errors"
	"walmart_backend/workspace/schemas"
)

// *****************************************************************************
// Model Methods
// *****************************************************************************

func ProductFindOne(query bson.M) (schemas.Product, errors.Error) {
	var product schemas.Product

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err := database.Conn.ProductCollection.FindOne(ctx, query).Decode(&product)

	if err != nil {
		return product, errors.ErrFindProduct
	}

	return product, errors.Nil

}

func ProductFindSkipLimit(query bson.M, skip int, limit int) ([]schemas.Product, errors.Error){
	var products []schemas.Product

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	opts := options.Find()
	opts.SetSkip(int64(skip))
	opts.SetLimit(int64(limit))

	cursor, err := database.Conn.ProductCollection.Find(ctx, query, opts)
	if err != nil {
		return products, errors.ErrFindProduct
	}

	if err := cursor.All(context.TODO(), &products); err != nil {
		return products, errors.ErrFindProduct
	}

	return products, errors.Nil
}

func ProductCount(query bson.M) (int64, errors.Error){
	var count int64

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	count, err := database.Conn.ProductCollection.CountDocuments(ctx, query)

	if err != nil {
		return count, errors.ErrCountProduct
	}

	return count, errors.Nil
}

package schemas

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// *****************************************************************************
// Entities schema
// *****************************************************************************

type Product struct {
	MongoId     primitive.ObjectID      `json:"-"                 bson:"_id,omitempty"`
	Id  		int32					`json:"id"                bson:"id"`
	Brand 		string					`json:"brand"             bson:"brand"`
	Description string					`json:"description"       bson:"description"`
	Image		string					`json:"image"             bson:"image"`
	Price		int64					`json:"price"             bson:"price"`
}

type ProductResult struct {
	Product
	Discount	float32					`json:"discount"             bson:"discount"`
}

type ProductResponse struct {
	Products	[]ProductResult		`json:"products"                bson:"products"`
	Page 		int					`json:"page"                    bson:"page"`
	Pages 		int					`json:"pages"                   bson:"pages"`
	Count       int64  				`json:"count"                   bson:"count"`
}

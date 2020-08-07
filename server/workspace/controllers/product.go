package controllers

import (
	"strconv"

	"go.mongodb.org/mongo-driver/bson"

	"walmart_backend/workspace/constants"
	"walmart_backend/workspace/models"
	"walmart_backend/workspace/schemas"
	"walmart_backend/workspace/utils"
)

func GetProductList(queryString string, page int) (response schemas.ApiResponse) {

	var result []schemas.ProductResult
	query := make(bson.M)
	productId, err := strconv.Atoi(queryString)

	var discount float32

	//Apply discount
	if utils.IsPalindrome(queryString){
		discount = float32(constants.DiscountForPalindrome)
	}

	if page == 0 {
		page = 1
	}

	//Search by id
	if err == nil {

		query["id"] = productId
		product, err := models.ProductFindOne(query)
		if err.IsError() {
			return response.Error(err)
		}

		productResult := schemas.ProductResult{
			Product:  product,
			Discount: discount,
		}

		result = append(result, productResult)
	}

	//Search by brand or description
	if err != nil {

		if len(queryString) > constants.MinLengthToSearchByBrandAndDescription {
			queryRegex := bson.M{"$regex" : queryString, "$options": "i"}
			query["$or"] = []bson.M{
				{"description": queryRegex},
				{"brand": queryRegex},
			}
		}

		products, err := models.ProductFindSkipLimit(query, (page - 1) * constants.ResultPerPageMongo, constants.ResultPerPageMongo)
		if err.IsError() {
			return response.Error(err)
		}

		results := make([]schemas.ProductResult, len(products))
		for i:= 0; i < len(products); i++ {
			results[i] = schemas.ProductResult{
				Product:  products[i],
				Discount: discount,
			}
		}

		result = results
	}

	count, errCount := models.ProductCount(query)

	if errCount.IsError() {
		return response.Error(errCount)
	}

	totalPages := int(count)/constants.ResultPerPageMongo

	if int(count) % constants.ResultPerPageMongo > 0 {
		totalPages++
	}

	productResponse := schemas.ProductResponse{
		Products: result,
		Page:     page,
		Count:    count,
		Pages:	  totalPages,
	}

	return response.Success(productResponse, "Products list fetched")
}

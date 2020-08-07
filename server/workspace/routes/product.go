package routes

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/urfave/negroni"

	"walmart_backend/workspace/controllers"
	"walmart_backend/workspace/errors"
	"walmart_backend/workspace/schemas"
	"walmart_backend/workspace/validations"
)

// *****************************************************************************
// API Routes
// *****************************************************************************

func ProductApi(r *mux.Router) {

	r.Handle("/product/search", negroni.New(
		negroni.HandlerFunc(validations.ProductSearch),
		negroni.Wrap(ProductSearch),
	)).Methods("POST")
}

/*
  Desc   : Search Product
  Params : query String, page int
  Returns: List of products
*/
var ProductSearch = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

	type Request struct {
		Query    string `json:"query"`
		Page	 int 	`json:"page"`
	}

	var req Request
	err := json.NewDecoder(r.Body).Decode(&req)

	if err != nil {
		schemas.ApiResponse{}.InvalidJsonResponse(w, errors.InvBody)
		return
	}

	controllers.GetProductList(req.Query, req.Page).JsonResponse(w)
})
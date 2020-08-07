package validations

import (
	"encoding/json"
	"net/http"

	"walmart_backend/workspace/errors"
	"walmart_backend/workspace/helpers"
	"walmart_backend/workspace/schemas"
)

// *****************************************************************************
// Product validations
// *****************************************************************************

func ProductSearch(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {

	type Request struct {
		Query    string `json:"query"`
		Page	 int 	`json:"page"`
	}

	var req Request

	err := json.NewDecoder(helpers.GetReaderBody(r)).Decode(&req)

	if err != nil {
		schemas.ApiResponse{}.InvalidJsonResponse(w, errors.InvParam)
		return
	}

	if req.Page < 0 {
		schemas.ApiResponse{}.InvalidJsonResponse(w, errors.InvParam)
		return
	}

	next(w, r)
}
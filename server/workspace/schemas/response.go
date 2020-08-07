package schemas

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"
	"walmart_backend/workspace/errors"
)

// *****************************************************************************
// Entities schema
// *****************************************************************************

const statusSuccess = "success"
const statusError = "error"

type (
	ApiResponse struct {
		Header  int         `json:"-"`
		Status  string      `json:"status"`
		Message string      `json:"message"`
		Data    interface{} `json:"data"`
	}
)

func (response ApiResponse) Success(data interface{}, message string) ApiResponse {
	response.Status = statusSuccess
	response.Message = message
	response.Data = data
	return response
}

func (response ApiResponse) Error(err errors.Error) ApiResponse {
	response.Status = statusError
	response.Message = err.Text
	response.Data = err
	return response
}

func (response ApiResponse) InvalidJsonResponse(w http.ResponseWriter, err errors.Error) {
	resp := response.Error(err)
	resp.JsonResponse(w)
}

func (response ApiResponse) JsonResponse(w http.ResponseWriter) {
	var header int
	switch response.Status {
	case statusSuccess:
		header = http.StatusOK
	case statusError:
		header = http.StatusBadRequest
	default:
		header = response.Header
	}
	respByt, _ := json.Marshal(response)
	w.Header().Set("Access-Control-Expose-Headers", "Timestamp")
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Timestamp", strconv.FormatInt(time.Now().Unix(), 10))
	w.WriteHeader(header)
	_, _ = w.Write(respByt)
}

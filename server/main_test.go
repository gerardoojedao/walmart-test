package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"
)

func TestMain(m *testing.M) {
	initialize()
	code := m.Run()
	os.Exit(code)
}

func TestGetProduct(t *testing.T){

	type args struct {
		Query	string     	`json:"query"`
		Page 	int			`json:"page"`
	}

	tests := []struct {
		name        string
		args        args
		expected    int
	}{
		{
			name: "Correct query",
			args: args{
				Query: "",
			},
			expected: http.StatusOK,
		},
		{
			name: "Incorrect page query",
			args: args{
				Query: "",
				Page:  -1,
			},
			expected: http.StatusBadRequest,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			requestBody, _ := json.Marshal(tt.args)

			req, _ := http.NewRequest("POST", "/product/search", bytes.NewBuffer(requestBody))
			response := executeRequest(req)

			if tt.expected != response.Code {
				t.Errorf("Expected response code %d. Got %d\n", tt.expected, response.Code)
			}
		})
	}
}

func executeRequest(req *http.Request) *httptest.ResponseRecorder {
	rr := httptest.NewRecorder()
	neg.ServeHTTP(rr, req)
	return rr
}


package helpers

import (
	"bytes"
	"io"
	"io/ioutil"
	"net/http"
)

func GetReaderBody(r *http.Request) io.Reader {

	b := bytes.NewBuffer(make([]byte, 0))
	reader := io.TeeReader(r.Body, b)
	r.Body = ioutil.NopCloser(b)

	return reader
}

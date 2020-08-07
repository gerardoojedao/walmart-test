package errors

type Error struct {
	Code string            `json:"code,omitempty"`
	Text string            `json:"-"`
}

func (err Error) IsError() bool {
	return !err.IsNil()
}

func (err Error) IsNil() bool {
	return err.Code == Nil.Code
}

var (
	Nil                     = Error{Code: ""}
	InvBody                 = Error{Code: "INVALID_BODY", Text:"Invalid body request"}
	ErrFindProduct          = Error{Code: "ERR_FINDING_PRODUCT", Text:"Error finding product"}
	ErrCountProduct         = Error{Code: "ERR_COUNTING_PRODUCT", Text:"Error counting product"}
	InvParam         		= Error{Code: "INVALID_PARAM", Text:"Invalid Param"}
)
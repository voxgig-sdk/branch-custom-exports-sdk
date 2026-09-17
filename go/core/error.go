package core

type BranchCustomExportsError struct {
	IsBranchCustomExportsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBranchCustomExportsError(code string, msg string, ctx *Context) *BranchCustomExportsError {
	return &BranchCustomExportsError{
		IsBranchCustomExportsError: true,
		Sdk:              "BranchCustomExports",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BranchCustomExportsError) Error() string {
	return e.Msg
}

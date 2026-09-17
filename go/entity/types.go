// Typed models for the BranchCustomExports SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/branch-custom-exports-sdk/go/core"
)

// InlineResponse200GetExport is the typed data model for the inline_response_200_get_export entity.
type InlineResponse200GetExport struct {
	AllowMultipleFiles *bool `json:"allow_multiple_files,omitempty"`
	Code *int `json:"code,omitempty"`
	EndDate string `json:"end_date"`
	ExportJobStatusUrl *string `json:"export_job_status_url,omitempty"`
	Fields []any `json:"fields"`
	Filter *[]any `json:"filter,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Limit int `json:"limit"`
	LinesExported *int `json:"lines_exported,omitempty"`
	ReportType string `json:"report_type"`
	ResponseFormat *string `json:"response_format,omitempty"`
	ResponseFormatCompression *any `json:"response_format_compression,omitempty"`
	StartDate string `json:"start_date"`
	Status *string `json:"status,omitempty"`
	StatusUrl *string `json:"status_url,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
}

// InlineResponse200GetExportLoadMatch is the typed request payload for InlineResponse200GetExport.LoadTyped.
type InlineResponse200GetExportLoadMatch struct {
	RequestHandle string `json:"request_handle"`
	Format string `json:"format"`
	Limit int `json:"limit"`
}

// InlineResponse200GetExportCreateData is the typed request payload for InlineResponse200GetExport.CreateTyped.
type InlineResponse200GetExportCreateData struct {
	AllowMultipleFiles *bool `json:"allow_multiple_files,omitempty"`
	Code *int `json:"code,omitempty"`
	EndDate string `json:"end_date"`
	ExportJobStatusUrl *string `json:"export_job_status_url,omitempty"`
	Fields []any `json:"fields"`
	Filter *[]any `json:"filter,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Limit int `json:"limit"`
	LinesExported *int `json:"lines_exported,omitempty"`
	ReportType string `json:"report_type"`
	ResponseFormat *string `json:"response_format,omitempty"`
	ResponseFormatCompression *any `json:"response_format_compression,omitempty"`
	StartDate string `json:"start_date"`
	Status *string `json:"status,omitempty"`
	StatusUrl *string `json:"status_url,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
}

// InlineResponse200PostDataReadiness is the typed data model for the inline_response_200_post_data_readiness entity.
type InlineResponse200PostDataReadiness struct {
	AppId int `json:"app_id"`
	DataReady *bool `json:"data_ready,omitempty"`
	Date *string `json:"date,omitempty"`
	Topic string `json:"topic"`
	WarehouseMetaType string `json:"warehouse_meta_type"`
}

// InlineResponse200PostDataReadinessCreateData is the typed request payload for InlineResponse200PostDataReadiness.CreateTyped.
type InlineResponse200PostDataReadinessCreateData struct {
	AppId int `json:"app_id"`
	DataReady *bool `json:"data_ready,omitempty"`
	Date *string `json:"date,omitempty"`
	Topic string `json:"topic"`
	WarehouseMetaType string `json:"warehouse_meta_type"`
}

// InlineResponse200PostExport is the typed data model for the inline_response_200_post_export entity.
type InlineResponse200PostExport struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

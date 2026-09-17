-- Typed models for the BranchCustomExports SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class InlineResponse200GetExport
---@field allow_multiple_files? boolean
---@field code? number
---@field end_date string
---@field export_job_status_url? string
---@field fields table
---@field filter? table
---@field handle? string
---@field limit number
---@field lines_exported? number
---@field report_type string
---@field response_format? string
---@field response_format_compression? any
---@field start_date string
---@field status? string
---@field status_url? string
---@field timezone? string

---@class InlineResponse200GetExportLoadMatch
---@field request_handle string
---@field format string
---@field limit number

---@class InlineResponse200GetExportCreateData
---@field allow_multiple_files? boolean
---@field code? number
---@field end_date string
---@field export_job_status_url? string
---@field fields table
---@field filter? table
---@field handle? string
---@field limit number
---@field lines_exported? number
---@field report_type string
---@field response_format? string
---@field response_format_compression? any
---@field start_date string
---@field status? string
---@field status_url? string
---@field timezone? string

---@class InlineResponse200PostDataReadiness
---@field app_id number
---@field data_ready? boolean
---@field date? string
---@field topic string
---@field warehouse_meta_type string

---@class InlineResponse200PostDataReadinessCreateData
---@field app_id number
---@field data_ready? boolean
---@field date? string
---@field topic string
---@field warehouse_meta_type string

---@class InlineResponse200PostExport

local M = {}

return M

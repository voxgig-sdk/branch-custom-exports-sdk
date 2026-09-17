// Typed models for the BranchCustomExports SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} InlineResponse200GetExport
 * @property {boolean} [allow_multiple_files]
 * @property {number} [code]
 * @property {string} end_date
 * @property {string} [export_job_status_url]
 * @property {Array} fields
 * @property {Array} [filter]
 * @property {string} [handle]
 * @property {number} limit
 * @property {number} [lines_exported]
 * @property {string} report_type
 * @property {string} [response_format]
 * @property {*} [response_format_compression]
 * @property {string} start_date
 * @property {string} [status]
 * @property {string} [status_url]
 * @property {string} [timezone]
 */

/**
 * @typedef {Object} InlineResponse200GetExportLoadMatch
 * @property {string} request_handle
 * @property {string} format
 * @property {number} limit
 */

/**
 * @typedef {Object} InlineResponse200GetExportCreateData
 * @property {boolean} [allow_multiple_files]
 * @property {number} [code]
 * @property {string} end_date
 * @property {string} [export_job_status_url]
 * @property {Array} fields
 * @property {Array} [filter]
 * @property {string} [handle]
 * @property {number} limit
 * @property {number} [lines_exported]
 * @property {string} report_type
 * @property {string} [response_format]
 * @property {*} [response_format_compression]
 * @property {string} start_date
 * @property {string} [status]
 * @property {string} [status_url]
 * @property {string} [timezone]
 */

/**
 * @typedef {Object} InlineResponse200PostDataReadiness
 * @property {number} app_id
 * @property {boolean} [data_ready]
 * @property {string} [date]
 * @property {string} topic
 * @property {string} warehouse_meta_type
 */

/**
 * @typedef {Object} InlineResponse200PostDataReadinessCreateData
 * @property {number} app_id
 * @property {boolean} [data_ready]
 * @property {string} [date]
 * @property {string} topic
 * @property {string} warehouse_meta_type
 */

/**
 * @typedef {Object} InlineResponse200PostExport
 */


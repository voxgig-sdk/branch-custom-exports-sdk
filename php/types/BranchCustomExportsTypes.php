<?php
declare(strict_types=1);

// Typed models for the BranchCustomExports SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** InlineResponse200GetExport entity data model. */
class InlineResponse200GetExport
{
    public ?bool $allow_multiple_files = null;
    public ?int $code = null;
    public string $end_date;
    public ?string $export_job_status_url = null;
    public array $fields;
    public ?array $filter = null;
    public ?string $handle = null;
    public int $limit;
    public ?int $lines_exported = null;
    public string $report_type;
    public ?string $response_format = null;
    public mixed $response_format_compression = null;
    public string $start_date;
    public ?string $status = null;
    public ?string $status_url = null;
    public ?string $timezone = null;
}

/** Request payload for InlineResponse200GetExport#load. */
class InlineResponse200GetExportLoadMatch
{
    public string $request_handle;
    public string $format;
    public int $limit;
}

/** Request payload for InlineResponse200GetExport#create. */
class InlineResponse200GetExportCreateData
{
    public ?bool $allow_multiple_files = null;
    public ?int $code = null;
    public string $end_date;
    public ?string $export_job_status_url = null;
    public array $fields;
    public ?array $filter = null;
    public ?string $handle = null;
    public int $limit;
    public ?int $lines_exported = null;
    public string $report_type;
    public ?string $response_format = null;
    public mixed $response_format_compression = null;
    public string $start_date;
    public ?string $status = null;
    public ?string $status_url = null;
    public ?string $timezone = null;
}

/** InlineResponse200PostDataReadiness entity data model. */
class InlineResponse200PostDataReadiness
{
    public int $app_id;
    public ?bool $data_ready = null;
    public ?string $date = null;
    public string $topic;
    public string $warehouse_meta_type;
}

/** Request payload for InlineResponse200PostDataReadiness#create. */
class InlineResponse200PostDataReadinessCreateData
{
    public int $app_id;
    public ?bool $data_ready = null;
    public ?string $date = null;
    public string $topic;
    public string $warehouse_meta_type;
}

/** InlineResponse200PostExport entity data model. */
class InlineResponse200PostExport
{
}


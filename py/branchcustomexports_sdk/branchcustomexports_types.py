# Typed models for the BranchCustomExports SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class InlineResponse200GetExportRequired(TypedDict):
    end_date: str
    fields: list
    limit: int
    report_type: str
    start_date: str


class InlineResponse200GetExport(InlineResponse200GetExportRequired, total=False):
    allow_multiple_files: bool
    code: int
    export_job_status_url: str
    filter: list
    handle: str
    lines_exported: int
    response_format: str
    response_format_compression: Any
    status: str
    status_url: str
    timezone: str


class InlineResponse200GetExportLoadMatch(TypedDict):
    request_handle: str
    format: str
    limit: int


class InlineResponse200GetExportCreateDataRequired(TypedDict):
    end_date: str
    fields: list
    limit: int
    report_type: str
    start_date: str


class InlineResponse200GetExportCreateData(InlineResponse200GetExportCreateDataRequired, total=False):
    allow_multiple_files: bool
    code: int
    export_job_status_url: str
    filter: list
    handle: str
    lines_exported: int
    response_format: str
    response_format_compression: Any
    status: str
    status_url: str
    timezone: str


class InlineResponse200PostDataReadinessRequired(TypedDict):
    app_id: int
    topic: str
    warehouse_meta_type: str


class InlineResponse200PostDataReadiness(InlineResponse200PostDataReadinessRequired, total=False):
    data_ready: bool
    date: str


class InlineResponse200PostDataReadinessCreateDataRequired(TypedDict):
    app_id: int
    topic: str
    warehouse_meta_type: str


class InlineResponse200PostDataReadinessCreateData(InlineResponse200PostDataReadinessCreateDataRequired, total=False):
    data_ready: bool
    date: str


class InlineResponse200PostExport(TypedDict):
    pass

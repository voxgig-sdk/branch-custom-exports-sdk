export interface InlineResponse200GetExport {
    allow_multiple_files?: boolean;
    code?: number;
    end_date: string;
    export_job_status_url?: string;
    fields: any[];
    filter?: any[];
    handle?: string;
    limit: number;
    lines_exported?: number;
    report_type: string;
    response_format?: string;
    response_format_compression?: any;
    start_date: string;
    status?: string;
    status_url?: string;
    timezone?: string;
}
export interface InlineResponse200GetExportLoadMatch {
    request_handle: string;
    format: string;
    limit: number;
}
export interface InlineResponse200GetExportCreateData {
    allow_multiple_files?: boolean;
    code?: number;
    end_date: string;
    export_job_status_url?: string;
    fields: any[];
    filter?: any[];
    handle?: string;
    limit: number;
    lines_exported?: number;
    report_type: string;
    response_format?: string;
    response_format_compression?: any;
    start_date: string;
    status?: string;
    status_url?: string;
    timezone?: string;
}
export interface InlineResponse200PostDataReadiness {
    app_id: number;
    data_ready?: boolean;
    date?: string;
    topic: string;
    warehouse_meta_type: string;
}
export interface InlineResponse200PostDataReadinessCreateData {
    app_id: number;
    data_ready?: boolean;
    date?: string;
    topic: string;
    warehouse_meta_type: string;
}
export interface InlineResponse200PostExport {
}

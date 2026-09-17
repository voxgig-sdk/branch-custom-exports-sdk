<?php
declare(strict_types=1);

// BranchCustomExports SDK utility: result_headers

class BranchCustomExportsResultHeaders
{
    public static function call(BranchCustomExportsContext $ctx): ?BranchCustomExportsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

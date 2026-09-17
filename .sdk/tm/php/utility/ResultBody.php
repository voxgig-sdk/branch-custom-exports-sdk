<?php
declare(strict_types=1);

// BranchCustomExports SDK utility: result_body

class BranchCustomExportsResultBody
{
    public static function call(BranchCustomExportsContext $ctx): ?BranchCustomExportsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

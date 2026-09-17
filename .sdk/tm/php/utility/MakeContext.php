<?php
declare(strict_types=1);

// BranchCustomExports SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BranchCustomExportsMakeContext
{
    public static function call(array $ctxmap, ?BranchCustomExportsContext $basectx): BranchCustomExportsContext
    {
        return new BranchCustomExportsContext($ctxmap, $basectx);
    }
}

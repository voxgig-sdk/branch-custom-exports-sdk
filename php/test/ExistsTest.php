<?php
declare(strict_types=1);

// BranchCustomExports SDK exists test

require_once __DIR__ . '/../branchcustomexports_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = BranchCustomExportsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

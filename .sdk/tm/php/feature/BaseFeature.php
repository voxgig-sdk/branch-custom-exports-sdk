<?php
declare(strict_types=1);

// BranchCustomExports SDK base feature

class BranchCustomExportsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BranchCustomExportsContext $ctx, array $options): void {}
    public function PostConstruct(BranchCustomExportsContext $ctx): void {}
    public function PostConstructEntity(BranchCustomExportsContext $ctx): void {}
    public function SetData(BranchCustomExportsContext $ctx): void {}
    public function GetData(BranchCustomExportsContext $ctx): void {}
    public function GetMatch(BranchCustomExportsContext $ctx): void {}
    public function SetMatch(BranchCustomExportsContext $ctx): void {}
    public function PrePoint(BranchCustomExportsContext $ctx): void {}
    public function PreSpec(BranchCustomExportsContext $ctx): void {}
    public function PreRequest(BranchCustomExportsContext $ctx): void {}
    public function PreResponse(BranchCustomExportsContext $ctx): void {}
    public function PreResult(BranchCustomExportsContext $ctx): void {}
    public function PreDone(BranchCustomExportsContext $ctx): void {}
    public function PreUnexpected(BranchCustomExportsContext $ctx): void {}
}

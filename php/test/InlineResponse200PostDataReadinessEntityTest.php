<?php
declare(strict_types=1);

// InlineResponse200PostDataReadiness entity test

require_once __DIR__ . '/../branchcustomexports_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class InlineResponse200PostDataReadinessEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = BranchCustomExportsSDK::test(null, null);
        $ent = $testsdk->InlineResponse200PostDataReadiness(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = inline_response_200_post_data_readiness_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "inline_response_200_post_data_readiness." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_DATA_READINESS_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $inline_response_200_post_data_readiness_ref01_ent = $client->InlineResponse200PostDataReadiness(null);
        $inline_response_200_post_data_readiness_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.inline_response_200_post_data_readiness"), "inline_response_200_post_data_readiness_ref01"));

        $inline_response_200_post_data_readiness_ref01_data_result = $inline_response_200_post_data_readiness_ref01_ent->create($inline_response_200_post_data_readiness_ref01_data, null);
        $inline_response_200_post_data_readiness_ref01_data = Helpers::to_map(is_object($inline_response_200_post_data_readiness_ref01_data_result) && method_exists($inline_response_200_post_data_readiness_ref01_data_result, 'data_get') ? $inline_response_200_post_data_readiness_ref01_data_result->data_get() : $inline_response_200_post_data_readiness_ref01_data_result);
        $this->assertNotNull($inline_response_200_post_data_readiness_ref01_data);

    }
}

function inline_response_200_post_data_readiness_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/inline_response_200_post_data_readiness/InlineResponse200PostDataReadinessTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = BranchCustomExportsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["inline_response_200_post_data_readiness01", "inline_response_200_post_data_readiness02", "inline_response_200_post_data_readiness03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_DATA_READINESS_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_DATA_READINESS_ENTID" => $idmap,
        "BRANCH_CUSTOM_EXPORTS_TEST_LIVE" => "FALSE",
        "BRANCH_CUSTOM_EXPORTS_TEST_EXPLAIN" => "FALSE",
        "BRANCH_CUSTOM_EXPORTS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_DATA_READINESS_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["BRANCH_CUSTOM_EXPORTS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["BRANCH_CUSTOM_EXPORTS_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new BranchCustomExportsSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["BRANCH_CUSTOM_EXPORTS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["BRANCH_CUSTOM_EXPORTS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}

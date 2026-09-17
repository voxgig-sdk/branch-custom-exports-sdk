"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('InlineResponse200PostDataReadinessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BRANCH_CUSTOM_EXPORTS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BRANCH_CUSTOM_EXPORTS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BranchCustomExportsSDK.test();
        const ent = testsdk.InlineResponse200PostDataReadiness();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BRANCH_CUSTOM_EXPORTS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'inline_response_200_post_data_readiness.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "app_id", "req": true, "short": "Your Branch App ID, found under Account Settings in your Branch Dashboard.", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "data_ready", "req": false, "short": "Whether the data is currently available.", "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "name": "date", "op": { "create": { "req": true, "type": "`$STRING`" } }, "req": false, "short": "The date associated with the data.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "topic", "req": true, "short": "The topic associated with the data.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "warehouse_meta_type", "req": true, "short": "The type of data to check for.", "type": "`$STRING`", "index$": 4 }], "name": "inline_response_200_post_data_readiness", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /data/ready", "json": "{\"operationId\":\"checkDataReadiness\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Check Data Readiness Request Body\",\"properties\":{\"app_id\":{\"description\":\"Your Branch App ID, found under Account Settings in your Branch Dashboard.\",\"example\":\"0\",\"type\":\"integer\"},\"date\":{\"description\":\"The start of the interval time range, in the format YYYY-MM-DD hh:mm:ss (must be within the past year).\",\"example\":\"2024-01-05 01:00:00\",\"type\":\"string\"},\"topic\":{\"description\":\"The topic associated with the data.\",\"enum\":[\"eo_impression\",\"eo_click\",\"eo_branch_cta_view\",\"eo_open\",\"eo_install\",\"eo_reinstall\",\"eo_web_session_start\",\"eo_pageview\",\"eo_commerce_event\",\"eo_custom_event\",\"eo_content_event\",\"eo_dismissal\",\"eo_user_lifecycle_event\",\"skadnetwork_valid_messages\",\"skadnetwork_invalid_messages\",\"webhook2\",\"eo_click_blocked\",\"eo_impression_blocked\",\"eo_install_blocked\",\"eo_reinstall_blocked\",\"eo_open_blocked\",\"eo_web_session_start_blocked\",\"eo_pageview_blocked\",\"eo_custom_event_blocked\",\"eo_content_event_blocked\",\"eo_commerce_event_blocked\",\"eo_user_lifecycle_event_blocked\",\"eo_branch_cta_view_blocked\",\"eo_san_touch\"],\"example\":\"eo_open\",\"type\":\"string\"},\"warehouse_meta_type\":{\"description\":\"The type of data to check for.\",\"enum\":[\"EVENT\",\"AGGREGATE\"],\"example\":\"EVENT\",\"type\":\"string\"}},\"required\":[\"date\",\"warehouse_meta_type\",\"topic\",\"app_id\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n  \\\"data_ready\\\": true,\\n  \\\"date\\\": \\\"2024-01-05 01:00:00\\\"\\n}\\n\"}},\"schema\":{\"properties\":{\"data_ready\":{\"description\":\"Whether the data is currently available.\",\"example\":\"true\",\"type\":\"boolean\"},\"date\":{\"description\":\"The date associated with the data.\",\"example\":\"2024-01-05 01:00:00\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Data Readiness Status Successfully Retrieved\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n    \\\"error\\\": {\\n        \\\"message\\\": \\\"Topic is invalid or data retention for requested data has expired.\\\",\\n        \\\"code\\\": 400\\n    }\\n}\"}},\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"400\",\"type\":\"integer\"},\"message\":{\"example\":\"Report type is invalid.\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Invalid Request\"},\"429\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n    \\\"error\\\": {\\n        \\\"code\\\": 429,\\n        \\\"message\\\": \\\"Rate limit reached.\\\"\\n    }\\n}\"}},\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"429\",\"type\":\"integer\"},\"message\":{\"example\":\"Rate limit reached.\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Rate Limit Reached\"},\"500\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n    \\\"error\\\": {\\n        \\\"message\\\": \\\"Our product is failing to serve your request at this moment. Please try again later.\\\",\\n        \\\"code\\\": 500\\n    }\\n}\"}},\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"500\",\"type\":\"integer\"},\"message\":{\"example\":\"Internal Server Error\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"}},\"security\":[{\"accessToken\":[],\"appId\":[]}],\"securitySchemes\":{\"accessToken\":{\"description\":\"Access-Token | Key that encapsulates the user's permission w.r.t an org. Obtained from the Branch Dashboard, needed for [authentication](https://help.branch.io/developers-hub/docs/branch-aggregate-api#authentication).\\n\",\"in\":\"header\",\"name\":\"Access-Token\",\"type\":\"apiKey\"},\"appId\":{\"description\":\"app_id | Unique identifier for Branch app of requested data.\",\"in\":\"query\",\"name\":\"app_id\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/data/ready", "segments": [{ "lit": "data" }, { "lit": "ready" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "inline_response_200_post_data_readiness", "name__orig": "inline_response_200_post_data_readiness", "Name": "InlineResponse200PostDataReadiness", "name_": "inline_response_200_post_data_readiness", "name-": "inline-response-200-post-data-readiness", "NAME": "INLINE_RESPONSE_200_POST_DATA_READINESS", "index$": 1 }, { "active": true, "entity": "inline_response_200_post_data_readiness", "key$": "BasicInlineResponse200PostDataReadinessFlow", "kind": "basic", "name": "BasicInlineResponse200PostDataReadinessFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "inline_response_200_post_data_readiness_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'InlineResponse200PostDataReadiness');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const inline_response_200_post_data_readiness_ref01_ent = client.InlineResponse200PostDataReadiness();
        let inline_response_200_post_data_readiness_ref01_data = setup.data.new.inline_response_200_post_data_readiness['inline_response_200_post_data_readiness_ref01'];
        inline_response_200_post_data_readiness_ref01_data = (await inline_response_200_post_data_readiness_ref01_ent.create(inline_response_200_post_data_readiness_ref01_data)).data();
        (0, node_assert_1.default)(null != inline_response_200_post_data_readiness_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/inline_response_200_post_data_readiness/InlineResponse200PostDataReadinessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BranchCustomExportsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['inline_response_200_post_data_readiness01', 'inline_response_200_post_data_readiness02', 'inline_response_200_post_data_readiness03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_DATA_READINESS_ENTID': idmap,
        'BRANCH_CUSTOM_EXPORTS_TEST_LIVE': 'FALSE',
        'BRANCH_CUSTOM_EXPORTS_TEST_EXPLAIN': 'FALSE',
        'BRANCH_CUSTOM_EXPORTS_APIKEY': '',
    });
    idmap = env['BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_DATA_READINESS_ENTID'];
    const live = 'TRUE' === env.BRANCH_CUSTOM_EXPORTS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_DATA_READINESS_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BranchCustomExportsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.BRANCH_CUSTOM_EXPORTS_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.BRANCH_CUSTOM_EXPORTS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=InlineResponse200PostDataReadinessEntity.test.js.map
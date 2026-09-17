# BranchCustomExports Lua SDK



The Lua SDK for the BranchCustomExports API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:InlineResponse200GetExport()` — each with the same small set of operations (`load`, `create`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/branch-custom-exports-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("branch-custom-exports_sdk")

local client = sdk.new({
  apikey = os.getenv("BRANCH_CUSTOM_EXPORTS_APIKEY"),
})
```

### 3. Load an inlineresponse200getexport

InlineResponse200GetExport is nested under request_handle, so provide the `request_handle`.

```lua
local inlineresponse200getexport, err = client:InlineResponse200GetExport():load({ request_handle = "example_request_handle", format = "example_format", limit = 1 })
if err then error(err) end
print(inlineresponse200getexport)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:InlineResponse200GetExport():create({ end_date = "example_end_date", fields = {}, limit = 1, report_type = "example_report_type", start_date = "example_start_date" })
if err then error(err) end

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local inlineresponse200getexport, err = client:InlineResponse200GetExport():load({ request_handle = "example", format = "example", limit = 1 })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:InlineResponse200GetExport():load({ request_handle = "example", format = "example", limit = 1 })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
BRANCH_CUSTOM_EXPORTS_TEST_LIVE=TRUE
BRANCH_CUSTOM_EXPORTS_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### BranchCustomExportsSDK

```lua
local sdk = require("branch-custom-exports_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### BranchCustomExportsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `InlineResponse200GetExport` | `(data) -> InlineResponse200GetExportEntity` | Create an InlineResponse200GetExport entity instance. |
| `InlineResponse200PostDataReadiness` | `(data) -> InlineResponse200PostDataReadinessEntity` | Create an InlineResponse200PostDataReadiness entity instance. |
| `InlineResponse200PostExport` | `(data) -> InlineResponse200PostExportEntity` | Create an InlineResponse200PostExport entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` | the entity record (a `table`) |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local inline_response_200_get_export, err = client:InlineResponse200GetExport():load()
    if err then error(err) end
    -- inline_response_200_get_export is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### InlineResponse200GetExport

| Field | Description |
| --- | --- |
| `allow_multiple_files` | Set this parameter to `true` if you want more than 15 million records returned. |
| `code` | Response code |
| `end_date` | The end of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds. |
| `export_job_status_url` | The URL of the export request. |
| `fields` | An array representing fields/columns available in your report. |
| `filter` | A filter requires an array with 3 specific string values: ["[Cthulu Prefix](https://help.branch.io/developers-hub/docs/custom-exports#cthulhu-filter-specification)", "[EO Field Key](https://help.branch.io/developers-hub/reference/custom-ex… |
| `handle` | Unique request handle generated against the endpoint call. |
| `limit` | The maximum number of results to return. |
| `lines_exported` | Number of lines exported against the originated request. |
| `report_type` | An array representing event type of your report. |
| `response_format` | Format of returned data. |
| `response_format_compression` | The file compression method to use for the data. |
| `start_date` | The start of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds. |
| `status` | Request status over the current execution time |
| `status_url` | The URL of the export request. |
| `timezone` | Timezone for results. |

Operations: Create, Load.

API path: `/logs`

#### InlineResponse200PostDataReadiness

| Field | Description |
| --- | --- |
| `app_id` | Your Branch App ID, found under Account Settings in your Branch Dashboard. |
| `data_ready` | Whether the data is currently available. |
| `date` | The date associated with the data. |
| `topic` | The topic associated with the data. |
| `warehouse_meta_type` | The type of data to check for. |

Operations: Create.

API path: `/data/ready`

#### InlineResponse200PostExport

| Field | Description |
| --- | --- |

Operations: .

API path: ``



## Entities


### InlineResponse200GetExport

Create an instance: `local inline_response_200_get_export = client:InlineResponse200GetExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_multiple_files` | `boolean` | Set this parameter to `true` if you want more than 15 million records returned. |
| `code` | `number` | Response code |
| `end_date` | `string` | The end of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds. |
| `export_job_status_url` | `string` | The URL of the export request. |
| `fields` | `table` | An array representing fields/columns available in your report. |
| `filter` | `table` | A filter requires an array with 3 specific string values: ["[Cthulu Prefix](https://help.branch.io/developers-hub/docs/custom-exports#cthulhu-filter-specification)", "[EO Field Key](https://help.branch.io/developers-hub/reference/custom-ex… |
| `handle` | `string` | Unique request handle generated against the endpoint call. |
| `limit` | `number` | The maximum number of results to return. |
| `lines_exported` | `number` | Number of lines exported against the originated request. |
| `report_type` | `string` | An array representing event type of your report. |
| `response_format` | `string` | Format of returned data. |
| `response_format_compression` | `any` | The file compression method to use for the data. |
| `start_date` | `string` | The start of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds. |
| `status` | `string` | Request status over the current execution time |
| `status_url` | `string` | The URL of the export request. |
| `timezone` | `string` | Timezone for results. |

#### Example: Load

```lua
local inline_response_200_get_export, err = client:InlineResponse200GetExport():load({ request_handle = "request_handle", format = "format", limit = 1 })
```

#### Example: Create

```lua
local inline_response_200_get_export, err = client:InlineResponse200GetExport():create({
  end_date = "example_end_date", -- string
  fields = {}, -- table
  limit = 1, -- number
  report_type = "example_report_type", -- string
  start_date = "example_start_date", -- string
})
```


### InlineResponse200PostDataReadiness

Create an instance: `local inline_response_200_post_data_readiness = client:InlineResponse200PostDataReadiness(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `number` | Your Branch App ID, found under Account Settings in your Branch Dashboard. |
| `data_ready` | `boolean` | Whether the data is currently available. |
| `date` | `string` | The date associated with the data. |
| `topic` | `string` | The topic associated with the data. |
| `warehouse_meta_type` | `string` | The type of data to check for. |

#### Example: Create

```lua
local inline_response_200_post_data_readiness, err = client:InlineResponse200PostDataReadiness():create({
  app_id = 1, -- number
  topic = "example_topic", -- string
  warehouse_meta_type = "example_warehouse_meta_type", -- string
})
```


### InlineResponse200PostExport

Create an instance: `local inline_response_200_post_export = client:InlineResponse200PostExport(nil)`

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── branch-custom-exports_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`branch-custom-exports_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local inlineresponse200getexport = client:InlineResponse200GetExport()
inlineresponse200getexport:load({ request_handle = "example", format = "example", limit = 1 })

-- inlineresponse200getexport:data_get() now returns the inlineresponse200getexport data from the last load
-- inlineresponse200getexport:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

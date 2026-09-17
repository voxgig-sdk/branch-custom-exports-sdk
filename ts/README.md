# BranchCustomExports TypeScript SDK



The TypeScript SDK for the BranchCustomExports API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.InlineResponse200GetExport()` — each with a small set of operations (`load`, `create`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/branch-custom-exports-sdk/releases](https://github.com/voxgig-sdk/branch-custom-exports-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { BranchCustomExportsSDK } from '@voxgig-sdk/branch-custom-exports'

const client = new BranchCustomExportsSDK({
  apikey: process.env.BRANCH_CUSTOM_EXPORTS_APIKEY,
})
```

### 3. Load an inlineresponse200getexport

InlineResponse200GetExport is nested under request_handle, so provide the `request_handle`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const inlineresponse200getexport = await client.InlineResponse200GetExport().load({
    request_handle: 'example_request_handle',
    format: 'example_format',
    limit: 1,
  })
  console.log(inlineresponse200getexport)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created InlineResponse200GetExport ENTITY (.data() for the record)
const created = await client.InlineResponse200GetExport().create({
  end_date: 'example_end_date',
  fields: [],
  limit: 1,
  report_type: 'example_report_type',
  start_date: 'example_start_date',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const inlineresponse200getexport = await client.InlineResponse200GetExport().load({ request_handle: "example", format: "example", limit: 1 })
  console.log(inlineresponse200getexport)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = BranchCustomExportsSDK.test()

const inlineresponse200getexport = await client.InlineResponse200GetExport().load({ request_handle: 'example_request_handle', format: 'example_format', limit: 1 })
// inlineresponse200getexport is the entity, populated with mock response data
// — call inlineresponse200getexport.data() for the record itself
console.log(inlineresponse200getexport)
```

You can also use the instance method:

```ts
const client = new BranchCustomExportsSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.InlineResponse200GetExport()

// First call runs the operation and stores its result
await entity.load({ request_handle: 'example_request_handle', format: 'example_format', limit: 1 })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new BranchCustomExportsSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### BranchCustomExportsSDK

#### Constructor

```ts
new BranchCustomExportsSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `InlineResponse200GetExport(data?)` | `InlineResponse200GetExportEntity` | Create an InlineResponse200GetExport entity instance. |
| `InlineResponse200PostDataReadiness(data?)` | `InlineResponse200PostDataReadinessEntity` | Create an InlineResponse200PostDataReadiness entity instance. |
| `InlineResponse200PostExport(data?)` | `InlineResponse200PostExportEntity` | Create an InlineResponse200PostExport entity instance. |
| `tester(testopts?, sdkopts?)` | `BranchCustomExportsSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `BranchCustomExportsSDK.test(testopts?, sdkopts?)` | `BranchCustomExportsSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): BranchCustomExportsSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` and `create` resolve to a single entity object.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: create, load.

API path: `/logs`

#### InlineResponse200PostDataReadiness

| Field | Description |
| --- | --- |
| `app_id` | Your Branch App ID, found under Account Settings in your Branch Dashboard. |
| `data_ready` | Whether the data is currently available. |
| `date` | The date associated with the data. |
| `topic` | The topic associated with the data. |
| `warehouse_meta_type` | The type of data to check for. |

Operations: create.

API path: `/data/ready`

#### InlineResponse200PostExport

| Field | Description |
| --- | --- |

Operations: .

API path: ``



## Entities


### InlineResponse200GetExport

Create an instance: `const inline_response_200_get_export = client.InlineResponse200GetExport()`

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
| `fields` | `any[]` | An array representing fields/columns available in your report. |
| `filter` | `any[]` | A filter requires an array with 3 specific string values: ["[Cthulu Prefix](https://help.branch.io/developers-hub/docs/custom-exports#cthulhu-filter-specification)", "[EO Field Key](https://help.branch.io/developers-hub/reference/custom-ex… |
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

```ts
const inline_response_200_get_export = await client.InlineResponse200GetExport().load({ request_handle: 'request_handle', format: 'format', limit: 1 })
```

#### Example: Create

```ts
const inline_response_200_get_export = await client.InlineResponse200GetExport().create({
  end_date: 'example_end_date',
  fields: [],
  limit: 1,
  report_type: 'example_report_type',
  start_date: 'example_start_date',
})
```


### InlineResponse200PostDataReadiness

Create an instance: `const inline_response_200_post_data_readiness = client.InlineResponse200PostDataReadiness()`

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

```ts
const inline_response_200_post_data_readiness = await client.InlineResponse200PostDataReadiness().create({
  app_id: 1,
  topic: 'example_topic',
  warehouse_meta_type: 'example_warehouse_meta_type',
})
```


### InlineResponse200PostExport

Create an instance: `const inline_response_200_post_export = client.InlineResponse200PostExport()`

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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
branch-custom-exports/
├── src/
│   ├── BranchCustomExportsSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { BranchCustomExportsSDK } from '@voxgig-sdk/branch-custom-exports'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const inlineresponse200getexport = client.InlineResponse200GetExport()
await inlineresponse200getexport.load({ request_handle: "example", format: "example", limit: 1 })

// inlineresponse200getexport.data() now returns the inlineresponse200getexport data from the last `load`
// inlineresponse200getexport.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

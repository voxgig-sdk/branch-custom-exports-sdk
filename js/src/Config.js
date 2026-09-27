
const { BaseFeature } = require('./feature/base/BaseFeature')
const { DebugFeature } = require('./feature/debug/DebugFeature')
const { IdempotencyFeature } = require('./feature/idempotency/IdempotencyFeature')
const { MetricsFeature } = require('./feature/metrics/MetricsFeature')
const { PagingFeature } = require('./feature/paging/PagingFeature')
const { RatelimitFeature } = require('./feature/ratelimit/RatelimitFeature')
const { RetryFeature } = require('./feature/retry/RetryFeature')
const { TestFeature } = require('./feature/test/TestFeature')
const { TimeoutFeature } = require('./feature/timeout/TimeoutFeature')



const FEATURE_CLASS = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named requires above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
//
// Read by SecretsFeature through a DEFERRED require of this module: the
// requires above make the pair circular, and this file replaces
// module.exports at the end of its body, so anything reading the map at
// module load would get undefined. See tm/js/src/feature/secrets.
const FEATURE_PLUGINS = {
  
}


class Config {

  makeFeature(fn) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(fn) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'BranchCustomExports',
        slug: "branch-custom-exports",
    version: "0.0.1",
    target: "js",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api2.branch.io/v2",

    auth: {
      prefix: '',
      in: 'query',
      name: 'app_id',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        inline_response_200_get_export: {
        },
  
        inline_response_200_post_data_readiness: {
        },
  
    }
  }


  entity = {
    "inline_response_200_get_export": {
      "fields": [
        {
          "name": "allow_multiple_files",
          "title": "Allow Multiple Files",
          "type": "`$BOOLEAN`",
          "short": "Set this parameter to `true` if you want more than 15 million records returned."
        },
        {
          "name": "code",
          "title": "Code",
          "type": "`$INTEGER`",
          "short": "Response code"
        },
        {
          "name": "end_date",
          "title": "End Date",
          "type": "`$STRING`",
          "req": true,
          "short": "The end of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
          "format": "date-time"
        },
        {
          "name": "export_job_status_url",
          "title": "Export Job Status Url",
          "type": "`$STRING`",
          "short": "The URL of the export request."
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array representing fields/columns available in your report."
        },
        {
          "name": "filter",
          "title": "Filter",
          "type": "`$ARRAY`",
          "short": "A filter requires an array with 3 specific string values: [\"[Cthulu Prefix](https://help.branch.io/developers-hub/docs/custom-exports#cthulhu-filter-specification)\", \"[EO Field Key](https://help.branch.io/developers-hub/reference/custom-ex…"
        },
        {
          "name": "handle",
          "title": "Handle",
          "type": "`$STRING`",
          "short": "Unique request handle generated against the endpoint call."
        },
        {
          "name": "limit",
          "title": "Limit",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The maximum number of results to return.",
          "format": "int32"
        },
        {
          "name": "lines_exported",
          "title": "Lines Exported",
          "type": "`$INTEGER`",
          "short": "Number of lines exported against the originated request."
        },
        {
          "name": "report_type",
          "title": "Report Type",
          "type": "`$STRING`",
          "req": true,
          "short": "An array representing event type of your report."
        },
        {
          "name": "response_format",
          "title": "Response Format",
          "type": "`$STRING`",
          "short": "Format of returned data."
        },
        {
          "name": "response_format_compression",
          "title": "Response Format Compression",
          "type": "`$ANY`",
          "short": "The file compression method to use for the data."
        },
        {
          "name": "start_date",
          "title": "Start Date",
          "type": "`$STRING`",
          "req": true,
          "short": "The start of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
          "format": "date-time"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "Request status over the current execution time"
        },
        {
          "name": "status_url",
          "title": "Status Url",
          "type": "`$STRING`",
          "short": "The URL of the export request."
        },
        {
          "name": "timezone",
          "title": "Timezone",
          "type": "`$STRING`",
          "short": "Timezone for results."
        }
      ],
      "name": "inline_response_200_get_export",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/logs",
              "segments": [
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "logs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/logs/{request_handle}",
              "segments": [
                {
                  "lit": "logs"
                },
                {
                  "var": "request_handle"
                }
              ],
              "parts": [
                "logs",
                "{request_handle}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "request_handle",
                    "orig": "request_handle",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "csv"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "format",
                  "limit",
                  "request_handle"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "inline_response_200_post_data_readiness": {
      "fields": [
        {
          "name": "app_id",
          "title": "App Id",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Your Branch App ID, found under Account Settings in your Branch Dashboard."
        },
        {
          "name": "data_ready",
          "title": "Data Ready",
          "type": "`$BOOLEAN`",
          "short": "Whether the data is currently available."
        },
        {
          "name": "date",
          "title": "Date",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The date associated with the data."
        },
        {
          "name": "topic",
          "title": "Topic",
          "type": "`$STRING`",
          "req": true,
          "short": "The topic associated with the data."
        },
        {
          "name": "warehouse_meta_type",
          "title": "Warehouse Meta Type",
          "type": "`$STRING`",
          "req": true,
          "short": "The type of data to check for."
        }
      ],
      "name": "inline_response_200_post_data_readiness",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/data/ready",
              "segments": [
                {
                  "lit": "data"
                },
                {
                  "lit": "ready"
                }
              ],
              "parts": [
                "data",
                "ready"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

module.exports = {
  config,
  FEATURE_PLUGINS,
}


# BranchCustomExports SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "BranchCustomExports",
            "slug": "branch-custom-exports",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api2.branch.io/v2",
            "auth": {
                "prefix": "",
                "in": "query",
                "name": "app_id",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "inline_response_200_get_export": {},
                "inline_response_200_post_data_readiness": {},
            },
        },
        "entity": {
      "inline_response_200_get_export": {
        "fields": [
          {
            "name": "allow_multiple_files",
            "title": "Allow Multiple Files",
            "type": "`$BOOLEAN`",
            "short": "Set this parameter to `true` if you want more than 15 million records returned.",
          },
          {
            "name": "code",
            "title": "Code",
            "type": "`$INTEGER`",
            "short": "Response code",
          },
          {
            "name": "end_date",
            "title": "End Date",
            "type": "`$STRING`",
            "req": True,
            "short": "The end of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
            "format": "date-time",
          },
          {
            "name": "export_job_status_url",
            "title": "Export Job Status Url",
            "type": "`$STRING`",
            "short": "The URL of the export request.",
          },
          {
            "name": "fields",
            "title": "Fields",
            "type": "`$ARRAY`",
            "req": True,
            "short": "An array representing fields/columns available in your report.",
          },
          {
            "name": "filter",
            "title": "Filter",
            "type": "`$ARRAY`",
            "short": "A filter requires an array with 3 specific string values: [\"[Cthulu Prefix](https://help.branch.io/developers-hub/docs/custom-exports#cthulhu-filter-specification)\", \"[EO Field Key](https://help.branch.io/developers-hub/reference/custom-ex…",
          },
          {
            "name": "handle",
            "title": "Handle",
            "type": "`$STRING`",
            "short": "Unique request handle generated against the endpoint call.",
          },
          {
            "name": "limit",
            "title": "Limit",
            "type": "`$INTEGER`",
            "req": True,
            "short": "The maximum number of results to return.",
            "format": "int32",
          },
          {
            "name": "lines_exported",
            "title": "Lines Exported",
            "type": "`$INTEGER`",
            "short": "Number of lines exported against the originated request.",
          },
          {
            "name": "report_type",
            "title": "Report Type",
            "type": "`$STRING`",
            "req": True,
            "short": "An array representing event type of your report.",
          },
          {
            "name": "response_format",
            "title": "Response Format",
            "type": "`$STRING`",
            "short": "Format of returned data.",
          },
          {
            "name": "response_format_compression",
            "title": "Response Format Compression",
            "type": "`$ANY`",
            "short": "The file compression method to use for the data.",
          },
          {
            "name": "start_date",
            "title": "Start Date",
            "type": "`$STRING`",
            "req": True,
            "short": "The start of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
            "format": "date-time",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Request status over the current execution time",
          },
          {
            "name": "status_url",
            "title": "Status Url",
            "type": "`$STRING`",
            "short": "The URL of the export request.",
          },
          {
            "name": "timezone",
            "title": "Timezone",
            "type": "`$STRING`",
            "short": "Timezone for results.",
          },
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
                    "lit": "logs",
                  },
                ],
                "parts": [
                  "logs",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
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
                    "lit": "logs",
                  },
                  {
                    "var": "request_handle",
                  },
                ],
                "parts": [
                  "logs",
                  "{request_handle}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "request_handle",
                      "orig": "request_handle",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "csv",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "format",
                    "limit",
                    "request_handle",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "inline_response_200_post_data_readiness": {
        "fields": [
          {
            "name": "app_id",
            "title": "App Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Your Branch App ID, found under Account Settings in your Branch Dashboard.",
          },
          {
            "name": "data_ready",
            "title": "Data Ready",
            "type": "`$BOOLEAN`",
            "short": "Whether the data is currently available.",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "The date associated with the data.",
          },
          {
            "name": "topic",
            "title": "Topic",
            "type": "`$STRING`",
            "req": True,
            "short": "The topic associated with the data.",
          },
          {
            "name": "warehouse_meta_type",
            "title": "Warehouse Meta Type",
            "type": "`$STRING`",
            "req": True,
            "short": "The type of data to check for.",
          },
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
                    "lit": "data",
                  },
                  {
                    "lit": "ready",
                  },
                ],
                "parts": [
                  "data",
                  "ready",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

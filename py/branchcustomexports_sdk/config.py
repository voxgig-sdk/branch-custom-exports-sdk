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
                "inline_response_200_post_export": {},
            },
        },
        "entity": {
      "inline_response_200_get_export": {
        "fields": [
          {
            "name": "allow_multiple_files",
            "short": "Set this parameter to `true` if you want more than 15 million records returned.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "code",
            "short": "Response code",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "end_date",
            "req": True,
            "short": "The end of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
            "type": "`$STRING`",
          },
          {
            "name": "export_job_status_url",
            "short": "The URL of the export request.",
            "type": "`$STRING`",
          },
          {
            "name": "fields",
            "req": True,
            "short": "An array representing fields/columns available in your report.",
            "type": "`$ARRAY`",
          },
          {
            "name": "filter",
            "short": "A filter requires an array with 3 specific string values: [\"[Cthulu Prefix](https://help.branch.io/developers-hub/docs/custom-exports#cthulhu-filter-specification)\", \"[EO Field Key](https://help.branch.io/developers-hub/reference/custom-ex…",
            "type": "`$ARRAY`",
          },
          {
            "name": "handle",
            "short": "Unique request handle generated against the endpoint call.",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "limit",
            "req": True,
            "short": "The maximum number of results to return.",
            "type": "`$INTEGER`",
          },
          {
            "name": "lines_exported",
            "short": "Number of lines exported against the originated request.",
            "type": "`$INTEGER`",
          },
          {
            "name": "report_type",
            "req": True,
            "short": "An array representing event type of your report.",
            "type": "`$STRING`",
          },
          {
            "name": "response_format",
            "short": "Format of returned data.",
            "type": "`$STRING`",
          },
          {
            "name": "response_format_compression",
            "short": "The file compression method to use for the data.",
            "type": "`$ANY`",
          },
          {
            "format": "date-time",
            "name": "start_date",
            "req": True,
            "short": "The start of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Request status over the current execution time",
            "type": "`$STRING`",
          },
          {
            "name": "status_url",
            "short": "The URL of the export request.",
            "type": "`$STRING`",
          },
          {
            "name": "timezone",
            "short": "Timezone for results.",
            "type": "`$STRING`",
          },
        ],
        "name": "inline_response_200_get_export",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/logs",
                "segments": [
                  {
                    "lit": "logs",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "logs",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "request_handle",
                      "orig": "request_handle",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": "csv",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "format",
                    "limit",
                    "request_handle",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "logs",
                  "{request_handle}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "log",
            ],
          ],
        },
      },
      "inline_response_200_post_data_readiness": {
        "fields": [
          {
            "name": "app_id",
            "req": True,
            "short": "Your Branch App ID, found under Account Settings in your Branch Dashboard.",
            "type": "`$INTEGER`",
          },
          {
            "name": "data_ready",
            "short": "Whether the data is currently available.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "date",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "The date associated with the data.",
            "type": "`$STRING`",
          },
          {
            "name": "topic",
            "req": True,
            "short": "The topic associated with the data.",
            "type": "`$STRING`",
          },
          {
            "name": "warehouse_meta_type",
            "req": True,
            "short": "The type of data to check for.",
            "type": "`$STRING`",
          },
        ],
        "name": "inline_response_200_post_data_readiness",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
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
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "data",
                  "ready",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "inline_response_200_post_export": {
        "fields": [],
        "name": "inline_response_200_post_export",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

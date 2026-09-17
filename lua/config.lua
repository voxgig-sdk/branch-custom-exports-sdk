-- BranchCustomExports SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "BranchCustomExports",
      slug = "branch-custom-exports",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["debug"] = {
        ["options"] = {
          ["active"] = false,
          ["max"] = 100,
          ["redact"] = {
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          },
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["onEntry"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["idempotency"] = {
        ["options"] = {
          ["active"] = false,
          ["header"] = "Idempotency-Key",
          ["methods"] = {
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          },
          ["ops"] = {
            "create",
            "update",
            "remove",
          },
        },
        ["optspec"] = {
          ["keygen"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["metrics"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["paging"] = {
        ["options"] = {
          ["active"] = false,
          ["afterVar"] = "after",
          ["cursorParam"] = "cursor",
          ["firstVar"] = "first",
          ["limitParam"] = "limit",
          ["pageParam"] = "page",
          ["startPage"] = 1,
        },
        ["optspec"] = {
          ["limit"] = "`$NUMBER`",
          ["ops"] = "`$LIST`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api2.branch.io/v2",
      auth = {
        prefix = "",
        ["in"] = "query",
        name = "app_id",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["inline_response_200_get_export"] = {},
        ["inline_response_200_post_data_readiness"] = {},
        ["inline_response_200_post_export"] = {},
      },
    },
    entity = {
      ["inline_response_200_get_export"] = {
        ["fields"] = {
          {
            ["name"] = "allow_multiple_files",
            ["short"] = "Set this parameter to `true` if you want more than 15 million records returned.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "code",
            ["short"] = "Response code",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "end_date",
            ["req"] = true,
            ["short"] = "The end of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "export_job_status_url",
            ["short"] = "The URL of the export request.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fields",
            ["req"] = true,
            ["short"] = "An array representing fields/columns available in your report.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "filter",
            ["short"] = "A filter requires an array with 3 specific string values: [\"[Cthulu Prefix](https://help.branch.io/developers-hub/docs/custom-exports#cthulhu-filter-specification)\", \"[EO Field Key](https://help.branch.io/developers-hub/reference/custom-ex…",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "handle",
            ["short"] = "Unique request handle generated against the endpoint call.",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "int32",
            ["name"] = "limit",
            ["req"] = true,
            ["short"] = "The maximum number of results to return.",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "lines_exported",
            ["short"] = "Number of lines exported against the originated request.",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "report_type",
            ["req"] = true,
            ["short"] = "An array representing event type of your report.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "response_format",
            ["short"] = "Format of returned data.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "response_format_compression",
            ["short"] = "The file compression method to use for the data.",
            ["type"] = "`$ANY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "start_date",
            ["req"] = true,
            ["short"] = "The start of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Request status over the current execution time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status_url",
            ["short"] = "The URL of the export request.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timezone",
            ["short"] = "Timezone for results.",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "inline_response_200_get_export",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/logs",
                ["segments"] = {
                  {
                    ["lit"] = "logs",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "logs",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "request_handle",
                      ["orig"] = "request_handle",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "csv",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/logs/{request_handle}",
                ["segments"] = {
                  {
                    ["lit"] = "logs",
                  },
                  {
                    ["var"] = "request_handle",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "format",
                    "limit",
                    "request_handle",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "logs",
                  "{request_handle}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "log",
            },
          },
        },
      },
      ["inline_response_200_post_data_readiness"] = {
        ["fields"] = {
          {
            ["name"] = "app_id",
            ["req"] = true,
            ["short"] = "Your Branch App ID, found under Account Settings in your Branch Dashboard.",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "data_ready",
            ["short"] = "Whether the data is currently available.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "date",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The date associated with the data.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "topic",
            ["req"] = true,
            ["short"] = "The topic associated with the data.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "warehouse_meta_type",
            ["req"] = true,
            ["short"] = "The type of data to check for.",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "inline_response_200_post_data_readiness",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/data/ready",
                ["segments"] = {
                  {
                    ["lit"] = "data",
                  },
                  {
                    ["lit"] = "ready",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "data",
                  "ready",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["inline_response_200_post_export"] = {
        ["fields"] = {},
        ["name"] = "inline_response_200_post_export",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "BranchCustomExports",
			"slug": "branch-custom-exports",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api2.branch.io/v2",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "app_id",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"inline_response_200_get_export": map[string]any{},
				"inline_response_200_post_data_readiness": map[string]any{},
			},
		},
		"entity": map[string]any{
			"inline_response_200_get_export": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_multiple_files",
						"title": "Allow Multiple Files",
						"type": "`$BOOLEAN`",
						"short": "Set this parameter to `true` if you want more than 15 million records returned.",
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$INTEGER`",
						"short": "Response code",
					},
					map[string]any{
						"name": "end_date",
						"title": "End Date",
						"type": "`$STRING`",
						"req": true,
						"short": "The end of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
						"format": "date-time",
					},
					map[string]any{
						"name": "export_job_status_url",
						"title": "Export Job Status Url",
						"type": "`$STRING`",
						"short": "The URL of the export request.",
					},
					map[string]any{
						"name": "fields",
						"title": "Fields",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array representing fields/columns available in your report.",
					},
					map[string]any{
						"name": "filter",
						"title": "Filter",
						"type": "`$ARRAY`",
						"short": "A filter requires an array with 3 specific string values: [\"[Cthulu Prefix](https://help.branch.io/developers-hub/docs/custom-exports#cthulhu-filter-specification)\", \"[EO Field Key](https://help.branch.io/developers-hub/reference/custom-ex…",
					},
					map[string]any{
						"name": "handle",
						"title": "Handle",
						"type": "`$STRING`",
						"short": "Unique request handle generated against the endpoint call.",
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The maximum number of results to return.",
						"format": "int32",
					},
					map[string]any{
						"name": "lines_exported",
						"title": "Lines Exported",
						"type": "`$INTEGER`",
						"short": "Number of lines exported against the originated request.",
					},
					map[string]any{
						"name": "report_type",
						"title": "Report Type",
						"type": "`$STRING`",
						"req": true,
						"short": "An array representing event type of your report.",
					},
					map[string]any{
						"name": "response_format",
						"title": "Response Format",
						"type": "`$STRING`",
						"short": "Format of returned data.",
					},
					map[string]any{
						"name": "response_format_compression",
						"title": "Response Format Compression",
						"type": "`$ANY`",
						"short": "The file compression method to use for the data.",
					},
					map[string]any{
						"name": "start_date",
						"title": "Start Date",
						"type": "`$STRING`",
						"req": true,
						"short": "The start of the interval time range represented as an ISO-8601 complete datetime including Hours, Minutes, Seconds, and Milliseconds.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Request status over the current execution time",
					},
					map[string]any{
						"name": "status_url",
						"title": "Status Url",
						"type": "`$STRING`",
						"short": "The URL of the export request.",
					},
					map[string]any{
						"name": "timezone",
						"title": "Timezone",
						"type": "`$STRING`",
						"short": "Timezone for results.",
					},
				},
				"name": "inline_response_200_get_export",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/logs",
								"segments": []any{
									map[string]any{
										"lit": "logs",
									},
								},
								"parts": []any{
									"logs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/logs/{request_handle}",
								"segments": []any{
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"var": "request_handle",
									},
								},
								"parts": []any{
									"logs",
									"{request_handle}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "request_handle",
											"orig": "request_handle",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "csv",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"limit",
										"request_handle",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"inline_response_200_post_data_readiness": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_id",
						"title": "App Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Your Branch App ID, found under Account Settings in your Branch Dashboard.",
					},
					map[string]any{
						"name": "data_ready",
						"title": "Data Ready",
						"type": "`$BOOLEAN`",
						"short": "Whether the data is currently available.",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The date associated with the data.",
					},
					map[string]any{
						"name": "topic",
						"title": "Topic",
						"type": "`$STRING`",
						"req": true,
						"short": "The topic associated with the data.",
					},
					map[string]any{
						"name": "warehouse_meta_type",
						"title": "Warehouse Meta Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of data to check for.",
					},
				},
				"name": "inline_response_200_post_data_readiness",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/data/ready",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "ready",
									},
								},
								"parts": []any{
									"data",
									"ready",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

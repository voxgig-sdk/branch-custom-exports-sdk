-- BranchCustomExports SDK exists test

local sdk = require("branch-custom-exports_sdk")

describe("BranchCustomExportsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

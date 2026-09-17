-- BranchCustomExports SDK error

local BranchCustomExportsError = {}
BranchCustomExportsError.__index = BranchCustomExportsError


function BranchCustomExportsError.new(code, msg, ctx)
  local self = setmetatable({}, BranchCustomExportsError)
  self.is_sdk_error = true
  self.sdk = "BranchCustomExports"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BranchCustomExportsError:error()
  return self.msg
end


function BranchCustomExportsError:__tostring()
  return self.msg
end


return BranchCustomExportsError

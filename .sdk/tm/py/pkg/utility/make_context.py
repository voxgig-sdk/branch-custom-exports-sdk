# BranchCustomExports SDK utility: make_context

from projectname_sdk.core.context import BranchCustomExportsContext


def make_context_util(ctxmap, basectx):
    return BranchCustomExportsContext(ctxmap, basectx)

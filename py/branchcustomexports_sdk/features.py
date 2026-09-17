# BranchCustomExports SDK feature factory

from branchcustomexports_sdk.feature.base_feature import BranchCustomExportsBaseFeature
from branchcustomexports_sdk.feature.debug_feature import BranchCustomExportsDebugFeature
from branchcustomexports_sdk.feature.idempotency_feature import BranchCustomExportsIdempotencyFeature
from branchcustomexports_sdk.feature.metrics_feature import BranchCustomExportsMetricsFeature
from branchcustomexports_sdk.feature.paging_feature import BranchCustomExportsPagingFeature
from branchcustomexports_sdk.feature.ratelimit_feature import BranchCustomExportsRatelimitFeature
from branchcustomexports_sdk.feature.retry_feature import BranchCustomExportsRetryFeature
from branchcustomexports_sdk.feature.test_feature import BranchCustomExportsTestFeature
from branchcustomexports_sdk.feature.timeout_feature import BranchCustomExportsTimeoutFeature


_FEATURES = {
    "base": lambda: BranchCustomExportsBaseFeature(),
    "debug": lambda: BranchCustomExportsDebugFeature(),
    "idempotency": lambda: BranchCustomExportsIdempotencyFeature(),
    "metrics": lambda: BranchCustomExportsMetricsFeature(),
    "paging": lambda: BranchCustomExportsPagingFeature(),
    "ratelimit": lambda: BranchCustomExportsRatelimitFeature(),
    "retry": lambda: BranchCustomExportsRetryFeature(),
    "test": lambda: BranchCustomExportsTestFeature(),
    "timeout": lambda: BranchCustomExportsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

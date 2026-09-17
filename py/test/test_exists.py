# BranchCustomExports SDK exists test

import pytest
from branchcustomexports_sdk import BranchCustomExportsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BranchCustomExportsSDK.test(None, None)
        assert testsdk is not None

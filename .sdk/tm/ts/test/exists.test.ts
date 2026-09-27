
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BranchCustomExportsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BranchCustomExportsSDK.test()
    equal(testsdk instanceof BranchCustomExportsSDK, true,
      'BranchCustomExportsSDK.test() must return a client synchronously')
  })

})

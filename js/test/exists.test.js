
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { BranchCustomExportsSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BranchCustomExportsSDK.test()
    equal(null !== testsdk, true)
  })

})

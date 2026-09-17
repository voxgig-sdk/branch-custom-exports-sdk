
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { BranchCustomExportsSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('InlineResponse200PostExportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BRANCH_CUSTOM_EXPORTS_TEST_LIVE=TRUE.
  afterEach(liveDelay('BRANCH_CUSTOM_EXPORTS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BranchCustomExportsSDK.test()
    const ent = testsdk.InlineResponse200PostExport()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"inline_response_200_post_export","op":{},"relations":{"ancestors":[]},"key$":"inline_response_200_post_export","name__orig":"inline_response_200_post_export","Name":"InlineResponse200PostExport","name_":"inline_response_200_post_export","name-":"inline-response-200-post-export","NAME":"INLINE_RESPONSE_200_POST_EXPORT","index$":2}, {"active":true,"entity":"inline_response_200_post_export","key$":"BasicInlineResponse200PostExportFlow","kind":"basic","name":"BasicInlineResponse200PostExportFlow","param":{},"step":[]}, 'InlineResponse200PostExport')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let inline_response_200_post_export_ref01_data = Object.values(setup.data.existing.inline_response_200_post_export)[0]

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/inline_response_200_post_export/InlineResponse200PostExportTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BranchCustomExportsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['inline_response_200_post_export01','inline_response_200_post_export02','inline_response_200_post_export03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_EXPORT_ENTID': idmap,
    'BRANCH_CUSTOM_EXPORTS_TEST_LIVE': 'FALSE',
    'BRANCH_CUSTOM_EXPORTS_TEST_EXPLAIN': 'FALSE',
    'BRANCH_CUSTOM_EXPORTS_APIKEY': '',
  })

  idmap = env['BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_EXPORT_ENTID']

  const live = 'TRUE' === env.BRANCH_CUSTOM_EXPORTS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BRANCH_CUSTOM_EXPORTS_TEST_INLINE_RESPONSE_200_POST_EXPORT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BranchCustomExportsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.BRANCH_CUSTOM_EXPORTS_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BRANCH_CUSTOM_EXPORTS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

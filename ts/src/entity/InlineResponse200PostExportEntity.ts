
import { inspect } from 'node:util'

import { BranchCustomExportsEntityBase } from '../BranchCustomExportsEntityBase'

import type {
  BranchCustomExportsSDK,
} from '../BranchCustomExportsSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  InlineResponse200PostExport,
} from '../BranchCustomExportsTypes'

// TODO: needs Entity superclass
class InlineResponse200PostExportEntity extends BranchCustomExportsEntityBase<InlineResponse200PostExport> {

  constructor(client: BranchCustomExportsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'inline_response_200_post_export'
    this.name_ = 'inline_response_200_post_export'
    this.Name = 'InlineResponse200PostExport'
  }


  make(this: InlineResponse200PostExportEntity) {
    return new InlineResponse200PostExportEntity(this._client, this.entopts())
  }







}


export {
  InlineResponse200PostExportEntity
}

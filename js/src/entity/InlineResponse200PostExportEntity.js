
const { inspect } = require('node:util')

const { BranchCustomExportsEntityBase } = require('../BranchCustomExportsEntityBase')


// TODO: needs Entity superclass
class InlineResponse200PostExportEntity extends BranchCustomExportsEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'inline_response_200_post_export'
    this.name_ = 'inline_response_200_post_export'
    this.Name = 'InlineResponse200PostExport'
  }


  make() {
    return new InlineResponse200PostExportEntity(this._client, this.entopts())
  }







}


module.exports = {
  InlineResponse200PostExportEntity
}

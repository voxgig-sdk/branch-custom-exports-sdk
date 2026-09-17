"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse200PostExportEntity = void 0;
const BranchCustomExportsEntityBase_1 = require("../BranchCustomExportsEntityBase");
// TODO: needs Entity superclass
class InlineResponse200PostExportEntity extends BranchCustomExportsEntityBase_1.BranchCustomExportsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'inline_response_200_post_export';
        this.name_ = 'inline_response_200_post_export';
        this.Name = 'InlineResponse200PostExport';
    }
    make() {
        return new InlineResponse200PostExportEntity(this._client, this.entopts());
    }
}
exports.InlineResponse200PostExportEntity = InlineResponse200PostExportEntity;
//# sourceMappingURL=InlineResponse200PostExportEntity.js.map
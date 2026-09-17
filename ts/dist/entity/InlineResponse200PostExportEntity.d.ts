import { BranchCustomExportsEntityBase } from '../BranchCustomExportsEntityBase';
import type { BranchCustomExportsSDK } from '../BranchCustomExportsSDK';
import type { InlineResponse200PostExport } from '../BranchCustomExportsTypes';
declare class InlineResponse200PostExportEntity extends BranchCustomExportsEntityBase<InlineResponse200PostExport> {
    constructor(client: BranchCustomExportsSDK, entopts: any);
    make(this: InlineResponse200PostExportEntity): InlineResponse200PostExportEntity;
}
export { InlineResponse200PostExportEntity };

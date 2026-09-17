import { BranchCustomExportsEntityBase } from '../BranchCustomExportsEntityBase';
import type { BranchCustomExportsSDK } from '../BranchCustomExportsSDK';
import type { Control } from '../types';
import type { InlineResponse200GetExport, InlineResponse200GetExportLoadMatch, InlineResponse200GetExportCreateData } from '../BranchCustomExportsTypes';
declare class InlineResponse200GetExportEntity extends BranchCustomExportsEntityBase<InlineResponse200GetExport> {
    constructor(client: BranchCustomExportsSDK, entopts: any);
    make(this: InlineResponse200GetExportEntity): InlineResponse200GetExportEntity;
    load(this: any, reqmatch?: InlineResponse200GetExportLoadMatch, ctrl?: Control): Promise<InlineResponse200GetExportEntity>;
    create(this: any, reqdata?: InlineResponse200GetExportCreateData, ctrl?: Control): Promise<InlineResponse200GetExportEntity>;
}
export { InlineResponse200GetExportEntity };

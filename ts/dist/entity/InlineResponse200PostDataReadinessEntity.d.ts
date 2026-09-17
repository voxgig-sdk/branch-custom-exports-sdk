import { BranchCustomExportsEntityBase } from '../BranchCustomExportsEntityBase';
import type { BranchCustomExportsSDK } from '../BranchCustomExportsSDK';
import type { Control } from '../types';
import type { InlineResponse200PostDataReadiness, InlineResponse200PostDataReadinessCreateData } from '../BranchCustomExportsTypes';
declare class InlineResponse200PostDataReadinessEntity extends BranchCustomExportsEntityBase<InlineResponse200PostDataReadiness> {
    constructor(client: BranchCustomExportsSDK, entopts: any);
    make(this: InlineResponse200PostDataReadinessEntity): InlineResponse200PostDataReadinessEntity;
    create(this: any, reqdata?: InlineResponse200PostDataReadinessCreateData, ctrl?: Control): Promise<InlineResponse200PostDataReadinessEntity>;
}
export { InlineResponse200PostDataReadinessEntity };

import { InlineResponse200GetExportEntity } from './entity/InlineResponse200GetExportEntity';
import { InlineResponse200PostDataReadinessEntity } from './entity/InlineResponse200PostDataReadinessEntity';
import { InlineResponse200PostExportEntity } from './entity/InlineResponse200PostExportEntity';
export type * from './BranchCustomExportsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { BranchCustomExportsEntityBase } from './BranchCustomExportsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class BranchCustomExportsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    InlineResponse200GetExport(entopts?: Record<string, any>): InlineResponse200GetExportEntity;
    InlineResponse200PostDataReadiness(entopts?: Record<string, any>): InlineResponse200PostDataReadinessEntity;
    InlineResponse200PostExport(entopts?: Record<string, any>): InlineResponse200PostExportEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): BranchCustomExportsSDK;
    tester(testopts?: any, sdkopts?: any): BranchCustomExportsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof BranchCustomExportsSDK;
export { stdutil, config, BaseFeature, BranchCustomExportsEntityBase, BranchCustomExportsSDK, SDK, };

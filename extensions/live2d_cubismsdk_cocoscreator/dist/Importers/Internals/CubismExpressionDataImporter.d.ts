/// <reference types="./@types" />
import { Asset, Importer, VirtualAsset } from '@editor/asset-db';
declare const EXTENSION = "exp3.asset";
export default class CubismExpressionDataImporter extends Importer {
    static extension: typeof EXTENSION;
    get version(): string;
    get name(): string;
    get assetType(): string;
    validate(asset: VirtualAsset | Asset): Promise<boolean>;
    import(asset: VirtualAsset | Asset): Promise<boolean>;
}
export {};

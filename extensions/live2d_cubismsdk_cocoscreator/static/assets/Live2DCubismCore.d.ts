/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Proprietary Software license
 * that can be found at https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html.
 */

// cSpell:ignore emscripten

/// This file describes the shape of Live2DCubismCore.js.

/// <reference types="emscripten"/>

export declare namespace Live2DCubismCore {
  /** Cubism version identifier. */
  type csmVersion = number;
  /** moc3 version identifier. */
  type csmMocVersion = number;
  /** Parameter type identifier. */
  type csmParameterType = number;
  /** Necessary alignment for mocs (in bytes). */
  const AlignofMoc: number;
  /** Necessary alignment for models (in bytes). */
  const AlignofModel: number;
  /** .moc3 file version Unknown */
  const MocVersion_Unknown: number;
  /** .moc3 file version 3.0.00 - 3.2.07 */
  const MocVersion_30: number;
  /** .moc3 file version 3.3.00 - 3.3.03 */
  const MocVersion_33: number;
  /** .moc3 file version 4.0.00 - 4.1.05 */
  const MocVersion_40: number;
  /** .moc3 file version 4.2.00 - 4.2.04 */
  const MocVersion_42: number;
  /** .moc3 file version 5.0.00 - */
  const MocVersion_50: number;
  /** Normal Parameter. */
  const ParameterType_Normal: number;
  /** Parameter for blend shape. */
  const ParameterType_BlendShape: number;
  /**
   * Log handler.
   * @param message Null-terminated string message to log.
   */
  interface csmLogFunction {
    (message: string): void;
  }
  /** Cubism version. */
  class Version {
    /**
     * Queries Core version.
     *
     * @return Core version.
     */
    static csmGetVersion(): csmVersion;
    /**
     * Gets Moc file supported latest version.
     *
     * @return Moc file latest format version.
     */
    static csmGetLatestMocVersion(): csmMocVersion;
    /**
     * Gets Moc file format version.
     *
     * @param moc Moc
     *
     * @return csmMocVersion
     */
    static csmGetMocVersion(moc: Moc): csmMocVersion;
    private constructor();
  }
  /** Cubism logging. */
  class Logging {
    private static logFunction;
    /**
     * Sets log handler.
     *
     * @param handler  Handler to use.
     */
    static csmSetLogFunction(handler: csmLogFunction): void;
    /**
     * Queries log handler.
     *
     * @return Log handler.
     */
    static csmGetLogFunction(): csmLogFunction;
    /**
     * Wrap log function.
     *
     * @param messagePtr number
     *
     * @return string
     */
    private static wrapLogFunction;
    private constructor();
  }
  /** Cubism moc. */
  class Moc {
    /**
     * Checks consistency of a moc.
     *
     * @param mocBytes Moc bytes.
     *
     * @returns '1' if Moc is valid; '0' otherwise.
     */
    hasMocConsistency(mocBytes: ArrayBuffer): number;
    /** Creates [[Moc]] from [[ArrayBuffer]].
     *
     * @param buffer Array buffer
     *
     * @return [[Moc]] on success; [[null]] otherwise.
     */
    static fromArrayBuffer(buffer: ArrayBuffer): Moc;
    /** Releases instance. */
    _release(): void;
    /** Native moc. */
    _ptr: number;
    /**
     * Initializes instance.
     *
     * @param mocBytes Moc bytes.
     */
    private constructor();
  }
  /** Cubism model. */
  class Model {
    /** Parameters. */
    parameters: Parameters;
    /** Parts. */
    parts: Parts;
    /** Drawables. */
    drawables: Drawables;
    /** Canvas information. */
    canvasinfo: CanvasInfo;
    /**
     * Creates [[Model]] from [[Moc]].
     *
     * @param moc Moc
     *
     * @return [[Model]] on success; [[null]] otherwise.
     */
    static fromMoc(moc: Moc): Model;
    /** Updates instance. */
    update(): void;
    /** Releases instance. */
    release(): void;
    /** Native model. */
    _ptr: number;
    /**
     * Initializes instance.
     *
     * @param moc Moc
     */
    private constructor();
  }
  /** Canvas information interface. */
  class CanvasInfo {
    /** Width of native model canvas. */
    CanvasWidth: number;
    /** Height of native model canvas. */
    CanvasHeight: number;
    /** Coordinate origin of X axis. */
    CanvasOriginX: number;
    /** Coordinate origin of Y axis. */
    CanvasOriginY: number;
    /** Pixels per unit of native model. */
    PixelsPerUnit: number;
    /**
     * Initializes instance.
     *
     * @param modelPtr Native model pointer.
     */
    constructor(modelPtr: number);
  }
  /** Cubism model parameters */
  class Parameters {
    /** Parameter count. */
    count: number;
    /** Parameter IDs. */
    ids: Array<string>;
    /** Minimum parameter values. */
    minimumValues: Float32Array;
    /** Parameter types. */
    types: Int32Array;
    /** Maximum parameter values. */
    maximumValues: Float32Array;
    /** Default parameter values. */
    defaultValues: Float32Array;
    /** Parameter values. */
    values: Float32Array;
    /** Number of key values of each parameter. */
    keyCounts: Int32Array;
    /** Key values of each parameter. */
    keyValues: Array<Float32Array>;
    /**
     * Initializes instance.
     *
     * @param modelPtr Native model.
     */
    constructor(modelPtr: number);
  }
  /** Cubism model parts */
  class Parts {
    /** Part count. */
    count: number;
    /** Part IDs. */
    ids: Array<string>;
    /** Opacity values. */
    opacities: Float32Array;
    /** Part's parent part indices. */
    parentIndices: Int32Array;
    /**
     * Initializes instance.
     *
     * @param modelPtr Native model.
     */
    constructor(modelPtr: number);
  }
  /** Cubism model drawables */
  class Drawables {
    /** Drawable count. */
    count: number;
    /** Drawable IDs. */
    ids: Array<string>;
    /** Constant drawable flags. */
    constantFlags: Uint8Array;
    /** Dynamic drawable flags. */
    dynamicFlags: Uint8Array;
    /** Drawable texture indices. */
    textureIndices: Int32Array;
    /** Drawable draw orders. */
    drawOrders: Int32Array;
    /** Drawable render orders. */
    renderOrders: Int32Array;
    /** Drawable opacities. */
    opacities: Float32Array;
    /** Mask count for each drawable. */
    maskCounts: Int32Array;
    /** Masks for each drawable. */
    masks: Array<Int32Array>;
    /** Number of vertices of each drawable. */
    vertexCounts: Int32Array;
    /** 2D vertex position data of each drawable. */
    vertexPositions: Array<Float32Array>;
    /** 2D texture coordinate data of each drawables. */
    vertexUvs: Array<Float32Array>;
    /** Number of triangle indices for each drawable. */
    indexCounts: Int32Array;
    /** Triangle index data for each drawable. */
    indices: Array<Uint16Array>;
    /** Information multiply color. */
    multiplyColors: Float32Array;
    /** Information Screen color. */
    screenColors: Float32Array;
    /** Indices of drawables parent part. */
    parentPartIndices: Int32Array;
    /** Resets all dynamic drawable flags.. */
    resetDynamicFlags(): void;
    /** Native model. */
    private _modelPtr;
    /**
     * Initializes instance.
     *
     * @param modelPtr Native model.
     */
    constructor(modelPtr: number);
  }
  /** Utility functions. */
  class Utils {
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasBlendAdditiveBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasBlendMultiplicativeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasIsDoubleSidedBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasIsInvertedMaskBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasIsVisibleBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasVisibilityDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasOpacityDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasDrawOrderDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasRenderOrderDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasVertexPositionsDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    static hasBlendColorDidChangeBit(bitfield: number): boolean;
  }
  /** Emscripten Cubism Core module. */
}

const moduleFactory: EmscriptenModuleFactory<
  EmscriptenModule & {
    /** Emscripten typings. */
    ccall(ident: string, returnType: string, argTypes: string[], args: any[]): any;
    cwrap(ident: string, returnType: string, argTypes: string[]): any;
    UTF8ToString(ptr: number, maxBytesToread?: number): string;
    addFunction(prt: Function, type?: string);

    /** Cubism Core Functions. */
    _csmMallocMoc: (number) => number; // any;
    _csmMallocModelAndInitialize: (Moc) => number; // Model;
    _csmMalloc: (number) => number; // any;
    _csmFree: (any) => null;
    _csmGetVersion: () => number;
    _csmGetLatestMocVersion: () => number;
    _csmGetMocVersion: (Moc) => number;
    //_csmGetLogFunction: () => any;
    _csmSetLogFunction: (any) => null;
    _csmHasMocConsistency: (Moc, number) => number;
    _csmReviveMocInPlace: (Moc, number) => Moc;
    _csmGetSizeofModel: (Moc) => number;
    _csmInitializeModelInPlace: (Moc, Memory, number) => number;
    _csmUpdateModel: (Model) => null;
    _csmReadCanvasInfo: (Moc, Memory, Memory, Memory) => null;
    _csmGetParameterCount: (Model) => number;
    /** 文字列先頭ポインタの配列 */
    _csmGetParameterIds: (Model) => number; // Array<String>;
    /** float32配列(ポインタ) */
    _csmGetParameterMinimumValues: (Model) => number; // Float32Array;
    /** float32配列(ポインタ) */
    _csmGetParameterMaximumValues: (Model) => number; // Float32Array;
    /** float32配列(ポインタ) */
    _csmGetParameterDefaultValues: (Model) => number; // Float32Array;
    /** float32配列(ポインタ) */
    _csmGetParameterValues: (Model) => number; // Float32Array;
    /** int32配列(ポインタ) */
    _csmGetParameterKeyCounts: (Model) => number; // Int32Array;
    _csmGetParameterKeyValues: (Model) => number; // Float32Array2;
    _csmGetParameterTypes: (Model) => number; // Int32Array;
    _csmGetPartCount: (Model) => number;
    /** 文字列先頭ポインタの配列 */
    _csmGetPartIds: (Model) => number; // Array<String>;
    /** float32配列(ポインタ) */
    _csmGetPartOpacities: (Model) => number; // Float32Array;
    /** int32配列(ポインタ) */
    _csmGetPartParentPartIndices: (Model) => number; // Int32Array;
    _csmGetDrawableCount: (Model) => number;
    /** 文字列先頭ポインタの配列 */
    _csmGetDrawableIds: (Model) => number; // Array<String>;
    /** uint8配列(ポインタ) */
    _csmGetDrawableConstantFlags: (Model) => number; // Uint8Array;
    /** uint8配列(ポインタ) */
    _csmGetDrawableDynamicFlags: (Model) => number; // Uint8Array;
    /** int32配列(ポインタ) */
    _csmGetDrawableTextureIndices: (Model) => number; // Int32Array;
    /** int32配列(ポインタ) */
    _csmGetDrawableDrawOrders: (Model) => number; // Int32Array;
    /** int32配列(ポインタ) */
    _csmGetDrawableRenderOrders: (Model) => number; // Int32Array;
    /** float32配列(ポインタ) */
    _csmGetDrawableOpacities: (Model) => number; // Float32Array;
    /** int32配列(ポインタ) */
    _csmGetDrawableMaskCounts: (Model) => number; // Int32Array;
    _csmGetDrawableMasks: (Model) => Int32Array2;
    /** int32配列(ポインタ) */
    _csmGetDrawableVertexCounts: (Model) => number; // Int32Array;
    /** float32配列(ポインタ) */
    _csmGetDrawableVertexPositions: (Model) => number; // Float32Array2;
    _csmGetDrawableVertexUvs: (Model) => number; // Float32Array2;
    /** int32配列(ポインタ) */
    _csmGetDrawableIndexCounts: (Model) => number; // Int32Array;
    _csmGetDrawableIndices: (Model) => number; // Uint16Array2;
    _csmGetDrawableMultiplyColors: (Model) => number; // Float32Array;
    _csmGetDrawableScreenColors: (Model) => number; // Float32Array;
    _csmGetDrawableParentPartIndices: (Model) => number; // Int32Array;
    _csmResetDrawableDynamicFlags: (Model) => null;
  }
>;

export default moduleFactory;

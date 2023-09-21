System.register(["__unresolved_0", "cc", "__unresolved_1", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, js, Live2DCubismCoreModuleFactory, EDITOR, Moc, Model, CanvasInfo, Parameters, Parts, Drawables, _crd, CubismCoreModule, Live2DCubismCore, Utils;

  async function loadWasmBinary(wasmBinaryUuid) {
    let wasmBinary;

    if (!EDITOR) {
      const bufferAsset = await new Promise((resolve, reject) => {
        assetManager.loadBundle('Live2DCubismBuiltinResource', (error, bundle) => {
          if (error) {
            console.error(error);
          } else {
            bundle.load('WebAssembly/Live2DCubismCore', (error, asset) => {
              if (error) {
                console.error(error);
                reject(null);
              } else {
                resolve(asset);
              }
            });
          }
        });
      });
      wasmBinary = bufferAsset == null ? undefined : new Uint8Array(bufferAsset.buffer());
    } else {
      const wasmFilePath = await Editor.Message.request('asset-db', 'query-path', wasmBinaryUuid);
      console.info(`wasmFilePath: ${wasmFilePath}`);

      if (!wasmFilePath) {
        throw new Error(`'Failed to load WebAssembly Binary ${wasmBinaryUuid}`);
      }

      const buffer = require('fs').readFileSync(wasmFilePath);

      wasmBinary = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }

    return wasmBinary;
  }

  async function loadCubismCoreModule() {
    var _global$myModulePromi;

    console.log(`Loading Live2D Cubism Core.`);
    const myModulePromiseCacheKey = Symbol.for('CubismCoreEmscriptenModulePromise');
    const global = globalThis;
    const modulePromise = (_global$myModulePromi = global[myModulePromiseCacheKey]) != null ? _global$myModulePromi : global[myModulePromiseCacheKey] = (async () => {
      const wasmBinaryUuid = '2ae9481d-aa06-4cce-ae8e-bcecaf63d82b';
      const wasmBinary = await loadWasmBinary(wasmBinaryUuid);
      const index = await (_crd && Live2DCubismCoreModuleFactory === void 0 ? (_reportPossibleCrUseOfLive2DCubismCoreModuleFactory({
        error: Error()
      }), Live2DCubismCoreModuleFactory) : Live2DCubismCoreModuleFactory)({
        wasmBinary
      });

      if (!index) {
        throw new Error(`'Failed to get Live2D Cubism Core module factory.`);
      }

      return index;
    })();
    return await modulePromise;
  } // CAUTION HERE
  // We're using the experimental feature: top level await.


  function getCubismCoreVersionString() {
    const version = CubismCoreModule._csmGetVersion();

    const major = (version & 0xff000000) >> 24;
    const minor = (version & 0x00ff0000) >> 16;
    const patch = version & 0x0000ffff;
    return js.formatStr(`Loaded Live2D Cubism Core version: `, ('00' + major).slice(-2), ('00' + minor).slice(-2), ('0000' + patch).slice(-4));
  }

  function allocateMemory(size) {
    const ptr = Live2DCubismCore._csm.malloc(size);

    if (!ptr) {
      return null;
    }

    return new Uint8Array(CubismCoreModule.HEAPU8.buffer, ptr, size);
  }

  function _reportPossibleCrUseOfLive2DCubismCoreModuleFactory(extras) {
    _reporterNs.report("Live2DCubismCoreModuleFactory", "./Live2DCubismCore.js", _context.meta, extras);
  }

  _export({
    getCubismCoreVersionString: getCubismCoreVersionString,
    Moc: void 0,
    Model: void 0,
    CanvasInfo: void 0,
    Parameters: void 0,
    Parts: void 0,
    Drawables: void 0,
    Live2DCubismCore: void 0,
    Utils: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      js = _cc.js;
    }, function (_unresolved_2) {
      Live2DCubismCoreModuleFactory = _unresolved_2.default;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: async function () {
      _crd = true;

      _cclegacy._RF.push({}, "c33f1vaRb5NBpG/BaEKqXr7", "CubismCore", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Proprietary Software license
       * that can be found at https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html.
       */


      __checkObsolete__(['assetManager', 'BufferAsset', 'js']);

      CubismCoreModule = await loadCubismCoreModule();
      console.log(getCubismCoreVersionString()); // CAUTION END

      (function (_Live2DCubismCore) {
        let _csm;

        (function (_csm2) {
          function getVersion() {
            return CubismCoreModule._csmGetVersion();
          }

          _csm2.getVersion = getVersion;

          function getLatestMocVersion() {
            return CubismCoreModule._csmGetLatestMocVersion();
          }

          _csm2.getLatestMocVersion = getLatestMocVersion;

          function getMocVersion(moc) {
            return CubismCoreModule._csmGetMocVersion(moc);
          }

          _csm2.getMocVersion = getMocVersion;

          function getSizeofModel(moc) {
            return CubismCoreModule._csmGetSizeofModel(moc);
          }

          _csm2.getSizeofModel = getSizeofModel;

          function hasMocConsistency(memory, mocSize) {
            return CubismCoreModule._csmHasMocConsistency(memory, mocSize);
          }

          _csm2.hasMocConsistency = hasMocConsistency;
          ;

          function reviveMocInPlace(memory, mocSize) {
            return CubismCoreModule._csmReviveMocInPlace(memory, mocSize);
          }

          _csm2.reviveMocInPlace = reviveMocInPlace;

          function initializeModelInPlace(moc, memory, modelSize) {
            return CubismCoreModule._csmInitializeModelInPlace(moc, memory, modelSize);
          }

          _csm2.initializeModelInPlace = initializeModelInPlace;

          function getParameterCount(model) {
            return CubismCoreModule._csmGetParameterCount(model);
          }

          _csm2.getParameterCount = getParameterCount;

          function getParameterIds(model) {
            return CubismCoreModule._csmGetParameterIds(model);
          }

          _csm2.getParameterIds = getParameterIds;

          function getParameterMinimumValues(model) {
            return CubismCoreModule._csmGetParameterMinimumValues(model);
          }

          _csm2.getParameterMinimumValues = getParameterMinimumValues;

          function getParameterMaximumValues(model) {
            return CubismCoreModule._csmGetParameterMaximumValues(model);
          }

          _csm2.getParameterMaximumValues = getParameterMaximumValues;

          function getParameterDefaultValues(model) {
            return CubismCoreModule._csmGetParameterDefaultValues(model);
          }

          _csm2.getParameterDefaultValues = getParameterDefaultValues;

          function getParameterValues(model) {
            return CubismCoreModule._csmGetParameterValues(model);
          }

          _csm2.getParameterValues = getParameterValues;

          function getParameterKeyCounts(model) {
            return CubismCoreModule._csmGetParameterKeyCounts(model);
          }

          _csm2.getParameterKeyCounts = getParameterKeyCounts;

          function getParameterKeyValues(model) {
            return CubismCoreModule._csmGetParameterKeyValues(model);
          }

          _csm2.getParameterKeyValues = getParameterKeyValues;

          function getParameterTypes(model) {
            return CubismCoreModule._csmGetParameterTypes(model);
          }

          _csm2.getParameterTypes = getParameterTypes;

          function getPartCount(model) {
            return CubismCoreModule._csmGetPartCount(model);
          }

          _csm2.getPartCount = getPartCount;

          function getPartIds(model) {
            return CubismCoreModule._csmGetPartIds(model);
          }

          _csm2.getPartIds = getPartIds;

          function getPartOpacities(model) {
            return CubismCoreModule._csmGetPartOpacities(model);
          }

          _csm2.getPartOpacities = getPartOpacities;

          function getPartParentPartIndices(model) {
            return CubismCoreModule._csmGetPartParentPartIndices(model);
          }

          _csm2.getPartParentPartIndices = getPartParentPartIndices;

          function getDrawableCount(model) {
            return CubismCoreModule._csmGetDrawableCount(model);
          }

          _csm2.getDrawableCount = getDrawableCount;

          function getDrawableIds(model) {
            return CubismCoreModule._csmGetDrawableIds(model);
          }

          _csm2.getDrawableIds = getDrawableIds;

          function getDrawableConstantFlags(model) {
            return CubismCoreModule._csmGetDrawableConstantFlags(model);
          }

          _csm2.getDrawableConstantFlags = getDrawableConstantFlags;

          function getDrawableDynamicFlags(model) {
            return CubismCoreModule._csmGetDrawableDynamicFlags(model);
          }

          _csm2.getDrawableDynamicFlags = getDrawableDynamicFlags;

          function getDrawableTextureIndices(model) {
            return CubismCoreModule._csmGetDrawableTextureIndices(model);
          }

          _csm2.getDrawableTextureIndices = getDrawableTextureIndices;

          function getDrawableDrawOrders(model) {
            return CubismCoreModule._csmGetDrawableDrawOrders(model);
          }

          _csm2.getDrawableDrawOrders = getDrawableDrawOrders;

          function getDrawableRenderOrders(model) {
            return CubismCoreModule._csmGetDrawableRenderOrders(model);
          }

          _csm2.getDrawableRenderOrders = getDrawableRenderOrders;

          function getDrawableOpacities(model) {
            return CubismCoreModule._csmGetDrawableOpacities(model);
          }

          _csm2.getDrawableOpacities = getDrawableOpacities;

          function getDrawableMaskCounts(model) {
            return CubismCoreModule._csmGetDrawableMaskCounts(model);
          }

          _csm2.getDrawableMaskCounts = getDrawableMaskCounts;

          function getDrawableMasks(model) {
            return CubismCoreModule._csmGetDrawableMasks(model);
          }

          _csm2.getDrawableMasks = getDrawableMasks;

          function getDrawableVertexCounts(model) {
            return CubismCoreModule._csmGetDrawableVertexCounts(model);
          }

          _csm2.getDrawableVertexCounts = getDrawableVertexCounts;

          function getDrawableVertexPositions(model) {
            return CubismCoreModule._csmGetDrawableVertexPositions(model);
          }

          _csm2.getDrawableVertexPositions = getDrawableVertexPositions;

          function getDrawableVertexUvs(model) {
            return CubismCoreModule._csmGetDrawableVertexUvs(model);
          }

          _csm2.getDrawableVertexUvs = getDrawableVertexUvs;

          function getDrawableIndexCounts(model) {
            return CubismCoreModule._csmGetDrawableIndexCounts(model);
          }

          _csm2.getDrawableIndexCounts = getDrawableIndexCounts;

          function getDrawableIndices(model) {
            return CubismCoreModule._csmGetDrawableIndices(model);
          }

          _csm2.getDrawableIndices = getDrawableIndices;

          function getDrawableMultiplyColors(model) {
            return CubismCoreModule._csmGetDrawableMultiplyColors(model);
          }

          _csm2.getDrawableMultiplyColors = getDrawableMultiplyColors;

          function getDrawableScreenColors(model) {
            return CubismCoreModule._csmGetDrawableScreenColors(model);
          }

          _csm2.getDrawableScreenColors = getDrawableScreenColors;

          function getDrawableParentPartIndices(model) {
            return CubismCoreModule._csmGetDrawableParentPartIndices(model);
          }

          _csm2.getDrawableParentPartIndices = getDrawableParentPartIndices;

          function mallocMoc(mocSize) {
            return CubismCoreModule._csmMallocMoc(mocSize);
          }

          _csm2.mallocMoc = mallocMoc;

          function mallocModelAndInitialize(moc) {
            return CubismCoreModule._csmMallocModelAndInitialize(moc);
          }

          _csm2.mallocModelAndInitialize = mallocModelAndInitialize;

          function malloc(size) {
            return CubismCoreModule._csmMalloc(size);
          }

          _csm2.malloc = malloc;

          function setLogFunction(handler) {
            CubismCoreModule._csmSetLogFunction(handler);
          }

          _csm2.setLogFunction = setLogFunction;

          function updateModel(model) {
            CubismCoreModule._csmUpdateModel(model);
          }

          _csm2.updateModel = updateModel;

          function readCanvasInfo(model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit) {
            CubismCoreModule._csmReadCanvasInfo(model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit);
          }

          _csm2.readCanvasInfo = readCanvasInfo;

          function resetDrawableDynamicFlags(model) {
            CubismCoreModule._csmResetDrawableDynamicFlags(model);
          }

          _csm2.resetDrawableDynamicFlags = resetDrawableDynamicFlags;

          function free(memory) {
            CubismCoreModule._csmFree(memory);
          }

          _csm2.free = free;
        })(_csm || (_csm = _Live2DCubismCore._csm || (_Live2DCubismCore._csm = {})));

        const AlignofMoc = _Live2DCubismCore.AlignofMoc = 64;
        const AlignofModel = _Live2DCubismCore.AlignofModel = 16;
        const MocVersion_Unknown = _Live2DCubismCore.MocVersion_Unknown = 0;
        const MocVersion_30 = _Live2DCubismCore.MocVersion_30 = 1;
        const MocVersion_33 = _Live2DCubismCore.MocVersion_33 = 2;
        const MocVersion_40 = _Live2DCubismCore.MocVersion_40 = 3;
        const MocVersion_42 = _Live2DCubismCore.MocVersion_42 = 4;
        const MocVersion_50 = _Live2DCubismCore.MocVersion_50 = 5;
        const ParameterType_Normal = _Live2DCubismCore.ParameterType_Normal = 0;
        const ParameterType_BlendShape = _Live2DCubismCore.ParameterType_BlendShape = 1;
        let Version;

        (function (_Version) {
          function csmGetVersion() {
            return Live2DCubismCore._csm.getVersion();
          }

          _Version.csmGetVersion = csmGetVersion;

          function csmGetLatestMocVersion() {
            return Live2DCubismCore._csm.getLatestMocVersion();
          }

          _Version.csmGetLatestMocVersion = csmGetLatestMocVersion;

          function csmGetMocVersion(moc) {
            return Live2DCubismCore._csm.getMocVersion(moc._ptr);
          }

          _Version.csmGetMocVersion = csmGetMocVersion;
        })(Version || (Version = _Live2DCubismCore.Version || (_Live2DCubismCore.Version = {})));

        let Logging;

        (function (_Logging) {
          let logFunction = null;
          /**
           * Sets log handler.
           *
           * @param handler  Handler to use.
           */

          function csmSetLogFunction(handler) {
            // Cache log handler.
            logFunction = handler; // Wrap function to pointer.

            const pointer = CubismCoreModule.addFunction(Logging.wrapLogFunction, 'vi'); // Sets log handler.

            _csm.setLogFunction(pointer);
          }

          _Logging.csmSetLogFunction = csmSetLogFunction;

          function csmGetLogFunction() {
            return logFunction;
          }

          _Logging.csmGetLogFunction = csmGetLogFunction;

          function wrapLogFunction(messagePtr) {
            // Pointer to string.
            let messageStr = CubismCoreModule.UTF8ToString(messagePtr); // Run log function.

            logFunction == null ? void 0 : logFunction(messageStr);
          }

          _Logging.wrapLogFunction = wrapLogFunction;
        })(Logging || (Logging = _Live2DCubismCore.Logging || (_Live2DCubismCore.Logging = {})));
      })(Live2DCubismCore || _export("Live2DCubismCore", Live2DCubismCore = {}));

      _export("Moc", Moc = class Moc {
        get ptr() {
          return this._ptr;
        }

        constructor(ptr) {
          this._ptr = 0;
          this._ptr = ptr;
        }
        /**
         * Checks consistency of a moc.
         *
         * @param mocBytes Moc bytes.
         *
         * @returns '1' if Moc is valid; '0' otherwise.
         */


        static hasMocConsistency(mocBytes) {
          // Allocate memory.
          var memory = Live2DCubismCore._csm.mallocMoc(mocBytes.byteLength);

          if (!memory) {
            return null;
          } // Initialize memory.


          var destination = new Uint8Array(CubismCoreModule.HEAPU8.buffer, memory, mocBytes.byteLength);
          destination.set(new Uint8Array(mocBytes));

          var hasConsistency = Live2DCubismCore._csm.hasMocConsistency(memory, mocBytes.byteLength);

          Live2DCubismCore._csm.free(memory);

          return hasConsistency;
        }
        /**
         * Creates {@link Moc} from {@link ArrayBuffer}.
         * @param buffer Array buffer
         * @return [{@link Moc}] on success; null otherwise.
         */


        static fromArrayBuffer(mocBytes) {
          // Allocate memory.
          const memory = Live2DCubismCore._csm.mallocMoc(mocBytes.byteLength);

          if (!memory) {
            return null;
          } // Initialize memory.


          const destination = new Uint8Array(CubismCoreModule.HEAPU8.buffer, memory, mocBytes.byteLength);
          destination.set(new Uint8Array(mocBytes)); // Revive moc.

          const ptr = Live2DCubismCore._csm.reviveMocInPlace(memory, mocBytes.byteLength);

          if (!ptr) {
            console.log(mocBytes);

            Live2DCubismCore._csm.free(memory);

            return null;
          }

          return new Moc(ptr);
        }
        /** Releases instance. */


        _release() {
          Live2DCubismCore._csm.free(this._ptr);

          this._ptr = 0;
        }

      });
      /**
       * Initializes instance.
       *
       * @param moc Moc
       */


      _export("Model", Model = class Model {
        /** Parameters */
        get parameters() {
          return this._parameters;
        }

        /** Parts */
        get parts() {
          return this._parts;
        }

        /** Drawables. */
        get drawables() {
          return this._drawables;
        }

        /** Canvas information. */
        get canvasinfo() {
          return this._canvasinfo;
        }

        get ptr() {
          return this._ptr;
        }

        constructor(mocPtr, parameters, parts, drawables, canvasinfo) {
          this._parameters = void 0;
          this._parts = void 0;
          this._drawables = void 0;
          this._canvasinfo = void 0;
          this._ptr = 0;
          this._ptr = mocPtr;
          this._parameters = parameters;
          this._parts = parts;
          this._drawables = drawables;
          this._canvasinfo = canvasinfo;
        }
        /**
         * Creates [{@link Model}] from [{@link Moc}].
         *
         * @param moc Moc
         * @return [{@link Model}] on success; null otherwise.
         */


        static fromMoc(moc) {
          const ptr = Live2DCubismCore._csm.mallocModelAndInitialize(moc.ptr);

          if (!ptr) {
            return null;
          }

          const parameters = new Parameters(ptr);
          const parts = new Parts(ptr);
          const drawables = new Drawables(ptr);
          const canvasinfo = new CanvasInfo(ptr);
          const model = new Model(ptr, parameters, parts, drawables, canvasinfo);
          return model;
        }
        /** Updates instance. */


        update() {
          Live2DCubismCore._csm.updateModel(this._ptr);
        }
        /** Releases instance. */


        release() {
          Live2DCubismCore._csm.free(this._ptr);

          this._ptr = 0;
        }

      });
      /**
       * Initializes instance.
       *
       * @param modelPtr Native model pointer.
       */


      _export("CanvasInfo", CanvasInfo = class CanvasInfo {
        constructor(ptr) {
          /** Width of native model canvas. */
          this.CanvasWidth = 0;

          /** Height of native model canvas. */
          this.CanvasHeight = 0;

          /** Coordinate origin of X axis. */
          this.CanvasOriginX = 0;

          /** Coordinate origin of Y axis. */
          this.CanvasOriginY = 0;

          /** Pixels per unit of native model. */
          this.PixelsPerUnit = 0;

          if (!ptr) {
            return;
          } // Preserve the pointer ant heap for get data throw args.


          const canvasSizeDataSize = 2;
          const canvasOriginDataSize = 2;
          const canvasPPUDataSize = 1;
          const heap = allocateMemory(Float32Array.BYTES_PER_ELEMENT * (canvasSizeDataSize + canvasOriginDataSize + canvasPPUDataSize));

          if (!heap) {
            console.assert(!heap);
            return;
          }

          const canvasSizeData = new Float32Array(heap.buffer, heap.byteOffset, canvasSizeDataSize);
          const canvasOriginData = new Float32Array(heap.buffer, heap.byteOffset + canvasSizeData.byteLength, canvasOriginDataSize);
          const canvasPPUData = new Float32Array(heap.buffer, canvasOriginData.byteOffset + canvasOriginData.byteLength, canvasPPUDataSize); // Call function and get result

          Live2DCubismCore._csm.readCanvasInfo(ptr, canvasSizeData.byteOffset, canvasOriginData.byteOffset, canvasPPUData.byteOffset);

          this.CanvasWidth = canvasSizeData[0];
          this.CanvasHeight = canvasSizeData[1];
          this.CanvasOriginX = canvasOriginData[0];
          this.CanvasOriginY = canvasOriginData[1];
          this.PixelsPerUnit = canvasPPUData[0]; // Free heap memory

          Live2DCubismCore._csm.free(heap.byteOffset);
        }

      });
      /**
       * Initializes instance.
       *
       * @param modelPtr Native model.
       */


      _export("Parameters", Parameters = class Parameters {
        constructor(ptr) {
          /** Parameter count. */
          this.count = void 0;

          /** Parameter IDs. */
          this.ids = void 0;

          /** Minimum parameter values. */
          this.minimumValues = void 0;

          /** Maximum parameter values. */
          this.maximumValues = void 0;

          /** Default parameter values. */
          this.defaultValues = void 0;

          /** Parameter values. */
          this.values = void 0;

          /** Parameter types. */
          this.types = void 0;

          /** Number of key values of each parameter. */
          this.keyCounts = void 0;

          /** Key values of each parameter. */
          this.keyValues = void 0;

          const count = Live2DCubismCore._csm.getParameterCount(ptr);

          this.count = count;
          this.ids = new Array(count);
          const ids = new Uint32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getParameterIds(ptr), count);

          for (let i = 0; i < ids.length; i++) {
            this.ids[i] = CubismCoreModule.UTF8ToString(ids[i]);
          }

          this.minimumValues = new Float32Array(CubismCoreModule.HEAPF32.buffer, Live2DCubismCore._csm.getParameterMinimumValues(ptr), count);
          this.maximumValues = new Float32Array(CubismCoreModule.HEAPF32.buffer, Live2DCubismCore._csm.getParameterMaximumValues(ptr), count);
          this.defaultValues = new Float32Array(CubismCoreModule.HEAPF32.buffer, Live2DCubismCore._csm.getParameterDefaultValues(ptr), count);
          this.values = new Float32Array(CubismCoreModule.HEAPF32.buffer, Live2DCubismCore._csm.getParameterValues(ptr), count);
          this.types = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getParameterTypes(ptr), count);
          const keyCounts = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getParameterKeyCounts(ptr), count);
          this.keyCounts = keyCounts;
          this.keyValues = new Array(count);
          const keyValues = new Uint32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getParameterKeyValues(ptr), count);

          for (let i = 0; i < keyValues.length; i++) {
            this.keyValues[i] = new Float32Array(CubismCoreModule.HEAPF32.buffer, keyValues[i], keyCounts[i]);
          }
        }

      });
      /**
       * Initializes instance.
       *
       * @param modelPtr Native model.
       */


      _export("Parts", Parts = class Parts {
        constructor(modelPtr) {
          /** Part count. */
          this.count = void 0;

          /** Part IDs. */
          this.ids = void 0;

          /** Opacity values. */
          this.opacities = void 0;

          /** Part's parent part indices. */
          this.parentIndices = void 0;

          const _count = Live2DCubismCore._csm.getPartCount(modelPtr);

          this.count = _count;
          this.ids = new Array(_count);

          const _ids = new Uint32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getPartIds(modelPtr), _count);

          for (let i = 0; i < _ids.length; i++) {
            this.ids[i] = CubismCoreModule.UTF8ToString(_ids[i]);
          }

          this.opacities = new Float32Array(CubismCoreModule.HEAPF32.buffer, Live2DCubismCore._csm.getPartOpacities(modelPtr), _count);
          this.parentIndices = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getPartParentPartIndices(modelPtr), _count);
        }

      });

      _export("Drawables", Drawables = class Drawables {
        constructor(modelPtr) {
          /** Drawable count. */
          this.count = void 0;

          /** Drawable IDs. */
          this.ids = void 0;

          /** Constant drawable flags. */
          this.constantFlags = void 0;

          /** Dynamic drawable flags. */
          this.dynamicFlags = void 0;

          /** Drawable texture indices. */
          this.textureIndices = void 0;

          /** Drawable draw orders. */
          this.drawOrders = void 0;

          /** Drawable render orders. */
          this.renderOrders = void 0;

          /** Drawable opacities. */
          this.opacities = void 0;

          /** Mask count for each drawable. */
          this.maskCounts = void 0;

          /** Masks for each drawable. */
          this.masks = void 0;

          /** Number of vertices of each drawable. */
          this.vertexCounts = void 0;

          /** 2D vertex position data of each drawable. */
          this.vertexPositions = void 0;

          /** 2D texture coordinate data of each drawables. */
          this.vertexUvs = void 0;

          /** Number of triangle indices for each drawable. */
          this.indexCounts = void 0;

          /** Triangle index data for each drawable. */
          this.indices = void 0;

          /** Multiply Colors */
          this.multiplyColors = void 0;

          /** Screen Colors */
          this.screenColors = void 0;

          /** Indices of drawables parent part. */
          this.parentPartIndices = void 0;

          /** Native model. */
          this._modelPtr = void 0;

          /** Resets all dynamic drawable flags.. */
          this.resetDynamicFlags = () => {
            Live2DCubismCore._csm.resetDrawableDynamicFlags(this._modelPtr);
          };

          this._modelPtr = modelPtr;

          const count = Live2DCubismCore._csm.getDrawableCount(modelPtr);

          this.count = count;
          this.ids = new Array(count);
          const ids = new Uint32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getDrawableIds(modelPtr), count);

          for (let i = 0; i < ids.length; i++) {
            this.ids[i] = CubismCoreModule.UTF8ToString(ids[i]);
          }

          this.constantFlags = new Uint8Array(CubismCoreModule.HEAPU8.buffer, Live2DCubismCore._csm.getDrawableConstantFlags(modelPtr), count);
          this.dynamicFlags = new Uint8Array(CubismCoreModule.HEAPU8.buffer, Live2DCubismCore._csm.getDrawableDynamicFlags(modelPtr), count);
          this.textureIndices = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getDrawableTextureIndices(modelPtr), count);
          this.drawOrders = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getDrawableDrawOrders(modelPtr), count);
          this.renderOrders = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getDrawableRenderOrders(modelPtr), count);
          this.opacities = new Float32Array(CubismCoreModule.HEAPF32.buffer, Live2DCubismCore._csm.getDrawableOpacities(modelPtr), count);
          const maskCounts = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getDrawableMaskCounts(modelPtr), count);
          this.maskCounts = maskCounts;
          const vertexCounts = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getDrawableVertexCounts(modelPtr), count);
          this.vertexCounts = vertexCounts;
          const indexCounts = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getDrawableIndexCounts(modelPtr), count);
          this.indexCounts = indexCounts;
          this.masks = new Array(count);
          let masks = new Uint32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getDrawableMasks(modelPtr), count);

          for (let i = 0; i < masks.length; i++) {
            this.masks[i] = new Int32Array(CubismCoreModule.HEAP32.buffer, masks[i], maskCounts[i]);
          }

          this.vertexPositions = new Array(count);
          let vertexPositions = new Uint32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getDrawableVertexPositions(modelPtr), count);

          for (let i = 0; i < vertexPositions.length; i++) {
            this.vertexPositions[i] = new Float32Array(CubismCoreModule.HEAPF32.buffer, vertexPositions[i], vertexCounts[i] * 2);
          }

          this.vertexUvs = new Array(count);
          let vertexUvs = new Uint32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getDrawableVertexUvs(modelPtr), count);

          for (let i = 0; i < vertexUvs.length; i++) {
            this.vertexUvs[i] = new Float32Array(CubismCoreModule.HEAPF32.buffer, vertexUvs[i], vertexCounts[i] * 2);
          }

          this.indices = new Array(count);
          let indices = new Uint32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getDrawableIndices(modelPtr), count);

          for (let i = 0; i < indices.length; i++) {
            this.indices[i] = new Uint16Array(CubismCoreModule.HEAPU16.buffer, indices[i], indexCounts[i]);
          }

          this.multiplyColors = new Float32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getDrawableMultiplyColors(modelPtr), count * 4);
          this.screenColors = new Float32Array(CubismCoreModule.HEAPU32.buffer, Live2DCubismCore._csm.getDrawableScreenColors(modelPtr), count * 4);
          this.parentPartIndices = new Int32Array(CubismCoreModule.HEAP32.buffer, Live2DCubismCore._csm.getDrawableParentPartIndices(modelPtr), count);
        }

      });

      (function (_Utils) {
        function hasBlendAdditiveBit(bitfield) {
          return (bitfield & 1 << 0) == 1 << 0;
        }

        _Utils.hasBlendAdditiveBit = hasBlendAdditiveBit;

        function hasBlendMultiplicativeBit(bitfield) {
          return (bitfield & 1 << 1) == 1 << 1;
        }

        _Utils.hasBlendMultiplicativeBit = hasBlendMultiplicativeBit;

        function hasIsDoubleSidedBit(bitfield) {
          return (bitfield & 1 << 2) == 1 << 2;
        }

        _Utils.hasIsDoubleSidedBit = hasIsDoubleSidedBit;

        function hasIsInvertedMaskBit(bitfield) {
          return (bitfield & 1 << 3) == 1 << 3;
        }

        _Utils.hasIsInvertedMaskBit = hasIsInvertedMaskBit;

        function hasIsVisibleBit(bitfield) {
          return (bitfield & 1 << 0) == 1 << 0;
        }

        _Utils.hasIsVisibleBit = hasIsVisibleBit;

        function hasVisibilityDidChangeBit(bitfield) {
          return (bitfield & 1 << 1) == 1 << 1;
        }

        _Utils.hasVisibilityDidChangeBit = hasVisibilityDidChangeBit;

        function hasOpacityDidChangeBit(bitfield) {
          return (bitfield & 1 << 2) == 1 << 2;
        }

        _Utils.hasOpacityDidChangeBit = hasOpacityDidChangeBit;

        function hasDrawOrderDidChangeBit(bitfield) {
          return (bitfield & 1 << 3) == 1 << 3;
        }

        _Utils.hasDrawOrderDidChangeBit = hasDrawOrderDidChangeBit;

        function hasRenderOrderDidChangeBit(bitfield) {
          return (bitfield & 1 << 4) == 1 << 4;
        }

        _Utils.hasRenderOrderDidChangeBit = hasRenderOrderDidChangeBit;

        function hasVertexPositionsDidChangeBit(bitfield) {
          return (bitfield & 1 << 5) == 1 << 5;
        }

        _Utils.hasVertexPositionsDidChangeBit = hasVertexPositionsDidChangeBit;

        function hasBlendColorDidChangeBit(bitfield) {
          return (bitfield & 1 << 6) == 1 << 6;
        }

        _Utils.hasBlendColorDidChangeBit = hasBlendColorDidChangeBit;
      })(Utils || _export("Utils", Utils = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c81424546aec978614e5e81a6979b0d6d07599d.js.map
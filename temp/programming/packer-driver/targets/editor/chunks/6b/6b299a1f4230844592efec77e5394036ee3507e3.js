System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCInteger, Enum, CCObject, Camera, math, Node, Component, Asset, CubismRenderer, InEditorSymbols, CubismSortingMode, CubismUpdateExecutionOrder, CubismUpdateController, ObjectExtensionMethods, ICubismUpdatable, CoreComponentExtensionMethods, FrameworkComponentExtensionMethods, ICubismDrawOrderHandler, ICubismOpacityHandler, ICubismBlendColorHandler, EDITOR, _SYMBOL, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _crd, ccclass, property, executeInEditMode, CubismRenderController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismRenderer(extras) {
    _reporterNs.report("CubismRenderer", "./CubismRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInEditorSymbols(extras) {
    _reporterNs.report("InEditorSymbols", "./CubismRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismSortingMode(extras) {
    _reporterNs.report("CubismSortingMode", "./CubismSortingMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateExecutionOrder(extras) {
    _reporterNs.report("CubismUpdateExecutionOrder", "../Framework/CubismUpdateExecutionOrder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateController(extras) {
    _reporterNs.report("CubismUpdateController", "../Framework/CubismUpdateController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectExtensionMethods(extras) {
    _reporterNs.report("ObjectExtensionMethods", "../Framework/ObjectExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismUpdatable(extras) {
    _reporterNs.report("ICubismUpdatable", "../Framework/ICubismUpdatable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoreComponentExtensionMethods(extras) {
    _reporterNs.report("CoreComponentExtensionMethods", "../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameworkComponentExtensionMethods(extras) {
    _reporterNs.report("FrameworkComponentExtensionMethods", "../Framework/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismDrawOrderHandler(extras) {
    _reporterNs.report("ICubismDrawOrderHandler", "./ICubismDrawOrderHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismOpacityHandler(extras) {
    _reporterNs.report("ICubismOpacityHandler", "./ICubismOpacityHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismBlendColorHandler(extras) {
    _reporterNs.report("ICubismBlendColorHandler", "./ICubismBlendColorHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismModel(extras) {
    _reporterNs.report("CubismModel", "../Core/CubismModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDynamicDrawableData(extras) {
    _reporterNs.report("CubismDynamicDrawableData", "../Core/CubismDynamicDrawableData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      Enum = _cc.Enum;
      CCObject = _cc.CCObject;
      Camera = _cc.Camera;
      math = _cc.math;
      Node = _cc.Node;
      Component = _cc.Component;
      Asset = _cc.Asset;
    }, function (_unresolved_2) {
      CubismRenderer = _unresolved_2.default;
      InEditorSymbols = _unresolved_2.CubismRendererInEditorSymbols;
    }, function (_unresolved_3) {
      CubismSortingMode = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismUpdateExecutionOrder = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismUpdateController = _unresolved_5.default;
    }, function (_unresolved_6) {
      ObjectExtensionMethods = _unresolved_6.default;
    }, function (_unresolved_7) {
      ICubismUpdatable = _unresolved_7.default;
    }, function (_unresolved_8) {
      CoreComponentExtensionMethods = _unresolved_8.default;
    }, function (_unresolved_9) {
      FrameworkComponentExtensionMethods = _unresolved_9.default;
    }, function (_unresolved_10) {
      ICubismDrawOrderHandler = _unresolved_10.default;
    }, function (_unresolved_11) {
      ICubismOpacityHandler = _unresolved_11.default;
    }, function (_unresolved_12) {
      ICubismBlendColorHandler = _unresolved_12.default;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36506oa57NFwant5TLBspdm", "CubismRenderController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'CCFloat', 'CCInteger', 'Enum', 'CCObject', 'Camera', 'math', 'Node', 'Component', 'Asset']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("default", CubismRenderController = (_dec = ccclass('CubismRenderController'), _dec2 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec4 = property({
        serializable: true,
        visible: false
      }), _dec5 = property({
        serializable: true,
        visible: false
      }), _dec6 = property({
        serializable: true,
        visible: false
      }), _dec7 = property({
        serializable: true,
        visible: false
      }), _dec8 = property({
        type: CCInteger,
        serializable: true,
        visible: true
      }), _dec9 = property({
        type: Enum(_crd && CubismSortingMode === void 0 ? (_reportPossibleCrUseOfCubismSortingMode({
          error: Error()
        }), CubismSortingMode) : CubismSortingMode),
        serializable: true,
        visible: false
      }), _dec10 = property({
        type: Enum(_crd && CubismSortingMode === void 0 ? (_reportPossibleCrUseOfCubismSortingMode({
          error: Error()
        }), CubismSortingMode) : CubismSortingMode),
        visible: true
      }), _dec11 = property({
        type: CCInteger,
        serializable: true,
        visible: true
      }), _dec12 = property({
        type: CCInteger,
        visible: false,
        readonly: false
      }), _dec13 = property({
        type: Camera,
        serializable: true,
        visible: true
      }), _dec14 = property({
        type: CCObject,
        serializable: true,
        visible: false
      }), _dec15 = property({
        type: CCObject,
        visible: false
      }), _dec16 = property({
        serializable: false,
        visible: false
      }), _dec17 = property({
        type: CCObject,
        serializable: true,
        visible: false
      }), _dec18 = property({
        type: CCObject,
        visible: false
      }), _dec19 = property({
        serializable: false,
        visible: false
      }), _dec20 = property({
        type: CCObject,
        visible: false
      }), _dec21 = property({
        serializable: false,
        visible: false
      }), _dec22 = property({
        type: CCObject,
        visible: false
      }), _dec23 = property({
        serializable: false,
        visible: false
      }), _dec24 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec25 = property({
        type: CCFloat,
        visible: false
      }), _dec26 = property({
        serializable: false,
        visible: false
      }), _dec27 = property({
        serializable: false,
        visible: true
      }), _dec28 = property({
        type: Component
      }), _dec29 = property({
        type: Asset
      }), _dec30 = property({
        type: Node
      }), _dec31 = property({
        type: Component
      }), _dec32 = property({
        type: Asset
      }), _dec33 = property({
        type: Node
      }), _dec(_class = executeInEditMode(_class = (_class2 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismRenderController extends Component {
        constructor(...args) {
          super(...args);

          //#region Opacity

          /**
           * Model opacity.
           *
           * This is turned into a field to be available to AnimationClips...
           */
          _initializerDefineProperty(this, "opacity", _descriptor, this);

          //#endregion
          //#region LastOpacity

          /** {@link lastOpacity} backing field. */
          _initializerDefineProperty(this, "_lastOpacity", _descriptor2, this);

          //#endregion
          //#region OverwriteFlagForModelMultiplyColors

          /** {@link overwriteFlagForModelMultiplyColors} backing field. */
          _initializerDefineProperty(this, "_isOverwrittenModelMultiplyColors", _descriptor3, this);

          //#endregion
          //#region OverwriteFlagForModelScreenColors

          /** {@link overwriteFlagForModelScreenColors} backing field. */
          _initializerDefineProperty(this, "_isOverwrittenModelScreenColors", _descriptor4, this);

          //#endregion
          //#region ModelMultiplyColor

          /** {@link modelMultiplyColor} backing field. */
          _initializerDefineProperty(this, "_modelMultiplyColor", _descriptor5, this);

          //#endregion
          //#region ModelScreenColor

          /** {@link modelScreenColor} backing field. */
          _initializerDefineProperty(this, "_modelScreenColor", _descriptor6, this);

          //#endregion
          //#region SortingLayerId

          /** {@link sortingLayerId} backing field. */
          _initializerDefineProperty(this, "_sortingLayerId", _descriptor7, this);

          //#endregion
          //#region SortingMode

          /** {@link sortingMode} backing field. */
          _initializerDefineProperty(this, "_sortingMode", _descriptor8, this);

          //#endregion
          //#region SortingOrder

          /** {@link sortingOrder} backing field. */
          _initializerDefineProperty(this, "_sortingOrder", _descriptor9, this);

          //#endregion
          //#region CameraToFace

          /** [Optional] Camera to face. */
          _initializerDefineProperty(this, "cameraToFace", _descriptor10, this);

          //#endregion
          //#region DrawOrderHandler

          /** {@link drawOrderHandler} backing field. */
          _initializerDefineProperty(this, "_drawOrderHandler", _descriptor11, this);

          //#endregion
          //#region DrawOrderHandlerInterface

          /** {@link drawOrderHandlerInterface} backing field. */
          _initializerDefineProperty(this, "_drawOrderHandlerInterface", _descriptor12, this);

          //#endregion
          //#region OpacityHandler

          /** {@link opacityHandler} backing field. */
          _initializerDefineProperty(this, "_opacityHandler", _descriptor13, this);

          //#endregion
          //#region OpacityHandlerInterface

          /** {@link opacityHandlerInterface} backing field. */
          _initializerDefineProperty(this, "_opacityHandlerInterface", _descriptor14, this);

          //#endregion
          //#region MultiplyColorHandler

          /** {@link multiplyColorHandler} backing field. */
          _initializerDefineProperty(this, "_multiplyColorHandler", _descriptor15, this);

          //#endregion
          //#region MultiplyColorHandlerInterface

          /** {@link multiplyColorHandlerInterface} backing field. */
          _initializerDefineProperty(this, "_multiplyColorHandlerInterface", _descriptor16, this);

          //#endregion
          //#region ScreenColorHandler

          /** {@link screenColorHandler} backing field. */
          _initializerDefineProperty(this, "_screenColorHandler", _descriptor17, this);

          //#endregion
          //#region ScreenColorHandlerInterface

          /** {@link screenColorHandlerInterface} backing field. */
          _initializerDefineProperty(this, "_screenColorHandlerInterface", _descriptor18, this);

          //#endregion
          //#region DepthOffset

          /**
           * The value to offset the CubismDrawables by.
           *
           * You only need to adjust this value when using perspective cameras.
           */
          _initializerDefineProperty(this, "_depthOffset", _descriptor19, this);

          //#endregion
          //#region DrawablesRootTransform

          /** DrawablesRootTransform backing field. */
          this._drawablesRootTransform = null;

          //#endregion
          //#region Renderers

          /** Renderers backing field. */
          _initializerDefineProperty(this, "_renderers", _descriptor20, this);

          //#endregion
          //#region HasUpdateController
          _initializerDefineProperty(this, "_hasUpdateController", _descriptor21, this);

          //#region bindedOnLateUpdate

          /** ICubismUpdatable Binded callback function. */
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);

          /** ICubismUpdatable metadata */
          this[_SYMBOL] = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).SYMBOL;
          // #endregion

          /**
           *
           * @param sender
           * @param data
           */
          this.bindedOnDynamicDrawableDataFunc = this.onDynamicDrawableData.bind(this);
        }

        /** Last model opacity. */
        get lastOpacity() {
          return this._lastOpacity;
        }

        set lastOpacity(value) {
          this._lastOpacity = value;
        }

        /** Whether to overwrite with multiply color from the model. */
        get overwriteFlagForModelMultiplyColors() {
          return this._isOverwrittenModelMultiplyColors;
        }

        set overwriteFlagForModelMultiplyColors(value) {
          this._isOverwrittenModelMultiplyColors = value;
        }

        /** Whether to overwrite with screen color from the model. */
        get overwriteFlagForModelScreenColors() {
          return this._isOverwrittenModelScreenColors;
        }

        set overwriteFlagForModelScreenColors(value) {
          this._isOverwrittenModelScreenColors = value;
        }

        // Multiply colors used throughout the model.
        get modelMultiplyColor() {
          return this._modelMultiplyColor;
        }

        set modelMultiplyColor(value) {
          this._modelMultiplyColor = value;
        }

        get modelScreenColor() {
          return this._modelScreenColor;
        }

        set modelScreenColor(value) {
          this._modelScreenColor = value;
        } //#endregion
        //#region SortingLayer


        get sortingLayer() {
          throw new Error('Method not implemented.'); // return UnityEngine.SortingLayer.IDToName(this.sortingLayerId);

          return '';
        }

        set sortingLayer(value) {
          throw new Error('Method not implemented.'); // this.sortingLayerId = UnityEngine.SortingLayer.NameToID(value);
        }

        /** Sorting layer Id. */
        get sortingLayerId() {
          return this._sortingLayerId;
        }

        set sortingLayerId(value) {
          if (value == this._sortingLayerId) {
            return;
          }

          this._sortingLayerId = value; // Apply sorting layer.

          const renderers = this.renderers;

          if (renderers == null) {
            console.error('CubismRenderController.renderers is null.');
            return;
          }

          for (let i = 0; i < renderers.length; i++) {
            renderers[i].onControllerSortingLayerDidChange(this._sortingLayerId);
          }
        }

        /** CubismDrawable sorting. */
        get sortingMode() {
          return this._sortingMode;
        }

        set sortingMode(value) {
          // Return early if same value given.
          if (value == this._sortingMode) {
            return;
          }

          this._sortingMode = value; // Flip sorting.

          const renderers = this.renderers;

          if (renderers == null) {
            console.warn('CubismRenderController.renderers is null.');
            return;
          }

          if (!EDITOR) {
            for (let i = 0; i < renderers.length; i++) {
              renderers[i].onControllerSortingModeDidChange(this._sortingMode);
            }
          } else {
            for (let i = 0; i < renderers.length; i++) {
              console.assert(renderers[i][(_crd && InEditorSymbols === void 0 ? (_reportPossibleCrUseOfInEditorSymbols({
                error: Error()
              }), InEditorSymbols) : InEditorSymbols).onControllerSortingModeDidChange] != null);
              renderers[i][(_crd && InEditorSymbols === void 0 ? (_reportPossibleCrUseOfInEditorSymbols({
                error: Error()
              }), InEditorSymbols) : InEditorSymbols).onControllerSortingModeDidChange](this._sortingOrder);
            }
          }
        }

        /** Order in sorting layer. */
        get sortingOrder() {
          return this._sortingOrder;
        }

        set sortingOrder(value) {
          // Return early in case same value given.
          if (value == this._sortingOrder) {
            return;
          }

          this._sortingOrder = value; // Apply new sorting order.

          const renderers = this.renderers;

          if (renderers == null) {
            console.error('CubismRenderController.renderers is null.');
            return;
          }

          if (!EDITOR) {
            for (let i = 0; i < renderers.length; i++) {
              renderers[i].onControllerSortingOrderDidChange(this._sortingOrder);
            }
          } else {
            for (let i = 0; i < renderers.length; i++) {
              console.assert(renderers[i][(_crd && InEditorSymbols === void 0 ? (_reportPossibleCrUseOfInEditorSymbols({
                error: Error()
              }), InEditorSymbols) : InEditorSymbols).onControllerSortingOrderDidChange] != null);
              renderers[i][(_crd && InEditorSymbols === void 0 ? (_reportPossibleCrUseOfInEditorSymbols({
                error: Error()
              }), InEditorSymbols) : InEditorSymbols).onControllerSortingOrderDidChange](this._sortingOrder);
            }
          }
        }

        /** Draw order handler proxy object. */
        get drawOrderHandler() {
          return this._drawOrderHandler;
        }

        set drawOrderHandler(value) {
          this._drawOrderHandler = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
            error: Error()
          }), ObjectExtensionMethods) : ObjectExtensionMethods).toNullUnlessImplementsInterface(value, (_crd && ICubismDrawOrderHandler === void 0 ? (_reportPossibleCrUseOfICubismDrawOrderHandler({
            error: Error()
          }), ICubismDrawOrderHandler) : ICubismDrawOrderHandler).isImplements);
        }

        /** Listener for draw order changes. */
        get drawOrderHandlerInterface() {
          if (this._drawOrderHandlerInterface == null) {
            if (this.drawOrderHandler == null) {
              return null;
            }

            this._drawOrderHandlerInterface = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
              error: Error()
            }), ObjectExtensionMethods) : ObjectExtensionMethods).getInterface(this.drawOrderHandler, (_crd && ICubismDrawOrderHandler === void 0 ? (_reportPossibleCrUseOfICubismDrawOrderHandler({
              error: Error()
            }), ICubismDrawOrderHandler) : ICubismDrawOrderHandler).isImplements);
          }

          return this._drawOrderHandlerInterface;
        }

        /** Opacity handler proxy object. */
        get opacityHandler() {
          return this._opacityHandler;
        }

        set opacityHandler(value) {
          this._opacityHandler = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
            error: Error()
          }), ObjectExtensionMethods) : ObjectExtensionMethods).toNullUnlessImplementsInterface(value, (_crd && ICubismOpacityHandler === void 0 ? (_reportPossibleCrUseOfICubismOpacityHandler({
            error: Error()
          }), ICubismOpacityHandler) : ICubismOpacityHandler).isImplements);
        }

        /** Listener for opacity changes. */
        get opacityHandlerInterface() {
          if (this._opacityHandlerInterface == null) {
            if (this.opacityHandler == null) {
              return null;
            }

            this._opacityHandlerInterface = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
              error: Error()
            }), ObjectExtensionMethods) : ObjectExtensionMethods).getInterface(this.opacityHandler, (_crd && ICubismOpacityHandler === void 0 ? (_reportPossibleCrUseOfICubismOpacityHandler({
              error: Error()
            }), ICubismOpacityHandler) : ICubismOpacityHandler).isImplements);
          }

          return this._opacityHandlerInterface;
        }

        get multiplyColorHandler() {
          return this._multiplyColorHandler;
        }

        set multiplyColorHandler(value) {
          this._multiplyColorHandler = value;
        }

        /** Listener for blend color changes. */
        get multiplyColorHandlerInterface() {
          if (this._multiplyColorHandlerInterface == null) {
            if (this.multiplyColorHandler == null) {
              return null;
            }

            this._multiplyColorHandlerInterface = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
              error: Error()
            }), ObjectExtensionMethods) : ObjectExtensionMethods).getInterface(this.multiplyColorHandler, (_crd && ICubismBlendColorHandler === void 0 ? (_reportPossibleCrUseOfICubismBlendColorHandler({
              error: Error()
            }), ICubismBlendColorHandler) : ICubismBlendColorHandler).isImplements);
          }

          return this._multiplyColorHandlerInterface;
        }

        get screenColorHandler() {
          return this._screenColorHandler;
        }

        set screenColorHandler(value) {
          this._screenColorHandler = value;
        }

        /** Listener for blend color changes. */
        get screenColorHandlerInterface() {
          if (this._screenColorHandlerInterface == null) {
            if (this.screenColorHandler == null) {
              return null;
            }

            this._screenColorHandlerInterface = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
              error: Error()
            }), ObjectExtensionMethods) : ObjectExtensionMethods).getInterface(this.screenColorHandler, (_crd && ICubismBlendColorHandler === void 0 ? (_reportPossibleCrUseOfICubismBlendColorHandler({
              error: Error()
            }), ICubismBlendColorHandler) : ICubismBlendColorHandler).isImplements);
          }

          return this._screenColorHandlerInterface;
        }

        /** Depth offset used when sorting by depth. */
        get depthOffset() {
          return this._depthOffset;
        }

        set depthOffset(value) {
          // Return if same value given.
          if (Math.abs(value - this._depthOffset) < math.EPSILON) {
            return;
          } // Store value.


          this._depthOffset = value; // Apply it.

          const renderers = this.renderers;

          if (renderers == null) {
            console.error('CubismRenderController.renderers is null.');
            return;
          }

          if (!EDITOR) {
            for (let i = 0; i < renderers.length; i++) {
              renderers[i].onControllerDepthOffsetDidChange(this._depthOffset);
            }
          } else {
            for (let i = 0; i < renderers.length; i++) {
              console.assert(renderers[i][(_crd && InEditorSymbols === void 0 ? (_reportPossibleCrUseOfInEditorSymbols({
                error: Error()
              }), InEditorSymbols) : InEditorSymbols).onControllerDepthOffsetDidChange] != null);
              renderers[i][(_crd && InEditorSymbols === void 0 ? (_reportPossibleCrUseOfInEditorSymbols({
                error: Error()
              }), InEditorSymbols) : InEditorSymbols).onControllerDepthOffsetDidChange](this._depthOffset);
            }
          }
        } //#endregion
        //#region Model

        /** Model the controller belongs to. */


        get model() {
          return (_crd && CoreComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfCoreComponentExtensionMethods({
            error: Error()
          }), CoreComponentExtensionMethods) : CoreComponentExtensionMethods).findCubismModel(this);
        }

        /** Root transform of all CubismDrawables of the model. */
        get drawablesRootTransform() {
          if (this._drawablesRootTransform == null) {
            var _this$model;

            const drawables = (_this$model = this.model) == null ? void 0 : _this$model.drawables;

            if (drawables != null && drawables.length > 0) {
              this._drawablesRootTransform = drawables[0].node.parent;
            }
          }

          return this._drawablesRootTransform;
        }

        /** CubismRenderers */
        get renderers() {
          if (this._renderers == null) {
            console.assert(this.model);
            console.assert(this.model.drawables);
            const drawables = this.model.drawables;
            this._renderers = (_crd && FrameworkComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfFrameworkComponentExtensionMethods({
              error: Error()
            }), FrameworkComponentExtensionMethods) : FrameworkComponentExtensionMethods).getComponentsMany(drawables, _crd && CubismRenderer === void 0 ? (_reportPossibleCrUseOfCubismRenderer({
              error: Error()
            }), CubismRenderer) : CubismRenderer);
          }

          return this._renderers;
        }

        set renderers(value) {
          this._renderers = value;
        }

        /** Model has update controller component. */
        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        } //#endregion

        /** Makes sure all CubismDrawables have CubismRenderers attached to them. */


        tryInitializeRenderers() {
          // Try get renderers.
          let renderers = this.renderers; // Create renderers if necesssary.

          if (renderers == null || renderers.length == 0) {
            var _findCubismModel$draw, _findCubismModel;

            // Create renders and apply it to backing field...
            const drawables = (_findCubismModel$draw = (_findCubismModel = (_crd && CoreComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfCoreComponentExtensionMethods({
              error: Error()
            }), CoreComponentExtensionMethods) : CoreComponentExtensionMethods).findCubismModel(this)) == null ? void 0 : _findCubismModel.drawables) != null ? _findCubismModel$draw : null;

            if (drawables == null) {
              return;
            }

            renderers = (_crd && FrameworkComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfFrameworkComponentExtensionMethods({
              error: Error()
            }), FrameworkComponentExtensionMethods) : FrameworkComponentExtensionMethods).addComponentEach(drawables, _crd && CubismRenderer === void 0 ? (_reportPossibleCrUseOfCubismRenderer({
              error: Error()
            }), CubismRenderer) : CubismRenderer); // Store renderers.

            this.renderers = renderers;
          } // Make sure renderers are initialized.


          for (var i = 0; i < renderers.length; i++) {
            renderers[i].tryInitialize(this);
          } // Initialize sorting layer.
          // We set the backing field here directly because we pull the sorting layer directly from the renderer.
          // TODO: MeshRenderer.sortingLayerID 実装待ち
          // this._sortingLayerId = _renderers[0].meshRenderer.sortingLayerID;

        }
        /** Updates opacity if necessary. */


        updateOpacity() {
          // Return if same value given.
          if (Math.abs(this.opacity - this.lastOpacity) < math.EPSILON) {
            return;
          } // Store value.


          this.opacity = math.clamp01(this.opacity);
          this.lastOpacity = this.opacity; // Apply opacity.

          const applyOpacityToRenderers = this.opacityHandlerInterface == null || this.opacity > 1 - math.EPSILON;

          if (applyOpacityToRenderers) {
            console.assert(this.renderers != null, 'renderers is null.');
            const renderers = this.renderers;

            for (let i = 0; i < renderers.length; i++) {
              renderers[i].onModelOpacityDidChange(this.opacity);
            }
          } // Call handler.


          if (this.opacityHandlerInterface != null) {
            this.opacityHandlerInterface.onOpacityDidChange(this, this.opacity);
          }
        }
        /** Updates Blend Colors if necessary. */


        updateBlendColors() {
          if (this.renderers == null) {
            return;
          }

          let isMultiplyColorUpdated = false;
          let isScreenColorUpdated = false;
          const newMultiplyColors = new Array(this.renderers.length);
          const newScreenColors = new Array(this.renderers.length);

          for (let i = 0; i < this.renderers.length; i++) {
            const isUseUserMultiplyColor = this.renderers[i].overwriteFlagForDrawableMultiplyColors || this.overwriteFlagForModelMultiplyColors;

            if (isUseUserMultiplyColor) {
              // If you switch from a setting that uses the color of the model, revert to the color that was retained.
              if (!this.renderers[i].lastIsUseUserMultiplyColor) {
                this.renderers[i].multiplyColor = this.renderers[i].lastMultiplyColor;
                this.renderers[i].applyMultiplyColor();
                isMultiplyColorUpdated = true;
              } else if (this.renderers[i].lastMultiplyColor != this.renderers[i].multiplyColor) {
                this.renderers[i].applyMultiplyColor();
                isMultiplyColorUpdated = true;
              }

              this.renderers[i].lastMultiplyColor = this.renderers[i].multiplyColor;
            } else if (this.renderers[i].lastIsUseUserMultiplyColor) {
              this.renderers[i].multiplyColor = this.renderers[i].lastMultiplyColor;
              this.renderers[i].applyMultiplyColor();
              isMultiplyColorUpdated = true;
            }

            newMultiplyColors[i] = this.renderers[i].multiplyColor;
            this.renderers[i].lastIsUseUserMultiplyColor = isUseUserMultiplyColor;
            const isUseUserScreenColor = this.renderers[i].overwriteFlagForDrawableScreenColor || this.overwriteFlagForModelScreenColors;

            if (isUseUserScreenColor) {
              // If you switch from a setting that uses the color of the model, revert to the color that was retained.
              if (!this.renderers[i].lastIsUseUserScreenColor) {
                this.renderers[i].screenColor = this.renderers[i].lastScreenColor;
                this.renderers[i].applyScreenColor();
                isScreenColorUpdated = true;
              } else if (this.renderers[i].lastScreenColor != this.renderers[i].screenColor) {
                this.renderers[i].applyScreenColor();
                isScreenColorUpdated = true;
              }

              this.renderers[i].lastScreenColor = this.renderers[i].screenColor;
            } else if (this.renderers[i].lastIsUseUserScreenColor) {
              this.renderers[i].screenColor = this.renderers[i].lastScreenColor;
              this.renderers[i].applyScreenColor();
              isScreenColorUpdated = true;
            }

            newScreenColors[i] = this.renderers[i].screenColor;
            this.renderers[i].lastIsUseUserScreenColor = isUseUserScreenColor;
          }

          if (this.multiplyColorHandler != null && isMultiplyColorUpdated) {
            var _this$multiplyColorHa;

            (_this$multiplyColorHa = this.multiplyColorHandlerInterface) == null ? void 0 : _this$multiplyColorHa.onBlendColorDidChange(this, newMultiplyColors);
          }

          if (this.screenColorHandler != null && isScreenColorUpdated) {
            var _this$screenColorHand;

            (_this$screenColorHand = this.screenColorHandlerInterface) == null ? void 0 : _this$screenColorHand.onBlendColorDidChange(this, newScreenColors);
          }
        }
        /** Called by cubism update controller. Order to invoke OnLateUpdate. */


        get executionOrder() {
          return (_crd && CubismUpdateExecutionOrder === void 0 ? (_reportPossibleCrUseOfCubismUpdateExecutionOrder({
            error: Error()
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_RENDER_CONTROLLER;
        }
        /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */


        get needsUpdateOnEditing() {
          return true;
        }
        /** Called by cubism update controller. Applies billboarding. */


        onLateUpdate() {
          // Fail silently...
          if (!this.enabled) {
            return;
          } // Update opacity if necessary.


          this.updateOpacity(); // Updates Blend Colors if necessary.

          this.updateBlendColors(); // Return early in case no camera is to be faced.

          if (this.cameraToFace == null) {
            return;
          }

          const cameraRot = this.cameraToFace.node.getWorldRotation();

          if (EDITOR) {
            var _this$drawablesRootTr;

            const drawRot = (_this$drawablesRootTr = this.drawablesRootTransform) == null ? void 0 : _this$drawablesRootTr.getWorldRotation();

            if (drawRot != null && cameraRot.equals(drawRot)) {
              return;
            }
          } // Face camera.


          if (this.drawablesRootTransform != null) {
            this.drawablesRootTransform.setWorldRotation(cameraRot);
          }
        }

        //#endregion
        // #region Cocos Creator Event Handling

        /** Called by Cocos Creator. */
        start() {
          // Get cubism update controller.
          this.hasUpdateController = this.getComponent(_crd && CubismUpdateController === void 0 ? (_reportPossibleCrUseOfCubismUpdateController({
            error: Error()
          }), CubismUpdateController) : CubismUpdateController) != null;
        }
        /** Called by Cocos Creator. Enables listening to render data updates. */


        onEnable() {
          // Fail silently.
          if (this.model == null) {
            return;
          } // Make sure renderers are available.


          this.tryInitializeRenderers(); // Register listener.

          this.model.onDynamicDrawableData.add(this.bindedOnDynamicDrawableDataFunc);
        }
        /** Called by Cocos Creator. Disables listening to render data updates. */


        onDisable() {
          // Fail silently.
          if (this.model == null) {
            return;
          } // Deregister listener.


          this.model.onDynamicDrawableData.remove(this.bindedOnDynamicDrawableDataFunc);
        } // #endregion
        // #region Cubism Event Handling

        /** Called by Cocos Creator. */


        lateUpdate(deltaTime) {
          if (!this.hasUpdateController) {
            this.onLateUpdate();
          }
        }
        /**
         * Called whenever new render data is available.
         * @param sender Model with new render data.
         * @param data New render data.
         */


        onDynamicDrawableData(sender, data) {
          // Get drawables.
          const drawables = sender.drawables;
          const renderers = this.renderers;

          if (drawables == null) {
            console.error('sender.drawables is null.');
            return;
          }

          if (renderers == null) {
            console.error('renderers is null.');
            return;
          } // Handle render data changes.


          for (let i = 0; i < data.length; i++) {
            // Controls whether mesh buffers are to be swapped.
            let swapMeshes = false; // Update visibility if last SwapInfo flag is true.

            renderers[i].updateVisibility(); // Update render order if last SwapInfo flags is true.

            renderers[i].updateRenderOrder(); // Skip completely non-dirty data.

            if (!data[i].isAnyDirty) {
              continue;
            } // Update visibility.


            if (data[i].isVisibilityDirty) {
              renderers[i].onDrawableVisiblityDidChange(data[i].isVisible);
              swapMeshes = true;
            } // Update render order.


            if (data[i].isRenderOrderDirty) {
              renderers[i].onDrawableRenderOrderDidChange(data[i].renderOrder);
              swapMeshes = true;
            } // Update opacity.


            if (data[i].isOpacityDirty) {
              renderers[i].onDrawableOpacityDidChange(data[i].opacity);
              swapMeshes = true;
            } // Update vertex positions.


            if (data[i].areVertexPositionsDirty) {
              renderers[i].onDrawableVertexPositionsDidChange(data[i].vertexPositions);
              swapMeshes = true;
            } // Swap buffers if necessary.
            // [INV] Swapping only half of the meshes might improve performance even. Would that be visually feasible?


            if (swapMeshes) {
              renderers[i].swapMeshes();
            }
          } // Pass draw order changes to handler (if available).


          let drawOrderHandler = this.drawOrderHandlerInterface;

          if (drawOrderHandler != null) {
            for (let i = 0; i < data.length; i++) {
              if (data[i].isDrawOrderDirty) {
                drawOrderHandler.onDrawOrderDidChange(this, drawables[i], data[i].drawOrder);
              }
            }
          }

          let isMultiplyColorUpdated = false;
          let isScreenColorUpdated = false;
          const newMultiplyColors = new Array(renderers.length);
          const newScreenColors = new Array(renderers.length);

          for (let i = 0; i < data.length; i++) {
            const isUseModelMultiplyColor = !(renderers[i].overwriteFlagForDrawableMultiplyColors || this.overwriteFlagForModelMultiplyColors); // Skip processing when not using model colors.

            if (data[i].isBlendColorDirty && isUseModelMultiplyColor) {
              renderers[i].applyMultiplyColor();
              isMultiplyColorUpdated = true;
            }

            newMultiplyColors[i] = renderers[i].multiplyColor;
          }

          for (let i = 0; i < data.length; i++) {
            const isUseModelScreenColor = !(renderers[i].overwriteFlagForDrawableScreenColor || this.overwriteFlagForModelScreenColors); // Skip processing when not using model colors.

            if (data[i].isBlendColorDirty && isUseModelScreenColor) {
              renderers[i].applyScreenColor();
              isScreenColorUpdated = true;
            }

            newScreenColors[i] = renderers[i].screenColor;
          } // Pass blend color changes to handler (if available).


          const multiplyColorHandlerInterface = this.multiplyColorHandlerInterface;
          const screenColorHandlerInterface = this.screenColorHandlerInterface;

          if (this.multiplyColorHandler != null && isMultiplyColorUpdated) {
            multiplyColorHandlerInterface == null ? void 0 : multiplyColorHandlerInterface.onBlendColorDidChange(this, newMultiplyColors);
          }

          if (this.screenColorHandler != null && isScreenColorUpdated) {
            screenColorHandlerInterface == null ? void 0 : screenColorHandlerInterface.onBlendColorDidChange(this, newScreenColors);
          }
        }

        //#region Editor Inspector Only
        get opacityHandlerComponent() {
          return this._opacityHandler instanceof Component ? this._opacityHandler : null;
        }

        set opacityHandlerComponent(value) {
          this.opacityHandler = value;
        }

        get opacityHandlerAsset() {
          return this._opacityHandler instanceof Asset ? this._opacityHandler : null;
        }

        set opacityHandlerAsset(value) {
          this.opacityHandler = value;
        }

        get opacityHandlerNode() {
          return this._opacityHandler instanceof Node ? this._opacityHandler : null;
        }

        set opacityHandlerNode(value) {
          this.opacityHandler = value;
        }

        get drawOrderHandlerComponent() {
          return this._drawOrderHandler instanceof Component ? this._drawOrderHandler : null;
        }

        set drawOrderHandlerComponent(value) {
          this.drawOrderHandler = value;
        }

        get drawOrderHandlerAsset() {
          return this._drawOrderHandler instanceof Asset ? this._drawOrderHandler : null;
        }

        set drawOrderHandlerAsset(value) {
          this.drawOrderHandler = value;
        }

        get drawOrderHandlerNode() {
          return this._drawOrderHandler instanceof Node ? this._drawOrderHandler : null;
        }

        set drawOrderHandlerNode(value) {
          this.drawOrderHandler = value;
        } //#endregion


      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "opacity", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_lastOpacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_isOverwrittenModelMultiplyColors", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_isOverwrittenModelScreenColors", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_modelMultiplyColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return math.Color.WHITE.clone();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_modelScreenColor", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new math.Color(0, 0, 0, 0);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_sortingLayerId", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_sortingMode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && CubismSortingMode === void 0 ? (_reportPossibleCrUseOfCubismSortingMode({
            error: Error()
          }), CubismSortingMode) : CubismSortingMode).backToFrontZ;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "sortingMode", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "sortingMode"), _class2.prototype), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_sortingOrder", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "sortingOrder", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "sortingOrder"), _class2.prototype), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "cameraToFace", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_drawOrderHandler", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "drawOrderHandler", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "drawOrderHandler"), _class2.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_drawOrderHandlerInterface", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_opacityHandler", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "opacityHandler", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "opacityHandler"), _class2.prototype), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_opacityHandlerInterface", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "_multiplyColorHandler", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "_multiplyColorHandlerInterface", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "_screenColorHandler", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "_screenColorHandlerInterface", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "_depthOffset", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.00001;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "depthOffset", [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "depthOffset"), _class2.prototype), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "_renderers", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "_hasUpdateController", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "opacityHandlerComponent", [_dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "opacityHandlerComponent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "opacityHandlerAsset", [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "opacityHandlerAsset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "opacityHandlerNode", [_dec30], Object.getOwnPropertyDescriptor(_class2.prototype, "opacityHandlerNode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "drawOrderHandlerComponent", [_dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "drawOrderHandlerComponent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "drawOrderHandlerAsset", [_dec32], Object.getOwnPropertyDescriptor(_class2.prototype, "drawOrderHandlerAsset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "drawOrderHandlerNode", [_dec33], Object.getOwnPropertyDescriptor(_class2.prototype, "drawOrderHandlerNode"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b299a1f4230844592efec77e5394036ee3507e3.js.map
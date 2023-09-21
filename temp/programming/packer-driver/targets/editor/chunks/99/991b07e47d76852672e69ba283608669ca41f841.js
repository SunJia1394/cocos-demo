System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, CCInteger, Component, director, Enum, math, Mesh, MeshRenderer, Texture2D, _decorator, CubismDrawable, CubismShaderVariables, CubismSortingMode, CubismMeshPrimitive, EditorUtils, isImporter, SwapInfo, _CubismRendererInEdit, _CubismRendererInEdit2, _CubismRendererInEdit3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, requireComponent, executeInEditMode, CubismRendererInEditorSymbols, CubismRenderer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismDrawable(extras) {
    _reporterNs.report("CubismDrawable", "../Core/CubismDrawable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismShaderVariables(extras) {
    _reporterNs.report("CubismShaderVariables", "../Rendering/CubismShaderVariables", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismSortingMode(extras) {
    _reporterNs.report("CubismSortingMode", "../Rendering/CubismSortingMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskProperties(extras) {
    _reporterNs.report("CubismMaskProperties", "../Rendering/Masking/CubismMaskProperties", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMeshPrimitive(extras) {
    _reporterNs.report("CubismMeshPrimitive", "./CubismMeshPrimitive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEditorUtils(extras) {
    _reporterNs.report("EditorUtils", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisImporter(extras) {
    _reporterNs.report("isImporter", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStructLike(extras) {
    _reporterNs.report("IStructLike", "../IStructLike", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRenderController(extras) {
    _reporterNs.report("CubismRenderController", "./CubismRenderController", _context.meta, extras);
  }

  _export("CubismRendererInEditorSymbols", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      director = _cc.director;
      Enum = _cc.Enum;
      math = _cc.math;
      Mesh = _cc.Mesh;
      MeshRenderer = _cc.MeshRenderer;
      Texture2D = _cc.Texture2D;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismDrawable = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismShaderVariables = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismSortingMode = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismMeshPrimitive = _unresolved_5.default;
    }, function (_unresolved_6) {
      EditorUtils = _unresolved_6.EditorUtils;
      isImporter = _unresolved_6.isImporter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91ecbDt1nJOObi3jTrlvwi0", "CubismRenderer", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', 'CCInteger', 'Component', 'director', 'Enum', 'Material', 'math', 'Mesh', 'MeshRenderer', 'Texture2D', '_decorator']);

      ({
        ccclass,
        property,
        requireComponent,
        executeInEditMode
      } = _decorator);

      (function (_CubismRendererInEditorSymbols) {
        const onControllerSortingOrderDidChange = _CubismRendererInEditorSymbols.onControllerSortingOrderDidChange = Symbol.for('onControllerSortingOrderDidChange');
        const onControllerSortingModeDidChange = _CubismRendererInEditorSymbols.onControllerSortingModeDidChange = Symbol.for('onControllerSortingModeDidChange');
        const onControllerDepthOffsetDidChange = _CubismRendererInEditorSymbols.onControllerDepthOffsetDidChange = Symbol.for('onControllerDepthOffsetDidChange');
      })(CubismRendererInEditorSymbols || _export("CubismRendererInEditorSymbols", CubismRendererInEditorSymbols = {}));
      /** Wrapper for drawing CubismDrawables. */


      _export("default", CubismRenderer = (_dec = ccclass('CubismRenderer'), _dec2 = requireComponent(MeshRenderer), _dec3 = property({
        type: CCInteger,
        serializable: true,
        visible: false
      }), _dec4 = property({
        type: CCInteger,
        visible: true
      }), _dec5 = property({
        serializable: true,
        visible: false
      }), _dec6 = property({
        visible: true
      }), _dec7 = property({
        serializable: true,
        visible: false
      }), _dec8 = property({
        serializable: true,
        visible: false
      }), _dec9 = property({
        serializable: true,
        visible: false
      }), _dec10 = property({
        serializable: true,
        visible: false
      }), _dec11 = property({
        type: Texture2D,
        serializable: true,
        visible: false
      }), _dec12 = property({
        type: Texture2D,
        visible: true
      }), _dec13 = property({
        type: Mesh,
        visible: true,
        readonly: true
      }), _dec14 = property({
        type: Enum(_crd && CubismSortingMode === void 0 ? (_reportPossibleCrUseOfCubismSortingMode({
          error: Error()
        }), CubismSortingMode) : CubismSortingMode),
        serializable: true,
        visible: false
      }), _dec15 = property({
        type: Enum(_crd && CubismSortingMode === void 0 ? (_reportPossibleCrUseOfCubismSortingMode({
          error: Error()
        }), CubismSortingMode) : CubismSortingMode),
        visible: false
      }), _dec16 = property({
        type: CCInteger,
        serializable: true,
        visible: false
      }), _dec17 = property({
        type: CCInteger,
        serializable: true,
        visible: false
      }), _dec18 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec19 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec20 = property({
        serializable: true,
        visible: false
      }), _dec21 = property({
        type: CCFloat,
        serializable: true
      }), _dec(_class2 = _dec2(_class2 = executeInEditMode(_class2 = (_class3 = (_CubismRendererInEdit = CubismRendererInEditorSymbols.onControllerSortingModeDidChange, _CubismRendererInEdit2 = CubismRendererInEditorSymbols.onControllerSortingOrderDidChange, _CubismRendererInEdit3 = CubismRendererInEditorSymbols.onControllerDepthOffsetDidChange, class CubismRenderer extends Component {
        constructor(...args) {
          super(...args);

          //#region LocalSortingOrder

          /** LocalSortingOrder backing field. */
          _initializerDefineProperty(this, "_localSortingOrder", _descriptor, this);

          //#endregion
          //#region Color

          /** Color backing field. */
          _initializerDefineProperty(this, "_color", _descriptor2, this);

          //#endregion
          //#region OverwriteFlagForDrawableMultiplyColors

          /** {@link overwriteFlagForDrawableMultiplyColors} backing field. */
          _initializerDefineProperty(this, "_isOverwrittenDrawableMultiplyColors", _descriptor3, this);

          //#endregion
          //#region LastIsUseUserMultiplyColor
          this._lastIsUseUserMultiplyColor = false;

          //#endregion
          //#region OverwriteFlagForDrawableScreenColor

          /** {@link overwriteFlagForDrawableScreenColor} backing field. */
          _initializerDefineProperty(this, "_isOverwrittenDrawableScreenColor", _descriptor4, this);

          //#endregion
          //#region LastIsUseUserScreenColor
          this._lastIsUseUserScreenColor = false;

          //#endregion
          //#region MultiplyColor

          /** {@link MultiplyColor} backing field. */
          _initializerDefineProperty(this, "_multiplyColor", _descriptor5, this);

          //#endregion
          //#region LastMultiplyColor
          this._lastMultiplyColor = math.Color.WHITE;

          //#endregion
          //#region ScreenColor

          /** {@link ScreenColor} backing field. */
          _initializerDefineProperty(this, "_screenColor", _descriptor6, this);

          //#endregion
          //#region LastScreenColor
          this._lastScreenColor = new math.Color(0, 0, 0, 0);

          //#endregion
          //#region MainTexture

          /** MainTexture backing field. */
          _initializerDefineProperty(this, "_mainTexture", _descriptor7, this);

          //#endregion
          //#region Meshes
          // @property({ serializable: false, visible: false })
          this._meshes = [(_crd && CubismMeshPrimitive === void 0 ? (_reportPossibleCrUseOfCubismMeshPrimitive({
            error: Error()
          }), CubismMeshPrimitive) : CubismMeshPrimitive).makeEmpty(), (_crd && CubismMeshPrimitive === void 0 ? (_reportPossibleCrUseOfCubismMeshPrimitive({
            error: Error()
          }), CubismMeshPrimitive) : CubismMeshPrimitive).makeEmpty()];
          //#endregion
          //#region FrontMesh
          // @property({ serializable: false, visible: false })
          this._frontMesh = 0;
          //#endregion
          //#region BackMesh
          // @property({ serializable: false, visible: false })
          this._backMesh = 0;
          //#endregion
          //#region MeshRenderer

          /** MeshRenderer backing field. */
          // @property({ serializable: false, visible: false })
          this._meshRenderer = null;
          //#endregion
          //#region Drawable

          /** {@link CubismDrawable} */
          this._drawable = null;
          //#endregion
          //#region RenderController
          this._renderController = null;

          //#endregion
          //#region Interface For CubismRenderController
          //#region SortingMode

          /** SortingMode backing field. */
          _initializerDefineProperty(this, "_sortingMode", _descriptor8, this);

          //#endregion
          //#region SortingOrder

          /** SortingOrder backing field. */
          _initializerDefineProperty(this, "_sortingOrder", _descriptor9, this);

          //#endregion
          //#region RenderOrder

          /** RenderOrder backing field. */
          _initializerDefineProperty(this, "_renderOrder", _descriptor10, this);

          //#endregion
          //#region DepthOffset

          /** DepthOffset backing field. */
          _initializerDefineProperty(this, "_depthOffset", _descriptor11, this);

          //#endregion
          //#region Opacity

          /** Opacity backing field. */
          _initializerDefineProperty(this, "_opacity", _descriptor12, this);

          //#endregion
          //#region CertexColors
          _initializerDefineProperty(this, "_vertexColors", _descriptor13, this);

          //#endregion
          //#region LastSwap
          // @property({ serializable: false, visible: false })
          this._lastSwap = SwapInfo.DEFAULT;
          //#endregion
          //#region ThisSwap
          // @property({ serializable: false, visible: false })
          this._thisSwap = SwapInfo.DEFAULT;

          //#endregion

          /** Editor Inspector 表示用 */
          _initializerDefineProperty(this, "_priorityInEditor", _descriptor14, this);
        }

        /** Local sorting order. */
        get localSortingOrder() {
          return this._localSortingOrder;
        }

        set localSortingOrder(value) {
          // Return early if same value given.
          if (value == this._localSortingOrder) {
            return;
          } // Store value.


          this._localSortingOrder = value; // Apply it.

          this.applySorting();
        }

        /** Color. */
        get color() {
          return this._color;
        }

        set color(value) {
          // Return early if same value given.
          if (this._color.equals(value)) {
            return;
          } // Store value.


          this._color = value; // Apply color.

          this.applyVertexColors();
        }

        /** Whether to overwrite with multiply color from the model. */
        get overwriteFlagForDrawableMultiplyColors() {
          return this._isOverwrittenDrawableMultiplyColors;
        }

        set overwriteFlagForDrawableMultiplyColors(value) {
          this._isOverwrittenDrawableMultiplyColors = value;
        }

        /** Last {@link overwriteFlagForDrawableMultiplyColors}. */
        get lastIsUseUserMultiplyColor() {
          return this._lastIsUseUserMultiplyColor;
        }

        set lastIsUseUserMultiplyColor(value) {
          this._lastIsUseUserMultiplyColor = value;
        }

        /** Whether to overwrite with screen color from the model. */
        get overwriteFlagForDrawableScreenColor() {
          return this._isOverwrittenDrawableScreenColor;
        }

        set overwriteFlagForDrawableScreenColor(value) {
          this._isOverwrittenDrawableScreenColor = value;
        }

        /** Last {@link overwriteFlagForDrawableScreenColors}. */
        get lastIsUseUserScreenColor() {
          return this._lastIsUseUserScreenColor;
        }

        set lastIsUseUserScreenColor(value) {
          this._lastIsUseUserScreenColor = value;
        }

        get multiplyColor() {
          var _this$renderControlle, _this$drawable$multip, _this$drawable;

          if (this.overwriteFlagForDrawableMultiplyColors || (_this$renderControlle = this.renderController) != null && _this$renderControlle.overwriteFlagForModelMultiplyColors) {
            return this._multiplyColor;
          }

          return (_this$drawable$multip = (_this$drawable = this.drawable) == null ? void 0 : _this$drawable.multiplyColor) != null ? _this$drawable$multip : math.Color.WHITE;
        }

        set multiplyColor(value) {
          // Return early if same value given.
          if (this._multiplyColor.equals(value)) {
            return;
          } // Store value.


          this._multiplyColor = value != null ? value : math.Color.WHITE.clone();
        }

        /** Last Drawable Multiply Color. */
        get lastMultiplyColor() {
          return this._lastMultiplyColor;
        }

        set lastMultiplyColor(value) {
          this._lastMultiplyColor = value;
        }

        /** Drawable Screen Color. */
        get screenColor() {
          var _this$renderControlle2, _this$drawable$screen, _this$drawable2;

          if (this.overwriteFlagForDrawableScreenColor || (_this$renderControlle2 = this.renderController) != null && _this$renderControlle2.overwriteFlagForModelScreenColors) {
            return this._screenColor;
          }

          return (_this$drawable$screen = (_this$drawable2 = this.drawable) == null ? void 0 : _this$drawable2.screenColor) != null ? _this$drawable$screen : new math.Color(0, 0, 0, 0);
        }

        set screenColor(value) {
          // Return early if same value given.
          if (this._screenColor.equals(value)) {
            return;
          } // Store value.


          this._screenColor = value != null ? value : math.Color.BLACK;
        }

        /** Last Drawable Screen Color. */
        get lastScreenColor() {
          return this._lastScreenColor;
        }

        set lastScreenColor(value) {
          this._lastScreenColor = value;
        } //#endregion
        //#region Material

        /** Material. */
        // @property({ type: Material, visible: true })


        get material() {
          var _this$meshRenderer$ma, _this$meshRenderer;

          return (_this$meshRenderer$ma = (_this$meshRenderer = this.meshRenderer) == null ? void 0 : _this$meshRenderer.material) != null ? _this$meshRenderer$ma : null;
        }

        set material(value) {
          if (this.meshRenderer != null) {
            this.meshRenderer.material = value;
          }
        }

        /** MeshRenderer's main texture. */
        get mainTexture() {
          return this._mainTexture;
        }

        set mainTexture(value) {
          // Return early if same value given and main texture is valid.
          if (this._mainTexture == value) {
            return;
          } // Store value.


          this._mainTexture = value; // Apply it.

          this.applyMainTexture();
        }

        /**
         * Meshes.
         *
         * Double buffering dynamic meshes increases performance on mobile, so we double-buffer them here.
         */
        get meshes() {
          return this._meshes;
        }

        set meshes(value) {
          this._meshes = value;
        }

        /** Index of front buffer mesh. */
        get frontMesh() {
          return this._frontMesh;
        }

        set frontMesh(value) {
          this._frontMesh = value;
        }

        /** Index of back buffer mesh. */
        get backMesh() {
          return this._backMesh;
        }

        set backMesh(value) {
          this._backMesh = value;
        } //#endregion
        //#region Mesh

        /** Mesh */


        get mesh() {
          return this.meshes[this.frontMesh];
        }

        get meshRenderer() {
          return this._meshRenderer;
        }

        /** {@link CubismRenderController} */
        get drawable() {
          return this._drawable;
        }

        set drawable(value) {
          this._drawable = value;
        }

        /** {@link CubismRenderController} */
        get renderController() {
          return this._renderController;
        }

        set renderController(value) {
          this._renderController = value;
        }

        /** Sorting mode. */
        get sortingMode() {
          return this._sortingMode;
        }

        set sortingMode(value) {
          this._sortingMode = value;
        }

        /** Sorting mode. */
        get sortingOrder() {
          return this._sortingOrder;
        }

        set sortingOrder(value) {
          this._sortingOrder = value;
        }

        /** Sorting mode. */
        get renderOrder() {
          return this._renderOrder;
        }

        set renderOrder(value) {
          this._renderOrder = value;
        }

        /** Offset to apply in case of depth sorting. */
        get depthOffset() {
          return this._depthOffset;
        }

        set depthOffset(value) {
          this._depthOffset = value;
        }

        /** Opacity. */
        get opacity() {
          return this._opacity;
        }

        set opacity(value) {
          this._opacity = value;
        }

        /** Buffer for vertex colors. */
        get vertexColors() {
          return this._vertexColors;
        }

        set vertexColors(value) {
          this._vertexColors = value;
        }

        /** Allows tracking of what vertex data was updated last swap. */
        get lastSwap() {
          return this._lastSwap;
        }

        set lastSwap(value) {
          this._lastSwap = value;
        }

        /** Allows tracking of what vertex data will be swapped. */
        get thisSwap() {
          return this._thisSwap;
        }

        set thisSwap(value) {
          this._thisSwap = value;
        }

        /**
         * Swaps mesh buffers.
         *
         * Make sure to manually call this method in case you changed the Color.
         */
        swapMeshes() {
          // Perform internal swap.
          this.backMesh = this.frontMesh;
          this.frontMesh = this.frontMesh == 0 ? 1 : 0;
          let mesh = this.meshes[this.frontMesh]; // Update colors.

          if (this.vertexColors != null) {
            mesh.setColors(this.vertexColors);
          } // Update swap info.


          this.lastSwap = this.thisSwap;
          this.resetSwapInfoFlags(); // Importer動作処理の場合は実行しない。

          if ((_crd && isImporter === void 0 ? (_reportPossibleCrUseOfisImporter({
            error: Error()
          }), isImporter) : isImporter)()) {
            return;
          }

          const scene = director.getScene();

          if (scene == null) {
            console.error('CubismRenderer.swapMeshes(): director.getScene() failed.');
            return;
          }

          const renderScene = scene.renderScene;

          if (renderScene == null) {
            console.error('CubismRenderer.swapMeshes(): renderScene is null.');
            return;
          }

          if (this.meshRenderer == null) {
            console.error('CubismRenderer.swapMeshes(): meshRenderer is null.');
            return;
          }

          this.meshRenderer.mesh = mesh.createMesh();
        }
        /** Updates visibility. */


        updateVisibility() {
          if (this.meshRenderer) {
            if (this.lastSwap.didBecomeVisible) {
              this.meshRenderer.enabled = true;
            } else if (this.lastSwap.didBecomeInvisible) {
              this.meshRenderer.enabled = false;
            }
          }

          this.resetVisibilityFlags();
        }
        /** Updates render order. */


        updateRenderOrder() {
          if (this.lastSwap.newRenderOrder) {
            this.applySorting();
          }

          this.resetRenderOrderFlag();
        }
        /**
         * Updates sorting layer.
         * @param newSortingLayer New sorting layer.
         */


        onControllerSortingLayerDidChange(newSortingLayer) {// TODO: meshRenderer.sortingLayerID
          // this.meshRenderer.sortingLayerID = newSortingLayer;
        }
        /**
         * Updates sorting mode.
         * @param newSortingMode New sorting mode.
         */


        onControllerSortingModeDidChange(newSortingMode) {
          this.sortingMode = newSortingMode;
          this.applySorting();
        }
        /** In editor method. */


        [_CubismRendererInEdit](newSortingMode) {
          (_crd && EditorUtils === void 0 ? (_reportPossibleCrUseOfEditorUtils({
            error: Error()
          }), EditorUtils) : EditorUtils).applyComponentProperty(this.node.uuid, this.uuid, 'sortingMode', newSortingMode, 'Enum').then(() => this.applySorting());
        }
        /**
         * Updates sorting order.
         * @param newSortingOrder New sorting order.
         */


        onControllerSortingOrderDidChange(newSortingOrder) {
          this.sortingOrder = newSortingOrder;
          this.applySorting();
        }
        /** In editor method. */


        [_CubismRendererInEdit2](newSortingOrder) {
          (_crd && EditorUtils === void 0 ? (_reportPossibleCrUseOfEditorUtils({
            error: Error()
          }), EditorUtils) : EditorUtils).applyComponentProperty(this.node.uuid, this.uuid, 'sortingOrder', newSortingOrder, 'Float').then(() => this.applySorting());
        }
        /**
         * Updates depth offset.
         * @param newDepthOffset
         */


        onControllerDepthOffsetDidChange(newDepthOffset) {
          this.depthOffset = newDepthOffset;
          this.applySorting();
        }
        /** In editor method. */


        [_CubismRendererInEdit3](newDepthOffset) {
          (_crd && EditorUtils === void 0 ? (_reportPossibleCrUseOfEditorUtils({
            error: Error()
          }), EditorUtils) : EditorUtils).applyComponentProperty(this.node.uuid, this.uuid, 'depthOffset', newDepthOffset, 'Float').then(() => this.applySorting());
        }
        /**
         * Sets the opacity.
         * @param newOpacity New opacity.
         */


        onDrawableOpacityDidChange(newOpacity) {
          this.opacity = newOpacity;
          this.applyVertexColors();
        }
        /**
         * Updates render order.
         * @param newRenderOrder New render order.
         */


        onDrawableRenderOrderDidChange(newRenderOrder) {
          this.renderOrder = newRenderOrder;
          this.setNewRenderOrder();
        }
        /**
         * Sets the UnityEngine.Mesh.vertices.
         * @param newVertexPositions Vertex positions to set.
         */


        onDrawableVertexPositionsDidChange(newVertexPositions) {
          const mesh = this.mesh; // Apply positions and update bounds.

          mesh.setPositions(newVertexPositions); // Set swap flag.

          this.setNewVertexPositions();
        }
        /**
         * Sets visibility.
         * @param newVisibility New visibility.
         */


        onDrawableVisiblityDidChange(newVisibility) {
          // Set swap flag if visible.
          if (newVisibility) {
            this.becomeVisible();
          } else {
            this.becomeInvisible();
          }
        }
        /**
         * Sets mask properties.
         * @param newMaskProperties Value to set.
         */


        onMaskPropertiesDidChange(newMaskProperties) {
          var _newMaskProperties$te, _newMaskProperties$te2;

          const maskTex = (_newMaskProperties$te = (_newMaskProperties$te2 = newMaskProperties.texture) == null ? void 0 : _newMaskProperties$te2.getTextureReference()) != null ? _newMaskProperties$te : null;
          const maskTile = newMaskProperties.tile.toVec4();
          const maskTransform = newMaskProperties.transform.toVec4();
          const meshRenderer = this.meshRenderer;

          if (meshRenderer == null) {
            console.error('CubismRenderer.onMaskPropertiesDidChange(): meshRenderer is null.');
            return;
          }

          const material = meshRenderer.getMaterialInstance(0);

          if (material == null) {
            console.error('CubismRenderer.onMaskPropertiesDidChange(): material is null.');
            return;
          }

          material.setProperty((_crd && CubismShaderVariables === void 0 ? (_reportPossibleCrUseOfCubismShaderVariables({
            error: Error()
          }), CubismShaderVariables) : CubismShaderVariables).maskTexture, maskTex);
          material.setProperty((_crd && CubismShaderVariables === void 0 ? (_reportPossibleCrUseOfCubismShaderVariables({
            error: Error()
          }), CubismShaderVariables) : CubismShaderVariables).maskTile, maskTile);
          material.setProperty((_crd && CubismShaderVariables === void 0 ? (_reportPossibleCrUseOfCubismShaderVariables({
            error: Error()
          }), CubismShaderVariables) : CubismShaderVariables).maskTransform, maskTransform);
        }
        /**
         * Sets model opacity.
         * @param newModelOpacity Opacity to set.
         */


        onModelOpacityDidChange(newModelOpacity) {
          var _this$meshRenderer2;

          // Write property.
          (_this$meshRenderer2 = this.meshRenderer) == null || (_this$meshRenderer2 = _this$meshRenderer2.material) == null ? void 0 : _this$meshRenderer2.setProperty((_crd && CubismShaderVariables === void 0 ? (_reportPossibleCrUseOfCubismShaderVariables({
            error: Error()
          }), CubismShaderVariables) : CubismShaderVariables).modelOpacity, newModelOpacity);
        } // #endregion

        /** Applies main texture for rendering. */


        applyMainTexture() {
          // Importer動作処理の場合は実行しない。
          if ((_crd && isImporter === void 0 ? (_reportPossibleCrUseOfisImporter({
            error: Error()
          }), isImporter) : isImporter)()) {
            return;
          }

          const meshRenderer = this.meshRenderer;

          if (meshRenderer == null) {
            console.error('CubismRenderer.applyMainTexture(): meshRenderer is null.');
            return;
          }

          let material = meshRenderer.getMaterialInstance(0);

          if (material == null) {
            console.error('CubismRenderer.applyMainTexture(): material is null.');
            return;
          }

          material.setProperty((_crd && CubismShaderVariables === void 0 ? (_reportPossibleCrUseOfCubismShaderVariables({
            error: Error()
          }), CubismShaderVariables) : CubismShaderVariables).mainTexture, this.mainTexture);
        }
        /** Applies sorting. */


        applySorting() {
          if (this.meshRenderer == null) {
            console.error('CubismRenderer.applySorting(): this.meshRenderer is null.');
            return;
          } // Sort by order.


          if ((_crd && CubismSortingMode === void 0 ? (_reportPossibleCrUseOfCubismSortingMode({
            error: Error()
          }), CubismSortingMode) : CubismSortingMode).sortByOrder(this.sortingMode)) {
            this.meshRenderer.priority = this.sortingOrder + (this.sortingMode == (_crd && CubismSortingMode === void 0 ? (_reportPossibleCrUseOfCubismSortingMode({
              error: Error()
            }), CubismSortingMode) : CubismSortingMode).backToFrontOrder ? this.renderOrder + this.localSortingOrder : -(this.renderOrder + this.localSortingOrder));
            this.node.position = math.Vec3.ZERO;
            this._priorityInEditor = this.meshRenderer.priority;
            return;
          } // Sort by depth.


          let offset = this.sortingMode == (_crd && CubismSortingMode === void 0 ? (_reportPossibleCrUseOfCubismSortingMode({
            error: Error()
          }), CubismSortingMode) : CubismSortingMode).backToFrontZ ? this.depthOffset : -this.depthOffset;
          this.meshRenderer.priority = this.sortingOrder + this.localSortingOrder;
          this._priorityInEditor = this.meshRenderer.priority;
          this.node.position = new math.Vec3(0, 0, this.renderOrder * offset);
        }
        /** Uploads mesh vertex colors. */


        applyVertexColors() {
          const vertexColors = this.vertexColors;

          if (vertexColors == null) {
            console.error('applyVertexColors -> this.vertexColors is null.');
            return;
          }

          let color = this.color;
          color = new math.Color(color.r, color.g, color.b, color.a * this.opacity);

          for (let i = 0; i < vertexColors.length; i++) {
            vertexColors[i] = color;
          } // Set swap flag.


          this.setNewVertexColors();
        }
        /** Uploads diffuse colors. */


        applyMultiplyColor() {
          if ((_crd && isImporter === void 0 ? (_reportPossibleCrUseOfisImporter({
            error: Error()
          }), isImporter) : isImporter)()) {
            return;
          } // Write property.


          const renderer = this.meshRenderer;

          if (renderer) {
            const material = renderer.getMaterialInstance(0);
            material == null ? void 0 : material.setProperty((_crd && CubismShaderVariables === void 0 ? (_reportPossibleCrUseOfCubismShaderVariables({
              error: Error()
            }), CubismShaderVariables) : CubismShaderVariables).multiplyColor, this.multiplyColor);
          }
        }
        /** Initializes the main texture if possible. */


        tryInitializeMultiplyColor() {
          this.lastIsUseUserMultiplyColor = false;
          this.lastMultiplyColor = this.multiplyColor;
          this.applyMultiplyColor();
        }
        /** Uploads tint colors. */


        applyScreenColor() {
          if ((_crd && isImporter === void 0 ? (_reportPossibleCrUseOfisImporter({
            error: Error()
          }), isImporter) : isImporter)()) {
            return;
          } // Write property.


          const renderer = this.meshRenderer;

          if (renderer) {
            const material = renderer.getMaterialInstance(0);
            material == null ? void 0 : material.setProperty((_crd && CubismShaderVariables === void 0 ? (_reportPossibleCrUseOfCubismShaderVariables({
              error: Error()
            }), CubismShaderVariables) : CubismShaderVariables).screenColor, this.screenColor);
          }
        }
        /** Initializes the main texture if possible. */


        tryInitializeScreenColor() {
          this.lastIsUseUserScreenColor = false;
          this.lastScreenColor = this.screenColor;
          this.applyScreenColor();
        }
        /** Initializes the mesh renderer. */


        tryInitializeMeshRenderer() {
          if (this._meshRenderer == null) {
            var _this$getComponent;

            this._meshRenderer = (_this$getComponent = this.getComponent(MeshRenderer)) != null ? _this$getComponent : this.addComponent(MeshRenderer); // Lazily add component.

            if (this._meshRenderer != null) {
              // TODO: Unity における HideFlags.HideInInspector はどれか？
              // this._meshRenderer.hideFlags = CCObject.Flags.; // HideFlags.HideInInspector
              this._meshRenderer.receiveShadow = 0; // false

              this._meshRenderer.shadowCastingMode = 0; // false
              // this._meshRenderer.lightProbeUsage = LightProbeUsage.BlendProbes;
            }
          }
        }
        /** Initializes the mesh if necessary. */


        tryInitializeMesh() {
          // Only create mesh if necessary.
          // HACK 'Mesh.vertex > 0' makes sure mesh is recreated in case of runtime instantiation.
          if (this.mesh.vertexCount > 0) {
            return;
          } // Create mesh for attached drawable.


          const drawable = this.getComponent(_crd && CubismDrawable === void 0 ? (_reportPossibleCrUseOfCubismDrawable({
            error: Error()
          }), CubismDrawable) : CubismDrawable);

          if (drawable == null) {
            console.error('CubismRenderer.tryInitializeMesh(): getComponent(CubismDrawable) failed.');
            return;
          }

          for (let i = 0; i < 2; i++) {
            const primitive = drawable.generateMeshPrimitive();

            if (primitive == null) {
              console.error('CubismRenderer.tryInitializeMesh(): generateMeshPrimitive() failed.');
              continue;
            } // Store mesh.


            this.meshes[i] = primitive;
          }
        }
        /** Initializes vertex colors. */


        tryInitializeVertexColor() {
          const mesh = this.mesh;
          this.vertexColors = new Array(mesh.vertexCount);

          for (let i = 0; i < this.vertexColors.length; i++) {
            const color = this._color;
            this.vertexColors[i] = new math.Color(color.r, color.g, color.b, color.a * this.opacity);
          }
        }
        /** Initializes the main texture if possible. */


        tryInitializeMainTexture() {
          if (this.mainTexture == null) {
            this.mainTexture = null;
          }

          this.applyMainTexture();
        }
        /** Initializes the mesh renderer. */


        tryInitialize(renderController) {
          this.drawable = this.getComponent(_crd && CubismDrawable === void 0 ? (_reportPossibleCrUseOfCubismDrawable({
            error: Error()
          }), CubismDrawable) : CubismDrawable);
          this.renderController = renderController;
          this.tryInitializeMeshRenderer();
          this.tryInitializeMesh();
          this.tryInitializeVertexColor();
          this.tryInitializeMainTexture();
          this.tryInitializeMultiplyColor();
          this.tryInitializeScreenColor();
          this.applySorting();
        } //#region Swap Info

        /** Sets NewVertexPositions. */


        setNewVertexPositions() {
          this.thisSwap = this.thisSwap.copyWith({
            newVertexPositions: true
          });
        }
        /** Sets NewVertexColors. */


        setNewVertexColors() {
          this.thisSwap = this.thisSwap.copyWith({
            newVertexColors: true
          });
        }
        /** Sets DidBecomeVisible on visible. */


        becomeVisible() {
          this.thisSwap = this.thisSwap.copyWith({
            didBecomeVisible: true
          });
        }
        /** Sets DidBecomeInvisible on invisible. */


        becomeInvisible() {
          this.thisSwap = this.thisSwap.copyWith({
            didBecomeInvisible: true
          });
        }
        /** Sets SetNewRenderOrder. */


        setNewRenderOrder() {
          this.thisSwap = this.thisSwap.copyWith({
            newRenderOrder: true
          });
        }
        /** Resets flags. */


        resetSwapInfoFlags() {
          this.thisSwap = this.thisSwap.copyWith({
            newRenderOrder: false,
            newVertexPositions: false,
            didBecomeVisible: false,
            didBecomeInvisible: false
          });
        }
        /** Reset visibility flags. */


        resetVisibilityFlags() {
          this.thisSwap = this.thisSwap.copyWith({
            didBecomeVisible: false,
            didBecomeInvisible: false
          });
        }
        /** Reset render order flag. */


        resetRenderOrderFlag() {
          this.thisSwap = this.thisSwap.copyWith({
            newRenderOrder: false
          });
        } //#endregion
        //#region Cocos Creator Events Handling

        /** Finalizes instance. */


        onDestroy() {// for (let i = 0; i < this.meshes.length; i++) {
          //   DestroyImmediate(this.meshes[i]);
          // }
        } //#endregion


      }), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "_localSortingOrder", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "localSortingOrder", [_dec4], Object.getOwnPropertyDescriptor(_class3.prototype, "localSortingOrder"), _class3.prototype), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "_color", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return math.Color.WHITE.clone();
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "color", [_dec6], Object.getOwnPropertyDescriptor(_class3.prototype, "color"), _class3.prototype), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "_isOverwrittenDrawableMultiplyColors", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "_isOverwrittenDrawableScreenColor", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "_multiplyColor", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return math.Color.WHITE.clone();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "_screenColor", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new math.Color(0, 0, 0, 0);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "_mainTexture", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "mainTexture", [_dec12], Object.getOwnPropertyDescriptor(_class3.prototype, "mainTexture"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "mesh", [_dec13], Object.getOwnPropertyDescriptor(_class3.prototype, "mesh"), _class3.prototype), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "_sortingMode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && CubismSortingMode === void 0 ? (_reportPossibleCrUseOfCubismSortingMode({
            error: Error()
          }), CubismSortingMode) : CubismSortingMode).backToFrontZ;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "sortingMode", [_dec15], Object.getOwnPropertyDescriptor(_class3.prototype, "sortingMode"), _class3.prototype), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "_sortingOrder", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "_renderOrder", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class3.prototype, "_depthOffset", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return math.EPSILON;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class3.prototype, "_opacity", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class3.prototype, "_vertexColors", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class3.prototype, "_priorityInEditor", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class3)) || _class2) || _class2) || _class2));

      /** Allows tracking of {@link Mesh} data changed on a swap. (struct) */
      SwapInfo = class SwapInfo {
        constructor(args = {}) {
          var _args$newVertexPositi, _args$newVertexColors, _args$didBecomeVisibl, _args$didBecomeInvisi, _args$newRenderOrder;

          /** Vertex positions were changed. */
          this.newVertexPositions = void 0;

          /** Vertex colors were changed. */
          this.newVertexColors = void 0;

          /** Visibility were changed to visible. */
          this.didBecomeVisible = void 0;

          /** Visibility were changed to invisible. */
          this.didBecomeInvisible = void 0;

          /** Render order were changed. */
          this.newRenderOrder = void 0;
          this.newVertexPositions = (_args$newVertexPositi = args.newVertexPositions) != null ? _args$newVertexPositi : false;
          this.newVertexColors = (_args$newVertexColors = args.newVertexColors) != null ? _args$newVertexColors : false;
          this.didBecomeVisible = (_args$didBecomeVisibl = args.didBecomeVisible) != null ? _args$didBecomeVisibl : false;
          this.didBecomeInvisible = (_args$didBecomeInvisi = args.didBecomeInvisible) != null ? _args$didBecomeInvisi : false;
          this.newRenderOrder = (_args$newRenderOrder = args.newRenderOrder) != null ? _args$newRenderOrder : false;
        }

        copyWith(args = {}) {
          var _args$newVertexPositi2, _args$newVertexColors2, _args$didBecomeVisibl2, _args$didBecomeInvisi2, _args$newRenderOrder2;

          return new SwapInfo({
            newVertexPositions: (_args$newVertexPositi2 = args.newVertexPositions) != null ? _args$newVertexPositi2 : this.newVertexPositions,
            newVertexColors: (_args$newVertexColors2 = args.newVertexColors) != null ? _args$newVertexColors2 : this.newVertexColors,
            didBecomeVisible: (_args$didBecomeVisibl2 = args.didBecomeVisible) != null ? _args$didBecomeVisibl2 : this.didBecomeVisible,
            didBecomeInvisible: (_args$didBecomeInvisi2 = args.didBecomeInvisible) != null ? _args$didBecomeInvisi2 : this.didBecomeInvisible,
            newRenderOrder: (_args$newRenderOrder2 = args.newRenderOrder) != null ? _args$newRenderOrder2 : this.newRenderOrder
          });
        }

        equals(other) {
          return this === other ? true : this.newVertexPositions == other.newVertexPositions && this.newVertexColors == other.newVertexColors && this.didBecomeVisible == other.didBecomeVisible && this.didBecomeInvisible == other.didBecomeInvisible && this.newRenderOrder == other.newRenderOrder;
        }

        strictEquals(other) {
          return this === other;
        }

      };

      (function (_SwapInfo) {
        const DEFAULT = _SwapInfo.DEFAULT = new SwapInfo();
      })(SwapInfo || (SwapInfo = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=991b07e47d76852672e69ba283608669ca41f841.js.map
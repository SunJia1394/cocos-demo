System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, math, CCInteger, Color, Utils, ComponentExtensionMethods, CubismMeshPrimitive, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CubismDrawable;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "./ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrawables(extras) {
    _reporterNs.report("Drawables", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMeshPrimitive(extras) {
    _reporterNs.report("CubismMeshPrimitive", "../Rendering/CubismMeshPrimitive", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      math = _cc.math;
      CCInteger = _cc.CCInteger;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      ComponentExtensionMethods = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismMeshPrimitive = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "589faLUSVtM3a/M36dmQnxS", "CubismDrawable", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'math', 'CCInteger', 'Color']);

      ({
        ccclass,
        property
      } = _decorator); // TODO: CubismDontMoveOnReimport

      /**
       * Single CubismModel drawable.
       *
       * **Sealed class.**
       */

      _export("default", CubismDrawable = (_dec = ccclass('CubismDrawable'), _dec2 = property({
        type: CCInteger,
        serializable: true,
        visible: true,
        readonly: true
      }), _dec(_class = (_class2 = class CubismDrawable extends Component {
        constructor() {
          super(...arguments);
          // #endregion
          this._unmanagedDrawables = null;

          /** {@link unmanagedIndex} backing field. */
          _initializerDefineProperty(this, "_unmanagedIndex", _descriptor, this);
        }

        // #region Factory Methods

        /**
         * Creates drawables for a {@link CubismModel}.
         * @param model Handle to unmanaged model.
         * @returns Drawables root.
         */
        static createDrawables(model) {
          var root = new Node('Drawables'); // Create parts.

          var drawables = model.drawables;
          var buffer = new Array(drawables.count);

          for (var i = 0; i < buffer.length; ++i) {
            var proxy = new Node();
            buffer[i] = proxy.addComponent(CubismDrawable);
            root.addChild(proxy);
            buffer[i].reset(model, i);
          }

          return root;
        }

        /** Unmanaged drawables from unmanaged model. */
        get unmanagedDrawables() {
          return this._unmanagedDrawables;
        }

        set unmanagedDrawables(value) {
          this._unmanagedDrawables = value;
        }

        /** Position in unmanaged arrays. */
        get unmanagedIndex() {
          return this._unmanagedIndex;
        }

        set unmanagedIndex(value) {
          this._unmanagedIndex = value;
        }
        /** Copy of Id. */


        get id() {
          if (this.unmanagedDrawables == null) {
            console.error('CubismDrawable.id: this.unmanagedDrawables is null');
            return '';
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.id: this.index uninitialize.');
            return '';
          }

          return this.unmanagedDrawables.ids[this.unmanagedIndex];
        }
        /** Texture UnmanagedIndex. */


        get textureIndex() {
          if (this.unmanagedDrawables == null) {
            console.error('CubismDrawable.id: this.unmanagedDrawables is null');
            return 0;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.id: this.index uninitialize.');
            return 0;
          }

          return this.unmanagedDrawables.textureIndices[this.unmanagedIndex];
        }
        /** Copy of the masks. */


        get masks() {
          if (this.unmanagedDrawables == null) {
            console.error('CubismDrawable.masks: this.unmanagedDrawables is null');
            return new Array(0);
          }

          var model = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this, true);

          if (model == null) {
            console.error('CubismDrawable.masks: ComponentExtensionMethods.findCubismModel() failed.');
            return new Array(0);
          }

          var drawables = model.drawables;

          if (drawables == null) {
            console.error('CubismDrawable.masks: model.drawables is null.');
            return new Array(0);
          }

          var count = this.unmanagedDrawables.maskCounts[this.unmanagedIndex];
          var indices = this.unmanagedDrawables.masks[this.unmanagedIndex]; // Pull data.

          var buffer = new Array(count);

          for (var i = 0; i < buffer.length; i++) {
            for (var j = 0; j < drawables.length; j++) {
              if (drawables[j].unmanagedIndex != indices[i]) {
                continue;
              }

              buffer[i] = drawables[j];
              break;
            }
          }

          return buffer;
        }
        /** Copy of vertex positions. */


        get vertexPositions() {
          var drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.vertexPositions: this.unmanagedDrawables is null.');
            return new Array(0);
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.vertexUvs: this.index uninitialize.');
            return new Array(0);
          }

          var count = drawables.vertexCounts[this.unmanagedIndex];
          var positions = drawables.vertexPositions[this.unmanagedIndex]; // Pull data.

          var buffer = new Array(count);

          for (var i = 0; i < buffer.length; i++) {
            buffer[i] = new math.Vec3(positions[i * 2 + 0], positions[i * 2 + 1]);
          }

          return buffer;
        }
        /** Copy of vertex texture coordinates. */


        get vertexUvs() {
          var drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.vertexUvs: this.unmanagedDrawables is null.');
            return new Array(0);
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.vertexUvs: this.index uninitialize.');
            return new Array(0);
          }

          var count = drawables.vertexCounts[this.unmanagedIndex];
          var uvs = drawables.vertexUvs[this.unmanagedIndex]; // Pull data.

          var buffer = new Array(count);

          for (var i = 0; i < buffer.length; i++) {
            buffer[i] = new math.Vec2(uvs[i * 2 + 0], uvs[i * 2 + 1]);
          }

          return buffer;
        }
        /** Copy of triangle indices. */


        get indices() {
          var drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.indices: this.unmanagedDrawables is null.');
            return new Uint16Array(0);
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.indices: this.index uninitialize.');
            return new Uint16Array(0);
          }

          var count = drawables.indexCounts[this.unmanagedIndex];
          var indices = drawables.indices[this.unmanagedIndex]; // Pull data.

          var buffer = new Uint16Array(count);

          for (var i = 0; i < buffer.length; i++) {
            buffer[i] = indices[i];
          }

          return buffer;
        }

        generateMeshPrimitive() {
          var drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.generateMeshPrimitive(): this.drawables is null.');
            return null;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.generateMeshPrimitive(): this.index uninitialize.');
            return null;
          } // Get addresses.


          var vertexCount = drawables.vertexCounts[this.unmanagedIndex];
          var positions = drawables.vertexPositions[this.unmanagedIndex];
          var uvs = drawables.vertexUvs[this.unmanagedIndex];
          var indices = drawables.indices[this.unmanagedIndex]; // Pull data.

          var positionsBuffer = new Array(vertexCount * 3);
          var uvsBuffer = new Array(vertexCount * 2);
          var colorsBuffer = new Array(vertexCount * 4);

          for (var i = 0, j = 0; i < positionsBuffer.length;) {
            positionsBuffer[i++] = positions[j++];
            positionsBuffer[i++] = positions[j++];
            positionsBuffer[i++] = 0;
          }

          for (var _i = 0, _j = 0; _i < uvsBuffer.length; _i++) {
            uvsBuffer[_i] = uvs[_i];
          }

          for (var _i2 = 0; _i2 < colorsBuffer.length; _i2++) {
            colorsBuffer[_i2] = 0;
          }

          var primitive = (_crd && CubismMeshPrimitive === void 0 ? (_reportPossibleCrUseOfCubismMeshPrimitive({
            error: Error()
          }), CubismMeshPrimitive) : CubismMeshPrimitive).from(positionsBuffer, uvsBuffer, colorsBuffer);
          primitive == null ? void 0 : primitive.setIndices(indices);
          return primitive;
        }
        /** True if double-sided. */


        get isDoubleSided() {
          var drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.isDoubleSided: this.unmanagedDrawables is null.');
            return false;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.isDoubleSided: this.index uninitialize.');
            return false;
          }

          var flags = drawables.constantFlags[this.unmanagedIndex]; // Pull data.

          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasIsDoubleSidedBit(flags);
        }
        /** True if masking is requested. */


        get isMasked() {
          var drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.isMasked: this.unmanagedDrawables is null.');
            return false;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.isMasked: this.index uninitialize.');
            return false;
          }

          return drawables.maskCounts[this.unmanagedIndex] > 0;
        }
        /** True if inverted mask. */


        get isInverted() {
          var drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.isMasked: this.unmanagedDrawables is null.');
            return false;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.isMasked: this.index uninitialize.');
            return false;
          }

          var flags = drawables.constantFlags[this.unmanagedIndex]; // Pull data.

          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasIsInvertedMaskBit(flags);
        }
        /** True if additive blending is requested. */


        get blendAdditive() {
          var drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.isMasked: this.unmanagedDrawables is null.');
            return false;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.isMasked: this.index uninitialize.');
            return false;
          }

          var flags = drawables.constantFlags[this.unmanagedIndex]; // Pull data.

          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasBlendAdditiveBit(flags);
        }
        /** True if multiply blending is setd. */


        get multiplyBlend() {
          var drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.isMasked: this.unmanagedDrawables is null.');
            return false;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.isMasked: this.index uninitialize.');
            return false;
          }

          var flags = drawables.constantFlags[this.unmanagedIndex]; // Pull data.

          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasBlendMultiplicativeBit(flags);
        }

        get multiplyColor() {
          if (this.unmanagedDrawables == null) {
            console.error('CubismDrawable.multiplyColor: this.unmanagedDrawables is null');
            return Color.WHITE;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.multiplyColor: this.index uninitialize.');
            return Color.WHITE;
          }

          var index = this.unmanagedIndex * 4;
          var x = this.unmanagedDrawables.multiplyColors[index + 0] * 255;
          var y = this.unmanagedDrawables.multiplyColors[index + 1] * 255;
          var z = this.unmanagedDrawables.multiplyColors[index + 2] * 255;
          var w = this.unmanagedDrawables.multiplyColors[index + 3] * 255; // Cubism Core API リファレンス <https://cubism.live2d.com/sdk-doc/reference/NativeCoreAPIReference_jp_r9.pdf> より Wの値は現在未使用

          return new Color(x, y, z, w);
        }

        get screenColor() {
          if (this.unmanagedDrawables == null) {
            console.error('CubismDrawable.multiplyColor: this.unmanagedDrawables is null');
            return Color.BLACK;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.multiplyColor: this.index uninitialize.');
            return Color.BLACK;
          }

          var index = this.unmanagedIndex * 4;
          var x = this.unmanagedDrawables.screenColors[index + 0] * 255;
          var y = this.unmanagedDrawables.screenColors[index + 1] * 255;
          var z = this.unmanagedDrawables.screenColors[index + 2] * 255;
          var w = this.unmanagedDrawables.screenColors[index + 3] * 255; // Cubism Core API リファレンス <https://cubism.live2d.com/sdk-doc/reference/NativeCoreAPIReference_jp_r9.pdf> より Wの値は現在未使用

          return new Color(x, y, z, w);
        }
        /**
         * Revives instance.
         * @param model Handle to unmanaged model.
         */


        revive(model) {
          this.unmanagedDrawables = model.drawables;
        }
        /**
         * Restores instance to initial state.
         * @param model Handle to unmanaged model.
         * @param index Position in unmanaged arrays.
         */


        reset(model, index) {
          this.revive(model);
          this._unmanagedIndex = index;
          this.node.name = this.id;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_unmanagedIndex", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=85628a8e3d4e97f3a9a50f91d0777ce7b8aea98a.js.map
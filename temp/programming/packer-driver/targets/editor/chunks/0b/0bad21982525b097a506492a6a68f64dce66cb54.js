System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, math, CCInteger, Color, Utils, ComponentExtensionMethods, CubismMeshPrimitive, _dec, _dec2, _class, _class2, _descriptor, ccclass, property, CubismDrawable;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      math = _cc.math;
      CCInteger = _cc.CCInteger;
      Color = _cc.Color;
    }, function (_unresolved_) {
      Utils = _unresolved_.Utils;
    }, function (_unresolved_2) {
      ComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismMeshPrimitive = _unresolved_3.default;
    }],
    execute: function () {
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
        constructor(...args) {
          super(...args);
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
          const root = new Node('Drawables'); // Create parts.

          const drawables = model.drawables;
          const buffer = new Array(drawables.count);

          for (let i = 0; i < buffer.length; ++i) {
            const proxy = new Node();
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

          const model = ComponentExtensionMethods.findCubismModel(this, true);

          if (model == null) {
            console.error('CubismDrawable.masks: ComponentExtensionMethods.findCubismModel() failed.');
            return new Array(0);
          }

          const drawables = model.drawables;

          if (drawables == null) {
            console.error('CubismDrawable.masks: model.drawables is null.');
            return new Array(0);
          }

          const count = this.unmanagedDrawables.maskCounts[this.unmanagedIndex];
          const indices = this.unmanagedDrawables.masks[this.unmanagedIndex]; // Pull data.

          const buffer = new Array(count);

          for (let i = 0; i < buffer.length; i++) {
            for (let j = 0; j < drawables.length; j++) {
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
          const drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.vertexPositions: this.unmanagedDrawables is null.');
            return new Array(0);
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.vertexUvs: this.index uninitialize.');
            return new Array(0);
          }

          const count = drawables.vertexCounts[this.unmanagedIndex];
          const positions = drawables.vertexPositions[this.unmanagedIndex]; // Pull data.

          const buffer = new Array(count);

          for (let i = 0; i < buffer.length; i++) {
            buffer[i] = new math.Vec3(positions[i * 2 + 0], positions[i * 2 + 1]);
          }

          return buffer;
        }
        /** Copy of vertex texture coordinates. */


        get vertexUvs() {
          const drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.vertexUvs: this.unmanagedDrawables is null.');
            return new Array(0);
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.vertexUvs: this.index uninitialize.');
            return new Array(0);
          }

          const count = drawables.vertexCounts[this.unmanagedIndex];
          const uvs = drawables.vertexUvs[this.unmanagedIndex]; // Pull data.

          var buffer = new Array(count);

          for (let i = 0; i < buffer.length; i++) {
            buffer[i] = new math.Vec2(uvs[i * 2 + 0], uvs[i * 2 + 1]);
          }

          return buffer;
        }
        /** Copy of triangle indices. */


        get indices() {
          const drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.indices: this.unmanagedDrawables is null.');
            return new Uint16Array(0);
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.indices: this.index uninitialize.');
            return new Uint16Array(0);
          }

          const count = drawables.indexCounts[this.unmanagedIndex];
          const indices = drawables.indices[this.unmanagedIndex]; // Pull data.

          let buffer = new Uint16Array(count);

          for (let i = 0; i < buffer.length; i++) {
            buffer[i] = indices[i];
          }

          return buffer;
        }

        generateMeshPrimitive() {
          const drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.generateMeshPrimitive(): this.drawables is null.');
            return null;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.generateMeshPrimitive(): this.index uninitialize.');
            return null;
          } // Get addresses.


          const vertexCount = drawables.vertexCounts[this.unmanagedIndex];
          const positions = drawables.vertexPositions[this.unmanagedIndex];
          const uvs = drawables.vertexUvs[this.unmanagedIndex];
          const indices = drawables.indices[this.unmanagedIndex]; // Pull data.

          const positionsBuffer = new Array(vertexCount * 3);
          const uvsBuffer = new Array(vertexCount * 2);
          const colorsBuffer = new Array(vertexCount * 4);

          for (let i = 0, j = 0; i < positionsBuffer.length;) {
            positionsBuffer[i++] = positions[j++];
            positionsBuffer[i++] = positions[j++];
            positionsBuffer[i++] = 0;
          }

          for (let i = 0, j = 0; i < uvsBuffer.length; i++) {
            uvsBuffer[i] = uvs[i];
          }

          for (let i = 0; i < colorsBuffer.length; i++) {
            colorsBuffer[i] = 0;
          }

          const primitive = CubismMeshPrimitive.from(positionsBuffer, uvsBuffer, colorsBuffer);
          primitive == null ? void 0 : primitive.setIndices(indices);
          return primitive;
        }
        /** True if double-sided. */


        get isDoubleSided() {
          const drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.isDoubleSided: this.unmanagedDrawables is null.');
            return false;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.isDoubleSided: this.index uninitialize.');
            return false;
          }

          const flags = drawables.constantFlags[this.unmanagedIndex]; // Pull data.

          return Utils.hasIsDoubleSidedBit(flags);
        }
        /** True if masking is requested. */


        get isMasked() {
          const drawables = this.unmanagedDrawables;

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
          const drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.isMasked: this.unmanagedDrawables is null.');
            return false;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.isMasked: this.index uninitialize.');
            return false;
          }

          const flags = drawables.constantFlags[this.unmanagedIndex]; // Pull data.

          return Utils.hasIsInvertedMaskBit(flags);
        }
        /** True if additive blending is requested. */


        get blendAdditive() {
          const drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.isMasked: this.unmanagedDrawables is null.');
            return false;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.isMasked: this.index uninitialize.');
            return false;
          }

          const flags = drawables.constantFlags[this.unmanagedIndex]; // Pull data.

          return Utils.hasBlendAdditiveBit(flags);
        }
        /** True if multiply blending is setd. */


        get multiplyBlend() {
          const drawables = this.unmanagedDrawables;

          if (drawables == null) {
            console.error('CubismDrawable.isMasked: this.unmanagedDrawables is null.');
            return false;
          }

          if (this.unmanagedIndex == -1) {
            console.error('CubismDrawable.isMasked: this.index uninitialize.');
            return false;
          }

          const flags = drawables.constantFlags[this.unmanagedIndex]; // Pull data.

          return Utils.hasBlendMultiplicativeBit(flags);
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

          const index = this.unmanagedIndex * 4;
          const x = this.unmanagedDrawables.multiplyColors[index + 0] * 255;
          const y = this.unmanagedDrawables.multiplyColors[index + 1] * 255;
          const z = this.unmanagedDrawables.multiplyColors[index + 2] * 255;
          const w = this.unmanagedDrawables.multiplyColors[index + 3] * 255; // Cubism Core API リファレンス <https://cubism.live2d.com/sdk-doc/reference/NativeCoreAPIReference_jp_r9.pdf> より Wの値は現在未使用

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

          const index = this.unmanagedIndex * 4;
          const x = this.unmanagedDrawables.screenColors[index + 0] * 255;
          const y = this.unmanagedDrawables.screenColors[index + 1] * 255;
          const z = this.unmanagedDrawables.screenColors[index + 2] * 255;
          const w = this.unmanagedDrawables.screenColors[index + 3] * 255; // Cubism Core API リファレンス <https://cubism.live2d.com/sdk-doc/reference/NativeCoreAPIReference_jp_r9.pdf> より Wの値は現在未使用

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
        initializer: function () {
          return -1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=0bad21982525b097a506492a6a68f64dce66cb54.js.map
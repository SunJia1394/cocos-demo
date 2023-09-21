System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, Utils, CubismDynamicDrawableData, _crd;

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "../CubismCore", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb955Y6MWJObaUVzN15ZcI9", "CubismDynamicDrawableData", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['math']);

      /**
       * Dynamic {@link CubismDrawable} data.
       *
       * **Sealed class.**
       */
      _export("default", CubismDynamicDrawableData = class CubismDynamicDrawableData {
        constructor(vertexPositions) {
          // #endregion
          this._flags = 0;
          this._opacity = 0;
          this._drawOrder = 0;
          this._renderOrder = 0;
          this._vertexPositions = new Array(0);
          this._multiplyColor = math.Color.WHITE;
          this._screenColor = math.Color.BLACK;
          this.vertexPositions = vertexPositions;
        } // #region Factory Methods

        /**
         * Creates buffer for dynamic {@link CubismDrawable} data.
         * @param unmanagedModel Unmanaged model to create buffer for.
         * @returns Buffer.
         */


        static createData(unmanagedModel) {
          const unmanagedDrawables = unmanagedModel.drawables;
          const buffer = new Array(unmanagedDrawables.count); // Initialize buffers.

          const vertexCounts = unmanagedDrawables.vertexCounts;

          for (let i = 0; i < buffer.length; i++) {
            const arr = new Array(vertexCounts[i]);

            for (let j = 0; j < arr.length; j++) {
              arr[j] = math.Vec3.ZERO.clone();
            }

            buffer[i] = new CubismDynamicDrawableData(arr);
          }

          return buffer;
        }

        /** Dirty flags. */
        get flags() {
          return this._flags;
        }

        set flags(value) {
          this._flags = value;
        }

        /** Current opacity. */
        get opacity() {
          return this._opacity;
        }

        set opacity(value) {
          this._opacity = value;
        }

        /** Current draw order. */
        get drawOrder() {
          return this._drawOrder;
        }

        set drawOrder(value) {
          this._drawOrder = value;
        }

        /** Current render order. */
        get renderOrder() {
          return this._renderOrder;
        }

        set renderOrder(value) {
          this._renderOrder = value;
        }

        /** Current vertex position. */
        get vertexPositions() {
          return this._vertexPositions;
        }

        set vertexPositions(value) {
          this._vertexPositions = value;
        }

        /** Current multiply color. */
        get multiplyColor() {
          return this._multiplyColor;
        }

        set multiplyColor(value) {
          this._multiplyColor = value;
        }

        /** Current screen color. */
        get screenColor() {
          return this._screenColor;
        }

        set screenColor(value) {
          this._screenColor = value;
        }
        /** True if currently visible. */


        get isVisible() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasIsVisibleBit(this.flags);
        }
        /** True if {@link isVisible} did change. */


        get isVisibilityDirty() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasVisibilityDidChangeBit(this.flags);
        }
        /** True if {@link opacity} did change. */


        get isOpacityDirty() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasOpacityDidChangeBit(this.flags);
        }
        /** True if {@link drawOrder} did change. */


        get isDrawOrderDirty() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasDrawOrderDidChangeBit(this.flags);
        }
        /** True if {@link renderOrder} did change. */


        get isRenderOrderDirty() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasRenderOrderDidChangeBit(this.flags);
        }
        /** True if {@link vertexPositions} did change. */


        get areVertexPositionsDirty() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasVertexPositionsDidChangeBit(this.flags);
        }
        /** True if {@link multiplyColor} and {@link screenColor} did change. */


        get isBlendColorDirty() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).hasBlendColorDidChangeBit(this.flags);
        }
        /** True if any data did change. */


        get isAnyDirty() {
          return this.flags != 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53171e8dfa7f9225309aaf8d3bf85188432edef0.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, CubismMaskProperties, CubismMaskRendererExtensionMethods, CubismMaskTile, CubismMaskTransform, CubismMaskMaskedJunction, _crd;

  function _reportPossibleCrUseOfCubismMaskProperties(extras) {
    _reporterNs.report("CubismMaskProperties", "./CubismMaskProperties", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskRendererExtensionMethods(extras) {
    _reporterNs.report("CubismMaskRendererExtensionMethods", "./CubismMaskRendererExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskTile(extras) {
    _reporterNs.report("CubismMaskTile", "./CubismMaskTile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskTransform(extras) {
    _reporterNs.report("CubismMaskTransform", "./CubismMaskTransform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskTexture(extras) {
    _reporterNs.report("CubismMaskTexture", "./CubismMaskTexture", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRenderer(extras) {
    _reporterNs.report("CubismRenderer", "../CubismRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskRenderer(extras) {
    _reporterNs.report("CubismMaskRenderer", "./CubismMaskRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskCommandBuffer(extras) {
    _reporterNs.report("CubismMaskCommandBuffer", "./CubismMaskCommandBuffer", _context.meta, extras);
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
      CubismMaskProperties = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismMaskRendererExtensionMethods = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismMaskTile = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismMaskTransform = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dcd2b5v9S9FHp+S7mz9Lec0", "CubismMaskMaskedJunction", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['math']);

      _export("default", CubismMaskMaskedJunction = class CubismMaskMaskedJunction {
        /** Shared buffer for CubismMaskPropertiess. */
        static get sharedMaskProperties() {
          return this._sharedMaskProperties;
        }

        static set sharedMaskProperties(value) {
          this._sharedMaskProperties = value;
        }

        /** Masks. */
        get masks() {
          return this._masks;
        }

        set masks(value) {
          this._masks = value;
        }

        /** Masked drawables. */
        get maskeds() {
          return this._maskeds;
        }

        set maskeds(value) {
          this._maskeds = value;
        }

        /** Mask texture to be referenced by Maskeds. */
        get maskTexture() {
          return this._maskTexture;
        }

        set maskTexture(value) {
          this._maskTexture = value;
        }

        /** Mask tile to write to and read from. */
        get maskTile() {
          return this._maskTile;
        }

        set maskTile(value) {
          this._maskTile = value;
        }

        /** Mask transform */
        get maskTransform() {
          return this._maskTransform;
        }

        set maskTransform(value) {
          this._maskTransform = value;
        } //#region Ctors

        /** Makes sure statics are initialized. */


        constructor() {
          this._masks = new Array(0);
          this._maskeds = new Array(0);
          this._maskTexture = null;
          this._maskTile = new (_crd && CubismMaskTile === void 0 ? (_reportPossibleCrUseOfCubismMaskTile({
            error: Error()
          }), CubismMaskTile) : CubismMaskTile)();
          this._maskTransform = null;

          if (CubismMaskMaskedJunction.sharedMaskProperties != null) {
            return;
          }

          CubismMaskMaskedJunction.sharedMaskProperties = new (_crd && CubismMaskProperties === void 0 ? (_reportPossibleCrUseOfCubismMaskProperties({
            error: Error()
          }), CubismMaskProperties) : CubismMaskProperties)();
        } //#endregion
        //#region Interface For CubismMaskController

        /**
         * Sets the masks.
         * @param value Value to set.
         * @returns Instance.
         */


        setMasks(value) {
          this.masks = value;
          return this;
        }
        /**
         * Sets the masked drawables.
         * @param value Value to set.
         * @returns Instance.
         */


        setMaskeds(value) {
          this.maskeds = value;
          return this;
        }
        /**
         * Sets the mask texture to read from.
         * @param value Value to set.
         * @returns Instance.
         */


        setMaskTexture(value) {
          this.maskTexture = value;
          return this;
        }
        /**
         * Sets the mask tile to write to and read from.
         * @param value Value to set.
         * @returns Instance.
         */


        setMaskTile(value) {
          this.maskTile = value;
          return this;
        }
        /**
         * Appends junction draw commands to a buffer.
         * @param buffer Buffer to append commands to.
         */


        addToCommandBuffer(buffer) {
          // console.info('CubismMaskMaskedJunction.addToCommandBuffer()');
          // Make sure mask transform is initialized.
          this.recalculateMaskTransform(); // Initialize and enqueue masks.

          var maskTile = this.maskTile;
          var maskTransform = this.maskTransform;

          if (maskTile == null) {
            console.error('CubismMaskMaskedJunction.addToCommandBuffer(): maskTile is null.');
            return;
          }

          if (maskTransform == null) {
            console.error('CubismMaskMaskedJunction.addToCommandBuffer(): maskTransform is null.');
            return;
          }

          for (var i = 0; i < this.masks.length; i++) {
            this.masks[i].setMaskTile(maskTile).setMaskTransform(maskTransform).addToCommandBuffer(buffer);
          }
        }
        /** Updates the junction and all related data. */


        update() {
          // Update mask transform.
          this.recalculateMaskTransform(); // Apply transform to masks.

          console.assert(this.maskTransform);

          if (this.maskTransform == null) {
            return;
          }

          for (var _i = 0; _i < this.masks.length; _i++) {
            this.masks[_i].setMaskTransform(this.maskTransform);
          } // Apply transform and other properties to maskeds.


          var maskProperties = CubismMaskMaskedJunction.sharedMaskProperties;
          maskProperties.texture = this.maskTexture;
          maskProperties.tile = this.maskTile;
          maskProperties.transform = this.maskTransform;

          for (var i = 0; i < this.maskeds.length; i++) {
            this.maskeds[i].onMaskPropertiesDidChange(maskProperties);
          }
        } // #endregion

        /** Updates MaskTransform and Maskeds. */


        recalculateMaskTransform() {
          // Compute bounds and scale.
          var bounds = (_crd && CubismMaskRendererExtensionMethods === void 0 ? (_reportPossibleCrUseOfCubismMaskRendererExtensionMethods({
            error: Error()
          }), CubismMaskRendererExtensionMethods) : CubismMaskRendererExtensionMethods).getBounds(this.masks);
          var extents = bounds.extents();
          var scale = extents.x > extents.y ? extents.x * 2 : extents.y * 2; // Compute mask transform.

          var center = bounds.center();
          this.maskTransform = new (_crd && CubismMaskTransform === void 0 ? (_reportPossibleCrUseOfCubismMaskTransform({
            error: Error()
          }), CubismMaskTransform) : CubismMaskTransform)({
            offset: new math.Vec2(center.x, center.y),
            scale: 1 / scale
          });
        }

      });

      CubismMaskMaskedJunction._sharedMaskProperties = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f008a39418303fe4baea951626924e45d97e9967.js.map
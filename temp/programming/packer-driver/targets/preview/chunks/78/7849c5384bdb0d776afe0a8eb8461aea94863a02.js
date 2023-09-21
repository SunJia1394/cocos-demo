System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CubismBuiltinMaterials, _crd, CubismBuiltinPickers;

  function _reportPossibleCrUseOfCubismBuiltinMaterials(extras) {
    _reporterNs.report("CubismBuiltinMaterials", "../../Rendering/CubismBuiltinMaterials", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismModel3Json(extras) {
    _reporterNs.report("CubismModel3Json", "./CubismModel3Json", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDrawable(extras) {
    _reporterNs.report("CubismDrawable", "../../Core/CubismDrawable", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      CubismBuiltinMaterials = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcec6hx/PlMg6ZOP1KpSo9L", "CubismBuiltinPickers", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Material', 'Texture2D']);

      (function (_CubismBuiltinPickers) {
        function materialPicker(_sender, drawable) {
          if (drawable.isDoubleSided) {
            if (drawable.blendAdditive) {
              return drawable.isMasked ? drawable.isInverted ? (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
                error: Error()
              }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitAdditiveMaskedInverted() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
                error: Error()
              }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitAdditiveMasked() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
                error: Error()
              }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitAdditive();
            }

            if (drawable.multiplyBlend) {
              return drawable.isMasked ? drawable.isInverted ? (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
                error: Error()
              }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMultiplyMaskedInverted() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
                error: Error()
              }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMultiplyMasked() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
                error: Error()
              }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMultiply();
            }

            return drawable.isMasked ? drawable.isInverted ? (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
              error: Error()
            }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMaskedInverted() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
              error: Error()
            }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMasked() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
              error: Error()
            }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlit();
          }

          if (drawable.blendAdditive) {
            return drawable.isMasked ? drawable.isInverted ? (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
              error: Error()
            }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitAdditiveMaskedInvertedCulling() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
              error: Error()
            }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitAdditiveMaskedCulling() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
              error: Error()
            }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitAdditiveCulling();
          }

          if (drawable.multiplyBlend) {
            return drawable.isMasked ? drawable.isInverted ? (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
              error: Error()
            }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMultiplyMaskedInvertedCulling() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
              error: Error()
            }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMultiplyMaskedCulling() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
              error: Error()
            }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMultiplyCulling();
          }

          return drawable.isMasked ? drawable.isInverted ? (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
            error: Error()
          }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMaskedInvertedCulling() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
            error: Error()
          }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitMaskedCulling() : (_crd && CubismBuiltinMaterials === void 0 ? (_reportPossibleCrUseOfCubismBuiltinMaterials({
            error: Error()
          }), CubismBuiltinMaterials) : CubismBuiltinMaterials).getUnlitCulling();
        }

        _CubismBuiltinPickers.materialPicker = materialPicker;

        function texturePicker(sender, drawable) {
          return sender.getTexture(drawable.textureIndex);
        }

        _CubismBuiltinPickers.texturePicker = texturePicker;
      })(CubismBuiltinPickers || (CubismBuiltinPickers = {}));

      _export("default", CubismBuiltinPickers);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7849c5384bdb0d776afe0a8eb8461aea94863a02.js.map
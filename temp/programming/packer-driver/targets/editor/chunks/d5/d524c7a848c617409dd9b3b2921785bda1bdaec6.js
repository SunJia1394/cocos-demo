System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CubismBuiltinMaterials, CubismBuiltinPickers;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_) {
      CubismBuiltinMaterials = _unresolved_.default;
    }],
    execute: function () {
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
              return drawable.isMasked ? drawable.isInverted ? CubismBuiltinMaterials.getUnlitAdditiveMaskedInverted() : CubismBuiltinMaterials.getUnlitAdditiveMasked() : CubismBuiltinMaterials.getUnlitAdditive();
            }

            if (drawable.multiplyBlend) {
              return drawable.isMasked ? drawable.isInverted ? CubismBuiltinMaterials.getUnlitMultiplyMaskedInverted() : CubismBuiltinMaterials.getUnlitMultiplyMasked() : CubismBuiltinMaterials.getUnlitMultiply();
            }

            return drawable.isMasked ? drawable.isInverted ? CubismBuiltinMaterials.getUnlitMaskedInverted() : CubismBuiltinMaterials.getUnlitMasked() : CubismBuiltinMaterials.getUnlit();
          }

          if (drawable.blendAdditive) {
            return drawable.isMasked ? drawable.isInverted ? CubismBuiltinMaterials.getUnlitAdditiveMaskedInvertedCulling() : CubismBuiltinMaterials.getUnlitAdditiveMaskedCulling() : CubismBuiltinMaterials.getUnlitAdditiveCulling();
          }

          if (drawable.multiplyBlend) {
            return drawable.isMasked ? drawable.isInverted ? CubismBuiltinMaterials.getUnlitMultiplyMaskedInvertedCulling() : CubismBuiltinMaterials.getUnlitMultiplyMaskedCulling() : CubismBuiltinMaterials.getUnlitMultiplyCulling();
          }

          return drawable.isMasked ? drawable.isInverted ? CubismBuiltinMaterials.getUnlitMaskedInvertedCulling() : CubismBuiltinMaterials.getUnlitMaskedCulling() : CubismBuiltinMaterials.getUnlitCulling();
        }

        _CubismBuiltinPickers.materialPicker = materialPicker;

        function texturePicker(sender, drawable) {
          return sender.getTexture(drawable.textureIndex);
        }

        _CubismBuiltinPickers.texturePicker = texturePicker;
      })(CubismBuiltinPickers || (CubismBuiltinPickers = {}));

      _export("default", CubismBuiltinPickers);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=d524c7a848c617409dd9b3b2921785bda1bdaec6.js.map
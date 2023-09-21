System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CubismParameterBlendMode, CubismParameterExtensionMethods;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_) {
      CubismParameterBlendMode = _unresolved_.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "db4a4tiC5FIJLDn21PRmFBl", "CubismParameterExtensionMethods", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */
      __checkObsolete__(['_decorator']);

      (function (_CubismParameterExtensionMethods) {
        function addToValue(parameter, value, weight) {
          if (weight === void 0) {
            weight = 1.0;
          }

          if (parameter == null) {
            return;
          }

          parameter.value += value * weight;
        }

        _CubismParameterExtensionMethods.addToValue = addToValue;

        function multiplyValueBy(parameter, value, weight) {
          if (weight === void 0) {
            weight = 1.0;
          }

          if (parameter == null) {
            return;
          }

          parameter.value *= 1.0 + (value - 1.0) * weight;
        }

        _CubismParameterExtensionMethods.multiplyValueBy = multiplyValueBy;

        function blendToValue(self, mode, value) {
          if (self == null) {
            return;
          }

          if (mode == CubismParameterBlendMode.Additive) {
            CubismParameterExtensionMethods.addToValue(self, value);
            return;
          }

          if (mode == CubismParameterBlendMode.Multiply) {
            CubismParameterExtensionMethods.multiplyValueBy(self, value);
            return;
          }

          self.value = value;
        }

        _CubismParameterExtensionMethods.blendToValue = blendToValue;

        function blendToValueArray(self, mode, value) {
          if (self == null) {
            return;
          }

          if (mode == CubismParameterBlendMode.Additive) {
            for (var i = 0; i < self.length; ++i) {
              if (self[i] != null) {
                CubismParameterExtensionMethods.addToValue(self[i], value);
              }
            }

            return;
          }

          if (mode == CubismParameterBlendMode.Multiply) {
            for (var _i = 0; _i < self.length; ++_i) {
              if (self[_i] != null) {
                CubismParameterExtensionMethods.multiplyValueBy(self[_i], value);
              }
            }

            return;
          }

          for (var _i2 = 0; _i2 < self.length; ++_i2) {
            var buff = self[_i2];

            if (buff != null) {
              buff.value = value;
            }
          }
        }

        _CubismParameterExtensionMethods.blendToValueArray = blendToValueArray;
      })(CubismParameterExtensionMethods || (CubismParameterExtensionMethods = {}));

      _export("default", CubismParameterExtensionMethods);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=a58545ecea8f539e6120273d3a8d208f55d0839d.js.map
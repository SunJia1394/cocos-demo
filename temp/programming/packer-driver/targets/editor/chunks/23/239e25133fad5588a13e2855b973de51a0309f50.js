System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CubismParameterBlendMode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11b40C5M4NEEYdtsMIYylpk", "CubismParameterBlendMode", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */
      CubismParameterBlendMode = /*#__PURE__*/function (CubismParameterBlendMode) {
        CubismParameterBlendMode[CubismParameterBlendMode["Override"] = 0] = "Override";
        CubismParameterBlendMode[CubismParameterBlendMode["Additive"] = 1] = "Additive";
        CubismParameterBlendMode[CubismParameterBlendMode["Multiply"] = 2] = "Multiply";
        return CubismParameterBlendMode;
      }(CubismParameterBlendMode || {});

      _export("default", CubismParameterBlendMode);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=239e25133fad5588a13e2855b973de51a0309f50.js.map
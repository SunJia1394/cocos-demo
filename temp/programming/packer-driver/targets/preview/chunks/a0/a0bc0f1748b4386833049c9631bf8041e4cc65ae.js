System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CubismLookAxis;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fbe33SWBttK2oowNZUGpzSX", "CubismLookAxis", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */

      /** Look axis. */
      CubismLookAxis = /*#__PURE__*/function (CubismLookAxis) {
        CubismLookAxis[CubismLookAxis["X"] = 0] = "X";
        CubismLookAxis[CubismLookAxis["Y"] = 1] = "Y";
        CubismLookAxis[CubismLookAxis["Z"] = 2] = "Z";
        return CubismLookAxis;
      }(CubismLookAxis || {});

      _export("default", CubismLookAxis);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0bc0f1748b4386833049c9631bf8041e4cc65ae.js.map
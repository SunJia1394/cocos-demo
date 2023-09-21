System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CubismRaycastablePrecision;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "650c9ea00JO4bOzmcEVKV4x", "CubismRaycastablePrecision", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /** Precision for casting rays against a {@link CubismRaycastable} */
      CubismRaycastablePrecision = /*#__PURE__*/function (CubismRaycastablePrecision) {
        CubismRaycastablePrecision[CubismRaycastablePrecision["boundingBox"] = 0] = "boundingBox";
        CubismRaycastablePrecision[CubismRaycastablePrecision["triangles"] = 1] = "triangles";
        return CubismRaycastablePrecision;
      }(CubismRaycastablePrecision || {});

      _export("default", CubismRaycastablePrecision);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=d67fb4ba43a1e3e3de8b5268f8912d337d16b99c.js.map
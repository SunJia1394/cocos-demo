System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CubismHarmonicMotionDirection;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9c6aKYNPpK/YLMRJDvNKqZ", "CubismHarmonicMotionDirection", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */

      /** Determines the direction of a harmonic motion from its origin. */
      CubismHarmonicMotionDirection = /*#__PURE__*/function (CubismHarmonicMotionDirection) {
        CubismHarmonicMotionDirection[CubismHarmonicMotionDirection["Left"] = 0] = "Left";
        CubismHarmonicMotionDirection[CubismHarmonicMotionDirection["Right"] = 1] = "Right";
        CubismHarmonicMotionDirection[CubismHarmonicMotionDirection["Centric"] = 2] = "Centric";
        return CubismHarmonicMotionDirection;
      }(CubismHarmonicMotionDirection || {});

      _export("default", CubismHarmonicMotionDirection);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=888dbc98b803dc99412cc3bca4b660ae4f94753f.js.map
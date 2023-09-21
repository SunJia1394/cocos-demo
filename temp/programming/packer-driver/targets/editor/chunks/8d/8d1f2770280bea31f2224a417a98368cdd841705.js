System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, CubismPhysics;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "d69e0fVkS9FTYVF3M0XT4LV", "CubismPhysics", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /** Global variables of physics. */
      __checkObsolete__(['math']);

      (function (_CubismPhysics) {
        const gravity = _CubismPhysics.gravity = new math.Vec2(0, -1);
        const wind = _CubismPhysics.wind = math.Vec2.ZERO;
        const airResistance = _CubismPhysics.airResistance = 5.0;
        const maximumWeight = _CubismPhysics.maximumWeight = 100.0;
        const useFixedDeltaTime = _CubismPhysics.useFixedDeltaTime = false;
        const useAngleCorrection = _CubismPhysics.useAngleCorrection = true;
        const movementThreshold = _CubismPhysics.movementThreshold = 0.001;
        const maxDeltaTime = _CubismPhysics.maxDeltaTime = 5.0;
      })(CubismPhysics || (CubismPhysics = {}));

      _export("default", CubismPhysics);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=8d1f2770280bea31f2224a417a98368cdd841705.js.map
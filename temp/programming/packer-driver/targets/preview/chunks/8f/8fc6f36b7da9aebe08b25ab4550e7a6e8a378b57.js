System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CubismFadeMath;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "49450AHKPdKt5M542I0EPpt", "CubismFadeMath", undefined);

      (function (_CubismFadeMath) {
        function getEasingSine(value) {
          if (value < 0.0) return 0.0;
          if (value > 1.0) return 1.0;
          return 0.5 - 0.5 * Math.cos(value * Math.PI);
        }

        _CubismFadeMath.getEasingSine = getEasingSine;
      })(CubismFadeMath || (CubismFadeMath = {}));

      _export("default", CubismFadeMath);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=8fc6f36b7da9aebe08b25ab4550e7a6e8a378b57.js.map
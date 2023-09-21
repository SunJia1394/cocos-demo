System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CubismFadeMath;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

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

      _crd = false;
    }
  };
});
//# sourceMappingURL=23f3f80f3501364d79b767e5c3249e5f33711b14.js.map
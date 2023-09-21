System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ICubismUpdatable;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2ad442Upp1MAaalC27TkkvS", "ICubismUpdatable", undefined);

      (function (_ICubismUpdatable) {
        const SYMBOL = _ICubismUpdatable.SYMBOL = Symbol('ICubismUpdatable');

        function isImplements(obj) {
          if (obj == null || typeof obj != 'object') {
            return false;
          }

          return Reflect.has(obj, ICubismUpdatable.SYMBOL) ? Reflect.get(obj, ICubismUpdatable.SYMBOL) === SYMBOL : false;
        }

        _ICubismUpdatable.isImplements = isImplements;
      })(ICubismUpdatable || (ICubismUpdatable = {}));
      /** from interface */


      _export("default", ICubismUpdatable);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=d2fc3ecc4c8a9c71a71ba0fea3875efdd7db0d10.js.map
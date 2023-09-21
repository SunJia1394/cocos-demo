System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ICubismUpdatable;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

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

      _crd = false;
    }
  };
});
//# sourceMappingURL=e95c91f7e712c07d7b82b9be024d359a8a383f2f.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ICubismLookTarget;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "01a715rqUxKb4wfYmHTuhAN", "ICubismLookTarget", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */
      __checkObsolete__(['math']);

      (function (_ICubismLookTarget) {
        const SYMBOL = _ICubismLookTarget.SYMBOL = Symbol('ICubismLookTarget');

        function isImplements(obj) {
          if (obj == null || typeof obj != 'object') {
            return false;
          }

          return Reflect.has(obj, ICubismLookTarget.SYMBOL) ? Reflect.get(obj, ICubismLookTarget.SYMBOL) === SYMBOL : false;
        }

        _ICubismLookTarget.isImplements = isImplements;
      })(ICubismLookTarget || (ICubismLookTarget = {}));
      /** Target to look at. */


      _export("default", ICubismLookTarget);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=76d14e0851fbf7ea714f78be6073b8d920c92be5.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ICubismDrawOrderHandler;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "64982bIE7lDxYcQ0m3iwEpc", "ICubismDrawOrderHandler", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      (function (_ICubismDrawOrderHandler) {
        var SYMBOL = _ICubismDrawOrderHandler.SYMBOL = Symbol('ICubismDrawOrderHandler');

        function isImplements(obj) {
          if (obj == null || typeof obj != 'object') {
            return false;
          }

          return Reflect.has(obj, ICubismDrawOrderHandler.SYMBOL) ? Reflect.get(obj, ICubismDrawOrderHandler.SYMBOL) === SYMBOL : false;
        }

        _ICubismDrawOrderHandler.isImplements = isImplements;
      })(ICubismDrawOrderHandler || (ICubismDrawOrderHandler = {}));
      /** Allows listening to CubismDrawable draw order changes. */


      _export("default", ICubismDrawOrderHandler);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=7b17a696a318963485c931770c50f90cc95be232.js.map
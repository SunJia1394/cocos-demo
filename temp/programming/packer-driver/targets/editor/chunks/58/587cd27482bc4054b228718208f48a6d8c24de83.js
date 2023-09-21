System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ICubismOpacityHandler;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "a2265Q9sdRDZaIQ/FaOu7eR", "ICubismOpacityHandler", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      (function (_ICubismOpacityHandler) {
        const SYMBOL = _ICubismOpacityHandler.SYMBOL = Symbol('ICubismOpacityHandler');

        function isImplements(obj) {
          if (obj == null || typeof obj != 'object') {
            return false;
          }

          return Reflect.has(obj, ICubismOpacityHandler.SYMBOL) ? Reflect.get(obj, ICubismOpacityHandler.SYMBOL) === SYMBOL : false;
        }

        _ICubismOpacityHandler.isImplements = isImplements;
      })(ICubismOpacityHandler || (ICubismOpacityHandler = {}));
      /** Allows listening to <see cref="CubismDrawable"/> draw order changes. */


      _export("default", ICubismOpacityHandler);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=587cd27482bc4054b228718208f48a6d8c24de83.js.map
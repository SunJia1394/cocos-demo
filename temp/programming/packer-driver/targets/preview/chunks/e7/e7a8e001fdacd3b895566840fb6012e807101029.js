System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ICubismOpacityHandler;

  function _reportPossibleCrUseOfCubismRenderController(extras) {
    _reporterNs.report("CubismRenderController", "./CubismRenderController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2265Q9sdRDZaIQ/FaOu7eR", "ICubismOpacityHandler", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      (function (_ICubismOpacityHandler) {
        var SYMBOL = _ICubismOpacityHandler.SYMBOL = Symbol('ICubismOpacityHandler');

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

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7a8e001fdacd3b895566840fb6012e807101029.js.map
System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ICubismDrawOrderHandler;

  function _reportPossibleCrUseOfCubismDrawable(extras) {
    _reporterNs.report("CubismDrawable", "../Core/CubismDrawable", _context.meta, extras);
  }

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

      _crd = false;
    }
  };
});
//# sourceMappingURL=803f7753dea59571cb3f1d2498a5ae02dba7883d.js.map
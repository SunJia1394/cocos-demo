System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, ICubismBlendColorHandler;

  function _reportPossibleCrUseOfCubismRenderController(extras) {
    _reporterNs.report("CubismRenderController", "./CubismRenderController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50a13ihya9Ph4ykUE3PXjrk", "ICubismBlendColorHandler", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */
      __checkObsolete__(['Color']);

      (function (_ICubismBlendColorHandler) {
        var SYMBOL = _ICubismBlendColorHandler.SYMBOL = Symbol('ICubismBlendColorHandler');

        function isImplements(obj) {
          if (obj == null || typeof obj != 'object') {
            return false;
          }

          return Reflect.has(obj, ICubismBlendColorHandler.SYMBOL) ? Reflect.get(obj, ICubismBlendColorHandler.SYMBOL) === SYMBOL : false;
        }

        _ICubismBlendColorHandler.isImplements = isImplements;
      })(ICubismBlendColorHandler || (ICubismBlendColorHandler = {}));
      /** Allows listening to CubismDrawable draw order changes. */


      _export("default", ICubismBlendColorHandler);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=34fc1eca3ffa33934aa9bc9bc96673c7799e3d91.js.map
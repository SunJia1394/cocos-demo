System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CubismSortingMode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caec4DH1wlENo0aAN72hq+v", "CubismSortingMode", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */

      /** Core.CubismDrawable render sort modes. */
      CubismSortingMode = /*#__PURE__*/function (CubismSortingMode) {
        CubismSortingMode[CubismSortingMode["backToFrontZ"] = 0] = "backToFrontZ";
        CubismSortingMode[CubismSortingMode["frontToBackZ"] = 1] = "frontToBackZ";
        CubismSortingMode[CubismSortingMode["backToFrontOrder"] = 2] = "backToFrontOrder";
        CubismSortingMode[CubismSortingMode["frontToBackOrder"] = 3] = "frontToBackOrder";
        return CubismSortingMode;
      }(CubismSortingMode || {});

      (function (_CubismSortingMode) {
        function sortByDepth(self) {
          return self == CubismSortingMode.backToFrontZ || self == CubismSortingMode.frontToBackZ;
        }

        _CubismSortingMode.sortByDepth = sortByDepth;

        function sortByOrder(self) {
          return !sortByDepth(self);
        }

        _CubismSortingMode.sortByOrder = sortByOrder;
      })(CubismSortingMode || (CubismSortingMode = {}));

      _export("default", CubismSortingMode);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2104d8426ef3293dc89dd7d0f0003d9d3ad8d3a.js.map
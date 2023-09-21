System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CubismSortingMode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
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
    }
  };
});
//# sourceMappingURL=aa0e5d9d6e30b6a8fedf45ef64dde76aa85bee26.js.map
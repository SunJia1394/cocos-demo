System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CubismUpdateExecutionOrder;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "8c6752MT2JFOaInF0MIV2u/", "CubismUpdateExecutionOrder", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */
      __checkObsolete__(['_decorator']);

      (function (_CubismUpdateExecutionOrder) {
        var CUBISM_MOTION_APPLIER = _CubismUpdateExecutionOrder.CUBISM_MOTION_APPLIER = 50;
        var CUBISM_FADE_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_FADE_CONTROLLER = 100;
        var CUBISM_PARAMETER_STORE_SAVE_PARAMETERS = _CubismUpdateExecutionOrder.CUBISM_PARAMETER_STORE_SAVE_PARAMETERS = 150;
        var CUBISM_POSE_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_POSE_CONTROLLER = 200;
        var CUBISM_EXPRESSION_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_EXPRESSION_CONTROLLER = 300;
        var CUBISM_EYE_BLINK_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_EYE_BLINK_CONTROLLER = 400;
        var CUBISM_MOUTH_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_MOUTH_CONTROLLER = 500;
        var CUBISM_HARMONIC_MOTION_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_HARMONIC_MOTION_CONTROLLER = 600;
        var CUBISM_LOOK_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_LOOK_CONTROLLER = 700;
        var CUBISM_PHYSICS_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_PHYSICS_CONTROLLER = 800;
        var CUBISM_RENDER_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_RENDER_CONTROLLER = 10000;
        var CUBISM_MASK_CONTROLLER = _CubismUpdateExecutionOrder.CUBISM_MASK_CONTROLLER = 10100;

        function sortByExecutionOrder(updatables) {
          updatables.sort(CubismUpdateExecutionOrder.compareByExecutionOrder);
        }

        _CubismUpdateExecutionOrder.sortByExecutionOrder = sortByExecutionOrder;

        function compareByExecutionOrder(a, b) {
          return a.executionOrder - b.executionOrder;
        }

        _CubismUpdateExecutionOrder.compareByExecutionOrder = compareByExecutionOrder;
      })(CubismUpdateExecutionOrder || (CubismUpdateExecutionOrder = {}));

      _export("default", CubismUpdateExecutionOrder);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=5b3361baf77d48a46a01be607171d76159be5361.js.map
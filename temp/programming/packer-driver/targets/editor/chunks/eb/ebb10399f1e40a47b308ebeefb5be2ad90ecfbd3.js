System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Bounds, Vector3, _crd, CubismMaskRendererExtensionMethods;

  function _reportPossibleCrUseOfBounds(extras) {
    _reporterNs.report("Bounds", "../../Core/CubismGeometry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "../../Core/CubismVector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskRenderer(extras) {
    _reporterNs.report("CubismMaskRenderer", "./CubismMaskRenderer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Bounds = _unresolved_2.CubismBounds;
    }, function (_unresolved_3) {
      Vector3 = _unresolved_3.CubismVector3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25baeXZSeNCKKW2nmwfqHO7", "CubismMaskRendererExtensionMethods", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      (function (_CubismMaskRendererExtensionMethods) {
        function getBounds(self) {
          let {
            x: minX,
            y: minY,
            z: minZ
          } = self[0].meshBounds.min();
          let {
            x: maxX,
            y: maxY,
            z: maxZ
          } = self[0].meshBounds.max();

          for (let i = 1; i < self.length; i++) {
            {
              const {
                x,
                y
              } = self[i].meshBounds.min();

              if (x < minX) {
                minX = x;
              }

              if (y < minY) {
                minY = y;
              }
            }
            {
              const {
                x,
                y
              } = self[i].meshBounds.max();

              if (x > maxX) {
                maxX = x;
              }

              if (y > maxY) {
                maxY = y;
              }
            }
          }

          const min = new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)(minX, minY, minZ);
          const size = new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)(maxX, maxY, maxZ).subtract(min);
          return (_crd && Bounds === void 0 ? (_reportPossibleCrUseOfBounds({
            error: Error()
          }), Bounds) : Bounds).fromVector(size.multiplySingle(0.5).add(min), size);
        }

        _CubismMaskRendererExtensionMethods.getBounds = getBounds;
      })(CubismMaskRendererExtensionMethods || (CubismMaskRendererExtensionMethods = {}));

      _export("default", CubismMaskRendererExtensionMethods);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ebb10399f1e40a47b308ebeefb5be2ad90ecfbd3.js.map
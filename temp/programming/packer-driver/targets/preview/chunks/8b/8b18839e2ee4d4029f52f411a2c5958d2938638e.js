System.register(["cc", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cclegacy, Bounds, Vector3, CubismMaskRendererExtensionMethods;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_) {
      Bounds = _unresolved_.CubismBounds;
    }, function (_unresolved_2) {
      Vector3 = _unresolved_2.CubismVector3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "25baeXZSeNCKKW2nmwfqHO7", "CubismMaskRendererExtensionMethods", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      (function (_CubismMaskRendererExtensionMethods) {
        function getBounds(self) {
          var {
            x: minX,
            y: minY,
            z: minZ
          } = self[0].meshBounds.min();
          var {
            x: maxX,
            y: maxY,
            z: maxZ
          } = self[0].meshBounds.max();

          for (var i = 1; i < self.length; i++) {
            {
              var {
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
              var {
                x: _x,
                y: _y
              } = self[i].meshBounds.max();

              if (_x > maxX) {
                maxX = _x;
              }

              if (_y > maxY) {
                maxY = _y;
              }
            }
          }

          var min = new Vector3(minX, minY, minZ);
          var size = new Vector3(maxX, maxY, maxZ).subtract(min);
          return Bounds.fromVector(size.multiplySingle(0.5).add(min), size);
        }

        _CubismMaskRendererExtensionMethods.getBounds = getBounds;
      })(CubismMaskRendererExtensionMethods || (CubismMaskRendererExtensionMethods = {}));

      _export("default", CubismMaskRendererExtensionMethods);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=8b18839e2ee4d4029f52f411a2c5958d2938638e.js.map
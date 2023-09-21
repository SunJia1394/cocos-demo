System.register(["cc", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cclegacy, Bounds, Vector3, ArrayExtensionMethods;

  _export("ArrayExtensionMethods", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_) {
      Bounds = _unresolved_.CubismBounds;
    }, function (_unresolved_2) {
      Vector3 = _unresolved_2.CubismVector3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "1c0c4DY8aJF64FQFOpPcOa5", "ArrayExtensionMethods", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      (function (_ArrayExtensionMethods) {
        function getMeshRendererBounds(self) {
          var bounds = self[0].mesh.calculateBounds();
          var {
            x: minX,
            y: minY,
            z: minZ
          } = bounds.min();
          var {
            x: maxX,
            y: maxY,
            z: maxZ
          } = bounds.max();

          for (var i = 1; i < self.length; i++) {
            var boundsI = self[i].mesh.calculateBounds();
            {
              var {
                x,
                y
              } = boundsI.min();

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
              } = boundsI.max();

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

        _ArrayExtensionMethods.getMeshRendererBounds = getMeshRendererBounds;
      })(ArrayExtensionMethods || _export("ArrayExtensionMethods", ArrayExtensionMethods = {}));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=1eba37204fec020bf9c8c6d500b2f8e8c3eea92e.js.map
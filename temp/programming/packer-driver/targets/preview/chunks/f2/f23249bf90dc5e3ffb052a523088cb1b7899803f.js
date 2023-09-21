System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Bounds, Vector3, _crd, ArrayExtensionMethods;

  function _reportPossibleCrUseOfBounds(extras) {
    _reporterNs.report("Bounds", "../Core/CubismGeometry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "../Core/CubismVector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRenderer(extras) {
    _reporterNs.report("CubismRenderer", "./CubismRenderer", _context.meta, extras);
  }

  _export("ArrayExtensionMethods", void 0);

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

          var min = new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)(minX, minY, minZ);
          var size = new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)(maxX, maxY, maxZ).subtract(min);
          return (_crd && Bounds === void 0 ? (_reportPossibleCrUseOfBounds({
            error: Error()
          }), Bounds) : Bounds).fromVector(size.multiplySingle(0.5).add(min), size);
        }

        _ArrayExtensionMethods.getMeshRendererBounds = getMeshRendererBounds;
      })(ArrayExtensionMethods || _export("ArrayExtensionMethods", ArrayExtensionMethods = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f23249bf90dc5e3ffb052a523088cb1b7899803f.js.map
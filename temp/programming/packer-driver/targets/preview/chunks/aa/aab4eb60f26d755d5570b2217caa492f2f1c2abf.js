System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CubismMaskTile, CubismMaskTransform, CubismMaskProperties, _crd;

  function _reportPossibleCrUseOfCubismMaskTile(extras) {
    _reporterNs.report("CubismMaskTile", "./CubismMaskTile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskTransform(extras) {
    _reporterNs.report("CubismMaskTransform", "./CubismMaskTransform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskTexture(extras) {
    _reporterNs.report("CubismMaskTexture", "./CubismMaskTexture", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CubismMaskTile = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismMaskTransform = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1793dl7/WFAzJp+ZTLP+8s3", "CubismMaskProperties", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /**
       * Holds mask properties.
       *
       * **Sealed class.**
       */
      _export("default", CubismMaskProperties = class CubismMaskProperties {
        constructor() {
          /** RenderTexture to draw masks */
          this.texture = null;

          /** Tile where masks are drawn on Texture */
          this.tile = new (_crd && CubismMaskTile === void 0 ? (_reportPossibleCrUseOfCubismMaskTile({
            error: Error()
          }), CubismMaskTile) : CubismMaskTile)();

          /** Transform info to draw masks on Texture */
          this.transform = new (_crd && CubismMaskTransform === void 0 ? (_reportPossibleCrUseOfCubismMaskTransform({
            error: Error()
          }), CubismMaskTransform) : CubismMaskTransform)();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aab4eb60f26d755d5570b2217caa492f2f1c2abf.js.map
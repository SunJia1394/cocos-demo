System.register(["cc", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cclegacy, CubismMaskTile, CubismMaskTransform, CubismMaskProperties;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_) {
      CubismMaskTile = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismMaskTransform = _unresolved_2.default;
    }],
    execute: function () {
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
          this.tile = new CubismMaskTile();

          /** Transform info to draw masks on Texture */
          this.transform = new CubismMaskTransform();
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=b48c5d524762ca280649c055e384f15981d1308a.js.map
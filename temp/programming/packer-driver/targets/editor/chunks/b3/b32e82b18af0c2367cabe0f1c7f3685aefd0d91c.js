System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, _crd, CubismBuiltinShaders;

  _export("CubismBuiltinShaders", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3f56Ug8bRC876NHkmFUSIc", "CubismBuiltinShaders", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /**
       * Default shader assets.
       */
      __checkObsolete__(['EffectAsset', 'resources']);

      (function (_CubismBuiltinShaders) {
        async function getUnlit() {
          const assetPath = 'db://live2d_cubismsdk_cocoscreator/resources/Shaders/Unlit.effect';
          return new Promise((resolve, reject) => {
            resources.load(assetPath, (error, asset) => {
              if (error != null) {
                reject(null);
                return;
              }

              resolve(asset);
            });
          });
        }

        _CubismBuiltinShaders.getUnlit = getUnlit;

        async function getMask() {
          const assetPath = 'db://live2d_cubismsdk_cocoscreator/resources/Shaders/Mask.effect';
          return new Promise((resolve, reject) => {
            resources.load(assetPath, (error, asset) => {
              if (error != null) {
                reject(null);
                return;
              }

              resolve(asset);
            });
          });
        }

        _CubismBuiltinShaders.getMask = getMask;
      })(CubismBuiltinShaders || _export("CubismBuiltinShaders", CubismBuiltinShaders = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b32e82b18af0c2367cabe0f1c7f3685aefd0d91c.js.map
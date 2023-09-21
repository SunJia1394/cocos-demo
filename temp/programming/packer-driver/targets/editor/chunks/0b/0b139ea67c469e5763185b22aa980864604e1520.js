System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, _crd, CubismBuiltinMaterials;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b91ccxtclDxK7VTy1F98Bp", "CubismBuiltinMaterials", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /** Default materials. */
      __checkObsolete__(['AssetManager', 'assetManager', 'Material', 'resources']);

      (function (_CubismBuiltinMaterials) {
        async function getUnlit() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'Unlit');
        }

        _CubismBuiltinMaterials.getUnlit = getUnlit;

        async function getUnlitAdditive() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitAdditive');
        }

        _CubismBuiltinMaterials.getUnlitAdditive = getUnlitAdditive;

        async function getUnlitAdditiveCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveCulling');
        }

        _CubismBuiltinMaterials.getUnlitAdditiveCulling = getUnlitAdditiveCulling;

        async function getUnlitAdditiveMasked() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveMasked');
        }

        _CubismBuiltinMaterials.getUnlitAdditiveMasked = getUnlitAdditiveMasked;

        async function getUnlitAdditiveMaskedCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveMaskedCulling');
        }

        _CubismBuiltinMaterials.getUnlitAdditiveMaskedCulling = getUnlitAdditiveMaskedCulling;

        async function getUnlitAdditiveMaskedInverted() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveMaskedInverted');
        }

        _CubismBuiltinMaterials.getUnlitAdditiveMaskedInverted = getUnlitAdditiveMaskedInverted;

        async function getUnlitAdditiveMaskedInvertedCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveMaskedInvertedCulling');
        }

        _CubismBuiltinMaterials.getUnlitAdditiveMaskedInvertedCulling = getUnlitAdditiveMaskedInvertedCulling;

        async function getUnlitCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitCulling');
        }

        _CubismBuiltinMaterials.getUnlitCulling = getUnlitCulling;

        async function getUnlitMasked() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMasked');
        }

        _CubismBuiltinMaterials.getUnlitMasked = getUnlitMasked;

        async function getUnlitMaskedCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMaskedCulling');
        }

        _CubismBuiltinMaterials.getUnlitMaskedCulling = getUnlitMaskedCulling;

        async function getUnlitMaskedInverted() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMaskedInverted');
        }

        _CubismBuiltinMaterials.getUnlitMaskedInverted = getUnlitMaskedInverted;

        async function getUnlitMaskedInvertedCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMaskedInvertedCulling');
        }

        _CubismBuiltinMaterials.getUnlitMaskedInvertedCulling = getUnlitMaskedInvertedCulling;

        async function getUnlitMultiply() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMultiply');
        }

        _CubismBuiltinMaterials.getUnlitMultiply = getUnlitMultiply;

        async function getUnlitMultiplyCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyCulling');
        }

        _CubismBuiltinMaterials.getUnlitMultiplyCulling = getUnlitMultiplyCulling;

        async function getUnlitMultiplyMasked() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyMasked');
        }

        _CubismBuiltinMaterials.getUnlitMultiplyMasked = getUnlitMultiplyMasked;

        async function getUnlitMultiplyMaskedCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyMaskedCulling');
        }

        _CubismBuiltinMaterials.getUnlitMultiplyMaskedCulling = getUnlitMultiplyMaskedCulling;

        async function getUnlitMultiplyMaskedInverted() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyMaskedInverted');
        }

        _CubismBuiltinMaterials.getUnlitMultiplyMaskedInverted = getUnlitMultiplyMaskedInverted;

        async function getUnlitMultiplyMaskedInvertedCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyMaskedInvertedCulling');
        }

        _CubismBuiltinMaterials.getUnlitMultiplyMaskedInvertedCulling = getUnlitMultiplyMaskedInvertedCulling;

        async function getMask() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'Mask');
        }

        _CubismBuiltinMaterials.getMask = getMask;

        async function getMaskCulling() {
          const bundle = await getBundle();
          return bundle == null ? null : getMaterial(bundle, 'MaskCulling');
        }

        _CubismBuiltinMaterials.getMaskCulling = getMaskCulling;
        // #region Helper Methods
        const BUNDLE_NAME = 'Live2DCubismBuiltinResource';

        async function getBundle() {
          const bundle = assetManager.bundles.get(BUNDLE_NAME);

          if (bundle != null) {
            return Promise.resolve(bundle);
          }

          return new Promise((resolve, reject) => {
            assetManager.loadBundle(BUNDLE_NAME, (error, bundle) => {
              if (error != null) {
                reject(null);
              } else {
                resolve(bundle);
              }
            });
          });
        }

        async function getMaterial(bundle, name) {
          const path = `Materials/${name}`;
          const mat = bundle.get(path);

          if (mat != null) {
            return Promise.resolve(mat);
          }

          return new Promise((resolve, reject) => {
            bundle.load(path, (error, asset) => {
              if (error != null) {
                reject(error);
              } else {
                resolve(asset);
              }
            });
          });
        } // #endregion

      })(CubismBuiltinMaterials || (CubismBuiltinMaterials = {}));

      _export("default", CubismBuiltinMaterials);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b139ea67c469e5763185b22aa980864604e1520.js.map
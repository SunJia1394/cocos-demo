System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, CubismBuiltinMaterials;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
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
        function getUnlit() {
          return _getUnlit.apply(this, arguments);
        }

        function _getUnlit() {
          _getUnlit = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'Unlit');
          });
          return _getUnlit.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlit = getUnlit;

        function getUnlitAdditive() {
          return _getUnlitAdditive.apply(this, arguments);
        }

        function _getUnlitAdditive() {
          _getUnlitAdditive = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitAdditive');
          });
          return _getUnlitAdditive.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitAdditive = getUnlitAdditive;

        function getUnlitAdditiveCulling() {
          return _getUnlitAdditiveCulling.apply(this, arguments);
        }

        function _getUnlitAdditiveCulling() {
          _getUnlitAdditiveCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveCulling');
          });
          return _getUnlitAdditiveCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitAdditiveCulling = getUnlitAdditiveCulling;

        function getUnlitAdditiveMasked() {
          return _getUnlitAdditiveMasked.apply(this, arguments);
        }

        function _getUnlitAdditiveMasked() {
          _getUnlitAdditiveMasked = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveMasked');
          });
          return _getUnlitAdditiveMasked.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitAdditiveMasked = getUnlitAdditiveMasked;

        function getUnlitAdditiveMaskedCulling() {
          return _getUnlitAdditiveMaskedCulling.apply(this, arguments);
        }

        function _getUnlitAdditiveMaskedCulling() {
          _getUnlitAdditiveMaskedCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveMaskedCulling');
          });
          return _getUnlitAdditiveMaskedCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitAdditiveMaskedCulling = getUnlitAdditiveMaskedCulling;

        function getUnlitAdditiveMaskedInverted() {
          return _getUnlitAdditiveMaskedInverted.apply(this, arguments);
        }

        function _getUnlitAdditiveMaskedInverted() {
          _getUnlitAdditiveMaskedInverted = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveMaskedInverted');
          });
          return _getUnlitAdditiveMaskedInverted.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitAdditiveMaskedInverted = getUnlitAdditiveMaskedInverted;

        function getUnlitAdditiveMaskedInvertedCulling() {
          return _getUnlitAdditiveMaskedInvertedCulling.apply(this, arguments);
        }

        function _getUnlitAdditiveMaskedInvertedCulling() {
          _getUnlitAdditiveMaskedInvertedCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitAdditiveMaskedInvertedCulling');
          });
          return _getUnlitAdditiveMaskedInvertedCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitAdditiveMaskedInvertedCulling = getUnlitAdditiveMaskedInvertedCulling;

        function getUnlitCulling() {
          return _getUnlitCulling.apply(this, arguments);
        }

        function _getUnlitCulling() {
          _getUnlitCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitCulling');
          });
          return _getUnlitCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitCulling = getUnlitCulling;

        function getUnlitMasked() {
          return _getUnlitMasked.apply(this, arguments);
        }

        function _getUnlitMasked() {
          _getUnlitMasked = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMasked');
          });
          return _getUnlitMasked.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMasked = getUnlitMasked;

        function getUnlitMaskedCulling() {
          return _getUnlitMaskedCulling.apply(this, arguments);
        }

        function _getUnlitMaskedCulling() {
          _getUnlitMaskedCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMaskedCulling');
          });
          return _getUnlitMaskedCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMaskedCulling = getUnlitMaskedCulling;

        function getUnlitMaskedInverted() {
          return _getUnlitMaskedInverted.apply(this, arguments);
        }

        function _getUnlitMaskedInverted() {
          _getUnlitMaskedInverted = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMaskedInverted');
          });
          return _getUnlitMaskedInverted.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMaskedInverted = getUnlitMaskedInverted;

        function getUnlitMaskedInvertedCulling() {
          return _getUnlitMaskedInvertedCulling.apply(this, arguments);
        }

        function _getUnlitMaskedInvertedCulling() {
          _getUnlitMaskedInvertedCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMaskedInvertedCulling');
          });
          return _getUnlitMaskedInvertedCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMaskedInvertedCulling = getUnlitMaskedInvertedCulling;

        function getUnlitMultiply() {
          return _getUnlitMultiply.apply(this, arguments);
        }

        function _getUnlitMultiply() {
          _getUnlitMultiply = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMultiply');
          });
          return _getUnlitMultiply.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMultiply = getUnlitMultiply;

        function getUnlitMultiplyCulling() {
          return _getUnlitMultiplyCulling.apply(this, arguments);
        }

        function _getUnlitMultiplyCulling() {
          _getUnlitMultiplyCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyCulling');
          });
          return _getUnlitMultiplyCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMultiplyCulling = getUnlitMultiplyCulling;

        function getUnlitMultiplyMasked() {
          return _getUnlitMultiplyMasked.apply(this, arguments);
        }

        function _getUnlitMultiplyMasked() {
          _getUnlitMultiplyMasked = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyMasked');
          });
          return _getUnlitMultiplyMasked.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMultiplyMasked = getUnlitMultiplyMasked;

        function getUnlitMultiplyMaskedCulling() {
          return _getUnlitMultiplyMaskedCulling.apply(this, arguments);
        }

        function _getUnlitMultiplyMaskedCulling() {
          _getUnlitMultiplyMaskedCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyMaskedCulling');
          });
          return _getUnlitMultiplyMaskedCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMultiplyMaskedCulling = getUnlitMultiplyMaskedCulling;

        function getUnlitMultiplyMaskedInverted() {
          return _getUnlitMultiplyMaskedInverted.apply(this, arguments);
        }

        function _getUnlitMultiplyMaskedInverted() {
          _getUnlitMultiplyMaskedInverted = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyMaskedInverted');
          });
          return _getUnlitMultiplyMaskedInverted.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMultiplyMaskedInverted = getUnlitMultiplyMaskedInverted;

        function getUnlitMultiplyMaskedInvertedCulling() {
          return _getUnlitMultiplyMaskedInvertedCulling.apply(this, arguments);
        }

        function _getUnlitMultiplyMaskedInvertedCulling() {
          _getUnlitMultiplyMaskedInvertedCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'UnlitMultiplyMaskedInvertedCulling');
          });
          return _getUnlitMultiplyMaskedInvertedCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getUnlitMultiplyMaskedInvertedCulling = getUnlitMultiplyMaskedInvertedCulling;

        function getMask() {
          return _getMask.apply(this, arguments);
        }

        function _getMask() {
          _getMask = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'Mask');
          });
          return _getMask.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getMask = getMask;

        function getMaskCulling() {
          return _getMaskCulling.apply(this, arguments);
        }

        function _getMaskCulling() {
          _getMaskCulling = _asyncToGenerator(function* () {
            var bundle = yield getBundle();
            return bundle == null ? null : getMaterial(bundle, 'MaskCulling');
          });
          return _getMaskCulling.apply(this, arguments);
        }

        _CubismBuiltinMaterials.getMaskCulling = getMaskCulling;
        // #region Helper Methods
        var BUNDLE_NAME = 'Live2DCubismBuiltinResource';

        function getBundle() {
          return _getBundle.apply(this, arguments);
        }

        function _getBundle() {
          _getBundle = _asyncToGenerator(function* () {
            var bundle = assetManager.bundles.get(BUNDLE_NAME);

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
          });
          return _getBundle.apply(this, arguments);
        }

        function getMaterial(_x, _x2) {
          return _getMaterial.apply(this, arguments);
        } // #endregion


        function _getMaterial() {
          _getMaterial = _asyncToGenerator(function* (bundle, name) {
            var path = "Materials/" + name;
            var mat = bundle.get(path);

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
          });
          return _getMaterial.apply(this, arguments);
        }
      })(CubismBuiltinMaterials || (CubismBuiltinMaterials = {}));

      _export("default", CubismBuiltinMaterials);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=4245dbad6e32c53fc3df5a90ef541503c15c0087.js.map
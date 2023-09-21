System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, EDITOR, isImporter, _crd, _maskMaterial, _maskCullingMaterial, CubismResources, mask, maskCulling;

  function _reportPossibleCrUseOfisImporter(extras) {
    _reporterNs.report("isImporter", "../Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      isImporter = _unresolved_2.isImporter;
    }],
    execute: async function () {
      _crd = true;

      _cclegacy._RF.push({}, "7485f6eTHZBRY3WEU+VDhF8", "CubismResources", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['assetManager', 'Material']);

      _maskMaterial = null;
      _maskCullingMaterial = null;

      (function (_CubismResources) {
        function getMaskMaterial() {
          return _maskMaterial;
        }

        _CubismResources.getMaskMaterial = getMaskMaterial;

        function getMaskCullingMaterial() {
          return _maskCullingMaterial;
        }

        _CubismResources.getMaskCullingMaterial = getMaskCullingMaterial;
      })(CubismResources || (CubismResources = {}));

      _export("default", CubismResources);

      if (!EDITOR) {
        assetManager.loadBundle('Live2DCubismBuiltinResource', (error, bundle) => {
          if (error != null) {
            console.error(error);
          } else {
            bundle.load('Materials/Mask', (error, asset) => {
              if (error != null) {
                console.error(error);
              } else {
                console.info('Initialize success.');
                _maskMaterial = asset;
              }
            });
            bundle.load('Materials/MaskCulling', (error, asset) => {
              if (error != null) {
                console.error(error);
              } else {
                _maskCullingMaterial = asset;
              }
            });
          }
        });
      } else {
        if (!(_crd && isImporter === void 0 ? (_reportPossibleCrUseOfisImporter({
          error: Error()
        }), isImporter) : isImporter)()) {
          mask = await Editor.Message.request('asset-db', 'query-uuid', 'db://live2d_cubismsdk_cocoscreator/resources/Materials/Mask.mtl');
          maskCulling = await Editor.Message.request('asset-db', 'query-uuid', 'db://live2d_cubismsdk_cocoscreator/resources/Materials/MaskCulling.mtl');
          assetManager.loadAny(mask, null, (error, asset) => {
            if (error) {
              console.error(error);
            } else {
              _maskMaterial = asset;
            }
          });
          assetManager.loadAny(maskCulling, null, (error, asset) => {
            if (error) {
              console.error(error);
            } else {
              _maskCullingMaterial = asset;
            }
          });
        }
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b7a7a770f98b900723c739eac4154130a957261.js.map
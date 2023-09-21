System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, _crd, CubismBuiltinShaders;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        function getUnlit() {
          return _getUnlit.apply(this, arguments);
        }

        function _getUnlit() {
          _getUnlit = _asyncToGenerator(function* () {
            var assetPath = 'db://live2d_cubismsdk_cocoscreator/resources/Shaders/Unlit.effect';
            return new Promise((resolve, reject) => {
              resources.load(assetPath, (error, asset) => {
                if (error != null) {
                  reject(null);
                  return;
                }

                resolve(asset);
              });
            });
          });
          return _getUnlit.apply(this, arguments);
        }

        _CubismBuiltinShaders.getUnlit = getUnlit;

        function getMask() {
          return _getMask.apply(this, arguments);
        }

        function _getMask() {
          _getMask = _asyncToGenerator(function* () {
            var assetPath = 'db://live2d_cubismsdk_cocoscreator/resources/Shaders/Mask.effect';
            return new Promise((resolve, reject) => {
              resources.load(assetPath, (error, asset) => {
                if (error != null) {
                  reject(null);
                  return;
                }

                resolve(asset);
              });
            });
          });
          return _getMask.apply(this, arguments);
        }

        _CubismBuiltinShaders.getMask = getMask;
      })(CubismBuiltinShaders || _export("CubismBuiltinShaders", CubismBuiltinShaders = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b32e82b18af0c2367cabe0f1c7f3685aefd0d91c.js.map
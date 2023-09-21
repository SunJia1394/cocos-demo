System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, CCInteger, _decorator, CubismFadeMotionData, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, ccclass, property, CubismFadeMotionList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      CCInteger = _cc.CCInteger;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismFadeMotionData = _unresolved_.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e4ddfoqWFdNCrpBzoKbjnsV", "CubismFadeMotionList", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Asset', 'CCInteger', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // TODO: [CreateAssetMenu(menuName = "Live2D Cubism/Fade Motion List")]

      /** from ScriptableObject */

      _export("default", CubismFadeMotionList = (_dec = ccclass('CubismFadeMotionList'), _dec2 = property([CCInteger]), _dec3 = property([CubismFadeMotionData]), _dec(_class = (_class2 = class CubismFadeMotionList extends Asset {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "motionInstanceIds", _descriptor, this);

          _initializerDefineProperty(this, "cubismFadeMotionObjects", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "motionInstanceIds", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cubismFadeMotionObjects", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=4788ce92a467267518441493f8b87245fb564c60.js.map
System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, _decorator, CubismFadeMotionData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, property, CubismFadePlayingMotion;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismFadeMotionData = _unresolved_.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b2f76VOBQNCVI4xUAsiwyFI", "CubismFadePlayingMotion", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', '_decorator']);

      ({
        property
      } = _decorator);
      /** from struct */

      _export("default", CubismFadePlayingMotion = (_dec = property(CCFloat), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec4 = property({
        type: Number,
        slide: true,
        min: 0.0,
        max: Number.MAX_VALUE
      }), _dec5 = property(CubismFadeMotionData), _dec6 = property(Boolean), _dec7 = property({
        serializable: false,
        visible: false
      }), (_class = class CubismFadePlayingMotion {
        constructor() {
          _initializerDefineProperty(this, "startTime", _descriptor, this);

          _initializerDefineProperty(this, "endTime", _descriptor2, this);

          _initializerDefineProperty(this, "fadeInStartTime", _descriptor3, this);

          _initializerDefineProperty(this, "speed", _descriptor4, this);

          _initializerDefineProperty(this, "motion", _descriptor5, this);

          _initializerDefineProperty(this, "isLooping", _descriptor6, this);

          _initializerDefineProperty(this, "weight", _descriptor7, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "startTime", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "endTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "fadeInStartTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "speed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "motion", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "isLooping", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "weight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class)));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=761d235ae4b9782e14d15ac2a97afe57da45e689.js.map
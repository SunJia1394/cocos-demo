System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, CCString, Component, _decorator, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, ccclass, property, CubismPosePart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      CCString = _cc.CCString;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "35deeGbvHpFQb1jOJcwsQxh", "CubismPosePart", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCInteger', 'CCString', 'Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Tagging component for pose part.
       *
       * **sealed class**
       */

      _export("default", CubismPosePart = (_dec = ccclass('CubismPosePart'), _dec2 = property({
        type: CCInteger
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: [CCString]
      }), _dec(_class = (_class2 = class CubismPosePart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "groupIndex", _descriptor, this);

          _initializerDefineProperty(this, "partIndex", _descriptor2, this);

          _initializerDefineProperty(this, "link", _descriptor3, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupIndex", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "partIndex", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "link", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array(0);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=ce5e82bb7887d63b2c3b19dd855f619dbf01914e.js.map
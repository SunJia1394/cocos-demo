System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, ccclass, property, CubismUserDataBody;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "64b53aE7PBCO5rxHR3Px5O+", "CubismUserDataBody", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** Body of user data. */

      CubismUserDataBody = (_dec = ccclass('CubismUserDataBody'), _dec2 = property({
        serializable: true
      }), _dec3 = property({
        serializable: true
      }), _dec(_class = (_class2 = class CubismUserDataBody {
        constructor(args) {
          var _args$id, _args$value;

          if (args === void 0) {
            args = {};
          }

          /** Id. */
          _initializerDefineProperty(this, "id", _descriptor, this);

          /** Value. */
          _initializerDefineProperty(this, "value", _descriptor2, this);

          this.id = (_args$id = args.id) != null ? _args$id : '';
          this.value = (_args$value = args.value) != null ? _args$value : '';
        }

        copyWith(args) {
          var _args$id2, _args$value2;

          if (args === void 0) {
            args = {};
          }

          return new CubismUserDataBody({
            id: (_args$id2 = args.id) != null ? _args$id2 : this.id,
            value: (_args$value2 = args.value) != null ? _args$value2 : this.value
          });
        }

        equals(other) {
          return this === other ? true : this.id == other.id && this.value == other.value;
        }

        strictEquals(other) {
          return this === other;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class);

      (function (_CubismUserDataBody) {
        var DEFAULT = _CubismUserDataBody.DEFAULT = new CubismUserDataBody();
      })(CubismUserDataBody || (CubismUserDataBody = {}));

      _export("default", CubismUserDataBody);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=9417706d30d1b094aaeea2af4ae217314f98f2a5.js.map
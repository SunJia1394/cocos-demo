System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, RealCurve, _decorator, CubismSerializableKeyFrame, _dec, _dec2, _class, _class2, _descriptor, ccclass, property, CubismSerializableCurve;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      RealCurve = _cc.RealCurve;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismSerializableKeyFrame = _unresolved_.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ce38dTE2zlLBraHEsweFMM6", "CubismSerializableCurve", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['RealCurve', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CubismSerializableCurve = (_dec = ccclass('CubismSerializableCurve'), _dec2 = property([CubismSerializableKeyFrame]), _dec(_class = (_class2 = class CubismSerializableCurve {
        constructor(arrayLength) {
          _initializerDefineProperty(this, "data", _descriptor, this);

          this.data = new Array(arrayLength != null ? arrayLength : 0);
        }

        get length() {
          return this.data.length;
        }

        setKeyFrame(index, value) {
          this.data[index] = value;
        }

        toRealCurve() {
          const {
            data
          } = this;
          const output = new RealCurve();

          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const key = {
              value: element.value
            };
            key.value = element.value;
            output.addKeyFrame(element.time, element.value);
          }

          return output;
        }

        static instantiateFromJson(src) {
          if (src == null) {
            return undefined;
          }

          const {
            data
          } = src;

          if (!Array.isArray(data)) {
            return undefined;
          }

          const instance = new CubismSerializableCurve(data.length);

          for (let i = 0; i < data.length; i++) {
            const keyFrame = CubismSerializableKeyFrame.instantiateFromJson(data[i]);

            if (!keyFrame) {
              return undefined;
            }

            instance.setKeyFrame(i, keyFrame);
          }

          return instance;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "data", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=5649b21e16d732255cc37852a735c5671d4e6885.js.map
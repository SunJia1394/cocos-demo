System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, Enum, TangentWeightMode, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, CubismSerializableKeyFrame;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function isNumber(value) {
    return typeof value == 'number';
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      Enum = _cc.Enum;
      TangentWeightMode = _cc.TangentWeightMode;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c16fYIxLdDhKT69bCwSMoP", "CubismSerializableKeyFrame", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', 'Enum', 'TangentWeightMode', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CubismSerializableKeyFrame = (_dec = ccclass('CubismSerializableKeyFrame'), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec4 = property(CCFloat), _dec5 = property(CCFloat), _dec6 = property(CCFloat), _dec7 = property(CCFloat), _dec8 = property({
        type: Enum(TangentWeightMode)
      }), _dec(_class = (_class2 = class CubismSerializableKeyFrame {
        constructor(time, value, inTangent, inWeight, outTangent, outWeight, weightedMode) {
          _initializerDefineProperty(this, "time", _descriptor, this);

          _initializerDefineProperty(this, "value", _descriptor2, this);

          _initializerDefineProperty(this, "inTangent", _descriptor3, this);

          _initializerDefineProperty(this, "inWeight", _descriptor4, this);

          _initializerDefineProperty(this, "outTangent", _descriptor5, this);

          _initializerDefineProperty(this, "outWeight", _descriptor6, this);

          _initializerDefineProperty(this, "weightedMode", _descriptor7, this);

          this.time = time != null ? time : 0;
          this.value = value != null ? value : 0;
          this.inTangent = inTangent != null ? inTangent : 0;
          this.inWeight = inWeight != null ? inWeight : 0;
          this.outTangent = outTangent != null ? outTangent : 0;
          this.outWeight = outWeight != null ? outWeight : 0;
          this.weightedMode = weightedMode != null ? weightedMode : TangentWeightMode.NONE;
        }

        static instantiateFromJson(src) {
          if (src == null) {
            return undefined;
          }

          var time = src.time;

          if (!isNumber(time)) {
            return undefined;
          }

          var value = src.value;

          if (!isNumber(value)) {
            return undefined;
          }

          var inTangent = isNumber(src.inTangent) ? src.inTangent : undefined;
          var inWeight = isNumber(src.inWeight) ? src.inWeight : undefined;
          var outTangent = isNumber(src.outTangent) ? src.outTangent : undefined;
          var outWeight = isNumber(src.outWeight) ? src.outWeight : undefined;
          var weightedMode = isNumber(src.weightedMode) ? src.weightedMode : undefined;
          return new CubismSerializableKeyFrame(time, value, inTangent, inWeight, outTangent, outWeight, weightedMode);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inTangent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "inWeight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "outTangent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "outWeight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "weightedMode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TangentWeightMode.NONE;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24ad7108fc4c0b2d859928ce5440065a9e8c4a9d.js.map
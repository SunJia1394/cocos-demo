System.register(["cc", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, math, _decorator, CubismPhysicsMath, CubismPhysicsSourceComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, property, ccclass, CubismPhysicsInput;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Enum = _cc.Enum;
      math = _cc.math;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismPhysicsMath = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismPhysicsSourceComponent = _unresolved_2.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2562eepuVhJJrifFRsH94ha", "CubismPhysicsInput", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Enum', 'math', '_decorator']);

      ({
        property,
        ccclass
      } = _decorator);

      /** Input data of physics. (struct) */
      _export("default", CubismPhysicsInput = (_dec = ccclass('CubismPhysicsInput'), _dec2 = property({
        serializable: true
      }), _dec3 = property({
        serializable: true
      }), _dec4 = property({
        serializable: true
      }), _dec5 = property({
        serializable: true
      }), _dec6 = property({
        type: Enum(CubismPhysicsSourceComponent),
        serializable: true
      }), _dec7 = property({
        serializable: true
      }), _dec8 = property({
        serializable: false,
        visible: false
      }), _dec9 = property({
        serializable: false,
        visible: false
      }), _dec(_class = (_class2 = class CubismPhysicsInput {
        constructor() {
          /** Parameter ID of source. */
          _initializerDefineProperty(this, "sourceId", _descriptor, this);

          /** Scale of translation. */
          _initializerDefineProperty(this, "scaleOfTranslation", _descriptor2, this);

          /** Scale of angle. */
          _initializerDefineProperty(this, "angleScale", _descriptor3, this);

          /** Weight. */
          _initializerDefineProperty(this, "weight", _descriptor4, this);

          /** Component of source. */
          _initializerDefineProperty(this, "sourceComponent", _descriptor5, this);

          /** True if value is inverted; otherwise. */
          _initializerDefineProperty(this, "isInverted", _descriptor6, this);

          /** Source data from parameter. */
          _initializerDefineProperty(this, "source", _descriptor7, this);

          /** Function of getting normalized parameter value. */
          _initializerDefineProperty(this, "getNormalizedParameterValue", _descriptor8, this);
        }

        getInputTranslationXFromNormalizedParameterValue(targetTranslation, targetAngle, parameter, parameterValue, normalization, weight) {
          var result = CubismPhysicsMath.normalize(parameter, parameterValue, normalization.position.minimum, normalization.position.maximum, normalization.position.default, this.isInverted);
          return {
            translation: new math.Vec2(targetTranslation.x + result.normalized * weight, targetTranslation.y),
            angle: targetAngle,
            parameterValue: result.clamped
          };
        }

        getInputTranslationYFromNormalizedParameterValue(targetTranslation, targetAngle, parameter, parameterValue, normalization, weight) {
          var result = CubismPhysicsMath.normalize(parameter, parameterValue, normalization.position.minimum, normalization.position.maximum, normalization.position.default, this.isInverted);
          return {
            translation: new math.Vec2(targetTranslation.x, targetTranslation.y + result.normalized * weight),
            angle: targetAngle,
            parameterValue: result.clamped
          };
        }

        getInputAngleFromNormalizedParameterValue(targetTranslation, targetAngle, parameter, parameterValue, normalization, weight) {
          var result = CubismPhysicsMath.normalize(parameter, parameterValue, normalization.angle.minimum, normalization.angle.maximum, normalization.angle.default, this.isInverted);
          return {
            translation: targetTranslation.clone(),
            angle: targetAngle + result.normalized * weight,
            parameterValue: result.clamped
          };
        }

        initializeGetter() {
          switch (this.sourceComponent) {
            case CubismPhysicsSourceComponent.X:
              {
                this.getNormalizedParameterValue = this.getInputTranslationXFromNormalizedParameterValue.bind(this);
              }
              break;

            case CubismPhysicsSourceComponent.Y:
              {
                this.getNormalizedParameterValue = this.getInputTranslationYFromNormalizedParameterValue.bind(this);
              }
              break;

            case CubismPhysicsSourceComponent.Angle:
              {
                this.getNormalizedParameterValue = this.getInputAngleFromNormalizedParameterValue.bind(this);
              }
              break;

            default:
              var neverCheck = this.sourceComponent;
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sourceId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scaleOfTranslation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return math.Vec2.ZERO.clone();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "angleScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "weight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sourceComponent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CubismPhysicsSourceComponent.X;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isInverted", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "source", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "getNormalizedParameterValue", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=85712daa244a2d86d1caaf8999aa7d43efc36741.js.map
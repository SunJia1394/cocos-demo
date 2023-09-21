System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, math, _decorator, CubismPhysicsMath, CubismPhysicsSourceComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, property, ccclass, CubismPhysicsInput;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismPhysicsMath(extras) {
    _reporterNs.report("CubismPhysicsMath", "./CubismPhysicsMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsSourceComponent(extras) {
    _reporterNs.report("CubismPhysicsSourceComponent", "./CubismPhysicsSourceComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsNormalization(extras) {
    _reporterNs.report("CubismPhysicsNormalization", "./CubismPhysicsNormalization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Enum = _cc.Enum;
      math = _cc.math;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismPhysicsMath = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPhysicsSourceComponent = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

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
        type: Enum(_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
          error: Error()
        }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent),
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
          const result = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).normalize(parameter, parameterValue, normalization.position.minimum, normalization.position.maximum, normalization.position.default, this.isInverted);
          return {
            translation: new math.Vec2(targetTranslation.x + result.normalized * weight, targetTranslation.y),
            angle: targetAngle,
            parameterValue: result.clamped
          };
        }

        getInputTranslationYFromNormalizedParameterValue(targetTranslation, targetAngle, parameter, parameterValue, normalization, weight) {
          const result = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).normalize(parameter, parameterValue, normalization.position.minimum, normalization.position.maximum, normalization.position.default, this.isInverted);
          return {
            translation: new math.Vec2(targetTranslation.x, targetTranslation.y + result.normalized * weight),
            angle: targetAngle,
            parameterValue: result.clamped
          };
        }

        getInputAngleFromNormalizedParameterValue(targetTranslation, targetAngle, parameter, parameterValue, normalization, weight) {
          const result = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).normalize(parameter, parameterValue, normalization.angle.minimum, normalization.angle.maximum, normalization.angle.default, this.isInverted);
          return {
            translation: targetTranslation.clone(),
            angle: targetAngle + result.normalized * weight,
            parameterValue: result.clamped
          };
        }

        initializeGetter() {
          switch (this.sourceComponent) {
            case (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
              error: Error()
            }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).X:
              {
                this.getNormalizedParameterValue = this.getInputTranslationXFromNormalizedParameterValue.bind(this);
              }
              break;

            case (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
              error: Error()
            }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).Y:
              {
                this.getNormalizedParameterValue = this.getInputTranslationYFromNormalizedParameterValue.bind(this);
              }
              break;

            case (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
              error: Error()
            }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).Angle:
              {
                this.getNormalizedParameterValue = this.getInputAngleFromNormalizedParameterValue.bind(this);
              }
              break;

            default:
              const neverCheck = this.sourceComponent;
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sourceId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scaleOfTranslation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return math.Vec2.ZERO.clone();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "angleScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "weight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sourceComponent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
            error: Error()
          }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).X;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isInverted", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "source", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "getNormalizedParameterValue", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=decdeb08b4c6939b3544d170f460e82d6abe5e7c.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, math, Enum, CubismPhysics, CubismPhysicsMath, CubismPhysicsSourceComponent, MathExtensions, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, property, ccclass, Vec2, CubismPhysicsOutput;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismPhysics(extras) {
    _reporterNs.report("CubismPhysics", "./CubismPhysics", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsMath(extras) {
    _reporterNs.report("CubismPhysicsMath", "./CubismPhysicsMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsSourceComponent(extras) {
    _reporterNs.report("CubismPhysicsSourceComponent", "./CubismPhysicsSourceComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsParticle(extras) {
    _reporterNs.report("CubismPhysicsParticle", "./CubismPhysicsParticle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathExtensions(extras) {
    _reporterNs.report("MathExtensions", "../../Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      math = _cc.math;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      CubismPhysics = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPhysicsMath = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismPhysicsSourceComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      MathExtensions = _unresolved_5.MathExtensions;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6fc0W74C5NVYplhds4o6Hp", "CubismPhysicsOutput", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'math', 'Enum']);

      ({
        property,
        ccclass
      } = _decorator);
      ({
        Vec2
      } = _crd && MathExtensions === void 0 ? (_reportPossibleCrUseOfMathExtensions({
        error: Error()
      }), MathExtensions) : MathExtensions);
      /**
       * Delegation of function of getting output value.
       * @param translation Translation.
       * @param parameter Parameter.
       * @param particles Particles.
       * @param particleIndex Index of particle.
       * @param gravity Gravity.
       * @returns Output value.
       */

      /**
       * Delegation of function of getting output scale.
       * @returns Output scale.
       */

      /** Output data of physics. (struct) */
      _export("default", CubismPhysicsOutput = (_dec = ccclass('CubismPhysicsOutput'), _dec2 = property({
        serializable: true
      }), _dec3 = property({
        serializable: true
      }), _dec4 = property({
        serializable: true
      }), _dec5 = property({
        serializable: true
      }), _dec6 = property({
        serializable: true
      }), _dec7 = property({
        type: Enum(_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
          error: Error()
        }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent),
        serializable: true,
        readonly: false
      }), _dec8 = property({
        serializable: true
      }), _dec(_class = (_class2 = class CubismPhysicsOutput {
        constructor() {
          /** Parameter ID of destination. */
          _initializerDefineProperty(this, "destinationId", _descriptor, this);

          /** Index of particle. */
          _initializerDefineProperty(this, "particleIndex", _descriptor2, this);

          /** Scale of transition. */
          _initializerDefineProperty(this, "translationScale", _descriptor3, this);

          /** Scale of angle. */
          _initializerDefineProperty(this, "angleScale", _descriptor4, this);

          /** Weight. */
          _initializerDefineProperty(this, "weight", _descriptor5, this);

          /** Component of source. */
          _initializerDefineProperty(this, "sourceComponent", _descriptor6, this);

          /** True if value is inverted; otherwise. */
          _initializerDefineProperty(this, "isInverted", _descriptor7, this);

          /** The value that below minimum. */
          this.valueBelowMinimum = 0;

          /** The value that exceeds maximum. */
          this.valueExceededMaximum = 0;

          /** Destination data from parameter. */
          this.destination = null;

          /** Function of getting output value. */
          this.getValue = null;

          /** Function of getting output scale. */
          this.getScale = null;
        }

        /**
         * Gets output for translation X-axis.
         * @param translation Translation.
         * @param parameter Parameter.
         * @param particles Particles.
         * @param particleIndex Index of particle.
         * @param gravity Gravity.
         * @returns Output value.
         */
        getOutputTranslationX(translation, particles, particleIndex, gravity) {
          let outputValue = translation.x;

          if (this.isInverted) {
            outputValue *= -1.0;
          }

          return outputValue;
        }
        /**
         * Gets output for translation Y-axis.
         * @param translation Translation.
         * @param parameter Parameter.
         * @param particles Particles.
         * @param particleIndex Index of particle.
         * @param gravity Gravity.
         * @returns Output value.
         */


        getOutputTranslationY(translation, particles, particleIndex, gravity) {
          let outputValue = translation.y;

          if (this.isInverted) {
            outputValue *= -1.0;
          }

          return outputValue;
        }
        /**
         * Gets output for angle.
         * @param translation Translation.
         * @param parameter Parameter.
         * @param particles Particles.
         * @param particleIndex Index of particle.
         * @param gravity Gravity.
         * @returns Output value.
         */


        getOutputAngle(translation, particles, particleIndex, gravity) {
          let parentGravity = math.Vec2.ZERO;

          if ((_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
            error: Error()
          }), CubismPhysics) : CubismPhysics).useAngleCorrection) {
            if (particleIndex < 2) {
              parentGravity = new math.Vec2(gravity.x, gravity.y * -1.0);
            } else {
              parentGravity = Vec2.subtract(particles[particleIndex - 1].position, particles[particleIndex - 2].position);
            }
          } else {
            parentGravity = new math.Vec2(gravity.x, gravity.y * -1.0);
          }

          let outputValue = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).directionToRadian(parentGravity, translation);

          if (this.isInverted) {
            outputValue *= -1.0;
          }

          return outputValue;
        }
        /**
         * Gets output scale for translation X-axis.
         * @returns Output scale.
         */


        getOutputScaleTranslationX() {
          return this.translationScale.x;
        }
        /**
         * Gets output scale for translation Y-axis.
         * @returns Output scale.
         */


        getOutputScaleTranslationY() {
          return this.translationScale.y;
        }
        /**
         * Gets output scale for angle.
         * @returns Output scale.
         */


        getOutputScaleAngle() {
          return this.angleScale;
        }

        initializeGetter() {
          switch (this.sourceComponent) {
            case (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
              error: Error()
            }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).X:
              {
                this.getScale = this.getOutputScaleTranslationX.bind(this);
                this.getValue = this.getOutputTranslationX.bind(this);
              }
              break;

            case (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
              error: Error()
            }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).Y:
              {
                this.getScale = this.getOutputScaleTranslationY.bind(this);
                this.getValue = this.getOutputTranslationY.bind(this);
              }
              break;

            case (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
              error: Error()
            }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).Angle:
              {
                this.getScale = this.getOutputScaleAngle.bind(this);
                this.getValue = this.getOutputAngle.bind(this);
              }
              break;

            default:
              const neverCheck = this.sourceComponent;
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "destinationId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "particleIndex", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "translationScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return math.Vec2.ZERO.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "angleScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "weight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sourceComponent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
            error: Error()
          }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).X;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "isInverted", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4689ac226c3691ad538d6a2356ecd2e70743421b.js.map
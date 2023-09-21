System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, CCInteger, CCFloat, game, math, CubismHarmonicMotionDirection, CubismParameter, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, CubismHarmonicMotionParameter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismHarmonicMotionDirection(extras) {
    _reporterNs.report("CubismHarmonicMotionDirection", "./CubismHarmonicMotionDirection", _context.meta, extras);
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
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
      CCInteger = _cc.CCInteger;
      CCFloat = _cc.CCFloat;
      game = _cc.game;
      math = _cc.math;
    }, function (_unresolved_2) {
      CubismHarmonicMotionDirection = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismParameter = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a54e+kVJ9NVaEU7UWfcDRv", "CubismHarmonicMotionParameter", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component', 'Enum', 'CCInteger', 'CCFloat', 'game', 'math']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Holds data for controlling the output of simple harmonic motions.
       *
       * This type of motion can be very useful for faking breathing, for example.
       *
       * **Sealed class**
       */

      _export("default", CubismHarmonicMotionParameter = (_dec = ccclass('CubismHarmonicMotionParameter'), _dec2 = property({
        type: CCInteger,
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: Enum(_crd && CubismHarmonicMotionDirection === void 0 ? (_reportPossibleCrUseOfCubismHarmonicMotionDirection({
          error: Error()
        }), CubismHarmonicMotionDirection) : CubismHarmonicMotionDirection),
        serializable: true,
        visible: true
      }), _dec4 = property({
        type: CCFloat,
        slide: true,
        range: [0.0, 1.0, 0.01],
        serializable: true,
        visible: true
      }), _dec5 = property({
        type: CCFloat,
        slide: true,
        range: [0.0, 1.0, 0.01],
        serializable: true,
        visible: true
      }), _dec6 = property({
        type: CCFloat,
        slide: true,
        range: [0.01, 10.0, 0.01],
        serializable: true,
        visible: true
      }), _dec(_class = (_class2 = class CubismHarmonicMotionParameter extends Component {
        constructor() {
          super(...arguments);

          /** Timescale channel. */
          _initializerDefineProperty(this, "channel", _descriptor, this);

          /** Motion direction. */
          _initializerDefineProperty(this, "direction", _descriptor2, this);

          /**
           * Normalized origin of motion.
           *
           * The actual origin used for evaluating the motion depends limits of the {@link CubismParameter}.
           */
          _initializerDefineProperty(this, "normalizedOrigin", _descriptor3, this);

          /**
           * Normalized range of motion.
           *
           * The actual origin used for evaluating the motion depends limits of the {@link CubismParameter}.
           */
          _initializerDefineProperty(this, "normalizedRange", _descriptor4, this);

          /** Duration of one motion cycle in seconds. */
          _initializerDefineProperty(this, "duration", _descriptor5, this);

          //#region Interface for Controller
          this._maximumValue = 0;
          this._minimumValue = 0;
          this._valueRange = 0;
          this._t = 0;
        }

        /** true if this is initialized. */
        get isInitialized() {
          return Math.abs(this.valueRange) >= math.EPSILON;
        }
        /** Initializes instance. */


        initialize() {
          // Initialize value fields.
          var parameter = this.getComponent(_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
            error: Error()
          }), CubismParameter) : CubismParameter);

          if (parameter === null) {
            return;
          }

          this.maximumValue = parameter.maximumValue;
          this.minimumValue = parameter.minimumValue;
          this.valueRange = this.maximumValue - this.minimumValue;
        }

        /** Cached {@link CubismParameter.maximumValue}. */
        get maximumValue() {
          return this._maximumValue;
        }

        set maximumValue(value) {
          this._maximumValue = value;
        }

        /** Cached {@link CubismParameter.minimumValue}. */
        get minimumValue() {
          return this._minimumValue;
        }

        set minimumValue(value) {
          this._minimumValue = value;
        }

        /** Range of {@link maximumValue} and {@link minimumValue}. */
        get valueRange() {
          return this._valueRange;
        }

        set valueRange(value) {
          this._valueRange = value;
        }

        /** Current time. */
        get t() {
          return this._t;
        }

        set t(value) {
          this._t = value;
        }
        /** Proceeds time. */


        play(channelTimescales) {
          this.t += game.deltaTime * channelTimescales[this.channel]; // Make sure time stays within duration.

          while (this.t > this.duration) {
            this.t -= this.duration;
          }
        }
        /** Evaluates the parameter. */


        evaluate() {
          // Lazily initialize.
          if (!this.isInitialized) {
            this.initialize();
          } // Restore origin and range.


          var origin = this.minimumValue + this.normalizedOrigin * this.valueRange;
          var range = this.normalizedRange * this.valueRange; // Clamp the range so that it stays within the limits.

          var outputArray = this.clamp(origin, range);
          var originIndex = 0;
          var rangeIndex = 1;
          origin = outputArray[originIndex];
          range = outputArray[rangeIndex]; // Return result.

          return origin + range * Math.sin(this.t * (2 * Math.PI) / this.duration);
        } //#endregion
        //#region Helper Methods

        /**
         * Clamp origin and range based on {@link direction}.
         * @param origin Origin to clamp.
         * @param range Range to clamp.
         * @returns
         */


        clamp(origin, range) {
          switch (this.direction) {
            case (_crd && CubismHarmonicMotionDirection === void 0 ? (_reportPossibleCrUseOfCubismHarmonicMotionDirection({
              error: Error()
            }), CubismHarmonicMotionDirection) : CubismHarmonicMotionDirection).Left:
              {
                if (origin - range >= this.minimumValue) {
                  range /= 2;
                  origin -= range;
                } else {
                  range = (origin - this.minimumValue) / 2.0;
                  origin = this.minimumValue + range;
                  this.normalizedRange = range * 2.0 / this.valueRange;
                }

                break;
              }

            case (_crd && CubismHarmonicMotionDirection === void 0 ? (_reportPossibleCrUseOfCubismHarmonicMotionDirection({
              error: Error()
            }), CubismHarmonicMotionDirection) : CubismHarmonicMotionDirection).Right:
              {
                if (origin + range <= this.maximumValue) {
                  range /= 2.0;
                  origin += range;
                } else {
                  range = (this.maximumValue - origin) / 2.0;
                  origin = this.maximumValue - range;
                  this.normalizedRange = range * 2.0 / this.valueRange;
                }

                break;
              }

            case (_crd && CubismHarmonicMotionDirection === void 0 ? (_reportPossibleCrUseOfCubismHarmonicMotionDirection({
              error: Error()
            }), CubismHarmonicMotionDirection) : CubismHarmonicMotionDirection).Centric:
              break;

            default:
              {
                // Nothing to do.
                var neverCheck = this.direction;
                break;
              }
          } // Clamp both range and NormalizedRange.


          if (origin - range < this.minimumValue) {
            range = origin - this.minimumValue;
            this.normalizedRange = range / this.valueRange;
          } else if (origin + range > this.maximumValue) {
            range = this.maximumValue - origin;
            this.normalizedRange = range / this.valueRange;
          }

          return [origin, range];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "channel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && CubismHarmonicMotionDirection === void 0 ? (_reportPossibleCrUseOfCubismHarmonicMotionDirection({
            error: Error()
          }), CubismHarmonicMotionDirection) : CubismHarmonicMotionDirection).Left;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalizedOrigin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "normalizedRange", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6a2d405d79be5528b0714fff821bda08baba77e.js.map
System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, _decorator, ComponentExtensionMethods, CubismPhysics, CubismPhysicsSubRig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, property, ccclass, CubismPhysicsRig;

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
      ComponentExtensionMethods = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismPhysics = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPhysicsSubRig = _unresolved_3.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2e307FBn7ZNp4vJkS2N5cTK", "CubismPhysicsRig", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', 'math', '_decorator']);

      ({
        property,
        ccclass
      } = _decorator);
      /** Physics rig. */

      _export("default", CubismPhysicsRig = (_dec = ccclass('CubismPhysicsRig'), _dec2 = property({
        type: [CubismPhysicsSubRig],
        serializable: true
      }), _dec3 = property({
        serializable: true
      }), _dec4 = property({
        serializable: true
      }), _dec5 = property({
        type: CCFloat,
        serializable: true
      }), _dec6 = property({
        serializable: false
      }), _dec7 = property({
        serializable: false
      }), _dec8 = property({
        serializable: false
      }), _dec(_class = (_class2 = class CubismPhysicsRig {
        constructor() {
          /** Children of rig. */
          _initializerDefineProperty(this, "subRigs", _descriptor, this);

          _initializerDefineProperty(this, "gravity", _descriptor2, this);

          _initializerDefineProperty(this, "wind", _descriptor3, this);

          _initializerDefineProperty(this, "fps", _descriptor4, this);

          _initializerDefineProperty(this, "_currentRemainTime", _descriptor5, this);

          // Time not processed by physics.
          _initializerDefineProperty(this, "_parametersCache", _descriptor6, this);

          _initializerDefineProperty(this, "_parametersInputCache", _descriptor7, this);

          // Cache input when UpdateParticles runs.
          this._controller = null;
        }

        // Cache parameters used by Evaluate.
        get parametersCache() {
          return this._parametersCache;
        }

        set parametersCache(value) {
          this._parametersCache = value;
        }

        /** Reference of controller to refer from children rig. */
        get controller() {
          return this._controller;
        }
        /** Reference of controller to refer from children rig. */


        set controller(value) {
          this._controller = value;
        }
        /** Initializes rigs. */


        initialize() {
          for (var i = 0; i < this.subRigs.length; i++) {
            var _this$subRigs$i;

            (_this$subRigs$i = this.subRigs[i]) == null ? void 0 : _this$subRigs$i.initialize();
          }
        }
        /** Calculations are performed until the physics are stable. */


        stabilization() {
          //#region Assertion
          var {
            controller
          } = this;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          var {
            parameters
          } = controller;

          if (parameters == null) {
            console.assert(parameters != null);
            return;
          } //#endregion
          // Initialize.


          if (this._parametersCache == null) {
            this._parametersCache = new Array(parameters.length).fill(0);
          }

          if (this._parametersCache.length < parameters.length) {
            var start = this._parametersCache.length;
            this._parametersCache.length = parameters.length;

            this._parametersCache.fill(0, start);
          }

          if (this._parametersInputCache == null) {
            this._parametersInputCache = new Array(parameters.length).fill(0);
          }

          if (this._parametersInputCache.length < parameters.length) {
            var _start = this._parametersInputCache.length;
            this._parametersInputCache.length = parameters.length;

            this._parametersInputCache.fill(0, _start);
          } // Obtain and cache the current parameter posture.


          for (var i = 0; i < parameters.length; i++) {
            this._parametersCache[i] = parameters[i].value;
            this._parametersInputCache[i] = this._parametersCache[i];
          } // Evaluate.


          for (var _i = 0; _i < this.subRigs.length; _i++) {
            var subRig = this.subRigs[_i];

            if (subRig == null) {
              console.assert(subRig != null);
              continue;
            }

            subRig.stabilization();
          }

          var model = ComponentExtensionMethods.findCubismModel(controller);

          if (model == null) {
            console.assert(model != null);
            return;
          }

          model.forceUpdateNow();
        }
        /** Evaluate rigs.
         *
         * Pendulum interpolation weights
         *
         * The result of the pendulum calculation is saved and the output to the parameters is interpolated with the saved previous result of the pendulum calculation.
         *
         * The figure shows the interpolation between [1] and [2].
         *
         * The weight of the interpolation are determined by the current time seen between the latest pendulum calculation timing and the next timing.
         *
         * Figure shows the weight of position (3) as seen between [2] and [4].
         *
         * As an interpretation, the pendulum calculation and weights are misaligned.
         *
         * If there is no FPS information in physics3.json, it is always set in the previous pendulum state.
         *
         * The purpose of this specification is to avoid the quivering appearance caused by deviations from the interpolation range.
         *
         * ```
         * ------------ time -------------->
         *    　　　　　　　　|+++++|------| <- weight
         * ==[1]====#=====[2]---(3)----(4)
         *          ^ output contents
         * ```
         *
         * 1. _previousRigOutput
         * 2. _currentRigOutput
         * 3. _currentRemainTime (now rendering)
         * 4. next particles timing
         *
         * @param deltaTime
         */


        evaluate(deltaTime) {
          if (0.0 >= deltaTime) {
            return;
          }

          this._currentRemainTime += deltaTime;

          if (this._currentRemainTime > CubismPhysics.maxDeltaTime) {
            this._currentRemainTime = 0.0;
          }

          var physicsDeltaTime = 0.0;

          if (this.fps > 0.0) {
            physicsDeltaTime = 1.0 / this.fps;
          } else {
            physicsDeltaTime = deltaTime;
          }

          var controller = this.controller;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          var {
            parameters
          } = controller;

          if (parameters == null) {
            console.assert(parameters != null);
            return;
          }

          if (this._parametersCache == null) {
            this._parametersCache = new Array(parameters.length).fill(0);
          }

          if (this._parametersCache.length < parameters.length) {
            var start = this._parametersCache.length;
            this._parametersCache.length = parameters.length;

            this._parametersCache.fill(0, start);
          }

          if (this._parametersInputCache == null) {
            this._parametersInputCache = new Array(parameters.length).fill(0);
          }

          if (this._parametersInputCache.length < parameters.length) {
            var _start2 = this._parametersInputCache.length;
            this._parametersInputCache.length = parameters.length;

            this._parametersInputCache.fill(0, _start2);

            for (var i = 0; i < this._parametersInputCache.length; i++) {
              this._parametersInputCache[i] = this._parametersCache[i];
            }
          }

          while (this._currentRemainTime >= physicsDeltaTime) {
            var inputWeight = physicsDeltaTime / this._currentRemainTime; // Calculate the input at the timing to UpdateParticles by linear interpolation with the _parameterInputCache and parameterValue.
            // _parameterCache needs to be separated from _parameterInputCache because of its role in propagating values between groups.

            for (var _i2 = 0; _i2 < parameters.length; _i2++) {
              this._parametersCache[_i2] = this._parametersInputCache[_i2] * (1.0 - inputWeight) + parameters[_i2].value * inputWeight;
              this._parametersInputCache[_i2] = this._parametersCache[_i2];
            }

            for (var _i3 = 0; _i3 < this.subRigs.length; _i3++) {
              var subRig = this.subRigs[_i3];

              if (subRig == null) {
                console.assert(subRig != null);
                continue;
              }

              subRig.evaluate(physicsDeltaTime);
            }

            this._currentRemainTime -= physicsDeltaTime;
          }

          var alpha = this._currentRemainTime / physicsDeltaTime;

          for (var _i4 = 0; _i4 < this.subRigs.length; _i4++) {
            var _subRig = this.subRigs[_i4];

            if (_subRig == null) {
              console.assert(_subRig != null);
              continue;
            }

            _subRig.interpolate(alpha);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "subRigs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array(0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gravity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CubismPhysics.gravity.clone();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wind", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CubismPhysics.wind.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fps", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_currentRemainTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_parametersCache", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array(0);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_parametersInputCache", [_dec8], {
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
//# sourceMappingURL=0ebb542e6fd5ed5e346519016b65487ffbb7e30f.js.map
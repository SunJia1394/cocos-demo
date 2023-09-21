System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, _decorator, ComponentExtensionMethods, CubismPhysics, CubismPhysicsSubRig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, property, ccclass, CubismPhysicsRig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysics(extras) {
    _reporterNs.report("CubismPhysics", "./CubismPhysics", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsController(extras) {
    _reporterNs.report("CubismPhysicsController", "./CubismPhysicsController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsSubRig(extras) {
    _reporterNs.report("CubismPhysicsSubRig", "./CubismPhysicsSubRig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPhysics = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismPhysicsSubRig = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

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
        type: [_crd && CubismPhysicsSubRig === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSubRig({
          error: Error()
        }), CubismPhysicsSubRig) : CubismPhysicsSubRig],
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
          for (let i = 0; i < this.subRigs.length; i++) {
            var _this$subRigs$i;

            (_this$subRigs$i = this.subRigs[i]) == null ? void 0 : _this$subRigs$i.initialize();
          }
        }
        /** Calculations are performed until the physics are stable. */


        stabilization() {
          //#region Assertion
          const {
            controller
          } = this;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          const {
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
            const start = this._parametersCache.length;
            this._parametersCache.length = parameters.length;

            this._parametersCache.fill(0, start);
          }

          if (this._parametersInputCache == null) {
            this._parametersInputCache = new Array(parameters.length).fill(0);
          }

          if (this._parametersInputCache.length < parameters.length) {
            const start = this._parametersInputCache.length;
            this._parametersInputCache.length = parameters.length;

            this._parametersInputCache.fill(0, start);
          } // Obtain and cache the current parameter posture.


          for (let i = 0; i < parameters.length; i++) {
            this._parametersCache[i] = parameters[i].value;
            this._parametersInputCache[i] = this._parametersCache[i];
          } // Evaluate.


          for (let i = 0; i < this.subRigs.length; i++) {
            const subRig = this.subRigs[i];

            if (subRig == null) {
              console.assert(subRig != null);
              continue;
            }

            subRig.stabilization();
          }

          const model = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(controller);

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

          if (this._currentRemainTime > (_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
            error: Error()
          }), CubismPhysics) : CubismPhysics).maxDeltaTime) {
            this._currentRemainTime = 0.0;
          }

          let physicsDeltaTime = 0.0;

          if (this.fps > 0.0) {
            physicsDeltaTime = 1.0 / this.fps;
          } else {
            physicsDeltaTime = deltaTime;
          }

          const controller = this.controller;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          const {
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
            const start = this._parametersCache.length;
            this._parametersCache.length = parameters.length;

            this._parametersCache.fill(0, start);
          }

          if (this._parametersInputCache == null) {
            this._parametersInputCache = new Array(parameters.length).fill(0);
          }

          if (this._parametersInputCache.length < parameters.length) {
            const start = this._parametersInputCache.length;
            this._parametersInputCache.length = parameters.length;

            this._parametersInputCache.fill(0, start);

            for (var i = 0; i < this._parametersInputCache.length; i++) {
              this._parametersInputCache[i] = this._parametersCache[i];
            }
          }

          while (this._currentRemainTime >= physicsDeltaTime) {
            let inputWeight = physicsDeltaTime / this._currentRemainTime; // Calculate the input at the timing to UpdateParticles by linear interpolation with the _parameterInputCache and parameterValue.
            // _parameterCache needs to be separated from _parameterInputCache because of its role in propagating values between groups.

            for (let i = 0; i < parameters.length; i++) {
              this._parametersCache[i] = this._parametersInputCache[i] * (1.0 - inputWeight) + parameters[i].value * inputWeight;
              this._parametersInputCache[i] = this._parametersCache[i];
            }

            for (let i = 0; i < this.subRigs.length; i++) {
              const subRig = this.subRigs[i];

              if (subRig == null) {
                console.assert(subRig != null);
                continue;
              }

              subRig.evaluate(physicsDeltaTime);
            }

            this._currentRemainTime -= physicsDeltaTime;
          }

          let alpha = this._currentRemainTime / physicsDeltaTime;

          for (let i = 0; i < this.subRigs.length; i++) {
            const subRig = this.subRigs[i];

            if (subRig == null) {
              console.assert(subRig != null);
              continue;
            }

            subRig.interpolate(alpha);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "subRigs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array(0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gravity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
            error: Error()
          }), CubismPhysics) : CubismPhysics).gravity.clone();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wind", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
            error: Error()
          }), CubismPhysics) : CubismPhysics).wind.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fps", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_currentRemainTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_parametersCache", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array(0);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_parametersInputCache", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array(0);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fad0c474c52d7d43baf0ef0b0c563729a6c3a711.js.map
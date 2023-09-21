System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, Component, random, _decorator, CubismEyeBlinkController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CubismAutoEyeBlinkInput, Phase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismEyeBlinkController(extras) {
    _reporterNs.report("CubismEyeBlinkController", "./CubismEyeBlinkController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      random = _cc.random;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismEyeBlinkController = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "354celTWN5DZ7/0xFPibXh+", "CubismAutoEyeBlinkInput", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', 'Component', 'random', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** Automatic mouth movement. */

      _export("default", CubismAutoEyeBlinkInput = (_dec = ccclass('CubismAutoEyeBlinkInput'), _dec2 = property({
        type: CCFloat,
        serializable: true,
        range: [1.0, 10.0, 0.001]
      }), _dec3 = property({
        type: CCFloat,
        serializable: true,
        range: [0.5, 5.0, 0.001]
      }), _dec4 = property({
        type: CCFloat,
        serializable: true,
        range: [1.0, 20.0, 0.001]
      }), _dec(_class = (_class2 = class CubismAutoEyeBlinkInput extends Component {
        constructor() {
          super(...arguments);

          /** Mean time between eye blinks in seconds. */
          _initializerDefineProperty(this, "mean", _descriptor, this);

          /** Maximum deviation from {@link mean} in seconds. */
          _initializerDefineProperty(this, "maximumDeviation", _descriptor2, this);

          /** Timescale. */
          _initializerDefineProperty(this, "timescale", _descriptor3, this);

          /** Target controller. */
          this._controller = null;

          /** Time until next eye blink. */
          this._t = 0;

          /** Control over whether output should be evaluated. */
          this._currentPhase = Phase.Idling;

          /** Used for switching from {@link Phase.ClosingEyes} to {@link Phase.OpeningEyes} and back to {@link Phase.Idling. */
          this._lastValue = 0;
        }

        get controller() {
          return this._controller;
        }

        set controller(value) {
          this._controller = value;
        }

        get t() {
          return this._t;
        }

        set t(value) {
          this._t = value;
        }

        get currentPhase() {
          return this._currentPhase;
        }

        set currentPhase(value) {
          this._currentPhase = value;
        }

        get lastValue() {
          return this._lastValue;
        }

        set lastValue(value) {
          this._lastValue = value;
        }
        /** Resets the input. */


        reset() {
          this.t = 0;
        }

        resetInEditor() {
          this.reset();
        } //#region Cocos Creator Event Handling

        /** Called by Cocos Creator. Initializes input. */


        start() {
          this.controller = this.getComponent(_crd && CubismEyeBlinkController === void 0 ? (_reportPossibleCrUseOfCubismEyeBlinkController({
            error: Error()
          }), CubismEyeBlinkController) : CubismEyeBlinkController);
        }
        /**
         * Called by Cocos Creator. Updates controller.
         *
         * Make sure this method is called after any animations are evaluated.
         */


        lateUpdate(dt) {
          // Fail silently.
          if (this.controller == null) {
            return;
          } // Wait for time until blink.


          if (this.currentPhase == Phase.Idling) {
            this.t -= dt;

            if (this.t < 0) {
              this.t = Math.PI * -0.5;
              this.lastValue = 1;
              this.currentPhase = Phase.ClosingEyes;
            } else {
              return;
            }
          } // Evaluate eye blinking.


          this.t += dt * this.timescale;
          var value = Math.abs(Math.sin(this.t));

          if (this.currentPhase == Phase.ClosingEyes && value > this.lastValue) {
            this.currentPhase = Phase.OpeningEyes;
          } else if (this.currentPhase == Phase.OpeningEyes && value < this.lastValue) {
            value = 1;
            this.currentPhase = Phase.Idling;
            var range = this.maximumDeviation * 2;
            this.t = this.mean + random() * range - this.maximumDeviation;
          }

          this.controller.eyeOpening = value;
          this.lastValue = value;
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mean", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maximumDeviation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "timescale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10.0;
        }
      })), _class2)) || _class));

      /** Internal states. */
      Phase = /*#__PURE__*/function (Phase) {
        Phase[Phase["Idling"] = 0] = "Idling";
        Phase[Phase["ClosingEyes"] = 1] = "ClosingEyes";
        Phase[Phase["OpeningEyes"] = 2] = "OpeningEyes";
        return Phase;
      }(Phase || {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f1cee122fc4303662f3c3d0b18acc0da423b5aa.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioSource, CCFloat, Component, Enum, math, _decorator, MathExtensions, CubismAudioSamplingQuality, CubismMouthController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, requireComponent, CubismAudioMouthInput;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMathExtensions(extras) {
    _reporterNs.report("MathExtensions", "../../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismAudioSamplingQuality(extras) {
    _reporterNs.report("CubismAudioSamplingQuality", "./CubismAudioSamplingQuality", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMouthController(extras) {
    _reporterNs.report("CubismMouthController", "./CubismMouthController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioSource = _cc.AudioSource;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Enum = _cc.Enum;
      math = _cc.math;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      MathExtensions = _unresolved_2.MathExtensions;
    }, function (_unresolved_3) {
      CubismAudioSamplingQuality = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismMouthController = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea145WcDapI5IqAGA53USF0", "CubismAudioMouthInput", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['AudioPCMDataView', 'AudioSource', 'CCFloat', 'Component', 'Enum', 'math', '_decorator']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("default", CubismAudioMouthInput = (_dec = ccclass('CubismAudioMouthInput'), _dec2 = requireComponent(_crd && CubismMouthController === void 0 ? (_reportPossibleCrUseOfCubismMouthController({
        error: Error()
      }), CubismMouthController) : CubismMouthController), _dec3 = property(AudioSource), _dec4 = property({
        type: Enum(_crd && CubismAudioSamplingQuality === void 0 ? (_reportPossibleCrUseOfCubismAudioSamplingQuality({
          error: Error()
        }), CubismAudioSamplingQuality) : CubismAudioSamplingQuality)
      }), _dec5 = property({
        type: CCFloat,
        slide: true,
        range: [1.0, 10.0, 0.01]
      }), _dec6 = property({
        type: CCFloat,
        slide: true,
        range: [0.0, 1.0, 0.01]
      }), _dec(_class = _dec2(_class = (_class2 = class CubismAudioMouthInput extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "audioInput", _descriptor, this);

          _initializerDefineProperty(this, "samplingQuality", _descriptor2, this);

          _initializerDefineProperty(this, "gain", _descriptor3, this);

          _initializerDefineProperty(this, "smoothing", _descriptor4, this);

          this._samples = null;
          this._lastRms = 0.0;
          this.velocityBuffer = 0.0;
          this._target = null;
          this.isInitializing = false;
          this.sampleRate = 0;
        }

        get samples() {
          return this._samples;
        }

        set samples(value) {
          this._samples = value;
        }

        get lastRms() {
          return this._lastRms;
        }

        set lastRms(value) {
          this._lastRms = value;
        }

        get target() {
          return this._target;
        }

        set target(value) {
          this._target = value;
        }

        get isInitialized() {
          return this.samples != null;
        }

        tryInitialize() {
          // Return early if already initialized.
          if (this.isInitializing || this.isInitialized) {
            return;
          } // Initialize samples data.


          this.initSamples(); // Cache target.

          this.target = this.getComponent(_crd && CubismMouthController === void 0 ? (_reportPossibleCrUseOfCubismMouthController({
            error: Error()
          }), CubismMouthController) : CubismMouthController);
        }

        async initSamples() {
          if (this.audioInput == null) {
            return;
          }

          this.isInitializing = true;
          const sampleRatePromise = this.audioInput.getSampleRate();
          const pcmPromise = this.audioInput.getPCMData(0);
          const {
            0: sampleRate,
            1: pcm
          } = await Promise.all([sampleRatePromise, pcmPromise]);

          if (pcm != null) {
            this.samples = pcm;
            this.sampleRate = sampleRate > 0 ? sampleRate : 0;
          }

          this.isInitializing = false;
        }

        update(deltaTime) {
          const {
            audioInput,
            samples,
            target,
            sampleRate,
            gain,
            smoothing
          } = this; // 'Fail' silently.

          if (audioInput == null || target == null || samples == null || sampleRate == 0) {
            return;
          }

          const {
            trunc,
            sqrt
          } = Math;
          const {
            currentTime
          } = audioInput;
          const pos = trunc(currentTime * this.sampleRate);
          let length = 256;

          switch (this.samplingQuality) {
            case (_crd && CubismAudioSamplingQuality === void 0 ? (_reportPossibleCrUseOfCubismAudioSamplingQuality({
              error: Error()
            }), CubismAudioSamplingQuality) : CubismAudioSamplingQuality).veryHigh:
              length = 256;
              break;

            case (_crd && CubismAudioSamplingQuality === void 0 ? (_reportPossibleCrUseOfCubismAudioSamplingQuality({
              error: Error()
            }), CubismAudioSamplingQuality) : CubismAudioSamplingQuality).maximum:
              length = 512;
              break;

            default:
              length = 256;
              break;
          } // Sample audio.


          let total = 0.0;

          for (let i = 0; i < length; i++) {
            const sample = samples.getData((pos + i) % samples.length);
            total += sample * sample;
          } // Compute root mean square over samples.


          let rms = sqrt(total / length) * gain; // Clamp root mean square.

          rms = math.clamp01(rms); // Smooth rms.

          const output = (_crd && MathExtensions === void 0 ? (_reportPossibleCrUseOfMathExtensions({
            error: Error()
          }), MathExtensions) : MathExtensions).Float.smoothDamp(this.lastRms, rms, this.velocityBuffer, smoothing * 0.1, undefined, deltaTime);
          rms = output[0];
          this.velocityBuffer = output[1]; // Set rms as mouth opening and store it for next evaluation.

          target.mouthOpening = rms;
          this.lastRms = rms;
        }

        onEnable() {
          this.tryInitialize();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioInput", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "samplingQuality", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && CubismAudioSamplingQuality === void 0 ? (_reportPossibleCrUseOfCubismAudioSamplingQuality({
            error: Error()
          }), CubismAudioSamplingQuality) : CubismAudioSamplingQuality).high;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gain", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "smoothing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.0;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=464ce400ae7eb8e1fdf2c06629ca02511fc5c3b8.js.map
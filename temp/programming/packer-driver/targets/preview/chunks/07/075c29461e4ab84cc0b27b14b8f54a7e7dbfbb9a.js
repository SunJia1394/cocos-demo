System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, animation, game, Component, math, ComponentExtensionMethods, CubismParameterStore, CubismUpdateController, CubismUpdateExecutionOrder, ICubismUpdatable, CubismFadeMath, CubismFadeMotionList, _SYMBOL, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CubismFadeController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterStore(extras) {
    _reporterNs.report("CubismParameterStore", "../CubismParameterStore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateController(extras) {
    _reporterNs.report("CubismUpdateController", "../CubismUpdateController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateExecutionOrder(extras) {
    _reporterNs.report("CubismUpdateExecutionOrder", "../CubismUpdateExecutionOrder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismUpdatable(extras) {
    _reporterNs.report("ICubismUpdatable", "../ICubismUpdatable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismFadeMath(extras) {
    _reporterNs.report("CubismFadeMath", "./CubismFadeMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismFadeMotionList(extras) {
    _reporterNs.report("CubismFadeMotionList", "./CubismFadeMotionList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismFadeState(extras) {
    _reporterNs.report("ICubismFadeState", "./ICubismFadeState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPart(extras) {
    _reporterNs.report("CubismPart", "../../Core/CubismPart", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      animation = _cc.animation;
      game = _cc.game;
      Component = _cc.Component;
      math = _cc.math;
    }, function (_unresolved_2) {
      ComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismParameterStore = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismUpdateController = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismUpdateExecutionOrder = _unresolved_5.default;
    }, function (_unresolved_6) {
      ICubismUpdatable = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismFadeMath = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismFadeMotionList = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "737a1a5MvhKt5IWG8G6X233", "CubismFadeController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'animation', 'game', 'RealCurve', 'Component', 'math']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CubismFadeController = (_dec = ccclass('CubismFadeController'), _dec2 = property(_crd && CubismFadeMotionList === void 0 ? (_reportPossibleCrUseOfCubismFadeMotionList({
        error: Error()
      }), CubismFadeMotionList) : CubismFadeMotionList), _dec3 = property({
        serializable: false,
        visible: false
      }), _dec(_class = (_class2 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismFadeController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cubismFadeMotionList", _descriptor, this);

          this._destinationParameters = null;
          this._destinationParts = null;
          this._motionController = null;

          //[TODO]
          _initializerDefineProperty(this, "_hasUpdateController", _descriptor2, this);

          this._fadeStates = null;
          this._animator = null;
          this._parameterStore = null;
          this._isFading = null;

          /** ICubismUpdatable Binded callback function. */
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);

          /** ICubismUpdatable metadata */
          this[_SYMBOL] = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).SYMBOL;
        }

        get destinationParameters() {
          return this._destinationParameters;
        }

        set destinationParameters(value) {
          this._destinationParameters = value;
        }

        get destinationParts() {
          return this._destinationParts;
        }

        set destinationParts(value) {
          this._destinationParts = value;
        }

        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        }

        refresh() {
          var _findCubismModel$para, _findCubismModel, _findCubismModel$part, _findCubismModel2;

          this._animator = this.getComponent(animation.AnimationController); // Fail silently...

          if (this._animator == null) {
            return;
          }

          this.destinationParameters = (_findCubismModel$para = (_findCubismModel = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this)) == null ? void 0 : _findCubismModel.parameters) != null ? _findCubismModel$para : null;
          this.destinationParts = (_findCubismModel$part = (_findCubismModel2 = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this)) == null ? void 0 : _findCubismModel2.parts) != null ? _findCubismModel$part : null; // this._motionController = this.getComponent(CubismMotionController);[TODO]

          this._parameterStore = this.getComponent(_crd && CubismParameterStore === void 0 ? (_reportPossibleCrUseOfCubismParameterStore({
            error: Error()
          }), CubismParameterStore) : CubismParameterStore); // Get cubism update controller.

          this.hasUpdateController = this.getComponent(_crd && CubismUpdateController === void 0 ? (_reportPossibleCrUseOfCubismUpdateController({
            error: Error()
          }), CubismUpdateController) : CubismUpdateController) != null; // this._fadeStates = this._animator.GetBehaviours(CubismFadeStateObserver) as ICubismFadeState[];[TODO]

          if ((this._fadeStates == null || this._fadeStates.length == 0) && this._motionController != null) {// this._fadeStates = this._motionController.GetFadeStates();[TODO]
          }

          if (this._fadeStates == null) {
            return;
          }

          this._isFading = new Array(this._fadeStates.length);
        }

        get executionOrder() {
          return (_crd && CubismUpdateExecutionOrder === void 0 ? (_reportPossibleCrUseOfCubismUpdateExecutionOrder({
            error: Error()
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_FADE_CONTROLLER;
        }

        get needsUpdateOnEditing() {
          return false;
        }

        onLateUpdate(deltaTime) {
          // Fail silently.
          if (!this.enabled || this._fadeStates == null || this._parameterStore == null || this.destinationParameters == null || this.destinationParts == null || this._isFading == null
          /*To Cocos*/
          ) {
            return;
          }

          var time = game.totalTime;

          for (var i = 0; i < this._fadeStates.length; ++i) {
            this._isFading[i] = false;

            var playingMotions = this._fadeStates[i].getPlayingMotions();

            if (playingMotions == null || playingMotions.length <= 1) {
              continue;
            }

            var latestPlayingMotion = playingMotions[playingMotions.length - 1];
            var playingMotionData = latestPlayingMotion.motion;
            var elapsedTime = time - latestPlayingMotion.startTime;

            if ((playingMotionData == null ? void 0 : playingMotionData.parameterFadeInTimes) != null) {
              for (var j = 0; j < playingMotionData.parameterFadeInTimes.length; j++) {
                if (elapsedTime <= playingMotionData.fadeInTime || 0 <= playingMotionData.parameterFadeInTimes[j] && elapsedTime <= playingMotionData.parameterFadeInTimes[j]) {
                  this._isFading[i] = true;
                  break;
                }
              }
            }
          }

          var isFadingAllFinished = true;

          for (var _i = 0; _i < this._fadeStates.length; ++_i) {
            var _playingMotions = this._fadeStates[_i].getPlayingMotions();

            if (_playingMotions == null) {
              continue;
            }

            var playingMotionCount = _playingMotions.length - 1;

            if (this._isFading[_i]) {
              isFadingAllFinished = false;
              continue;
            }

            for (var _j = playingMotionCount; _j >= 0; --_j) {
              if (_playingMotions.length <= 1) {
                break;
              }

              var playingMotion = _playingMotions[_j];

              if (time <= playingMotion.endTime) {
                continue;
              } // If fade-in has been completed, delete the motion that has been played back.


              this._fadeStates[_i].stopAnimation(_j);
            }
          }

          if (isFadingAllFinished) {
            return;
          }

          this._parameterStore.restoreParameters(); // Update sources and destinations.


          for (var _i2 = 0; _i2 < this._fadeStates.length; ++_i2) {
            if (!this._isFading[_i2]) {
              continue;
            }

            this.updateFade(this._fadeStates[_i2]);
          }
        }

        updateFade(fadeState) {
          var playingMotions = fadeState.getPlayingMotions();

          if (playingMotions == null || this.destinationParameters == null
          /*To Cocos*/
          || this.destinationParts == null
          /*To Cocos*/
          ) {
            // Do not process if there is only one motion, if it does not switch.
            return;
          } // Weight set for the layer being processed.
          // (In the case of the layer located at the top, it is forced to 1.)


          var layerWeight = fadeState.getLayerWeight();
          var time = game.totalTime; // Set playing motions end time.

          if (playingMotions.length > 0 && playingMotions[playingMotions.length - 1].motion != null && playingMotions[playingMotions.length - 1].isLooping) {
            var motion = playingMotions[playingMotions.length - 1];

            if (motion.motion != null) {
              var newEndTime = time + motion.motion.fadeOutTime;
              motion.endTime = newEndTime;

              while (true) {
                if (motion.startTime + motion.motion.motionLength >= time) {
                  break;
                }

                motion.startTime += motion.motion.motionLength;
              }

              playingMotions[playingMotions.length - 1] = motion;
            }
          } // Calculate MotionFade.


          for (var i = 0; i < playingMotions.length; i++) {
            var playingMotion = playingMotions[i];
            var fadeMotion = playingMotion.motion;

            if (fadeMotion == null || fadeMotion.parameterIds == null || fadeMotion.parameterCurves == null || fadeMotion.parameterFadeInTimes == null || fadeMotion.parameterFadeOutTimes == null) {
              continue;
            }

            var elapsedTime = time - playingMotion.startTime;
            var endTime = playingMotion.endTime - elapsedTime;
            var fadeInTime = fadeMotion.fadeInTime;
            var fadeOutTime = fadeMotion.fadeOutTime;
            var fadeInWeight = fadeInTime <= 0.0 ? 1.0 : (_crd && CubismFadeMath === void 0 ? (_reportPossibleCrUseOfCubismFadeMath({
              error: Error()
            }), CubismFadeMath) : CubismFadeMath).getEasingSine(elapsedTime / fadeInTime);
            var fadeOutWeight = fadeOutTime <= 0.0 ? 1.0 : (_crd && CubismFadeMath === void 0 ? (_reportPossibleCrUseOfCubismFadeMath({
              error: Error()
            }), CubismFadeMath) : CubismFadeMath).getEasingSine((playingMotion.endTime - game.totalTime) / fadeOutTime);
            playingMotions[i] = playingMotion;
            var motionWeight = i == 0 ? fadeInWeight * fadeOutWeight : fadeInWeight * fadeOutWeight * layerWeight; // Apply to parameter values

            for (var j = 0; j < this.destinationParameters.length; ++j) {
              var index = -1;

              for (var k = 0; k < fadeMotion.parameterIds.length; ++k) {
                if (fadeMotion.parameterIds[k] != this.destinationParameters[j].id) {
                  continue;
                }

                index = k;
                break;
              }

              if (index < 0) {
                // There is not target ID curve in motion.
                continue;
              }

              this.destinationParameters[j].value = this.evaluate(fadeMotion.parameterCurves[index], elapsedTime, endTime, fadeInWeight, fadeOutWeight, fadeMotion.parameterFadeInTimes[index], fadeMotion.parameterFadeOutTimes[index], motionWeight, this.destinationParameters[j].value);
            } // Apply to part opacities


            for (var _j2 = 0; _j2 < this.destinationParts.length; ++_j2) {
              var _index = -1;

              for (var _k = 0; _k < fadeMotion.parameterIds.length; ++_k) {
                if (fadeMotion.parameterIds[_k] != this.destinationParts[_j2].id) {
                  continue;
                }

                _index = _k;
                break;
              }

              if (_index < 0) {
                // There is not target ID curve in motion.
                continue;
              }

              this.destinationParts[_j2].opacity = this.evaluate(fadeMotion.parameterCurves[_index], elapsedTime, endTime, fadeInWeight, fadeOutWeight, fadeMotion.parameterFadeInTimes[_index], fadeMotion.parameterFadeOutTimes[_index], motionWeight, this.destinationParts[_j2].opacity);
            }
          }
        }

        evaluate(curve, elapsedTime, endTime, fadeInTime, fadeOutTime, parameterFadeInTime, parameterFadeOutTime, motionWeight, currentValue) {
          if (curve.keyframes.length <= 0) {
            return currentValue;
          } // Motion fade.


          if (parameterFadeInTime < 0.0 && parameterFadeOutTime < 0.0) {
            return currentValue + (curve.evaluate(elapsedTime) - currentValue) * motionWeight;
          } // Parameter fade.


          var fadeInWeight, fadeOutWeight;

          if (parameterFadeInTime < 0.0) {
            fadeInWeight = fadeInTime;
          } else {
            fadeInWeight = parameterFadeInTime < math.EPSILON ? 1.0 : (_crd && CubismFadeMath === void 0 ? (_reportPossibleCrUseOfCubismFadeMath({
              error: Error()
            }), CubismFadeMath) : CubismFadeMath).getEasingSine(elapsedTime / parameterFadeInTime);
          }

          if (parameterFadeOutTime < 0.0) {
            fadeOutWeight = fadeOutTime;
          } else {
            fadeOutWeight = parameterFadeOutTime < math.EPSILON ? 1.0 : (_crd && CubismFadeMath === void 0 ? (_reportPossibleCrUseOfCubismFadeMath({
              error: Error()
            }), CubismFadeMath) : CubismFadeMath).getEasingSine(endTime / parameterFadeOutTime);
          }

          var parameterWeight = fadeInWeight * fadeOutWeight;
          return currentValue + (curve.evaluate(elapsedTime) - currentValue) * parameterWeight;
        }

        onEnable() {
          // Initialize cache.
          this.refresh();
        }

        lateUpdate(deltaTime) {
          if (!this.hasUpdateController) {
            this.onLateUpdate(deltaTime);
          }
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubismFadeMotionList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_hasUpdateController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=075c29461e4ab84cc0b27b14b8f54a7e7dbfbb9a.js.map
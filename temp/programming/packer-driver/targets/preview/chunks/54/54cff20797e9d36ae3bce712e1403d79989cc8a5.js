System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, animation, game, Component, math, ComponentExtensionMethods, CubismParameterStore, CubismUpdateController, CubismUpdateExecutionOrder, ICubismUpdatable, CubismFadeMath, CubismFadeMotionList, _ICubismUpdatable$SYM, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, ccclass, property, CubismFadeController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      animation = _cc.animation;
      game = _cc.game;
      Component = _cc.Component;
      math = _cc.math;
    }, function (_unresolved_) {
      ComponentExtensionMethods = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismParameterStore = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismUpdateController = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismUpdateExecutionOrder = _unresolved_4.default;
    }, function (_unresolved_5) {
      ICubismUpdatable = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismFadeMath = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismFadeMotionList = _unresolved_7.default;
    }],
    execute: function () {
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

      _export("default", CubismFadeController = (_dec = ccclass('CubismFadeController'), _dec2 = property(CubismFadeMotionList), _dec3 = property({
        serializable: false,
        visible: false
      }), _dec(_class = (_class2 = (_ICubismUpdatable$SYM = ICubismUpdatable.SYMBOL, class CubismFadeController extends Component {
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
          this[_ICubismUpdatable$SYM] = ICubismUpdatable.SYMBOL;
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
          var _ComponentExtensionMe, _ComponentExtensionMe2, _ComponentExtensionMe3, _ComponentExtensionMe4;

          this._animator = this.getComponent(animation.AnimationController); // Fail silently...

          if (this._animator == null) {
            return;
          }

          this.destinationParameters = (_ComponentExtensionMe = (_ComponentExtensionMe2 = ComponentExtensionMethods.findCubismModel(this)) == null ? void 0 : _ComponentExtensionMe2.parameters) != null ? _ComponentExtensionMe : null;
          this.destinationParts = (_ComponentExtensionMe3 = (_ComponentExtensionMe4 = ComponentExtensionMethods.findCubismModel(this)) == null ? void 0 : _ComponentExtensionMe4.parts) != null ? _ComponentExtensionMe3 : null; // this._motionController = this.getComponent(CubismMotionController);[TODO]

          this._parameterStore = this.getComponent(CubismParameterStore); // Get cubism update controller.

          this.hasUpdateController = this.getComponent(CubismUpdateController) != null; // this._fadeStates = this._animator.GetBehaviours(CubismFadeStateObserver) as ICubismFadeState[];[TODO]

          if ((this._fadeStates == null || this._fadeStates.length == 0) && this._motionController != null) {// this._fadeStates = this._motionController.GetFadeStates();[TODO]
          }

          if (this._fadeStates == null) {
            return;
          }

          this._isFading = new Array(this._fadeStates.length);
        }

        get executionOrder() {
          return CubismUpdateExecutionOrder.CUBISM_FADE_CONTROLLER;
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
            var fadeInWeight = fadeInTime <= 0.0 ? 1.0 : CubismFadeMath.getEasingSine(elapsedTime / fadeInTime);
            var fadeOutWeight = fadeOutTime <= 0.0 ? 1.0 : CubismFadeMath.getEasingSine((playingMotion.endTime - game.totalTime) / fadeOutTime);
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
            fadeInWeight = parameterFadeInTime < math.EPSILON ? 1.0 : CubismFadeMath.getEasingSine(elapsedTime / parameterFadeInTime);
          }

          if (parameterFadeOutTime < 0.0) {
            fadeOutWeight = fadeOutTime;
          } else {
            fadeOutWeight = parameterFadeOutTime < math.EPSILON ? 1.0 : CubismFadeMath.getEasingSine(endTime / parameterFadeOutTime);
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
    }
  };
});
//# sourceMappingURL=54cff20797e9d36ae3bce712e1403d79989cc8a5.js.map
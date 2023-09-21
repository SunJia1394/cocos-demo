System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, Component, game, math, _decorator, ComponentExtensionMethods, CubismParameterBlendMode, CubismParameterExtensionMethods, CubismUpdateController, CubismUpdateExecutionOrder, ICubismUpdatable, CubismFadeMath, CubismExpressionList, CubismPlayingExpression, _SYMBOL, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CubismExpressionController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterBlendMode(extras) {
    _reporterNs.report("CubismParameterBlendMode", "../CubismParameterBlendMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterExtensionMethods(extras) {
    _reporterNs.report("CubismParameterExtensionMethods", "../CubismParameterExtensionMethods", _context.meta, extras);
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
    _reporterNs.report("CubismFadeMath", "../MotionFade/CubismFadeMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismExpressionList(extras) {
    _reporterNs.report("CubismExpressionList", "./CubismExpressionList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPlayingExpression(extras) {
    _reporterNs.report("CubismPlayingExpression", "./CubismPlayingExpression", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismModel(extras) {
    _reporterNs.report("CubismModel", "../../Core/CubismModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      game = _cc.game;
      math = _cc.math;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismParameterBlendMode = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismParameterExtensionMethods = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismUpdateController = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismUpdateExecutionOrder = _unresolved_6.default;
    }, function (_unresolved_7) {
      ICubismUpdatable = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismFadeMath = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismExpressionList = _unresolved_9.default;
    }, function (_unresolved_10) {
      CubismPlayingExpression = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35340LI/SVMH4HiUIMoS5Vt", "CubismExpressionController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCBoolean', 'CCInteger', 'Component', 'game', 'math', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CubismExpressionController = (_dec = ccclass('CubismExpressionController'), _dec2 = property({
        type: _crd && CubismExpressionList === void 0 ? (_reportPossibleCrUseOfCubismExpressionList({
          error: Error()
        }), CubismExpressionList) : CubismExpressionList,
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: CCInteger,
        serializable: true,
        visible: true
      }), _dec4 = property({
        serializable: true,
        visible: false
      }), _dec(_class = (_class2 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismExpressionController extends Component {
        constructor(...args) {
          super(...args);

          //#region variable

          /** Expressions data list. */
          _initializerDefineProperty(this, "expressionsList", _descriptor, this);

          /** CubismModel cache. */
          this._model = null;

          /** Playing expressions index. */
          _initializerDefineProperty(this, "currentExpressionIndex", _descriptor2, this);

          /** Playing expressions. */
          this._playingExpressions = new Array();

          /** Last playing expressions index. */
          this._lastExpressionIndex = -1;

          // int
          _initializerDefineProperty(this, "_hasUpdateController", _descriptor3, this);

          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);
          //#endregion
          this[_SYMBOL] = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).SYMBOL;
        }

        /** Model has update controller component. */
        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        } //#endregion

        /** Add new expression to playing expressions. */


        startExpression() {
          // Fail silently...
          if (this.expressionsList == null || this.expressionsList.cubismExpressionObjects == null) {
            return;
          } // Backup expression.


          this._lastExpressionIndex = this.currentExpressionIndex; // Set last expression end time

          const playingExpressions = this._playingExpressions;

          if (playingExpressions.length > 0) {
            const playingExpression = playingExpressions[playingExpressions.length - 1];
            playingExpression.expressionEndTime = playingExpression.expressionUserTime + playingExpression.fadeOutTime;
            playingExpressions[playingExpressions.length - 1] = playingExpression;
          }

          const expressionsList = this.expressionsList; // Fail silently...

          if (this.currentExpressionIndex < 0 || this.currentExpressionIndex >= expressionsList.cubismExpressionObjects.length) {
            return;
          }

          if (this._model == null) {
            console.error('CubismExpressionController.startExpression(): model is null.');
            return;
          }

          const palyingExpression = (_crd && CubismPlayingExpression === void 0 ? (_reportPossibleCrUseOfCubismPlayingExpression({
            error: Error()
          }), CubismPlayingExpression) : CubismPlayingExpression).create(this._model, expressionsList.cubismExpressionObjects[this.currentExpressionIndex]);

          if (palyingExpression == null) {
            return;
          } // Add to PlayingExList.


          playingExpressions.push(palyingExpression);
        }
        /** Called by cubism update controller. Order to invoke OnLateUpdate. */


        get executionOrder() {
          return (_crd && CubismUpdateExecutionOrder === void 0 ? (_reportPossibleCrUseOfCubismUpdateExecutionOrder({
            error: Error()
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_EXPRESSION_CONTROLLER;
        }
        /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */


        get needsUpdateOnEditing() {
          return false;
        }
        /** Called by cubism update manager. */


        onLateUpdate() {
          // Fail silently...
          if (!this.enabled || this._model == null) {
            return;
          } // Start expression when current expression changed.


          if (this.currentExpressionIndex != this._lastExpressionIndex) {
            this.startExpression();
          } // Update expression


          for (let expressionIndex = 0; expressionIndex < this._playingExpressions.length; ++expressionIndex) {
            const playingExpression = this._playingExpressions[expressionIndex]; // Update expression user time.

            playingExpression.expressionUserTime += game.deltaTime; // Update weight

            const fadeIn = Math.abs(playingExpression.fadeInTime) < math.EPSILON ? 1.0 : (_crd && CubismFadeMath === void 0 ? (_reportPossibleCrUseOfCubismFadeMath({
              error: Error()
            }), CubismFadeMath) : CubismFadeMath).getEasingSine(playingExpression.expressionUserTime / playingExpression.fadeInTime);
            const fadeOut = Math.abs(playingExpression.expressionEndTime) < math.EPSILON || playingExpression.expressionEndTime < 0.0 ? 1.0 : (_crd && CubismFadeMath === void 0 ? (_reportPossibleCrUseOfCubismFadeMath({
              error: Error()
            }), CubismFadeMath) : CubismFadeMath).getEasingSine((playingExpression.expressionEndTime - playingExpression.expressionUserTime) / playingExpression.fadeOutTime);
            playingExpression.weight = fadeIn * fadeOut; // Apply value.

            for (let i = 0; i < playingExpression.destinations.length; i++) {
              // Fail silently...
              const destination = playingExpression.destinations[i];

              if (destination == null) {
                continue;
              }

              switch (playingExpression.blend[i]) {
                case (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
                  error: Error()
                }), CubismParameterBlendMode) : CubismParameterBlendMode).Additive:
                  (_crd && CubismParameterExtensionMethods === void 0 ? (_reportPossibleCrUseOfCubismParameterExtensionMethods({
                    error: Error()
                  }), CubismParameterExtensionMethods) : CubismParameterExtensionMethods).addToValue(destination, playingExpression.value[i], playingExpression.weight);
                  break;

                case (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
                  error: Error()
                }), CubismParameterBlendMode) : CubismParameterBlendMode).Multiply:
                  (_crd && CubismParameterExtensionMethods === void 0 ? (_reportPossibleCrUseOfCubismParameterExtensionMethods({
                    error: Error()
                  }), CubismParameterExtensionMethods) : CubismParameterExtensionMethods).multiplyValueBy(destination, playingExpression.value[i], playingExpression.weight);
                  break;

                case (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
                  error: Error()
                }), CubismParameterBlendMode) : CubismParameterBlendMode).Override:
                  destination.value = destination.value * (1 - playingExpression.weight) + playingExpression.value[i] * playingExpression.weight;
                  break;

                default:
                  // When an unspecified value is set, it is already in addition mode.
                  break;
              }
            } // Apply update value


            this._playingExpressions[expressionIndex] = playingExpression;
          } // Remove expression from playing expressions


          for (let expressionIndex = this._playingExpressions.length - 1; expressionIndex >= 0; --expressionIndex) {
            if (this._playingExpressions[expressionIndex].weight > 0.0) {
              continue;
            } // RemoveAt


            for (let i = expressionIndex + 1; i < this._playingExpressions.length; i++) {
              this._playingExpressions[i - 1] = this._playingExpressions[i];
            }

            this._playingExpressions.length -= 1;
          }
        }

        //#region Cocos Creator Event Handling

        /** Called by Cocos Creator. */
        onEnable() {
          this._model = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this); // Get cubism update controller.

          this.hasUpdateController = this.getComponent(_crd && CubismUpdateController === void 0 ? (_reportPossibleCrUseOfCubismUpdateController({
            error: Error()
          }), CubismUpdateController) : CubismUpdateController) != null;
        }
        /** Called by Cocos Creator. */


        lateUpdate() {
          if (!this.hasUpdateController) {
            this.onLateUpdate();
          }
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "expressionsList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentExpressionIndex", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_hasUpdateController", [_dec4], {
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
//# sourceMappingURL=61868351fdbbb74b54bce047e15da54b7edb7df3.js.map
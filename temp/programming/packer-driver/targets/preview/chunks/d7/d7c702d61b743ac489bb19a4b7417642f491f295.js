System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, Component, game, math, _decorator, ComponentExtensionMethods, CubismParameterBlendMode, CubismParameterExtensionMethods, CubismUpdateController, CubismUpdateExecutionOrder, ICubismUpdatable, CubismFadeMath, CubismExpressionList, CubismPlayingExpression, _ICubismUpdatable$SYM, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, ccclass, property, CubismExpressionController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      game = _cc.game;
      math = _cc.math;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      ComponentExtensionMethods = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismParameterBlendMode = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismParameterExtensionMethods = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismUpdateController = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismUpdateExecutionOrder = _unresolved_5.default;
    }, function (_unresolved_6) {
      ICubismUpdatable = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismFadeMath = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismExpressionList = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismPlayingExpression = _unresolved_9.default;
    }],
    execute: function () {
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
        type: CubismExpressionList,
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: CCInteger,
        serializable: true,
        visible: true
      }), _dec4 = property({
        serializable: true,
        visible: false
      }), _dec(_class = (_class2 = (_ICubismUpdatable$SYM = ICubismUpdatable.SYMBOL, class CubismExpressionController extends Component {
        constructor() {
          super(...arguments);

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
          this[_ICubismUpdatable$SYM] = ICubismUpdatable.SYMBOL;
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

          var playingExpressions = this._playingExpressions;

          if (playingExpressions.length > 0) {
            var playingExpression = playingExpressions[playingExpressions.length - 1];
            playingExpression.expressionEndTime = playingExpression.expressionUserTime + playingExpression.fadeOutTime;
            playingExpressions[playingExpressions.length - 1] = playingExpression;
          }

          var expressionsList = this.expressionsList; // Fail silently...

          if (this.currentExpressionIndex < 0 || this.currentExpressionIndex >= expressionsList.cubismExpressionObjects.length) {
            return;
          }

          if (this._model == null) {
            console.error('CubismExpressionController.startExpression(): model is null.');
            return;
          }

          var palyingExpression = CubismPlayingExpression.create(this._model, expressionsList.cubismExpressionObjects[this.currentExpressionIndex]);

          if (palyingExpression == null) {
            return;
          } // Add to PlayingExList.


          playingExpressions.push(palyingExpression);
        }
        /** Called by cubism update controller. Order to invoke OnLateUpdate. */


        get executionOrder() {
          return CubismUpdateExecutionOrder.CUBISM_EXPRESSION_CONTROLLER;
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


          for (var expressionIndex = 0; expressionIndex < this._playingExpressions.length; ++expressionIndex) {
            var playingExpression = this._playingExpressions[expressionIndex]; // Update expression user time.

            playingExpression.expressionUserTime += game.deltaTime; // Update weight

            var fadeIn = Math.abs(playingExpression.fadeInTime) < math.EPSILON ? 1.0 : CubismFadeMath.getEasingSine(playingExpression.expressionUserTime / playingExpression.fadeInTime);
            var fadeOut = Math.abs(playingExpression.expressionEndTime) < math.EPSILON || playingExpression.expressionEndTime < 0.0 ? 1.0 : CubismFadeMath.getEasingSine((playingExpression.expressionEndTime - playingExpression.expressionUserTime) / playingExpression.fadeOutTime);
            playingExpression.weight = fadeIn * fadeOut; // Apply value.

            for (var i = 0; i < playingExpression.destinations.length; i++) {
              // Fail silently...
              var destination = playingExpression.destinations[i];

              if (destination == null) {
                continue;
              }

              switch (playingExpression.blend[i]) {
                case CubismParameterBlendMode.Additive:
                  CubismParameterExtensionMethods.addToValue(destination, playingExpression.value[i], playingExpression.weight);
                  break;

                case CubismParameterBlendMode.Multiply:
                  CubismParameterExtensionMethods.multiplyValueBy(destination, playingExpression.value[i], playingExpression.weight);
                  break;

                case CubismParameterBlendMode.Override:
                  destination.value = destination.value * (1 - playingExpression.weight) + playingExpression.value[i] * playingExpression.weight;
                  break;

                default:
                  // When an unspecified value is set, it is already in addition mode.
                  break;
              }
            } // Apply update value


            this._playingExpressions[expressionIndex] = playingExpression;
          } // Remove expression from playing expressions


          for (var _expressionIndex = this._playingExpressions.length - 1; _expressionIndex >= 0; --_expressionIndex) {
            if (this._playingExpressions[_expressionIndex].weight > 0.0) {
              continue;
            } // RemoveAt


            for (var _i = _expressionIndex + 1; _i < this._playingExpressions.length; _i++) {
              this._playingExpressions[_i - 1] = this._playingExpressions[_i];
            }

            this._playingExpressions.length -= 1;
          }
        }

        //#region Cocos Creator Event Handling

        /** Called by Cocos Creator. */
        onEnable() {
          this._model = ComponentExtensionMethods.findCubismModel(this); // Get cubism update controller.

          this.hasUpdateController = this.getComponent(CubismUpdateController) != null;
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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentExpressionIndex", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_hasUpdateController", [_dec4], {
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
//# sourceMappingURL=d7c702d61b743ac489bb19a4b7417642f491f295.js.map
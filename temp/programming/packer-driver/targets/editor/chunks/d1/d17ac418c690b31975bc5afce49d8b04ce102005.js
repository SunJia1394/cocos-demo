System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, ComponentExtensionMethods, CubismUpdateController, CubismUpdateExecutionOrder, ICubismUpdatable, _ICubismUpdatable$SYM, _dec, _dec2, _class, _class2, _descriptor, ccclass, property, CubismParameterStore;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      ComponentExtensionMethods = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismUpdateController = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismUpdateExecutionOrder = _unresolved_3.default;
    }, function (_unresolved_4) {
      ICubismUpdatable = _unresolved_4.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "80102+PUaZF97By00pueXq6", "CubismParameterStore", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CubismParameterStore = (_dec = ccclass('CubismParameterStore'), _dec2 = property({
        serializable: false,
        visible: false
      }), _dec(_class = (_class2 = (_ICubismUpdatable$SYM = ICubismUpdatable.SYMBOL, class CubismParameterStore extends Component {
        constructor(...args) {
          super(...args);
          this._destinationParameters = null;
          this._destinationParts = null;
          this._parameterValues = null;
          this._partOpacities = null;

          _initializerDefineProperty(this, "_hasUpdateController", _descriptor, this);

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

        get executionOrder() {
          return CubismUpdateExecutionOrder.CUBISM_PARAMETER_STORE_SAVE_PARAMETERS;
        }

        get needsUpdateOnEditing() {
          return false;
        }

        refresh() {
          if (this.destinationParameters == null) {
            var _ComponentExtensionMe, _ComponentExtensionMe2;

            this.destinationParameters = (_ComponentExtensionMe = (_ComponentExtensionMe2 = ComponentExtensionMethods.findCubismModel(this)) == null ? void 0 : _ComponentExtensionMe2.parameters) != null ? _ComponentExtensionMe : null;
          }

          if (this.destinationParts == null) {
            var _ComponentExtensionMe3, _ComponentExtensionMe4;

            this.destinationParts = (_ComponentExtensionMe3 = (_ComponentExtensionMe4 = ComponentExtensionMethods.findCubismModel(this)) == null ? void 0 : _ComponentExtensionMe4.parts) != null ? _ComponentExtensionMe3 : null;
          } // Get cubism update controller.


          this.hasUpdateController = this.getComponent(CubismUpdateController) != null;
          this.saveParameters();
        }

        onLateUpdate(deltaTime) {
          if (!this.hasUpdateController) {
            return;
          }

          this.saveParameters();
        }

        saveParameters() {
          // Fail silently...
          if (!this.enabled) {
            return;
          } // save parameters value


          if (this.destinationParameters != null && this._parameterValues == null) {
            this._parameterValues = new Array(this.destinationParameters.length);
          }

          if (this._parameterValues != null && this.destinationParameters != null) {
            for (let i = 0; i < this._parameterValues.length; ++i) {
              if (this.destinationParameters[i] != null) {
                this._parameterValues[i] = this.destinationParameters[i].value;
              }
            }
          } // save parts opacity


          if (this.destinationParts != null && this._partOpacities == null) {
            this._partOpacities = new Array(this.destinationParts.length);
          }

          if (this._partOpacities != null && this.destinationParts != null) {
            for (let i = 0; i < this._partOpacities.length; ++i) {
              this._partOpacities[i] = this.destinationParts[i].opacity;
            }
          }
        }

        restoreParameters() {
          // Fail silently...
          if (!this.enabled) {
            return;
          } // restore parameters value


          if (this._parameterValues != null && this.destinationParameters != null) {
            for (let i = 0; i < this._parameterValues.length; ++i) {
              this.destinationParameters[i].value = this._parameterValues[i];
            }
          } // restore parts opacity


          if (this._partOpacities != null && this.destinationParts != null) {
            for (let i = 0; i < this._partOpacities.length; ++i) {
              this.destinationParts[i].opacity = this._partOpacities[i];
            }
          }
        }

        onEnable() {
          // Initialize cache.
          this.refresh();
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_hasUpdateController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=d17ac418c690b31975bc5afce49d8b04ce102005.js.map
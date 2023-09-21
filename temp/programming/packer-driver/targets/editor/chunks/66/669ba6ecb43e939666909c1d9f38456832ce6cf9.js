System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, Component, Enum, _decorator, ComponentExtensionMethods, CoreComponentExtensionMethods, CubismEyeBlinkParameter, CubismParameterBlendMode, ICubismUpdatable, CubismParameter, CubismUpdateExecutionOrder, CubismUpdateController, CubismParameterExtensionMethods, _ICubismUpdatable$SYM, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, ccclass, property, CubismEyeBlinkController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      ComponentExtensionMethods = _unresolved_.default;
    }, function (_unresolved_2) {
      CoreComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismEyeBlinkParameter = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismParameterBlendMode = _unresolved_4.default;
    }, function (_unresolved_5) {
      ICubismUpdatable = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismParameter = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismUpdateExecutionOrder = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismUpdateController = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismParameterExtensionMethods = _unresolved_9.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "6a2800obpRI5ocCk9Q5d1yx", "CubismEyeBlinkController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', 'Component', 'Enum', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * {@link CubismEyeBlinkParameter} controller.
       *
       * **Sealed class**
       */

      _export("default", CubismEyeBlinkController = (_dec = ccclass('CubismEyeBlinkController'), _dec2 = property({
        type: Enum(CubismParameterBlendMode),
        visible: true,
        serializable: true
      }), _dec3 = property({
        type: CCFloat,
        visible: true,
        serializable: true,
        range: [0.0, 1.0, 0.01]
      }), _dec4 = property({
        visible: false,
        serializable: false
      }), _dec(_class = (_class2 = (_ICubismUpdatable$SYM = ICubismUpdatable.SYMBOL, class CubismEyeBlinkController extends Component {
        constructor(...args) {
          super(...args);

          /** Blend mode. */
          _initializerDefineProperty(this, "blendMode", _descriptor, this);

          /** Opening of the eyes. */
          _initializerDefineProperty(this, "eyeOpening", _descriptor2, this);

          /** Eye blink parameters cache. */
          this._destinations = null;

          /** Model has update controller component. */
          _initializerDefineProperty(this, "_hasUpdateController", _descriptor3, this);

          //#endregion

          /** ICubismUpdatable Binded callback function. */
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);

          /** ICubismUpdatable metadata */
          this[_ICubismUpdatable$SYM] = ICubismUpdatable.SYMBOL;
        }

        get destinations() {
          return this._destinations;
        }

        set destinations(value) {
          this._destinations = value;
        }

        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        }
        /** Refreshes controller. Call this method after adding and/or removing <see cref="CubismEyeBlinkParameter"/>s. */


        refresh() {
          var _tags$length;

          const model = CoreComponentExtensionMethods.findCubismModel(this); // Fail silently...

          if (model == null) {
            return;
          } // Cache destinations.


          const tags = model.parameters != null ? ComponentExtensionMethods.getComponentsMany(model.parameters, CubismEyeBlinkParameter) : null;
          this.destinations = new Array((_tags$length = tags == null ? void 0 : tags.length) != null ? _tags$length : 0);

          for (var i = 0; i < this.destinations.length; i++) {
            this.destinations[i] = tags[i].getComponent(CubismParameter);
          } // Get cubism update controller.


          this.hasUpdateController = this.getComponent(CubismUpdateController) != null;
        }
        /** Called by cubism update controller. Order to invoke OnLateUpdate. */


        get executionOrder() {
          return CubismUpdateExecutionOrder.CUBISM_EYE_BLINK_CONTROLLER;
        }
        /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */


        get needsUpdateOnEditing() {
          return false;
        }
        /** Called by cubism update controller. Updates controller. */


        onLateUpdate() {
          // Fail silently.
          if (!this.enabled || this.destinations == null) {
            return;
          } // Apply value.


          CubismParameterExtensionMethods.blendToValueArray(this.destinations, this.blendMode, this.eyeOpening);
        } //#region Cocos Creator Event Handling

        /** Called by Cocos Creator. Makes sure cache is initialized. */


        start() {
          // Initialize cache.
          this.refresh();
        }
        /** Called by Cocos Creator. */


        lateUpdate() {
          if (!this.hasUpdateController) {
            this.onLateUpdate();
          }
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blendMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return CubismParameterBlendMode.Multiply;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "eyeOpening", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
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
    }
  };
});
//# sourceMappingURL=669ba6ecb43e939666909c1d9f38456832ce6cf9.js.map
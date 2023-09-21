System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, Component, Enum, _decorator, ComponentExtensionMethods, CoreComponentExtensionMethods, CubismEyeBlinkParameter, CubismParameterBlendMode, ICubismUpdatable, CubismParameter, CubismUpdateExecutionOrder, CubismUpdateController, CubismParameterExtensionMethods, _SYMBOL, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CubismEyeBlinkController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "./ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoreComponentExtensionMethods(extras) {
    _reporterNs.report("CoreComponentExtensionMethods", "../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismEyeBlinkParameter(extras) {
    _reporterNs.report("CubismEyeBlinkParameter", "./CubismEyeBlinkParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterBlendMode(extras) {
    _reporterNs.report("CubismParameterBlendMode", "./CubismParameterBlendMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismUpdatable(extras) {
    _reporterNs.report("ICubismUpdatable", "./ICubismUpdatable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateExecutionOrder(extras) {
    _reporterNs.report("CubismUpdateExecutionOrder", "./CubismUpdateExecutionOrder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateController(extras) {
    _reporterNs.report("CubismUpdateController", "./CubismUpdateController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterExtensionMethods(extras) {
    _reporterNs.report("CubismParameterExtensionMethods", "./CubismParameterExtensionMethods", _context.meta, extras);
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
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CoreComponentExtensionMethods = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismEyeBlinkParameter = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismParameterBlendMode = _unresolved_5.default;
    }, function (_unresolved_6) {
      ICubismUpdatable = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismParameter = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismUpdateExecutionOrder = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismUpdateController = _unresolved_9.default;
    }, function (_unresolved_10) {
      CubismParameterExtensionMethods = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

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
        type: Enum(_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
          error: Error()
        }), CubismParameterBlendMode) : CubismParameterBlendMode),
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
      }), _dec(_class = (_class2 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismEyeBlinkController extends Component {
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
          this[_SYMBOL] = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).SYMBOL;
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

          const model = (_crd && CoreComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfCoreComponentExtensionMethods({
            error: Error()
          }), CoreComponentExtensionMethods) : CoreComponentExtensionMethods).findCubismModel(this); // Fail silently...

          if (model == null) {
            return;
          } // Cache destinations.


          const tags = model.parameters != null ? (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).getComponentsMany(model.parameters, _crd && CubismEyeBlinkParameter === void 0 ? (_reportPossibleCrUseOfCubismEyeBlinkParameter({
            error: Error()
          }), CubismEyeBlinkParameter) : CubismEyeBlinkParameter) : null;
          this.destinations = new Array((_tags$length = tags == null ? void 0 : tags.length) != null ? _tags$length : 0);

          for (var i = 0; i < this.destinations.length; i++) {
            this.destinations[i] = tags[i].getComponent(_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
              error: Error()
            }), CubismParameter) : CubismParameter);
          } // Get cubism update controller.


          this.hasUpdateController = this.getComponent(_crd && CubismUpdateController === void 0 ? (_reportPossibleCrUseOfCubismUpdateController({
            error: Error()
          }), CubismUpdateController) : CubismUpdateController) != null;
        }
        /** Called by cubism update controller. Order to invoke OnLateUpdate. */


        get executionOrder() {
          return (_crd && CubismUpdateExecutionOrder === void 0 ? (_reportPossibleCrUseOfCubismUpdateExecutionOrder({
            error: Error()
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_EYE_BLINK_CONTROLLER;
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


          (_crd && CubismParameterExtensionMethods === void 0 ? (_reportPossibleCrUseOfCubismParameterExtensionMethods({
            error: Error()
          }), CubismParameterExtensionMethods) : CubismParameterExtensionMethods).blendToValueArray(this.destinations, this.blendMode, this.eyeOpening);
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
          return (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
            error: Error()
          }), CubismParameterBlendMode) : CubismParameterBlendMode).Multiply;
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

      _crd = false;
    }
  };
});
//# sourceMappingURL=861e3f877a8e206c11d483f15a4ac2862eaf2814.js.map
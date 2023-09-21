System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Enum, CCFloat, _decorator, CubismMouthParameter, CubismParameterBlendMode, CubismUpdateController, CubismUpdateExecutionOrder, CubismParameter, CoreComponentExtensionMethods, CubismParameterExtensionMethods, ComponentExtensionMethods, ICubismUpdatable, _SYMBOL, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CubismMouthController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismMouthParameter(extras) {
    _reporterNs.report("CubismMouthParameter", "./CubismMouthParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterBlendMode(extras) {
    _reporterNs.report("CubismParameterBlendMode", "../CubismParameterBlendMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateController(extras) {
    _reporterNs.report("CubismUpdateController", "../CubismUpdateController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateExecutionOrder(extras) {
    _reporterNs.report("CubismUpdateExecutionOrder", "../CubismUpdateExecutionOrder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoreComponentExtensionMethods(extras) {
    _reporterNs.report("CoreComponentExtensionMethods", "../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterExtensionMethods(extras) {
    _reporterNs.report("CubismParameterExtensionMethods", "../CubismParameterExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismUpdatable(extras) {
    _reporterNs.report("ICubismUpdatable", "../ICubismUpdatable", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Enum = _cc.Enum;
      CCFloat = _cc.CCFloat;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismMouthParameter = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismParameterBlendMode = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismUpdateController = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismUpdateExecutionOrder = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismParameter = _unresolved_6.default;
    }, function (_unresolved_7) {
      CoreComponentExtensionMethods = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismParameterExtensionMethods = _unresolved_8.default;
    }, function (_unresolved_9) {
      ComponentExtensionMethods = _unresolved_9.default;
    }, function (_unresolved_10) {
      ICubismUpdatable = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ab7eFJi9NEvae7Anj+Ah54", "CubismMouthController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Component', 'Enum', 'CCFloat', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CubismMouthController = (_dec = ccclass('CubismMouthController'), _dec2 = property({
        type: Enum(_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
          error: Error()
        }), CubismParameterBlendMode) : CubismParameterBlendMode)
      }), _dec3 = property({
        type: CCFloat,
        slide: true,
        range: [0.0, 1.0, 0.01]
      }), _dec4 = property({
        serializable: false,
        visible: false
      }), _dec(_class = (_class2 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismMouthController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "blendMode", _descriptor, this);

          _initializerDefineProperty(this, "mouthOpening", _descriptor2, this);

          this._destinations = [];

          _initializerDefineProperty(this, "_hasUpdateController", _descriptor3, this);

          /** Binded callback function */
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

        refresh() {
          const model = (_crd && CoreComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfCoreComponentExtensionMethods({
            error: Error()
          }), CoreComponentExtensionMethods) : CoreComponentExtensionMethods).findCubismModel(this); // Fail silently...

          if (model == null || model.parameters == null) {
            return;
          } // Cache destinations.


          const tags = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).getComponentsMany(model.parameters, _crd && CubismMouthParameter === void 0 ? (_reportPossibleCrUseOfCubismMouthParameter({
            error: Error()
          }), CubismMouthParameter) : CubismMouthParameter);
          this.destinations = new Array(tags.length);

          for (let i = 0; i < tags.length; ++i) {
            this.destinations[i] = tags[i].getComponent(_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
              error: Error()
            }), CubismParameter) : CubismParameter);
          } // Get cubism update controller.


          this.hasUpdateController = this.getComponent(_crd && CubismUpdateController === void 0 ? (_reportPossibleCrUseOfCubismUpdateController({
            error: Error()
          }), CubismUpdateController) : CubismUpdateController) != null;
        }

        get executionOrder() {
          return (_crd && CubismUpdateExecutionOrder === void 0 ? (_reportPossibleCrUseOfCubismUpdateExecutionOrder({
            error: Error()
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_MOUTH_CONTROLLER;
        }

        get needsUpdateOnEditing() {
          return false;
        }

        onLateUpdate(deltaTime) {
          // Fail silently.
          if (!this.enabled || this.destinations == null) {
            return;
          } // Apply value.


          (_crd && CubismParameterExtensionMethods === void 0 ? (_reportPossibleCrUseOfCubismParameterExtensionMethods({
            error: Error()
          }), CubismParameterExtensionMethods) : CubismParameterExtensionMethods).blendToValueArray(this.destinations, this.blendMode, this.mouthOpening);
        }

        start() {
          // Initialize cache.
          this.refresh();
        }

        lateUpdate(deltaTime) {
          if (!this.hasUpdateController) {
            this.onLateUpdate(deltaTime);
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mouthOpening", [_dec3], {
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
//# sourceMappingURL=fd43d5980d49bbb88e3d9ef375714125b88d8dc3.js.map
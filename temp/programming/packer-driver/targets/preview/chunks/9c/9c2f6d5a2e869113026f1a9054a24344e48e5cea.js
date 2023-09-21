System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Enum, CCFloat, _decorator, CubismMouthParameter, CubismParameterBlendMode, CubismUpdateController, CubismUpdateExecutionOrder, CubismParameter, CoreComponentExtensionMethods, CubismParameterExtensionMethods, ComponentExtensionMethods, ICubismUpdatable, _ICubismUpdatable$SYM, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, ccclass, property, CubismMouthController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Enum = _cc.Enum;
      CCFloat = _cc.CCFloat;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismMouthParameter = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismParameterBlendMode = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismUpdateController = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismUpdateExecutionOrder = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismParameter = _unresolved_5.default;
    }, function (_unresolved_6) {
      CoreComponentExtensionMethods = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismParameterExtensionMethods = _unresolved_7.default;
    }, function (_unresolved_8) {
      ComponentExtensionMethods = _unresolved_8.default;
    }, function (_unresolved_9) {
      ICubismUpdatable = _unresolved_9.default;
    }],
    execute: function () {
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
        type: Enum(CubismParameterBlendMode)
      }), _dec3 = property({
        type: CCFloat,
        slide: true,
        range: [0.0, 1.0, 0.01]
      }), _dec4 = property({
        serializable: false,
        visible: false
      }), _dec(_class = (_class2 = (_ICubismUpdatable$SYM = ICubismUpdatable.SYMBOL, class CubismMouthController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "blendMode", _descriptor, this);

          _initializerDefineProperty(this, "mouthOpening", _descriptor2, this);

          this._destinations = [];

          _initializerDefineProperty(this, "_hasUpdateController", _descriptor3, this);

          /** Binded callback function */
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

        refresh() {
          var model = CoreComponentExtensionMethods.findCubismModel(this); // Fail silently...

          if (model == null || model.parameters == null) {
            return;
          } // Cache destinations.


          var tags = ComponentExtensionMethods.getComponentsMany(model.parameters, CubismMouthParameter);
          this.destinations = new Array(tags.length);

          for (var i = 0; i < tags.length; ++i) {
            this.destinations[i] = tags[i].getComponent(CubismParameter);
          } // Get cubism update controller.


          this.hasUpdateController = this.getComponent(CubismUpdateController) != null;
        }

        get executionOrder() {
          return CubismUpdateExecutionOrder.CUBISM_MOUTH_CONTROLLER;
        }

        get needsUpdateOnEditing() {
          return false;
        }

        onLateUpdate(deltaTime) {
          // Fail silently.
          if (!this.enabled || this.destinations == null) {
            return;
          } // Apply value.


          CubismParameterExtensionMethods.blendToValueArray(this.destinations, this.blendMode, this.mouthOpening);
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
        initializer: function initializer() {
          return CubismParameterBlendMode.Multiply;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mouthOpening", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
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
//# sourceMappingURL=9c2f6d5a2e869113026f1a9054a24344e48e5cea.js.map
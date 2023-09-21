System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, CubismUpdateController, CubismUpdateExecutionOrder, CubismPhysics, CubismPhysicsRig, ComponentExtensionMethods, ICubismUpdatable, CubismRenderController, CubismMaskController, _SYMBOL, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CubismPhysicsController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismUpdateController(extras) {
    _reporterNs.report("CubismUpdateController", "../CubismUpdateController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateExecutionOrder(extras) {
    _reporterNs.report("CubismUpdateExecutionOrder", "../CubismUpdateExecutionOrder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysics(extras) {
    _reporterNs.report("CubismPhysics", "./CubismPhysics", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsRig(extras) {
    _reporterNs.report("CubismPhysicsRig", "./CubismPhysicsRig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismUpdatable(extras) {
    _reporterNs.report("ICubismUpdatable", "../ICubismUpdatable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRenderController(extras) {
    _reporterNs.report("CubismRenderController", "../../Rendering/CubismRenderController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskController(extras) {
    _reporterNs.report("CubismMaskController", "../../Rendering/Masking/CubismMaskController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismUpdateController = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismUpdateExecutionOrder = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismPhysics = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismPhysicsRig = _unresolved_5.default;
    }, function (_unresolved_6) {
      ComponentExtensionMethods = _unresolved_6.default;
    }, function (_unresolved_7) {
      ICubismUpdatable = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismRenderController = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismMaskController = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca488+/xMdDh79Zy3K3JcES", "CubismPhysicsController", undefined);
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

      _export("default", CubismPhysicsController = (_dec = ccclass('CubismPhysicsController'), _dec2 = property({
        type: _crd && CubismPhysicsRig === void 0 ? (_reportPossibleCrUseOfCubismPhysicsRig({
          error: Error()
        }), CubismPhysicsRig) : CubismPhysicsRig,
        serializable: true
      }), _dec3 = property({
        serializable: false,
        visible: false
      }), _dec(_class = (_class2 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismPhysicsController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_rig", _descriptor, this);

          this._parameters = null;

          _initializerDefineProperty(this, "_hasUpdateController", _descriptor2, this);

          /** ICubismUpdatable Binded callback function. */
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);

          /** ICubismUpdatable metadata */
          this[_SYMBOL] = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).SYMBOL;
        }

        get rig() {
          return this._rig;
        }

        set rig(value) {
          this._rig = value;
        }

        get parameters() {
          return this._parameters;
        }

        set parameters(value) {
          this._parameters = value;
        }

        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        }

        get executionOrder() {
          return (_crd && CubismUpdateExecutionOrder === void 0 ? (_reportPossibleCrUseOfCubismUpdateExecutionOrder({
            error: Error()
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_PHYSICS_CONTROLLER;
        }

        get needsUpdateOnEditing() {
          return false;
        }

        onLateUpdate(deltaTime) {
          var _this$rig;

          let _deltaTime = deltaTime; // Use fixed delta time if required.

          if ((_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
            error: Error()
          }), CubismPhysics) : CubismPhysics).useFixedDeltaTime) {// TODO: 存在しないAPI
            // _deltaTime = Time.fixedDeltaTime;
          } // Evaluate rig.


          (_this$rig = this.rig) == null ? void 0 : _this$rig.evaluate(_deltaTime);
        }
        /** Calculate until the physics is stable and update the model information. */


        stabilization() {
          if (this.rig == null) {
            return;
          }

          this.rig.stabilization();
          const renderController = this.getComponent(_crd && CubismRenderController === void 0 ? (_reportPossibleCrUseOfCubismRenderController({
            error: Error()
          }), CubismRenderController) : CubismRenderController);
          const maskController = this.getComponent(_crd && CubismMaskController === void 0 ? (_reportPossibleCrUseOfCubismMaskController({
            error: Error()
          }), CubismMaskController) : CubismMaskController);
          console.assert(renderController != null);
          renderController == null ? void 0 : renderController.onLateUpdate();
          maskController == null ? void 0 : maskController.onLateUpdate();
        }

        initialize(rig) {
          this.rig = rig;
          this.onLoad();
        }

        onLoad() {
          var _findCubismModel$para, _findCubismModel;

          // Check rig existence.
          if (this.rig == null) {
            return;
          } // Initialize rig.


          this.rig.controller = this;
          const subRigs = this.rig.subRigs;

          for (let i = 0; i < subRigs.length; i++) {
            const subRig = subRigs[i];

            if (subRig != null) {
              subRig.rig = this.rig;
            }
          }

          this.parameters = (_findCubismModel$para = (_findCubismModel = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this)) == null ? void 0 : _findCubismModel.parameters) != null ? _findCubismModel$para : null;
          this.rig.initialize();
        }

        start() {
          // Get cubism update controller.
          this.hasUpdateController = this.getComponent(_crd && CubismUpdateController === void 0 ? (_reportPossibleCrUseOfCubismUpdateController({
            error: Error()
          }), CubismUpdateController) : CubismUpdateController) != null;
        }

        lateUpdate(deltaTime) {
          if (!this.hasUpdateController) {
            this.onLateUpdate(deltaTime);
          }
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_rig", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_hasUpdateController", [_dec3], {
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
//# sourceMappingURL=0f3e5bfbdfaca1722827ee7b5fb895e112b7622d.js.map
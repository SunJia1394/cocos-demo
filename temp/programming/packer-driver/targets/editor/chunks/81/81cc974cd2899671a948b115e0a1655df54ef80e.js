System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, CubismUpdateController, CubismUpdateExecutionOrder, CubismPhysics, CubismPhysicsRig, ComponentExtensionMethods, ICubismUpdatable, CubismRenderController, CubismMaskController, _ICubismUpdatable$SYM, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, ccclass, property, CubismPhysicsController;

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
      CubismUpdateController = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismUpdateExecutionOrder = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPhysics = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismPhysicsRig = _unresolved_4.default;
    }, function (_unresolved_5) {
      ComponentExtensionMethods = _unresolved_5.default;
    }, function (_unresolved_6) {
      ICubismUpdatable = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismRenderController = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismMaskController = _unresolved_8.default;
    }],
    execute: function () {
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
        type: CubismPhysicsRig,
        serializable: true
      }), _dec3 = property({
        serializable: false,
        visible: false
      }), _dec(_class = (_class2 = (_ICubismUpdatable$SYM = ICubismUpdatable.SYMBOL, class CubismPhysicsController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_rig", _descriptor, this);

          this._parameters = null;

          _initializerDefineProperty(this, "_hasUpdateController", _descriptor2, this);

          /** ICubismUpdatable Binded callback function. */
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);

          /** ICubismUpdatable metadata */
          this[_ICubismUpdatable$SYM] = ICubismUpdatable.SYMBOL;
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
          return CubismUpdateExecutionOrder.CUBISM_PHYSICS_CONTROLLER;
        }

        get needsUpdateOnEditing() {
          return false;
        }

        onLateUpdate(deltaTime) {
          var _this$rig;

          let _deltaTime = deltaTime; // Use fixed delta time if required.

          if (CubismPhysics.useFixedDeltaTime) {// TODO: 存在しないAPI
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
          const renderController = this.getComponent(CubismRenderController);
          const maskController = this.getComponent(CubismMaskController);
          console.assert(renderController != null);
          renderController == null ? void 0 : renderController.onLateUpdate();
          maskController == null ? void 0 : maskController.onLateUpdate();
        }

        initialize(rig) {
          this.rig = rig;
          this.onLoad();
        }

        onLoad() {
          var _ComponentExtensionMe, _ComponentExtensionMe2;

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

          this.parameters = (_ComponentExtensionMe = (_ComponentExtensionMe2 = ComponentExtensionMethods.findCubismModel(this)) == null ? void 0 : _ComponentExtensionMe2.parameters) != null ? _ComponentExtensionMe : null;
          this.rig.initialize();
        }

        start() {
          // Get cubism update controller.
          this.hasUpdateController = this.getComponent(CubismUpdateController) != null;
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
    }
  };
});
//# sourceMappingURL=81cc974cd2899671a948b115e0a1655df54ef80e.js.map
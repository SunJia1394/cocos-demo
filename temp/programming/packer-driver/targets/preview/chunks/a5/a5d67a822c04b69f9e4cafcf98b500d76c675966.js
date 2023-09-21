System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, CCFloat, CCObject, Component, Enum, math, Node, _decorator, CoreComponentExtensionMethods, CubismParameter, MathExtensions, ComponentExtensionMethods, CubismParameterBlendMode, CubismParameterExtensionMethods, CubismUpdateController, CubismUpdateExecutionOrder, ICubismUpdatable, ObjectExtensionMethods, CubismLookParameter, ICubismLookTarget, _SYMBOL, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, CubismLookController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCoreComponentExtensionMethods(extras) {
    _reporterNs.report("CoreComponentExtensionMethods", "../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathExtensions(extras) {
    _reporterNs.report("MathExtensions", "../../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../ComponentExtensionMethods", _context.meta, extras);
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

  function _reportPossibleCrUseOfObjectExtensionMethods(extras) {
    _reporterNs.report("ObjectExtensionMethods", "../ObjectExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismLookParameter(extras) {
    _reporterNs.report("CubismLookParameter", "./CubismLookParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismLookTarget(extras) {
    _reporterNs.report("ICubismLookTarget", "./ICubismLookTarget", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      CCFloat = _cc.CCFloat;
      CCObject = _cc.CCObject;
      Component = _cc.Component;
      Enum = _cc.Enum;
      math = _cc.math;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CoreComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismParameter = _unresolved_3.default;
    }, function (_unresolved_4) {
      MathExtensions = _unresolved_4.MathExtensions;
    }, function (_unresolved_5) {
      ComponentExtensionMethods = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismParameterBlendMode = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismParameterExtensionMethods = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismUpdateController = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismUpdateExecutionOrder = _unresolved_9.default;
    }, function (_unresolved_10) {
      ICubismUpdatable = _unresolved_10.default;
    }, function (_unresolved_11) {
      ObjectExtensionMethods = _unresolved_11.default;
    }, function (_unresolved_12) {
      CubismLookParameter = _unresolved_12.default;
    }, function (_unresolved_13) {
      ICubismLookTarget = _unresolved_13.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "738e4XIt+xJL4ncemjnca3E", "CubismLookController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Asset', 'CCFloat', 'CCObject', 'Component', 'Enum', 'math', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Controls {@link CubismLookParameter}s.
       *
       * **Sealed class**
       */

      _export("CubismLookController", CubismLookController = (_dec = ccclass('CubismLookController'), _dec2 = property({
        type: Enum(_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
          error: Error()
        }), CubismParameterBlendMode) : CubismParameterBlendMode),
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: CCObject,
        serializable: true,
        visible: false
      }), _dec4 = property({
        type: CCObject,
        visible: true
      }), _dec5 = property({
        type: Component,
        visible: true
      }), _dec6 = property({
        type: Node,
        visible: true
      }), _dec7 = property({
        type: Asset,
        visible: true
      }), _dec8 = property({
        type: Node,
        serializable: true,
        visible: true
      }), _dec9 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec10 = property({
        serializable: true,
        visible: false
      }), _dec(_class = (_class2 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismLookController extends Component {
        constructor() {
          super(...arguments);

          /** Blend mode. */
          _initializerDefineProperty(this, "blendMode", _descriptor, this);

          /** {@link target} backing field. */
          _initializerDefineProperty(this, "_target", _descriptor2, this);

          /** TargetInterface backing field. */
          this._targetInterface = null;

          /** Local center position. */
          _initializerDefineProperty(this, "center", _descriptor3, this);

          /** Damping to apply. */
          _initializerDefineProperty(this, "damping", _descriptor4, this);

          this._sources = new Array(0);
          this._destinations = new Array(0);
          this._lastPosition = math.Vec3.ZERO.clone();

          /** Goal position. */
          this._goalPosition = math.Vec3.ZERO.clone();

          /** Buffer for Mathf.SmoothDamp(float, float, ref float, float) velocity. */
          this.velocityBuffer = math.Vec3.ZERO.clone();

          _initializerDefineProperty(this, "_hasUpdateController", _descriptor5, this);

          //#endregion
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);
          this[_SYMBOL] = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).SYMBOL;
        }

        /** Target. */
        get target() {
          return this._target;
        }

        set target(value) {
          this._target = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
            error: Error()
          }), ObjectExtensionMethods) : ObjectExtensionMethods).toNullUnlessImplementsInterface(value, (_crd && ICubismLookTarget === void 0 ? (_reportPossibleCrUseOfICubismLookTarget({
            error: Error()
          }), ICubismLookTarget) : ICubismLookTarget).isImplements);
        }

        get targetComponent() {
          return this._target instanceof Component ? this._target : null;
        }

        set targetComponent(value) {
          this._target = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
            error: Error()
          }), ObjectExtensionMethods) : ObjectExtensionMethods).toNullUnlessImplementsInterface(value, (_crd && ICubismLookTarget === void 0 ? (_reportPossibleCrUseOfICubismLookTarget({
            error: Error()
          }), ICubismLookTarget) : ICubismLookTarget).isImplements);
        }

        get targetNode() {
          return Node.isNode(this._target) ? this._target : null;
        }

        set targetNode(value) {
          this._target = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
            error: Error()
          }), ObjectExtensionMethods) : ObjectExtensionMethods).toNullUnlessImplementsInterface(value, (_crd && ICubismLookTarget === void 0 ? (_reportPossibleCrUseOfICubismLookTarget({
            error: Error()
          }), ICubismLookTarget) : ICubismLookTarget).isImplements);
        }

        get targetAsset() {
          return this._target instanceof Asset ? this._target : null;
        }

        set targetAsset(value) {
          this._target = (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
            error: Error()
          }), ObjectExtensionMethods) : ObjectExtensionMethods).toNullUnlessImplementsInterface(value, (_crd && ICubismLookTarget === void 0 ? (_reportPossibleCrUseOfICubismLookTarget({
            error: Error()
          }), ICubismLookTarget) : ICubismLookTarget).isImplements);
        }

        /** Interface of target. */
        get targetInterface() {
          if (this._targetInterface == null) {
            this._targetInterface = this.target == null ? null : (_crd && ObjectExtensionMethods === void 0 ? (_reportPossibleCrUseOfObjectExtensionMethods({
              error: Error()
            }), ObjectExtensionMethods) : ObjectExtensionMethods).getInterface(this.target, (_crd && ICubismLookTarget === void 0 ? (_reportPossibleCrUseOfICubismLookTarget({
              error: Error()
            }), ICubismLookTarget) : ICubismLookTarget).isImplements);
          }

          return this._targetInterface;
        }

        /** Source parameters. */
        get sources() {
          return this._sources;
        }

        set sources(value) {
          this._sources = value;
        }

        /** The actual parameters to apply the source values to. */
        get destinations() {
          return this._destinations;
        }

        set destinations(value) {
          this._destinations = value;
        }

        /** Position at last frame. */
        get lastPosition() {
          return this._lastPosition;
        }

        set lastPosition(value) {
          this._lastPosition = value;
        }

        get goalPosition() {
          return this._goalPosition;
        }

        set goalPosition(value) {
          this._goalPosition = value;
        }

        /** Model has update controller component. */
        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        }
        /** Refreshes the controller. Call this method after adding and/or removing {@link CubismLookParameter}s. */


        refresh() {
          var model = (_crd && CoreComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfCoreComponentExtensionMethods({
            error: Error()
          }), CoreComponentExtensionMethods) : CoreComponentExtensionMethods).findCubismModel(this);

          if (model == null) {
            return;
          }

          if (model.parameters == null) {
            return;
          } // Catch sources and destinations.


          this.sources = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).getComponentsMany(model.parameters, _crd && CubismLookParameter === void 0 ? (_reportPossibleCrUseOfCubismLookParameter({
            error: Error()
          }), CubismLookParameter) : CubismLookParameter);
          this.destinations = new Array(this.sources.length);

          for (var i = 0; i < this.sources.length; i++) {
            this.destinations[i] = this.sources[i].getComponent(_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
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
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_LOOK_CONTROLLER;
        }
        /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */


        get needsUpdateOnEditing() {
          return false;
        }
        /** Called by cubism update controller. Updates controller. */


        onLateUpdate() {
          // Return if it is not valid or there's nothing to update.
          if (!this.enabled || this.destinations == null) {
            return;
          } // Return early if no target is available or if target is inactive.


          var target = this.targetInterface;

          if (target == null || !target.isActive()) {
            return;
          }

          if (this.center == null) {
            return;
          } // Update position.


          var position = this.lastPosition;
          var inverseTransformPoint = this.node.inverseTransformPoint(new math.Vec3(), target.getPosition());
          this.goalPosition = math.Vec3.subtract(new math.Vec3(), inverseTransformPoint, this.center.position);

          if (position != this.goalPosition) {
            var temp = (_crd && MathExtensions === void 0 ? (_reportPossibleCrUseOfMathExtensions({
              error: Error()
            }), MathExtensions) : MathExtensions).Vec3.smoothDamp(position, this.goalPosition, this.velocityBuffer, this.damping);
            position = temp[0];
            this.velocityBuffer = temp[1];
          } // Update sources and destinations.


          for (var i = 0; i < this.destinations.length; i++) {
            (_crd && CubismParameterExtensionMethods === void 0 ? (_reportPossibleCrUseOfCubismParameterExtensionMethods({
              error: Error()
            }), CubismParameterExtensionMethods) : CubismParameterExtensionMethods).blendToValue(this.destinations[i], this.blendMode, this.sources[i].tickAndEvaluate(position));
          } // Store position.


          this.lastPosition = position;
        } //#region Cocos Creator Events Handling

        /** Called by Cocos Creator. Makes sure cache is initialized. */


        start() {
          // Default center if necessary.
          if (this.center == null) {
            this.center = this.node;
          } // Initialize cache.


          this.refresh();
        }
        /** Called by Cocos Creator. Updates controller. */


        lateUpdate() {
          if (!this.hasUpdateController) {
            this.onLateUpdate();
          }
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blendMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
            error: Error()
          }), CubismParameterBlendMode) : CubismParameterBlendMode).Additive;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_target", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "target", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "target"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "targetComponent", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "targetComponent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "targetNode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "targetAsset", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "targetAsset"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "center", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "damping", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_hasUpdateController", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5d67a822c04b69f9e4cafcf98b500d76c675966.js.map
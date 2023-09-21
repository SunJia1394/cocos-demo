System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Enum, CCFloat, Component, CubismParameterBlendMode, CubismParameter, ICubismUpdatable, CubismUpdateExecutionOrder, CubismHarmonicMotionParameter, CubismUpdateController, FrameworkComponentExtensionMethods, CoreComponentExtensionMethods, CubismParameterExtensionMethods, _SYMBOL, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CubismHarmonicMotionController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismParameterBlendMode(extras) {
    _reporterNs.report("CubismParameterBlendMode", "../CubismParameterBlendMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismUpdatable(extras) {
    _reporterNs.report("ICubismUpdatable", "../ICubismUpdatable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateExecutionOrder(extras) {
    _reporterNs.report("CubismUpdateExecutionOrder", "../CubismUpdateExecutionOrder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismHarmonicMotionParameter(extras) {
    _reporterNs.report("CubismHarmonicMotionParameter", "./CubismHarmonicMotionParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateController(extras) {
    _reporterNs.report("CubismUpdateController", "../CubismUpdateController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameworkComponentExtensionMethods(extras) {
    _reporterNs.report("FrameworkComponentExtensionMethods", "../ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoreComponentExtensionMethods(extras) {
    _reporterNs.report("CoreComponentExtensionMethods", "../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterExtensionMethods(extras) {
    _reporterNs.report("CubismParameterExtensionMethods", "../CubismParameterExtensionMethods", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      CubismParameterBlendMode = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismParameter = _unresolved_3.default;
    }, function (_unresolved_4) {
      ICubismUpdatable = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismUpdateExecutionOrder = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismHarmonicMotionParameter = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismUpdateController = _unresolved_7.default;
    }, function (_unresolved_8) {
      FrameworkComponentExtensionMethods = _unresolved_8.default;
    }, function (_unresolved_9) {
      CoreComponentExtensionMethods = _unresolved_9.default;
    }, function (_unresolved_10) {
      CubismParameterExtensionMethods = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05db38wRmhC3qluCX3qcZm5", "CubismHarmonicMotionController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Enum', 'CCFloat', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Controller for {@link CubismHarmonicMotionParameter}s.
       *
       * **Sealed class.**
       */

      _export("default", CubismHarmonicMotionController = (_dec = ccclass('CubismHarmonicMotionController'), _dec2 = property({
        type: Enum(_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
          error: Error()
        }), CubismParameterBlendMode) : CubismParameterBlendMode),
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: [CCFloat],
        serializable: true,
        visible: true
      }), _dec4 = property({
        serializable: true,
        visible: false
      }), _dec(_class = (_class2 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismHarmonicMotionController extends Component {
        constructor() {
          super(...arguments);

          /** Default number of channels. */
          this.defaultChannelCount = 1;

          /** Blend mode. */
          _initializerDefineProperty(this, "blendMode", _descriptor, this);

          /** The timescales for each channel. */
          _initializerDefineProperty(this, "channelTimescales", _descriptor2, this);

          this._sources = [];
          this._destinations = [];

          _initializerDefineProperty(this, "_hasUpdateController", _descriptor3, this);

          /** ICubismUpdatable Binded callback function. */
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);

          /** ICubismUpdatable metadata */
          this[_SYMBOL] = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).SYMBOL;
        }

        /** Sources. */
        get sources() {
          return this._sources;
        }

        set sources(value) {
          this._sources = value;
        }

        /** Destinations. */
        get destinations() {
          return this._destinations;
        }

        set destinations(value) {
          this._destinations = value;
        }

        /** Model has update controller component. */
        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        }
        /** Refreshes the controller. Call this method after adding and/or removing {@link CubismHarmonicMotionParameter}. */


        refresh() {
          var model = (_crd && CoreComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfCoreComponentExtensionMethods({
            error: Error()
          }), CoreComponentExtensionMethods) : CoreComponentExtensionMethods).findCubismModel(this);

          if (model == null || model.parameters == null) {
            return;
          } // Catch sources and destinations.


          this.sources = (_crd && FrameworkComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfFrameworkComponentExtensionMethods({
            error: Error()
          }), FrameworkComponentExtensionMethods) : FrameworkComponentExtensionMethods).getComponentsMany(model.parameters, _crd && CubismHarmonicMotionParameter === void 0 ? (_reportPossibleCrUseOfCubismHarmonicMotionParameter({
            error: Error()
          }), CubismHarmonicMotionParameter) : CubismHarmonicMotionParameter);
          this.destinations = new Array(this.sources.length);

          for (var i = 0; i < this.sources.length; ++i) {
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
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_HARMONIC_MOTION_CONTROLLER;
        }
        /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */


        get needsUpdateOnEditing() {
          return false;
        }
        /** Called by cubism update controller. Updates controller. */


        onLateUpdate(deltaTime) {
          // Return if it is not valid or there's nothing to update.
          if (!this.enabled || this.sources == null) {
            return;
          } // Update sources and destinations.


          for (var i = 0; i < this.sources.length; ++i) {
            this.sources[i].play(this.channelTimescales);
            (_crd && CubismParameterExtensionMethods === void 0 ? (_reportPossibleCrUseOfCubismParameterExtensionMethods({
              error: Error()
            }), CubismParameterExtensionMethods) : CubismParameterExtensionMethods).blendToValue(this.destinations[i], this.blendMode, this.sources[i].evaluate());
          }
        }

        /** Called by Cocos Creator. Makes sure cache is initialized. */
        start() {
          // Initialize cache.
          this.refresh();
        }
        /** Called by Cocos Creator. Updates controller. */


        lateUpdate(deltaTime) {
          if (!this.hasUpdateController) {
            this.onLateUpdate(deltaTime);
          }
        }
        /** Called by Cocos Creator. Resets channels. */


        resetInEditor() {
          // Reset/Initialize channel timescales.
          this.channelTimescales = new Array(this.defaultChannelCount);

          for (var s = 0; s < this.defaultChannelCount; ++s) {
            this.channelTimescales[s] = 1.0;
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "channelTimescales", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
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

      _crd = false;
    }
  };
});
//# sourceMappingURL=7791d6132efce4557bd2a750aebcce55dec4e822.js.map
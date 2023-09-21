System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Enum, CCFloat, Component, CubismParameterBlendMode, CubismParameter, ICubismUpdatable, CubismUpdateExecutionOrder, CubismHarmonicMotionParameter, CubismUpdateController, FrameworkComponentExtensionMethods, CoreComponentExtensionMethods, CubismParameterExtensionMethods, _ICubismUpdatable$SYM, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, ccclass, property, CubismHarmonicMotionController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
    }, function (_unresolved_) {
      CubismParameterBlendMode = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismParameter = _unresolved_2.default;
    }, function (_unresolved_3) {
      ICubismUpdatable = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismUpdateExecutionOrder = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismHarmonicMotionParameter = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismUpdateController = _unresolved_6.default;
    }, function (_unresolved_7) {
      FrameworkComponentExtensionMethods = _unresolved_7.default;
    }, function (_unresolved_8) {
      CoreComponentExtensionMethods = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismParameterExtensionMethods = _unresolved_9.default;
    }],
    execute: function () {
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
        type: Enum(CubismParameterBlendMode),
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: [CCFloat],
        serializable: true,
        visible: true
      }), _dec4 = property({
        serializable: true,
        visible: false
      }), _dec(_class = (_class2 = (_ICubismUpdatable$SYM = ICubismUpdatable.SYMBOL, class CubismHarmonicMotionController extends Component {
        constructor(...args) {
          super(...args);

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
          this[_ICubismUpdatable$SYM] = ICubismUpdatable.SYMBOL;
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
          const model = CoreComponentExtensionMethods.findCubismModel(this);

          if (model == null || model.parameters == null) {
            return;
          } // Catch sources and destinations.


          this.sources = FrameworkComponentExtensionMethods.getComponentsMany(model.parameters, CubismHarmonicMotionParameter);
          this.destinations = new Array(this.sources.length);

          for (let i = 0; i < this.sources.length; ++i) {
            this.destinations[i] = this.sources[i].getComponent(CubismParameter);
          } // Get cubism update controller.


          this.hasUpdateController = this.getComponent(CubismUpdateController) != null;
        }
        /** Called by cubism update controller. Order to invoke OnLateUpdate. */


        get executionOrder() {
          return CubismUpdateExecutionOrder.CUBISM_HARMONIC_MOTION_CONTROLLER;
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


          for (let i = 0; i < this.sources.length; ++i) {
            this.sources[i].play(this.channelTimescales);
            CubismParameterExtensionMethods.blendToValue(this.destinations[i], this.blendMode, this.sources[i].evaluate());
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

          for (let s = 0; s < this.defaultChannelCount; ++s) {
            this.channelTimescales[s] = 1.0;
          }
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blendMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return CubismParameterBlendMode.Additive;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "channelTimescales", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
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
//# sourceMappingURL=048ee00943958c6419449a301f5f7adc1f9759c0.js.map
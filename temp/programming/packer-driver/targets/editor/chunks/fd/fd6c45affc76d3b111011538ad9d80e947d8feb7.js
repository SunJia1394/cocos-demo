System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, CCFloat, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, executeInEditMode, CubismParameter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParameters(extras) {
    _reporterNs.report("Parameters", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismModel(extras) {
    _reporterNs.report("CubismModel", "./CubismModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bdbcbN38FdAZ5pTDllAGPFv", "CubismParameter", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCFloat']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator); // TODO: CubismDontMoveOnReimport

      /**
       * Single {@link CubismModel} parameter.
       *
       * **Sealed class**
       */

      _export("default", CubismParameter = (_dec = ccclass('CubismParameter'), _dec2 = property({
        serializable: true,
        visible: false
      }), _dec3 = property({
        type: CCFloat,
        serializable: true,
        visible: true,
        readonly: false
      }), _dec4 = property({
        type: CCFloat,
        visible: true,
        readonly: false
      }), _dec(_class = executeInEditMode(_class = (_class2 = class CubismParameter extends Component {
        constructor(...args) {
          super(...args);
          //#endregion
          this._unmanagedParameters = null;

          /** {@link unmanagedIndex} backing field. */
          _initializerDefineProperty(this, "_unmanagedIndex", _descriptor, this);

          /** Current value. */
          _initializerDefineProperty(this, "value", _descriptor2, this);

          /** Editor Only, For operation from inspector. */
          this._model = null;
        }

        //#region Factory Methods

        /**
         * Creates drawables for a {@link CubismModel}.
         * @param model Handle to unmanaged model.
         * @returns Drawables root.
         */
        static createParameters(model) {
          const root = new Node('Parameters'); // Create parameters.

          const parameters = model.parameters;
          const buffer = new Array(parameters.count);

          for (let i = 0; i < buffer.length; i++) {
            const proxy = new Node();
            buffer[i] = proxy.addComponent(CubismParameter);
            root.addChild(proxy);
            buffer[i].reset(model, i);
          }

          return root;
        }

        /** Unmanaged parameters from unmanaged model. */
        get unmanagedParameters() {
          return this._unmanagedParameters;
        }

        set unmanagedParameters(value) {
          this._unmanagedParameters = value;
        }

        /** Position in unmanaged arrays. */
        get unmanagedIndex() {
          return this._unmanagedIndex;
        }

        set unmanagedIndex(value) {
          this._unmanagedIndex = value;
        }
        /** Copy of Id. */


        get id() {
          var _this$unmanagedParame, _this$unmanagedParame2;

          return (_this$unmanagedParame = (_this$unmanagedParame2 = this.unmanagedParameters) == null ? void 0 : _this$unmanagedParame2.ids[this.unmanagedIndex]) != null ? _this$unmanagedParame : '';
        }
        /** Minimum value. */


        get minimumValue() {
          var _this$unmanagedParame3, _this$unmanagedParame4;

          return (_this$unmanagedParame3 = (_this$unmanagedParame4 = this.unmanagedParameters) == null ? void 0 : _this$unmanagedParame4.minimumValues[this.unmanagedIndex]) != null ? _this$unmanagedParame3 : 0;
        }
        /** Maximum value. */


        get maximumValue() {
          var _this$unmanagedParame5, _this$unmanagedParame6;

          return (_this$unmanagedParame5 = (_this$unmanagedParame6 = this.unmanagedParameters) == null ? void 0 : _this$unmanagedParame6.maximumValues[this.unmanagedIndex]) != null ? _this$unmanagedParame5 : 0;
        }
        /** Default value. */


        get defaultValue() {
          var _this$unmanagedParame7, _this$unmanagedParame8;

          return (_this$unmanagedParame7 = (_this$unmanagedParame8 = this.unmanagedParameters) == null ? void 0 : _this$unmanagedParame8.defaultValues[this.unmanagedIndex]) != null ? _this$unmanagedParame7 : 0;
        }

        /** Editor Only, For operation from inspector. */
        set valueInEditor(value) {
          if (this.value !== value) {
            var _this$_model;

            this.value = value;
            (_this$_model = this._model) == null ? void 0 : _this$_model.forceUpdateNow();
          }
        }
        /**
         * Revives the instance.
         * @param model Handle to unmanaged model.
         */


        revive(model) {
          var _model$parameters;

          this.unmanagedParameters = (_model$parameters = model.parameters) != null ? _model$parameters : null;
        }
        /**
         * Restores instance to initial state.
         * @param model Handle to unmanaged model.
         * @param index Position in unmanaged arrays.
         */


        reset(model, index) {
          this.revive(model);
          this.unmanagedIndex = index;
          this.node.name = this.id;
          this.value = this.defaultValue;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_unmanagedIndex", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "valueInEditor", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "valueInEditor"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd6c45affc76d3b111011538ad9d80e947d8feb7.js.map
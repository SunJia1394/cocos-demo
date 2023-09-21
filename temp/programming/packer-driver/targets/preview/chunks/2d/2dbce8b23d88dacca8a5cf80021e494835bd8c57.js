System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, CCFloat, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CubismPart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParts(extras) {
    _reporterNs.report("Parts", "../CubismCore", _context.meta, extras);
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

      _cclegacy._RF.push({}, "a66ca/f/pdOj50qgA+AG3z7", "CubismPart", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator); // TODO: CubismDontMoveOnReimport

      /**
       * Single CubismModel part.
       *
       * **Sealed class.**
       */

      _export("default", CubismPart = (_dec = ccclass('CubismPart'), _dec2 = property({
        serializable: true,
        visible: false
      }), _dec3 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec4 = property({
        type: CCFloat,
        visible: true,
        readonly: false
      }), _dec(_class = (_class2 = class CubismPart extends Component {
        constructor() {
          super(...arguments);
          //#endregion

          /** Unmanaged parts from unmanaged model. */
          this.unmanagedParts = null;

          /** {@link unmanagedIndex} backing field. */
          _initializerDefineProperty(this, "_unmanagedIndex", _descriptor, this);

          /** Current opacity. */
          _initializerDefineProperty(this, "opacity", _descriptor2, this);

          /** Editor Only, For operation from inspector. */
          this._model = null;
        }

        //#region Factory Methods

        /**
         * Creates parts for a {@link CubismModel}.
         * @param model Handle to unmanaged model.
         * @returns Parts root.
         */
        static createParts(model) {
          var _root = new Node('Parts'); // Create parts.


          var _parts = model.parts;

          var _buffer = new Array(_parts.count);

          for (var i = 0; i < _buffer.length; ++i) {
            var _proxy = new Node();

            _buffer[i] = _proxy.addComponent(CubismPart);

            _root.addChild(_proxy);

            _buffer[i].reset(model, i);
          }

          return _root;
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
          var _this$unmanagedParts$, _this$unmanagedParts;

          return (_this$unmanagedParts$ = (_this$unmanagedParts = this.unmanagedParts) == null ? void 0 : _this$unmanagedParts.ids[this.unmanagedIndex]) != null ? _this$unmanagedParts$ : '';
        }

        /** Editor Only, For operation from inspector. */
        set opacityInEditor(value) {
          if (this.opacity !== value) {
            var _this$_model;

            this.opacity = value;
            (_this$_model = this._model) == null ? void 0 : _this$_model.forceUpdateNow();
          }
        }
        /**
         * Revives instance.
         * @param model TaskableModel to unmanaged unmanagedModel.
         */


        revive(model) {
          var _model$parts;

          this.unmanagedParts = (_model$parts = model.parts) != null ? _model$parts : null;
        }
        /**
         * Restores instance to initial state.
         * @param model TaskableModel to unmanaged unmanagedModel.
         * @param index Position in unmanaged arrays.
         */


        reset(model, index) {
          this.revive(model);
          this._unmanagedIndex = index;
          this.node.name = this.id;
          this.opacity = this.unmanagedParts.opacities[index];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_unmanagedIndex", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "opacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "opacityInEditor", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "opacityInEditor"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2dbce8b23d88dacca8a5cf80021e494835bd8c57.js.map
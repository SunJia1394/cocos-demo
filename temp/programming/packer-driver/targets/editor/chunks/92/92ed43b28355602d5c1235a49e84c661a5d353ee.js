System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, CubismUserDataBody, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CubismUserDataTag;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismUserDataBody(extras) {
    _reporterNs.report("CubismUserDataBody", "./CubismUserDataBody", _context.meta, extras);
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
      CubismUserDataBody = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fff4+LnJBJQrtLdfLPLkKD", "CubismUserDataTag", undefined);
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
      } = _decorator); // TODO: CubismDontMoveOnReimport

      /** Tag of user data. */

      _export("default", CubismUserDataTag = (_dec = ccclass('CubismUserDataTag'), _dec2 = property({
        serializable: true,
        visible: false
      }), _dec3 = property({
        visible: true,
        readonly: false
      }), _dec4 = property({
        serializable: true,
        visible: false
      }), _dec(_class = (_class2 = class CubismUserDataTag extends Component {
        constructor(...args) {
          super(...args);

          /** Value backing field. */
          _initializerDefineProperty(this, "_value", _descriptor, this);

          /** Body backing field. */
          _initializerDefineProperty(this, "_body", _descriptor2, this);
        }

        /** Value. */
        get value() {
          if (this._value == null || this._value == '') {
            var _this$body$value, _this$body;

            this._value = (_this$body$value = (_this$body = this.body) == null ? void 0 : _this$body.value) != null ? _this$body$value : '';
          }

          return this._value;
        }

        set value(value) {
          this._value = value;
        }

        /** Body. */
        get body() {
          return this._body;
        }

        set body(body) {
          this._body = body;
        }
        /**
         * Initializes tag.
         * @param body Body for initialization.
         */


        initialize(body) {
          this.body = body;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_value", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "value"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_body", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && CubismUserDataBody === void 0 ? (_reportPossibleCrUseOfCubismUserDataBody({
            error: Error()
          }), CubismUserDataBody) : CubismUserDataBody)();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92ed43b28355602d5c1235a49e84c661a5d353ee.js.map
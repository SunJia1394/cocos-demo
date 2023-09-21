System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, CCFloat, _decorator, CubismMouthController, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CubismAutoMouthInput;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismMouthController(extras) {
    _reporterNs.report("CubismMouthController", "./CubismMouthController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      CCFloat = _cc.CCFloat;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismMouthController = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b8aalbiZZAHI8TdFPv4xSV", "CubismAutoMouthInput", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Component', 'CCFloat', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CubismAutoMouthInput = (_dec = ccclass('CubismAutoMouthInput'), _dec2 = property(CCFloat), _dec(_class = (_class2 = class CubismAutoMouthInput extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Timescale", _descriptor, this);

          this._Controller = null;
          this._T = 0;
        }

        get Controller() {
          return this._Controller;
        }

        set Controller(value) {
          this._Controller = value;
        }

        get T() {
          return this._T;
        }

        set T(value) {
          this._T = value;
        }

        resetInEditor() {
          this.T = 0.0;
        }

        start() {
          this.Controller = this.getComponent(_crd && CubismMouthController === void 0 ? (_reportPossibleCrUseOfCubismMouthController({
            error: Error()
          }), CubismMouthController) : CubismMouthController);
        }

        lateUpdate(deltaTime) {
          // Fail silently.
          if (this.Controller == null) {
            return;
          } // Progress time.


          this.T += deltaTime * this.Timescale; // Evaluate.

          this.Controller.mouthOpening = Math.abs(Math.sin(this.T));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Timescale", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=377f659ea1abf5859be4cc94468ee1a9fb518729.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Enum, _decorator, CubismRaycastablePrecision, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CubismRaycastable;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismRaycastablePrecision(extras) {
    _reporterNs.report("CubismRaycastablePrecision", "./CubismRaycastablePrecision", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismRaycastablePrecision = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36139PybiBJE6VaBjT3JvRB", "CubismRaycastable", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Component', 'Enum', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Allows raycasting against {@link CubismDrawable}s.
       *
       * ** Sealed class **
       */

      _export("default", CubismRaycastable = (_dec = ccclass('CubismRaycastable'), _dec2 = property({
        type: Enum(_crd && CubismRaycastablePrecision === void 0 ? (_reportPossibleCrUseOfCubismRaycastablePrecision({
          error: Error()
        }), CubismRaycastablePrecision) : CubismRaycastablePrecision),
        serializable: true,
        visible: true,
        readonly: false
      }), _dec(_class = (_class2 = class CubismRaycastable extends Component {
        constructor() {
          super(...arguments);

          /** The precision. */
          _initializerDefineProperty(this, "precision", _descriptor, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "precision", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && CubismRaycastablePrecision === void 0 ? (_reportPossibleCrUseOfCubismRaycastablePrecision({
            error: Error()
          }), CubismRaycastablePrecision) : CubismRaycastablePrecision).boundingBox;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=680c45f49c1960f3ba87c0e00f54c609bc678594.js.map
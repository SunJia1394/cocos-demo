System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Enum, _decorator, CubismRaycastablePrecision, _dec, _dec2, _class, _class2, _descriptor, ccclass, property, CubismRaycastable;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismRaycastablePrecision = _unresolved_.default;
    }],
    execute: function () {
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
        type: Enum(CubismRaycastablePrecision),
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
          return CubismRaycastablePrecision.boundingBox;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=b336377a293945b686c775fb7ca7d26ca8f15d52.js.map
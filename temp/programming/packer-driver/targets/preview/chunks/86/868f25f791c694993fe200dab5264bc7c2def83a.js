System.register(["cc", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, Component, Enum, _decorator, CubismParameter, CubismLookAxis, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, ccclass, property, CubismLookParameter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function endsWith(str, value) {
    return str.length > 0 ? str[str.length - 1] == value : false;
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismParameter = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismLookAxis = _unresolved_2.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "355e349ZkpCIrvsNuTAsQSU", "CubismLookParameter", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', 'Component', 'Enum', 'math', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Look at parameter.
       *
       * **Sealed class**
       */

      _export("default", CubismLookParameter = (_dec = ccclass('CubismLookParameter'), _dec2 = property({
        type: Enum(CubismLookAxis),
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec(_class = (_class2 = class CubismLookParameter extends Component {
        constructor() {
          super(...arguments);

          /** Look axis. */
          _initializerDefineProperty(this, "axis", _descriptor, this);

          /** Factor. */
          _initializerDefineProperty(this, "factor", _descriptor2, this);
        }

        //#region Cocos Creator Event Handling

        /** Called by Cocos Creator. Guesses best settings. */
        reset() {
          var parameter = this.getComponent(CubismParameter); // Fail silently.

          if (parameter == null) {
            return;
          } // Guess axis.


          if (endsWith(parameter.name, 'Y')) {
            this.axis = CubismLookAxis.Y;
          } else if (endsWith(parameter.name, 'Z')) {
            this.axis = CubismLookAxis.Z;
          } else {
            this.axis = CubismLookAxis.X;
          } // Guess factor.


          this.factor = parameter.maximumValue;
        } //#endregion
        //#region Interface for Controller

        /**
         * Updates and evaluates the instance.
         * @param targetOffset Delta to target.
         * @returns Evaluation result.
         */


        tickAndEvaluate(targetOffset) {
          var result = this.axis == CubismLookAxis.X ? targetOffset.x : this.axis == CubismLookAxis.Z ? targetOffset.z : targetOffset.y;
          return result * this.factor;
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "axis", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CubismLookAxis.X;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "factor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=868f25f791c694993fe200dab5264bc7c2def83a.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, Component, Enum, _decorator, CubismParameter, CubismLookAxis, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CubismLookParameter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function endsWith(str, value) {
    return str.length > 0 ? str[str.length - 1] == value : false;
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismLookAxis(extras) {
    _reporterNs.report("CubismLookAxis", "./CubismLookAxis", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismParameter = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismLookAxis = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

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
        type: Enum(_crd && CubismLookAxis === void 0 ? (_reportPossibleCrUseOfCubismLookAxis({
          error: Error()
        }), CubismLookAxis) : CubismLookAxis),
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec(_class = (_class2 = class CubismLookParameter extends Component {
        constructor(...args) {
          super(...args);

          /** Look axis. */
          _initializerDefineProperty(this, "axis", _descriptor, this);

          /** Factor. */
          _initializerDefineProperty(this, "factor", _descriptor2, this);
        }

        //#region Cocos Creator Event Handling

        /** Called by Cocos Creator. Guesses best settings. */
        reset() {
          const parameter = this.getComponent(_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
            error: Error()
          }), CubismParameter) : CubismParameter); // Fail silently.

          if (parameter == null) {
            return;
          } // Guess axis.


          if (endsWith(parameter.name, 'Y')) {
            this.axis = (_crd && CubismLookAxis === void 0 ? (_reportPossibleCrUseOfCubismLookAxis({
              error: Error()
            }), CubismLookAxis) : CubismLookAxis).Y;
          } else if (endsWith(parameter.name, 'Z')) {
            this.axis = (_crd && CubismLookAxis === void 0 ? (_reportPossibleCrUseOfCubismLookAxis({
              error: Error()
            }), CubismLookAxis) : CubismLookAxis).Z;
          } else {
            this.axis = (_crd && CubismLookAxis === void 0 ? (_reportPossibleCrUseOfCubismLookAxis({
              error: Error()
            }), CubismLookAxis) : CubismLookAxis).X;
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
          const result = this.axis == (_crd && CubismLookAxis === void 0 ? (_reportPossibleCrUseOfCubismLookAxis({
            error: Error()
          }), CubismLookAxis) : CubismLookAxis).X ? targetOffset.x : this.axis == (_crd && CubismLookAxis === void 0 ? (_reportPossibleCrUseOfCubismLookAxis({
            error: Error()
          }), CubismLookAxis) : CubismLookAxis).Z ? targetOffset.z : targetOffset.y;
          return result * this.factor;
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "axis", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && CubismLookAxis === void 0 ? (_reportPossibleCrUseOfCubismLookAxis({
            error: Error()
          }), CubismLookAxis) : CubismLookAxis).X;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "factor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2145b4d92d15f967c55a001bd6f2c650d9cb23d7.js.map
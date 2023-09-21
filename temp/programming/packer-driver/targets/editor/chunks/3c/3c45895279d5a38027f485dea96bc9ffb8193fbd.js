System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, _decorator, ArrayExtensionMethods, CubismParameter, CubismParameterBlendMode, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, CubismPlayingExpression;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfArrayExtensionMethods(extras) {
    _reporterNs.report("ArrayExtensionMethods", "../../Core/ArrayExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterBlendMode(extras) {
    _reporterNs.report("CubismParameterBlendMode", "../CubismParameterBlendMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismModel(extras) {
    _reporterNs.report("CubismModel", "../../Core/CubismModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismExpressionData(extras) {
    _reporterNs.report("CubismExpressionData", "./CubismExpressionData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ArrayExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismParameter = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismParameterBlendMode = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7cbb3xubLdJ8rbsSkgybYIT", "CubismPlayingExpression", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', 'CCString', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** The cubism expression data. */

      _export("default", CubismPlayingExpression = (_dec = ccclass('CubismPlayingExpression'), _dec2 = property({
        serializable: true,
        visible: true
      }), _dec3 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec4 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec5 = property({
        type: CCFloat,
        serializable: true,
        visible: true,
        range: [0.0, 1.0, 0.01]
      }), _dec6 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec7 = property({
        type: CCFloat,
        serializable: true,
        visible: true
      }), _dec8 = property({
        type: [_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
          error: Error()
        }), CubismParameter) : CubismParameter],
        serializable: true,
        visible: true
      }), _dec9 = property({
        type: [CCFloat],
        serializable: true,
        visible: true
      }), _dec10 = property({
        type: [_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
          error: Error()
        }), CubismParameterBlendMode) : CubismParameterBlendMode],
        serializable: true,
        visible: true
      }), _dec(_class = (_class2 = class CubismPlayingExpression {
        constructor() {
          //#region variable

          /** Expression type. */
          _initializerDefineProperty(this, "type", _descriptor, this);

          /** Expression fade in time. */
          _initializerDefineProperty(this, "fadeInTime", _descriptor2, this);

          /** Expression fade out time. */
          _initializerDefineProperty(this, "fadeOutTime", _descriptor3, this);

          /** Expression Weight. */
          _initializerDefineProperty(this, "weight", _descriptor4, this);

          /** Expression user time. */
          _initializerDefineProperty(this, "expressionUserTime", _descriptor5, this);

          /** Expression end time. */
          _initializerDefineProperty(this, "expressionEndTime", _descriptor6, this);

          /** Expression parameters cache. */
          _initializerDefineProperty(this, "destinations", _descriptor7, this);

          /** Expression parameter value. */
          _initializerDefineProperty(this, "value", _descriptor8, this);

          /** Expression parameter blend mode. */
          _initializerDefineProperty(this, "blend", _descriptor9, this);
        }

        //#endregion

        /**
         * Initialize expression data from {@link CubismExpressionData}.
         * @param model model.
         * @param expressionData Source.
         * @returns
         */
        static create(model, expressionData) {
          // Fail silently...
          if (model == null || expressionData == null) {
            return null;
          }

          const ret = new CubismPlayingExpression();
          ret.type = expressionData.type;
          ret.fadeInTime = expressionData.fadeInTime < 0.0 ? 1.0 : expressionData.fadeInTime;
          ret.fadeOutTime = expressionData.fadeOutTime < 0.0 ? 1.0 : expressionData.fadeOutTime;
          ret.weight = 0.0;
          ret.expressionUserTime = 0.0;
          ret.expressionEndTime = 0.0;
          let parameterCount = expressionData.parameters.length;
          ret.destinations = new Array(parameterCount);
          ret.value = new Array(parameterCount);
          ret.blend = new Array(parameterCount);

          if (model.parameters == null) {
            console.error('CubismPlayingExpression.create(): parameters is null.');
            return null;
          }

          for (let i = 0; i < parameterCount; i++) {
            ret.destinations[i] = (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).findByIdFromParameters(model.parameters, expressionData.parameters[i].id);
            ret.value[i] = expressionData.parameters[i].value;
            ret.blend[i] = expressionData.parameters[i].blend;
          }

          return ret;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fadeInTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fadeOutTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "weight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "expressionUserTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "expressionEndTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "destinations", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array(0);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "blend", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c45895279d5a38027f485dea96bc9ffb8193fbd.js.map
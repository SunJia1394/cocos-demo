System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, CCFloat, Enum, _decorator, CubismParameterBlendMode, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _dec8, _dec9, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, SerializableExpressionParameter, CubismExpressionData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismParameterBlendMode(extras) {
    _reporterNs.report("CubismParameterBlendMode", "../CubismParameterBlendMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismExp3Json(extras) {
    _reporterNs.report("CubismExp3Json", "../Json/CubismExp3Json", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStructLike(extras) {
    _reporterNs.report("IStructLike", "../../IStructLike", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      CCFloat = _cc.CCFloat;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismParameterBlendMode = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85cbdRDIGxAuLnMKtyAUrP7", "CubismExpressionData", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Asset', 'CCFloat', 'Enum', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** ExpressionParameter (struct) */

      _export("SerializableExpressionParameter", SerializableExpressionParameter = (_dec = ccclass('CubismExpressionData.SerializableExpressionParameter'), _dec2 = property({
        serializable: true
      }), _dec3 = property({
        type: CCFloat,
        serializable: true
      }), _dec4 = property({
        type: Enum(_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
          error: Error()
        }), CubismParameterBlendMode) : CubismParameterBlendMode),
        serializable: true
      }), _dec(_class = (_class2 = class SerializableExpressionParameter {
        constructor(args) {
          var _args$id, _args$value, _args$blend;

          if (args === void 0) {
            args = {};
          }

          /** Expression Parameter Id */
          _initializerDefineProperty(this, "id", _descriptor, this);

          /** Expression Parameter Value */
          _initializerDefineProperty(this, "value", _descriptor2, this);

          /** Expression Parameter Blend Mode */
          _initializerDefineProperty(this, "blend", _descriptor3, this);

          this.id = (_args$id = args.id) != null ? _args$id : '';
          this.value = (_args$value = args.value) != null ? _args$value : 0;
          this.blend = (_args$blend = args.blend) != null ? _args$blend : (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
            error: Error()
          }), CubismParameterBlendMode) : CubismParameterBlendMode).Override;
        }

        copyWith(args) {
          var _args$id2, _args$value2, _args$blend2;

          if (args === void 0) {
            args = {};
          }

          return new SerializableExpressionParameter({
            id: (_args$id2 = args.id) != null ? _args$id2 : this.id,
            value: (_args$value2 = args.value) != null ? _args$value2 : this.value,
            blend: (_args$blend2 = args.blend) != null ? _args$blend2 : this.blend
          });
        }

        equals(other) {
          return this === other;
        }

        strictEquals(other) {
          return this === other;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blend", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
            error: Error()
          }), CubismParameterBlendMode) : CubismParameterBlendMode).Override;
        }
      })), _class2)) || _class));

      CubismExpressionData = (_dec5 = ccclass('CubismExpressionData'), _dec6 = property({
        serializable: true
      }), _dec7 = property({
        type: CCFloat,
        serializable: true
      }), _dec8 = property({
        type: CCFloat,
        serializable: true
      }), _dec9 = property({
        type: SerializableExpressionParameter,
        serializable: true
      }), _dec5(_class4 = (_class5 = class CubismExpressionData extends Asset {
        constructor() {
          super(...arguments);

          /** Expression type. */
          _initializerDefineProperty(this, "type", _descriptor4, this);

          /** Expression fade in time. */
          _initializerDefineProperty(this, "fadeInTime", _descriptor5, this);

          /** Expression fade out time. */
          _initializerDefineProperty(this, "fadeOutTime", _descriptor6, this);

          /** Expression Parameters */
          _initializerDefineProperty(this, "parameters", _descriptor7, this);
        }

        static createInstance(json) {
          var expressionData = new CubismExpressionData();
          return this.createInstance2(expressionData, json);
        }

        static createInstance2(expressionData, json) {
          expressionData.type = json.type;
          expressionData.fadeInTime = json.fadeInTime;
          expressionData.fadeOutTime = json.fadeOutTime;
          expressionData.parameters = new Array(json.parameters.length);

          for (var i = 0; i < json.parameters.length; i++) {
            var blend = void 0;

            switch (json.parameters[i].blend) {
              case 'Add':
                blend = (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
                  error: Error()
                }), CubismParameterBlendMode) : CubismParameterBlendMode).Additive;
                break;

              case 'Multiply':
                blend = (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
                  error: Error()
                }), CubismParameterBlendMode) : CubismParameterBlendMode).Multiply;
                break;

              case 'Overwrite':
                blend = (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
                  error: Error()
                }), CubismParameterBlendMode) : CubismParameterBlendMode).Override;
                break;

              default:
                blend = (_crd && CubismParameterBlendMode === void 0 ? (_reportPossibleCrUseOfCubismParameterBlendMode({
                  error: Error()
                }), CubismParameterBlendMode) : CubismParameterBlendMode).Additive;
                break;
            }

            expressionData.parameters[i] = new SerializableExpressionParameter({
              id: json.parameters[i].id,
              value: json.parameters[i].value,
              blend: blend
            });
          }

          return expressionData;
        }

      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "type", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "fadeInTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "fadeOutTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "parameters", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      })), _class5)) || _class4);

      _export("default", CubismExpressionData);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=772d47dc6b4304d7934f65e1abe7b6997a8a13af.js.map
System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _class4, _class5, _descriptor4, _descriptor5, _crd, property, ccclass, CubismPhysicsNormalizationTuplet, CubismPhysicsNormalization;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb269cEQRNKqqSv9b4/vK1p", "CubismPhysicsNormalization", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator']);

      ({
        property,
        ccclass
      } = _decorator);
      /** Normalization tuplet. (struct) */

      _export("CubismPhysicsNormalizationTuplet", CubismPhysicsNormalizationTuplet = (_dec = ccclass('CubismPhysicsNormalizationTuplet'), _dec2 = property({
        serializable: true
      }), _dec3 = property({
        serializable: true
      }), _dec4 = property({
        serializable: true
      }), _dec(_class = (_class2 = class CubismPhysicsNormalizationTuplet {
        constructor(args = {}) {
          var _args$maximum, _args$minimum, _args$defaultValue;

          /** Normalized maximum value. */
          _initializerDefineProperty(this, "maximum", _descriptor, this);

          /** Normalized minimum value. */
          _initializerDefineProperty(this, "minimum", _descriptor2, this);

          /** Normalized default value. */
          _initializerDefineProperty(this, "default", _descriptor3, this);

          this.maximum = (_args$maximum = args.maximum) != null ? _args$maximum : 0;
          this.minimum = (_args$minimum = args.minimum) != null ? _args$minimum : 0;
          this.default = (_args$defaultValue = args.defaultValue) != null ? _args$defaultValue : 0;
        }

        equals(other) {
          return this === other ? true : this.default == other.default && this.maximum == other.maximum && this.minimum == this.minimum;
        }

        strictEquals(other) {
          return this === other;
        }

        copyWith(args = {}) {
          var _args$maximum2, _args$minimum2, _args$defaultValue2;

          return new CubismPhysicsNormalizationTuplet({
            maximum: (_args$maximum2 = args.maximum) != null ? _args$maximum2 : this.maximum,
            minimum: (_args$minimum2 = args.minimum) != null ? _args$minimum2 : this.minimum,
            defaultValue: (_args$defaultValue2 = args.defaultValue) != null ? _args$defaultValue2 : this.default
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maximum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "minimum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "default", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));
      /** Normalization parameters of physics. (struct) */


      CubismPhysicsNormalization = (_dec5 = ccclass('CubismPhysicsNormalization'), _dec6 = property({
        type: CubismPhysicsNormalizationTuplet,
        serializable: true
      }), _dec7 = property({
        type: CubismPhysicsNormalizationTuplet,
        serializable: true
      }), _dec5(_class4 = (_class5 = class CubismPhysicsNormalization {
        constructor(args = {}) {
          var _args$position, _args$angle;

          /** Normalized position. */
          _initializerDefineProperty(this, "position", _descriptor4, this);

          /** Normalized angle. */
          _initializerDefineProperty(this, "angle", _descriptor5, this);

          this.position = (_args$position = args.position) != null ? _args$position : new CubismPhysicsNormalizationTuplet();
          this.angle = (_args$angle = args.angle) != null ? _args$angle : new CubismPhysicsNormalizationTuplet();
        }

        equals(other) {
          return this === other ? true : this.angle.equals(other.angle) && this.position.equals(other.position);
        }

        strictEquals(other) {
          return this === other;
        }

        copyWith(args = {}) {
          var _args$position2, _args$angle2;

          return new CubismPhysicsNormalization({
            position: (_args$position2 = args.position) != null ? _args$position2 : this.position,
            angle: (_args$angle2 = args.angle) != null ? _args$angle2 : this.angle
          });
        }

      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "position", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "angle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class5)) || _class4);

      (function (_CubismPhysicsNormalization) {
        const DEFAULT = _CubismPhysicsNormalization.DEFAULT = new CubismPhysicsNormalization();
      })(CubismPhysicsNormalization || (CubismPhysicsNormalization = {}));

      _export("default", CubismPhysicsNormalization);

      (function (_CubismPhysicsNormalizationTuplet) {
        const DEFAULT = _CubismPhysicsNormalizationTuplet.DEFAULT = new CubismPhysicsNormalizationTuplet();
      })(CubismPhysicsNormalizationTuplet || _export("CubismPhysicsNormalizationTuplet", CubismPhysicsNormalizationTuplet = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=945080e49ef4f0a3c275214d534ffb69895b1e66.js.map
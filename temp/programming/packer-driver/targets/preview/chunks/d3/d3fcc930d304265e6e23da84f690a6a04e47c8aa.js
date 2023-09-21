System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, _decorator, CubismPosePart, CubismPart, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, CubismPoseData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismPosePart(extras) {
    _reporterNs.report("CubismPosePart", "./CubismPosePart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPart(extras) {
    _reporterNs.report("CubismPart", "../../Core/CubismPart", _context.meta, extras);
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
      CCFloat = _cc.CCFloat;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismPosePart = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPart = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d2422W66xPM40ZlKRTEwgf", "CubismPoseData", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** */

      _export("default", CubismPoseData = (_dec = ccclass('CubismPoseData'), _dec2 = property({
        type: _crd && CubismPosePart === void 0 ? (_reportPossibleCrUseOfCubismPosePart({
          error: Error()
        }), CubismPosePart) : CubismPosePart
      }), _dec3 = property({
        type: _crd && CubismPart === void 0 ? (_reportPossibleCrUseOfCubismPart({
          error: Error()
        }), CubismPart) : CubismPart
      }), _dec4 = property({
        type: [_crd && CubismPart === void 0 ? (_reportPossibleCrUseOfCubismPart({
          error: Error()
        }), CubismPart) : CubismPart]
      }), _dec5 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = class CubismPoseData {
        constructor(args) {
          var _args$posePart, _args$part, _args$linkParts, _args$opacity;

          if (args === void 0) {
            args = {};
          }

          /** Cubism pose part. */
          _initializerDefineProperty(this, "posePart", _descriptor, this);

          /** Cubism part cache. */
          _initializerDefineProperty(this, "part", _descriptor2, this);

          /** Link parts cache. */
          _initializerDefineProperty(this, "linkParts", _descriptor3, this);

          /** Cubism part opacity. */
          _initializerDefineProperty(this, "opacity", _descriptor4, this);

          this.posePart = (_args$posePart = args.posePart) != null ? _args$posePart : null;
          this.part = (_args$part = args.part) != null ? _args$part : null;
          this.linkParts = (_args$linkParts = args.linkParts) != null ? _args$linkParts : new Array(0);
          this.opacity = (_args$opacity = args.opacity) != null ? _args$opacity : 0;
        }

        copyWith(args) {
          var _args$linkParts2, _args$opacity2;

          if (args === void 0) {
            args = {};
          }

          return new CubismPoseData({
            posePart: args.posePart !== undefined ? args.posePart : this.posePart,
            part: args.part !== undefined ? args.part : this.part,
            linkParts: (_args$linkParts2 = args.linkParts) != null ? _args$linkParts2 : this.linkParts,
            opacity: (_args$opacity2 = args.opacity) != null ? _args$opacity2 : this.opacity
          });
        }

        equals(other) {
          return this === other ? true : this.posePart == other.posePart && this.part == other.part && this.linkParts == other.linkParts && this.opacity == other.opacity;
        }

        strictEquals(other) {
          return this === other;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "posePart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "part", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "linkParts", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array(0);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "opacity", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3fcc930d304265e6e23da84f690a6a04e47c8aa.js.map
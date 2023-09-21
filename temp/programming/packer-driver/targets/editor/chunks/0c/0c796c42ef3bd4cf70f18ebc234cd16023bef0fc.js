System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, CubismMaskTransform, _crd;

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
      math = _cc.math;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50fe2SNGq1Dj4C9/tbs0MW6", "CubismMaskTransform", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['math']);

      /** Holds info used for masking. (struct) */
      CubismMaskTransform = class CubismMaskTransform {
        // この内容だけ正しいか精査が必要。内容がUnityの仕様に基づく処理のため。
        // CubismToMaskClipPosの計算に影響を与えている？ 要調査

        /**
         * HACK Prevents dynamic batching of <see cref="CubismRenderer"/>s that are masked.
         *
         * As Unity transforms vertex positions into world space on dynamic batching,
         * and masking relies on vertex positions to be in local space,
         * masking isn't compatible with dynamic batching.
         *
         * Unity exposes a shader tag for disabling dynamic batching ("DynamicBatching"), but this would make it necessary for creating separate shaders...
         */
        static get uniqueId() {
          // We just have to make sure consecutive drawables with the same mask aren't batched; having more than 1024 cases in a row seems pretty rare, so...
          if (this._uniqueId > 1024) {
            this._uniqueId = 0;
          }

          return this._uniqueId++;
        }
        /**
         * Converts a CubismMaskTransform to a Vector4.
         * @returns Value to convert.
         */
        // public static implicit operator Vector4(CubismMaskTransform value)


        toVec4() {
          return new math.Vec4(this.offset.x, this.offset.y, this.scale, CubismMaskTransform.uniqueId);
        } // #endregion

        /** Offset in model space. */


        constructor(args = {}) {
          var _args$offset, _args$scale;

          this.offset = void 0;

          /** Scale in model space. */
          this.scale = void 0;
          this.offset = (_args$offset = args.offset) != null ? _args$offset : math.Vec2.ZERO.clone();
          this.scale = (_args$scale = args.scale) != null ? _args$scale : 0;
        }

        equals(other) {
          return this === other ? true : this.offset.equals(other.offset) && this.scale == other.scale;
        }

        strictEquals(other) {
          return this === other;
        }

        copyWith(args = {}) {
          var _args$offset2, _args$scale2;

          return new CubismMaskTransform({
            offset: (_args$offset2 = args.offset) != null ? _args$offset2 : this.offset,
            scale: (_args$scale2 = args.scale) != null ? _args$scale2 : this.scale
          });
        }

      };
      // #region Conversion

      /** UniqueId backing field. */
      CubismMaskTransform._uniqueId = 0;

      (function (_CubismMaskTransform) {
        const DEFAULT = _CubismMaskTransform.DEFAULT = new CubismMaskTransform();
      })(CubismMaskTransform || (CubismMaskTransform = {}));

      _export("default", CubismMaskTransform);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c796c42ef3bd4cf70f18ebc234cd16023bef0fc.js.map
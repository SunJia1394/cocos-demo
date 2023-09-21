System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, CubismMaskTile, _crd;

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

      _cclegacy._RF.push({}, "022d2CJYtJATJJ3IDWsspc6", "CubismMaskTile", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['math']);

      /** Single mask tile. (struct) */
      CubismMaskTile = class CubismMaskTile {
        // #region Conversion

        /**
         * Converts a CubismMaskTile to a Vector4.
         * @returns
         */
        toVec4() {
          return new math.Vec4(this.channel, this.column, this.row, this.size);
        } // #endregion

        /**
         * Color channel of the tile.
         *
         * Valid values are 0f, 1f, 2, and 3f.
         */


        constructor(args = {}) {
          var _args$channel, _args$column, _args$row, _args$size;

          this.channel = void 0;

          /** Column index of the tile in subdivided texture. */
          this.column = void 0;

          /** Row index of the tile in subdivided texture. */
          this.row = void 0;

          /** Size of the tile in texture coordinates. */
          this.size = void 0;
          this.channel = (_args$channel = args.channel) != null ? _args$channel : 0;
          this.column = (_args$column = args.column) != null ? _args$column : 0;
          this.row = (_args$row = args.row) != null ? _args$row : 0;
          this.size = (_args$size = args.size) != null ? _args$size : 0;
        }

        copyWith(args = {}) {
          var _args$channel2, _args$column2, _args$row2, _args$size2;

          return new CubismMaskTile({
            channel: (_args$channel2 = args.channel) != null ? _args$channel2 : this.channel,
            column: (_args$column2 = args.column) != null ? _args$column2 : this.column,
            row: (_args$row2 = args.row) != null ? _args$row2 : this.row,
            size: (_args$size2 = args.size) != null ? _args$size2 : this.size
          });
        }

        equals(other) {
          return this === other ? true : this.channel == other.channel && this.column == other.column && this.row == other.row && this.size == other.size;
        }

        strictEquals(other) {
          return this === other;
        }

        static isEquals(a, b) {
          return a.equals(b);
        }

      };

      (function (_CubismMaskTile) {
        const DEFAULT = _CubismMaskTile.DEFAULT = new CubismMaskTile();
      })(CubismMaskTile || (CubismMaskTile = {}));

      _export("default", CubismMaskTile);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0fac3f6494ea5f02762f2eeea59c3fb8e2e5afed.js.map
System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, CubismVector2, CubismVector3, CubismVector4, _class2, _crd;

  function _reportPossibleCrUseOfIStructLike(extras) {
    _reporterNs.report("IStructLike", "../IStructLike", _context.meta, extras);
  }

  _export({
    CubismVector2: void 0,
    CubismVector3: void 0,
    CubismVector4: void 0
  });

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

      _cclegacy._RF.push({}, "95db4518PZEt5VNKMTg5MU3", "CubismVector", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['math']);

      _export("CubismVector2", CubismVector2 = class CubismVector2 {
        constructor(args = {}) {
          var _args$x, _args$y;

          this.x = void 0;
          this.y = void 0;
          this.x = (_args$x = args.x) != null ? _args$x : 0;
          this.y = (_args$y = args.y) != null ? _args$y : 0;
        }

        copyWith(args = {}) {
          var _args$x2, _args$y2;

          return new CubismVector2({
            x: (_args$x2 = args.x) != null ? _args$x2 : this.x,
            y: (_args$y2 = args.y) != null ? _args$y2 : this.y
          });
        }

        equals(other) {
          return this === other ? true : this.x === other.x && this.y === other.y;
        }

        strictEquals(other) {
          return this === other;
        }

        toBuiltinType() {
          return new math.Vec2(this.x, this.y);
        }

      });

      _export("CubismVector3", CubismVector3 = class CubismVector3 {
        copyWith(args = {}) {
          var _args$x3, _args$y3, _args$z;

          return new CubismVector3((_args$x3 = args.x) != null ? _args$x3 : this.x, (_args$y3 = args.y) != null ? _args$y3 : this.y, (_args$z = args.z) != null ? _args$z : this.z);
        }

        equals(other) {
          return this === other ? true : this.x === other.x && this.y === other.y && this.z === other.z;
        }

        strictEquals(other) {
          return this === other;
        }

        toBuiltinType() {
          return new math.Vec3(this.x, this.y, this.z);
        }

        add(value) {
          return new CubismVector3(this.x + value.x, this.y + value.y, this.z + value.z);
        }

        subtract(value) {
          return new CubismVector3(this.x - value.x, this.y - value.y, this.z - value.z);
        }

        multiplySingle(value) {
          return new CubismVector3(this.x * value, this.y * value, this.z * value);
        }

        sqrMagnitude() {
          return this.x * this.x + this.y * this.y + this.z + this.z;
        }

        magnitude() {
          return Math.sqrt(this.sqrMagnitude());
        }

        constructor(x, y, z) {
          this.x = void 0;
          this.y = void 0;
          this.z = void 0;
          this.x = x;
          this.y = y;
          this.z = z;
        }

        static from(args = {}) {
          var _args$x4, _args$y4, _args$z2;

          return new CubismVector3((_args$x4 = args.x) != null ? _args$x4 : 0, (_args$y4 = args.y) != null ? _args$y4 : 0, (_args$z2 = args.z) != null ? _args$z2 : 0);
        }

      });

      _class2 = CubismVector3;
      CubismVector3.ZERO = new _class2(0, 0, 0);

      _export("CubismVector4", CubismVector4 = class CubismVector4 {
        constructor(args = {}) {
          var _args$x5, _args$y5, _args$z3, _args$w;

          this.x = void 0;
          this.y = void 0;
          this.z = void 0;
          this.w = void 0;
          this.x = (_args$x5 = args.x) != null ? _args$x5 : 0;
          this.y = (_args$y5 = args.y) != null ? _args$y5 : 0;
          this.z = (_args$z3 = args.z) != null ? _args$z3 : 0;
          this.w = (_args$w = args.w) != null ? _args$w : 0;
        }

        copyWith(args = {}) {
          var _args$x6, _args$y6, _args$z4, _args$w2;

          return new CubismVector4({
            x: (_args$x6 = args.x) != null ? _args$x6 : this.x,
            y: (_args$y6 = args.y) != null ? _args$y6 : this.y,
            z: (_args$z4 = args.z) != null ? _args$z4 : this.z,
            w: (_args$w2 = args.w) != null ? _args$w2 : this.w
          });
        }

        equals(other) {
          return this === other ? true : this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
        }

        strictEquals(other) {
          return this === other;
        }

        toBuiltinType() {
          return new math.Vec4(this.x, this.y, this.z, this.w);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68251b3726b24fe29557828da91cbeb5e559f240.js.map
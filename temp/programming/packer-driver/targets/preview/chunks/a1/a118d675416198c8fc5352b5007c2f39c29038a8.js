System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, geometry, Vector3, CubismBounds, _crd;

  function _reportPossibleCrUseOfIStructLike(extras) {
    _reporterNs.report("IStructLike", "../IStructLike", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIVector(extras) {
    _reporterNs.report("IVector3", "./CubismVector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "./CubismVector", _context.meta, extras);
  }

  _export("CubismBounds", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      geometry = _cc.geometry;
    }, function (_unresolved_2) {
      Vector3 = _unresolved_2.CubismVector3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e23a0UI8ThEwI1Ogfvga217", "CubismGeometry", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['geometry']);

      // https://github.com/Unity-Technologies/UnityCsReference/blob/0a2eeb7a72710d89cccdb6aeee8431d27ee99cd1/Runtime/Export/Geometry/Bounds.cs
      _export("CubismBounds", CubismBounds = class CubismBounds {
        constructor(cx, cy, cz, hw, hh, hd) {
          this.cx = void 0;
          this.cy = void 0;
          this.cz = void 0;
          this.hw = void 0;
          this.hh = void 0;
          this.hd = void 0;
          this.cx = cx;
          this.cy = cy;
          this.cz = cz;
          this.hw = hw;
          this.hh = hh;
          this.hd = hd;
        }

        center() {
          return new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)(this.cx, this.cy, this.cz);
        }

        extents() {
          return new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)(this.hw, this.hh, this.hd);
        }

        min() {
          return this.center().subtract(this.extents());
        }

        max() {
          return this.center().add(this.extents());
        }

        contains(point) {
          var min = this.min();
          var max = this.max();
          return max.x >= point.x && max.y >= point.y && max.z >= point.z && min.x <= point.x && min.y <= point.y && min.z <= point.z;
        }

        copyWith(args) {
          var _args$cx, _args$cy, _args$cz, _args$hw, _args$hh, _args$hd;

          if (args === void 0) {
            args = {};
          }

          return new CubismBounds((_args$cx = args.cx) != null ? _args$cx : this.cx, (_args$cy = args.cy) != null ? _args$cy : this.cy, (_args$cz = args.cz) != null ? _args$cz : this.cz, (_args$hw = args.hw) != null ? _args$hw : this.hw, (_args$hh = args.hh) != null ? _args$hh : this.hh, (_args$hd = args.hd) != null ? _args$hd : this.hd);
        }

        equals(other) {
          return this === other ? true : this.cx === other.cx && this.cy === other.cy && this.cz === other.cz && this.hw === other.hw && this.hh === other.hh && this.hd === other.hd;
        }

        strictEquals(other) {
          return this === other;
        }

        toAABB() {
          return new geometry.AABB(this.cx, this.cy, this.cz, this.hw, this.hh, this.hd);
        }

        static from6f(args) {
          var _args$cx2, _args$cy2, _args$cz2, _args$hw2, _args$hh2, _args$hd2;

          if (args === void 0) {
            args = {};
          }

          return new CubismBounds((_args$cx2 = args.cx) != null ? _args$cx2 : 0, (_args$cy2 = args.cy) != null ? _args$cy2 : 0, (_args$cz2 = args.cz) != null ? _args$cz2 : 0, (_args$hw2 = args.hw) != null ? _args$hw2 : 0, (_args$hh2 = args.hh) != null ? _args$hh2 : 0, (_args$hd2 = args.hd) != null ? _args$hd2 : 0);
        }

        static fromVector(center, size) {
          return new CubismBounds(center.x, center.y, center.z, size.x * 0.5, size.y * 0.5, size.z * 0.5);
        }

        static fromAABB(aabb) {
          return new CubismBounds(aabb.center.x, aabb.center.y, aabb.center.z, aabb.halfExtents.x, aabb.halfExtents.y, aabb.halfExtents.z);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a118d675416198c8fc5352b5007c2f39c29038a8.js.map
System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, Vector3, CubismRaycastHit;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_) {
      Vector3 = _unresolved_.CubismVector3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "3e457hn43ZJ5p627NM0/tUN", "CubismRaycastHit", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /** Contains raycast information. */
      _export("default", CubismRaycastHit = class CubismRaycastHit {
        constructor(args = {}) {
          var _args$drawable, _args$distance, _args$localPosition, _args$worldPosition;

          /** The hit {@link CubismDrawable} */
          this.drawable = void 0;

          /** The distance the ray traveled until it hit the {@link CubismDrawable}. */
          this.distance = void 0;

          /** The hit position local to the {@link CubismDrawable}. */
          this.localPosition = void 0;

          /** The hit position in world coordinates. */
          this.worldPosition = void 0;
          this.drawable = (_args$drawable = args.drawable) != null ? _args$drawable : null;
          this.distance = (_args$distance = args.distance) != null ? _args$distance : 0;
          this.localPosition = (_args$localPosition = args.localPosition) != null ? _args$localPosition : Vector3.ZERO;
          this.worldPosition = (_args$worldPosition = args.worldPosition) != null ? _args$worldPosition : Vector3.ZERO;
        }

        copyWith(args = {}) {
          var _args$distance2, _args$localPosition2, _args$worldPosition2;

          return new CubismRaycastHit({
            drawable: args.drawable !== undefined ? args.drawable : this.drawable,
            distance: (_args$distance2 = args.distance) != null ? _args$distance2 : this.distance,
            localPosition: (_args$localPosition2 = args.localPosition) != null ? _args$localPosition2 : this.localPosition,
            worldPosition: (_args$worldPosition2 = args.worldPosition) != null ? _args$worldPosition2 : this.worldPosition
          });
        }

        equals(other) {
          return this === other ? true : this.drawable === other.drawable && this.distance == other.distance && this.localPosition.equals(other.localPosition) && this.worldPosition.equals(other.worldPosition);
        }

        strictEquals(other) {
          return this === other;
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=9a4bd4350bf47495621c14f25b733cea925fdaff.js.map
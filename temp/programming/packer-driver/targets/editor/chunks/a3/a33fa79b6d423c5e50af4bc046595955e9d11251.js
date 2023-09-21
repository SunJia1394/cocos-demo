System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, geometry, math, _decorator, ComponentExtensionMethods, CubismDrawable, Vector3, CubismRenderer, CubismRaycastable, CubismRaycastablePrecision, CubismRaycastHit, _dec, _class, ccclass, CubismRaycaster;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      geometry = _cc.geometry;
      math = _cc.math;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      ComponentExtensionMethods = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismDrawable = _unresolved_2.default;
    }, function (_unresolved_3) {
      Vector3 = _unresolved_3.CubismVector3;
    }, function (_unresolved_4) {
      CubismRenderer = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismRaycastable = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismRaycastablePrecision = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismRaycastHit = _unresolved_7.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5d5fcnu8edOsYeXbsFK+3fP", "CubismRaycaster", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Component', 'geometry', 'math', '_decorator']);

      ({
        ccclass
      } = _decorator);
      /**
       * Allows casting rays against {@link CubismRaycastable}s.
       *
       * **Sealed class**
       */

      _export("default", CubismRaycaster = (_dec = ccclass('CubismRaycaster'), _dec(_class = class CubismRaycaster extends Component {
        constructor(...args) {
          super(...args);

          /** {@link CubismRenderer}s with {@link CubismRaycastable}s attached. */
          this.raycastables = null;
          // { get; set; }

          /** {@link CubismRaycastablePrecision}s with {@link CubismRaycastable}s attached. */
          this.raycastablePrecisions = null;
        }

        // { get; set; }

        /** Refreshes the controller. Call this method after adding and/or removing {@link CubismRaycastable}. */
        refresh() {
          var _ComponentExtensionMe, _ComponentExtensionMe2;

          const candidates = (_ComponentExtensionMe = (_ComponentExtensionMe2 = ComponentExtensionMethods.findCubismModel(this)) == null ? void 0 : _ComponentExtensionMe2.drawables) != null ? _ComponentExtensionMe : null;

          if (candidates == null) {
            console.error('CubismRaycaster.refresh(): candidates is null.');
            return;
          } // Find raycastable drawables.


          const raycastables = new Array();
          const raycastablePrecisions = new Array();

          for (var i = 0; i < candidates.length; i++) {
            // Skip non-raycastables.
            if (candidates[i].getComponent(CubismRaycastable) == null) {
              continue;
            }

            const renderer = candidates[i].getComponent(CubismRenderer);
            console.assert(renderer);
            raycastables.push(renderer);
            const raycastable = candidates[i].getComponent(CubismRaycastable);
            console.assert(raycastable);
            console.assert(raycastable.precision);
            raycastablePrecisions.push(raycastable.precision);
          } // Cache raycastables.


          this.raycastables = raycastables;
          this.raycastablePrecisions = raycastablePrecisions;
        } //#region Cocos Creator Event Handling

        /** Called by Cocos Creator. Makes sure cache is initialized. */


        start() {
          // Initialize cache.
          this.refresh();
        } //#endregion

        /**
         * Casts a ray.
         * @param origin The origin of the ray.
         * @param direction The direction of the ray.
         * @param result The result of the cast.
         * @param maximumDistance [Optional] The maximum distance of the ray.
         * @returns
         * true in case of a hit; false otherwise.
         *
         * The numbers of drawables had hit
         */


        raycast1(origin, direction, result, maximumDistance = Number.POSITIVE_INFINITY) {
          return this.raycast2(geometry.Ray.create(origin.x, origin.y, origin.z, direction.x, direction.y, direction.z), result, maximumDistance);
        }
        /**
         * Casts a ray.
         * @param ray
         * @param result  The result of the cast.
         * @param maximumDistance [Optional] The maximum distance of the ray.
         * @returns
         * true in case of a hit; false otherwise.
         *
         * The numbers of drawables had hit
         */


        raycast2(ray, result, maximumDistance = Number.POSITIVE_INFINITY) {
          // Cast ray against model plane.
          const origin = Vector3.from(ray.o);
          const direction = Vector3.from(ray.d);
          const intersectionInWorldSpace = origin.add(direction.multiplySingle(direction.z / origin.z));
          let intersectionInLocalSpace = Vector3.from(this.node.inverseTransformPoint(new math.Vec3(), intersectionInWorldSpace.toBuiltinType()));
          intersectionInLocalSpace = intersectionInLocalSpace.copyWith({
            z: 0
          });
          const distance = intersectionInWorldSpace.magnitude(); // Return non-hits.

          if (distance > maximumDistance) {
            return 0;
          } // Cast against each raycastable.


          let hitCount = 0;
          console.assert(this.raycastables != null);
          const raycastables = this.raycastables;
          console.assert(this.raycastablePrecisions != null);
          const raycastablePrecisions = this.raycastablePrecisions;

          for (let i = 0; i < raycastables.length; i++) {
            const raycastable = raycastables[i];
            const raycastablePrecision = raycastablePrecisions[i]; // Skip inactive raycastables.

            console.assert(raycastable.meshRenderer != null);

            if (!raycastable.meshRenderer.enabled) {
              continue;
            }

            const bounds = raycastable.mesh.calculateBounds(); // Skip non hits (bounding box)

            if (!bounds.contains(intersectionInLocalSpace)) {
              continue;
            } // Do detailed hit-detection against mesh if requested.


            if (raycastablePrecision == CubismRaycastablePrecision.triangles) {
              if (!this.containsInTriangles(raycastable.mesh, intersectionInLocalSpace)) {
                continue;
              }
            }

            result[hitCount] = new CubismRaycastHit({
              drawable: raycastable.getComponent(CubismDrawable),
              distance: distance,
              localPosition: intersectionInLocalSpace,
              worldPosition: intersectionInWorldSpace
            });
            ++hitCount; // Exit if result buffer is full.

            if (hitCount == result.length) {
              break;
            }
          }

          return hitCount;
        }
        /**
         * Check the point is inside polygons.
         * @param mesh
         * @param inputPosition
         * @returns
         */


        containsInTriangles(mesh, inputPosition) {
          const triangles = mesh.getIndices();
          const positions = mesh.getPositions();

          for (let i = 0; i < triangles.length; i += 3) {
            const vertexPositionA = positions[triangles[i]];
            const vertexPositionB = positions[triangles[i + 1]];
            const vertexPositionC = positions[triangles[i + 2]];
            const crossProduct1 = (vertexPositionB.x - vertexPositionA.x) * (inputPosition.y - vertexPositionB.y) - (vertexPositionB.y - vertexPositionA.y) * (inputPosition.x - vertexPositionB.x);
            const crossProduct2 = (vertexPositionC.x - vertexPositionB.x) * (inputPosition.y - vertexPositionC.y) - (vertexPositionC.y - vertexPositionB.y) * (inputPosition.x - vertexPositionC.x);
            const crossProduct3 = (vertexPositionA.x - vertexPositionC.x) * (inputPosition.y - vertexPositionA.y) - (vertexPositionA.y - vertexPositionC.y) * (inputPosition.x - vertexPositionA.x);

            if (crossProduct1 > 0 && crossProduct2 > 0 && crossProduct3 > 0 || crossProduct1 < 0 && crossProduct2 < 0 && crossProduct3 < 0) {
              return true;
            }
          }

          return false;
        }

      }) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=a33fa79b6d423c5e50af4bc046595955e9d11251.js.map
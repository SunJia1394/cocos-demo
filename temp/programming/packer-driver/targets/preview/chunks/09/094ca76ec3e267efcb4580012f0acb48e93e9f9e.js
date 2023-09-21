System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, geometry, math, _decorator, ComponentExtensionMethods, CubismDrawable, Vector3, CubismRenderer, CubismRaycastable, CubismRaycastablePrecision, CubismRaycastHit, _dec, _class, _crd, ccclass, CubismRaycaster;

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDrawable(extras) {
    _reporterNs.report("CubismDrawable", "../../Core/CubismDrawable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "../../Core/CubismVector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMeshPrimitive(extras) {
    _reporterNs.report("CubismMeshPrimitive", "../../Rendering/CubismMeshPrimitive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRenderer(extras) {
    _reporterNs.report("CubismRenderer", "../../Rendering/CubismRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRaycastable(extras) {
    _reporterNs.report("CubismRaycastable", "./CubismRaycastable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRaycastablePrecision(extras) {
    _reporterNs.report("CubismRaycastablePrecision", "./CubismRaycastablePrecision", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRaycastHit(extras) {
    _reporterNs.report("CubismRaycastHit", "./CubismRaycastHit", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      geometry = _cc.geometry;
      math = _cc.math;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismDrawable = _unresolved_3.default;
    }, function (_unresolved_4) {
      Vector3 = _unresolved_4.CubismVector3;
    }, function (_unresolved_5) {
      CubismRenderer = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismRaycastable = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismRaycastablePrecision = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismRaycastHit = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

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
        constructor() {
          super(...arguments);

          /** {@link CubismRenderer}s with {@link CubismRaycastable}s attached. */
          this.raycastables = null;
          // { get; set; }

          /** {@link CubismRaycastablePrecision}s with {@link CubismRaycastable}s attached. */
          this.raycastablePrecisions = null;
        }

        // { get; set; }

        /** Refreshes the controller. Call this method after adding and/or removing {@link CubismRaycastable}. */
        refresh() {
          var _findCubismModel$draw, _findCubismModel;

          var candidates = (_findCubismModel$draw = (_findCubismModel = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this)) == null ? void 0 : _findCubismModel.drawables) != null ? _findCubismModel$draw : null;

          if (candidates == null) {
            console.error('CubismRaycaster.refresh(): candidates is null.');
            return;
          } // Find raycastable drawables.


          var raycastables = new Array();
          var raycastablePrecisions = new Array();

          for (var i = 0; i < candidates.length; i++) {
            // Skip non-raycastables.
            if (candidates[i].getComponent(_crd && CubismRaycastable === void 0 ? (_reportPossibleCrUseOfCubismRaycastable({
              error: Error()
            }), CubismRaycastable) : CubismRaycastable) == null) {
              continue;
            }

            var renderer = candidates[i].getComponent(_crd && CubismRenderer === void 0 ? (_reportPossibleCrUseOfCubismRenderer({
              error: Error()
            }), CubismRenderer) : CubismRenderer);
            console.assert(renderer);
            raycastables.push(renderer);
            var raycastable = candidates[i].getComponent(_crd && CubismRaycastable === void 0 ? (_reportPossibleCrUseOfCubismRaycastable({
              error: Error()
            }), CubismRaycastable) : CubismRaycastable);
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


        raycast1(origin, direction, result, maximumDistance) {
          if (maximumDistance === void 0) {
            maximumDistance = Number.POSITIVE_INFINITY;
          }

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


        raycast2(ray, result, maximumDistance) {
          if (maximumDistance === void 0) {
            maximumDistance = Number.POSITIVE_INFINITY;
          }

          // Cast ray against model plane.
          var origin = (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3).from(ray.o);
          var direction = (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3).from(ray.d);
          var intersectionInWorldSpace = origin.add(direction.multiplySingle(direction.z / origin.z));
          var intersectionInLocalSpace = (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3).from(this.node.inverseTransformPoint(new math.Vec3(), intersectionInWorldSpace.toBuiltinType()));
          intersectionInLocalSpace = intersectionInLocalSpace.copyWith({
            z: 0
          });
          var distance = intersectionInWorldSpace.magnitude(); // Return non-hits.

          if (distance > maximumDistance) {
            return 0;
          } // Cast against each raycastable.


          var hitCount = 0;
          console.assert(this.raycastables != null);
          var raycastables = this.raycastables;
          console.assert(this.raycastablePrecisions != null);
          var raycastablePrecisions = this.raycastablePrecisions;

          for (var i = 0; i < raycastables.length; i++) {
            var raycastable = raycastables[i];
            var raycastablePrecision = raycastablePrecisions[i]; // Skip inactive raycastables.

            console.assert(raycastable.meshRenderer != null);

            if (!raycastable.meshRenderer.enabled) {
              continue;
            }

            var bounds = raycastable.mesh.calculateBounds(); // Skip non hits (bounding box)

            if (!bounds.contains(intersectionInLocalSpace)) {
              continue;
            } // Do detailed hit-detection against mesh if requested.


            if (raycastablePrecision == (_crd && CubismRaycastablePrecision === void 0 ? (_reportPossibleCrUseOfCubismRaycastablePrecision({
              error: Error()
            }), CubismRaycastablePrecision) : CubismRaycastablePrecision).triangles) {
              if (!this.containsInTriangles(raycastable.mesh, intersectionInLocalSpace)) {
                continue;
              }
            }

            result[hitCount] = new (_crd && CubismRaycastHit === void 0 ? (_reportPossibleCrUseOfCubismRaycastHit({
              error: Error()
            }), CubismRaycastHit) : CubismRaycastHit)({
              drawable: raycastable.getComponent(_crd && CubismDrawable === void 0 ? (_reportPossibleCrUseOfCubismDrawable({
                error: Error()
              }), CubismDrawable) : CubismDrawable),
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
          var triangles = mesh.getIndices();
          var positions = mesh.getPositions();

          for (var i = 0; i < triangles.length; i += 3) {
            var vertexPositionA = positions[triangles[i]];
            var vertexPositionB = positions[triangles[i + 1]];
            var vertexPositionC = positions[triangles[i + 2]];
            var crossProduct1 = (vertexPositionB.x - vertexPositionA.x) * (inputPosition.y - vertexPositionB.y) - (vertexPositionB.y - vertexPositionA.y) * (inputPosition.x - vertexPositionB.x);
            var crossProduct2 = (vertexPositionC.x - vertexPositionB.x) * (inputPosition.y - vertexPositionC.y) - (vertexPositionC.y - vertexPositionB.y) * (inputPosition.x - vertexPositionC.x);
            var crossProduct3 = (vertexPositionA.x - vertexPositionC.x) * (inputPosition.y - vertexPositionA.y) - (vertexPositionA.y - vertexPositionC.y) * (inputPosition.x - vertexPositionA.x);

            if (crossProduct1 > 0 && crossProduct2 > 0 && crossProduct3 > 0 || crossProduct1 < 0 && crossProduct2 < 0 && crossProduct3 < 0) {
              return true;
            }
          }

          return false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=094ca76ec3e267efcb4580012f0acb48e93e9f9e.js.map
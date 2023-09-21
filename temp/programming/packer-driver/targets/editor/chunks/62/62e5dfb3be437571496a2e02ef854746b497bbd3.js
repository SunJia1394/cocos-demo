System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, geometry, math, utils, _crd, ArrayExtensions, MeshExtensions, MathExtensions, EditorUtils;

  function isNullOrEmpty(value) {
    return value == null || value.length <= 0;
  }

  /**
   * Importerプロセスで実行されているかを返します。
   * 注: global 変数 (window) に AssetDB プロパティ があるかどうかで判定しています。
   * この判定を行うためのAPIが CocosCreator v3.6.2 では現状存在しないための方法となっています。
   *
   * @returns Importerプロセスであるならtrue, そうでないならfalseを返します。
   */
  function isImporter() {
    return Reflect.has(window, 'AssetDB');
  }

  _export({
    isNullOrEmpty: isNullOrEmpty,
    isImporter: isImporter,
    ArrayExtensions: void 0,
    MeshExtensions: void 0,
    MathExtensions: void 0,
    EditorUtils: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      geometry = _cc.geometry;
      math = _cc.math;
      utils = _cc.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e05edsDo/BLmJ+BFi/gcXXT", "Utils", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['game', 'geometry', 'math', 'Mesh', 'Node', 'utils']);

      (function (_ArrayExtensions) {
        function fromVec3Array(source) {
          const result = new Array(source.length * 3);

          for (let i = 0; i < source.length; i++) {
            result[i * 3 + 0] = source[i].x;
            result[i * 3 + 1] = source[i].y;
            result[i * 3 + 2] = source[i].z;
          }

          return result;
        }

        _ArrayExtensions.fromVec3Array = fromVec3Array;

        function isEquals(equalityCompareFunc, a, b) {
          if (a.length != b.length) {
            return false;
          }

          return a.every((e, i, _a) => equalityCompareFunc(e, b[i]));
        }

        _ArrayExtensions.isEquals = isEquals;
      })(ArrayExtensions || _export("ArrayExtensions", ArrayExtensions = {}));

      (function (_MeshExtensions) {
        function calculateBounds(value) {
          const positions = utils.readMesh(value).positions;
          const min = {
            x: positions[0],
            y: positions[1],
            z: positions[2]
          };
          const max = {
            x: min.x,
            y: min.y,
            z: min.z
          };

          for (let i = 1; i < positions.length / 3; i++) {
            const x = positions[i * 3 + 0];
            const y = positions[i * 3 + 1];
            const z = positions[i * 3 + 2];
            min.x = x < min.x ? x : min.x;
            min.y = y < min.y ? y : min.y;
            min.z = z < min.z ? z : min.z;
            max.x = x > max.x ? x : max.x;
            max.y = y > max.y ? y : max.y;
            max.z = z > max.z ? z : max.z;
          }

          const o = {
            x: 0,
            y: 0,
            z: 0
          };
          math.Vec3.lerp(o, min, max, 0.5);
          return new geometry.AABB(o.x, o.y, o.z, max.x - min.x, max.y - min.y, max.z - min.z);
        }

        _MeshExtensions.calculateBounds = calculateBounds;
      })(MeshExtensions || _export("MeshExtensions", MeshExtensions = {}));

      (function (_MathExtensions) {
        function isPowerOfTwo(value) {
          return math.nextPow2(value) == value;
        }

        _MathExtensions.isPowerOfTwo = isPowerOfTwo;

        function nextPowerOfTwo(value) {
          return math.nextPow2(value);
        }

        _MathExtensions.nextPowerOfTwo = nextPowerOfTwo;

        function closestPowerOfTwo(value) {
          const next = math.nextPow2(value);
          const half = next / 2;
          const prevDiff = value - half;
          const nextDiff = next - value;

          if (prevDiff <= nextDiff) {
            return half;
          }

          return next;
        }

        _MathExtensions.closestPowerOfTwo = closestPowerOfTwo;
        let Float;

        (function (_Float) {
          function smoothDamp(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
            var _maxSpeed, _deltaTime;

            (_maxSpeed = maxSpeed) != null ? _maxSpeed : maxSpeed = Number.POSITIVE_INFINITY;
            (_deltaTime = deltaTime) != null ? _deltaTime : deltaTime = game.deltaTime; // Based on Game Programming Gems 4 Chapter 1.10

            smoothTime = Math.max(0.0001, smoothTime);
            const omega = 2 / smoothTime;
            const x = omega * deltaTime;
            const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
            let change = current - target;
            const originalTo = target; // Clamp maximum speed

            const maxChange = maxSpeed * smoothTime;
            change = math.clamp(change, -maxChange, maxChange);
            target = current - change;
            const temp = (currentVelocity + omega * change) * deltaTime;
            currentVelocity = (currentVelocity - omega * temp) * exp;
            let output = target + (change + temp) * exp; // Prevent overshooting

            if (originalTo - current > 0.0 == output > originalTo) {
              output = originalTo;
              currentVelocity = (output - originalTo) / deltaTime;
            }

            return [output, currentVelocity];
          }

          _Float.smoothDamp = smoothDamp;
        })(Float || (Float = _MathExtensions.Float || (_MathExtensions.Float = {})));

        let Vec2;

        (function (_Vec) {
          function add(a, b) {
            return new math.Vec2(a.x + b.x, a.y + b.y);
          }

          _Vec.add = add;

          function subtract(a, b) {
            return new math.Vec2(a.x - b.x, a.y - b.y);
          }

          _Vec.subtract = subtract;

          function multiplySingle(a, b) {
            return new math.Vec2(a.x * b, a.y * b);
          }

          _Vec.multiplySingle = multiplySingle;

          function divideSingle(a, b) {
            return new math.Vec2(a.x / b, a.y / b);
          }

          _Vec.divideSingle = divideSingle;

          function smoothDamp(current, target, currentVelocity, smoothTime, maxSpeed = Number.POSITIVE_INFINITY, deltaTime = game.deltaTime) {
            currentVelocity = currentVelocity.clone();
            smoothTime = Math.max(0.0001, smoothTime);
            const omega = 2.0 / smoothTime;
            const x = omega * deltaTime;
            const exp = 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);
            let change_x = current.x - target.x;
            let change_y = current.y - target.y;
            const originalTo = target.clone(); // Clamp maximum speed

            const maxChange = maxSpeed * smoothTime;
            const maxChangeSq = maxChange * maxChange;
            const sqDist = change_x * change_x + change_y * change_y;

            if (sqDist > maxChangeSq) {
              const mag = Math.sqrt(sqDist);
              change_x = change_x / mag * maxChange;
              change_y = change_y / mag * maxChange;
            }

            target.x = current.x - change_x;
            target.y = current.y - change_y;
            const temp_x = (currentVelocity.x + omega * change_x) * deltaTime;
            const temp_y = (currentVelocity.y + omega * change_y) * deltaTime;
            currentVelocity.x = (currentVelocity.x - omega * temp_x) * exp;
            currentVelocity.y = (currentVelocity.y - omega * temp_y) * exp;
            let output_x = target.x + (change_x + temp_x) * exp;
            let output_y = target.y + (change_y + temp_y) * exp; // Prevent overshooting

            const origMinusCurrent_x = originalTo.x - current.x;
            const origMinusCurrent_y = originalTo.y - current.y;
            const outMinusOrig_x = output_x - originalTo.x;
            const outMinusOrig_y = output_y - originalTo.y;

            if (origMinusCurrent_x * outMinusOrig_x + origMinusCurrent_y * outMinusOrig_y > 0) {
              output_x = originalTo.x;
              output_y = originalTo.y;
              currentVelocity.x = (output_x - originalTo.x) / deltaTime;
              currentVelocity.y = (output_y - originalTo.y) / deltaTime;
            }

            return [new math.Vec2(output_x, output_y), currentVelocity];
          }

          _Vec.smoothDamp = smoothDamp;
        })(Vec2 || (Vec2 = _MathExtensions.Vec2 || (_MathExtensions.Vec2 = {})));

        let Vec3;

        (function (_Vec2) {
          function subtract(a, b) {
            return new math.Vec3(a.x - b.x, a.y - b.y, a.z - b.z);
          }

          _Vec2.subtract = subtract;

          function smoothDamp(current, target, currentVelocity, smoothTime, maxSpeed = Number.POSITIVE_INFINITY, deltaTime = game.deltaTime) {
            currentVelocity = currentVelocity.clone();
            let output_x = 0;
            let output_y = 0;
            let output_z = 0;
            smoothTime = Math.max(0.0001, smoothTime);
            const omega = 2.0 / smoothTime;
            const x = omega * deltaTime;
            const exp = 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);
            let change_x = current.x - target.x;
            let change_y = current.y - target.y;
            let change_z = current.z - target.z;
            let originalTo = target.clone(); // Clamp maximum speed

            const maxChange = maxSpeed * smoothTime;
            const maxChangeSq = maxChange * maxChange;
            const sqrmag = change_x * change_x + change_y * change_y + change_z * change_z;

            if (sqrmag > maxChangeSq) {
              var mag = Math.sqrt(sqrmag);
              change_x = change_x / mag * maxChange;
              change_y = change_y / mag * maxChange;
              change_z = change_z / mag * maxChange;
            }

            target.x = current.x - change_x;
            target.y = current.y - change_y;
            target.z = current.z - change_z;
            const temp_x = (currentVelocity.x + omega * change_x) * deltaTime;
            const temp_y = (currentVelocity.y + omega * change_y) * deltaTime;
            const temp_z = (currentVelocity.z + omega * change_z) * deltaTime;
            currentVelocity.x = (currentVelocity.x - omega * temp_x) * exp;
            currentVelocity.y = (currentVelocity.y - omega * temp_y) * exp;
            currentVelocity.z = (currentVelocity.z - omega * temp_z) * exp;
            output_x = target.x + (change_x + temp_x) * exp;
            output_y = target.y + (change_y + temp_y) * exp;
            output_z = target.z + (change_z + temp_z) * exp; // Prevent overshooting

            let origMinusCurrent_x = originalTo.x - current.x;
            let origMinusCurrent_y = originalTo.y - current.y;
            let origMinusCurrent_z = originalTo.z - current.z;
            let outMinusOrig_x = output_x - originalTo.x;
            let outMinusOrig_y = output_y - originalTo.y;
            let outMinusOrig_z = output_z - originalTo.z;

            if (origMinusCurrent_x * outMinusOrig_x + origMinusCurrent_y * outMinusOrig_y + origMinusCurrent_z * outMinusOrig_z > 0) {
              output_x = originalTo.x;
              output_y = originalTo.y;
              output_z = originalTo.z;
              currentVelocity.x = (output_x - originalTo.x) / deltaTime;
              currentVelocity.y = (output_y - originalTo.y) / deltaTime;
              currentVelocity.z = (output_z - originalTo.z) / deltaTime;
            }

            return [new math.Vec3(output_x, output_y, output_z), currentVelocity];
          }

          _Vec2.smoothDamp = smoothDamp;
        })(Vec3 || (Vec3 = _MathExtensions.Vec3 || (_MathExtensions.Vec3 = {})));
      })(MathExtensions || _export("MathExtensions", MathExtensions = {}));

      (function (_EditorUtils) {
        //import type IQueryNodeResult from './Dump/Query/IQueryNodeResult';
        function getComponentPath(self, uuid) {
          const comps = self.__comps__;

          for (let i = 0; i < comps.length; i++) {
            if (comps[i].value.uuid.value == uuid) {
              return '__comps__.' + i;
            }
          }

          return null;
        }

        _EditorUtils.getComponentPath = getComponentPath;

        async function applyComponentProperty(nodeUuid, compUuid, property, value, type) {
          const tree = await Editor.Message.request('scene', 'query-node', nodeUuid);
          const path = EditorUtils.getComponentPath(tree, compUuid);

          if (path == null) {
            return;
          }

          console.info(`set-property: ${path}.${property}`);
          await Editor.Message.request('scene', 'set-property', {
            uuid: nodeUuid,
            path: `${path}.${property}`,
            dump: {
              value: value,
              type: type
            }
          });
        }

        _EditorUtils.applyComponentProperty = applyComponentProperty;
      })(EditorUtils || _export("EditorUtils", EditorUtils = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62e5dfb3be437571496a2e02ef854746b497bbd3.js.map
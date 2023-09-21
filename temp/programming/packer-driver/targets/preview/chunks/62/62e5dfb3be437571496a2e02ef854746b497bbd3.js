System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, geometry, math, utils, _crd, ArrayExtensions, MeshExtensions, MathExtensions, EditorUtils;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          var result = new Array(source.length * 3);

          for (var i = 0; i < source.length; i++) {
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
          var positions = utils.readMesh(value).positions;
          var min = {
            x: positions[0],
            y: positions[1],
            z: positions[2]
          };
          var max = {
            x: min.x,
            y: min.y,
            z: min.z
          };

          for (var i = 1; i < positions.length / 3; i++) {
            var _x = positions[i * 3 + 0];
            var _y = positions[i * 3 + 1];
            var z = positions[i * 3 + 2];
            min.x = _x < min.x ? _x : min.x;
            min.y = _y < min.y ? _y : min.y;
            min.z = z < min.z ? z : min.z;
            max.x = _x > max.x ? _x : max.x;
            max.y = _y > max.y ? _y : max.y;
            max.z = z > max.z ? z : max.z;
          }

          var o = {
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
          var next = math.nextPow2(value);
          var half = next / 2;
          var prevDiff = value - half;
          var nextDiff = next - value;

          if (prevDiff <= nextDiff) {
            return half;
          }

          return next;
        }

        _MathExtensions.closestPowerOfTwo = closestPowerOfTwo;
        var Float;

        (function (_Float) {
          function smoothDamp(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
            var _maxSpeed, _deltaTime;

            (_maxSpeed = maxSpeed) != null ? _maxSpeed : maxSpeed = Number.POSITIVE_INFINITY;
            (_deltaTime = deltaTime) != null ? _deltaTime : deltaTime = game.deltaTime; // Based on Game Programming Gems 4 Chapter 1.10

            smoothTime = Math.max(0.0001, smoothTime);
            var omega = 2 / smoothTime;
            var x = omega * deltaTime;
            var exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
            var change = current - target;
            var originalTo = target; // Clamp maximum speed

            var maxChange = maxSpeed * smoothTime;
            change = math.clamp(change, -maxChange, maxChange);
            target = current - change;
            var temp = (currentVelocity + omega * change) * deltaTime;
            currentVelocity = (currentVelocity - omega * temp) * exp;
            var output = target + (change + temp) * exp; // Prevent overshooting

            if (originalTo - current > 0.0 == output > originalTo) {
              output = originalTo;
              currentVelocity = (output - originalTo) / deltaTime;
            }

            return [output, currentVelocity];
          }

          _Float.smoothDamp = smoothDamp;
        })(Float || (Float = _MathExtensions.Float || (_MathExtensions.Float = {})));

        var Vec2;

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

          function smoothDamp(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
            if (maxSpeed === void 0) {
              maxSpeed = Number.POSITIVE_INFINITY;
            }

            if (deltaTime === void 0) {
              deltaTime = game.deltaTime;
            }

            currentVelocity = currentVelocity.clone();
            smoothTime = Math.max(0.0001, smoothTime);
            var omega = 2.0 / smoothTime;
            var x = omega * deltaTime;
            var exp = 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);
            var change_x = current.x - target.x;
            var change_y = current.y - target.y;
            var originalTo = target.clone(); // Clamp maximum speed

            var maxChange = maxSpeed * smoothTime;
            var maxChangeSq = maxChange * maxChange;
            var sqDist = change_x * change_x + change_y * change_y;

            if (sqDist > maxChangeSq) {
              var mag = Math.sqrt(sqDist);
              change_x = change_x / mag * maxChange;
              change_y = change_y / mag * maxChange;
            }

            target.x = current.x - change_x;
            target.y = current.y - change_y;
            var temp_x = (currentVelocity.x + omega * change_x) * deltaTime;
            var temp_y = (currentVelocity.y + omega * change_y) * deltaTime;
            currentVelocity.x = (currentVelocity.x - omega * temp_x) * exp;
            currentVelocity.y = (currentVelocity.y - omega * temp_y) * exp;
            var output_x = target.x + (change_x + temp_x) * exp;
            var output_y = target.y + (change_y + temp_y) * exp; // Prevent overshooting

            var origMinusCurrent_x = originalTo.x - current.x;
            var origMinusCurrent_y = originalTo.y - current.y;
            var outMinusOrig_x = output_x - originalTo.x;
            var outMinusOrig_y = output_y - originalTo.y;

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

        var Vec3;

        (function (_Vec2) {
          function subtract(a, b) {
            return new math.Vec3(a.x - b.x, a.y - b.y, a.z - b.z);
          }

          _Vec2.subtract = subtract;

          function smoothDamp(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
            if (maxSpeed === void 0) {
              maxSpeed = Number.POSITIVE_INFINITY;
            }

            if (deltaTime === void 0) {
              deltaTime = game.deltaTime;
            }

            currentVelocity = currentVelocity.clone();
            var output_x = 0;
            var output_y = 0;
            var output_z = 0;
            smoothTime = Math.max(0.0001, smoothTime);
            var omega = 2.0 / smoothTime;
            var x = omega * deltaTime;
            var exp = 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);
            var change_x = current.x - target.x;
            var change_y = current.y - target.y;
            var change_z = current.z - target.z;
            var originalTo = target.clone(); // Clamp maximum speed

            var maxChange = maxSpeed * smoothTime;
            var maxChangeSq = maxChange * maxChange;
            var sqrmag = change_x * change_x + change_y * change_y + change_z * change_z;

            if (sqrmag > maxChangeSq) {
              var mag = Math.sqrt(sqrmag);
              change_x = change_x / mag * maxChange;
              change_y = change_y / mag * maxChange;
              change_z = change_z / mag * maxChange;
            }

            target.x = current.x - change_x;
            target.y = current.y - change_y;
            target.z = current.z - change_z;
            var temp_x = (currentVelocity.x + omega * change_x) * deltaTime;
            var temp_y = (currentVelocity.y + omega * change_y) * deltaTime;
            var temp_z = (currentVelocity.z + omega * change_z) * deltaTime;
            currentVelocity.x = (currentVelocity.x - omega * temp_x) * exp;
            currentVelocity.y = (currentVelocity.y - omega * temp_y) * exp;
            currentVelocity.z = (currentVelocity.z - omega * temp_z) * exp;
            output_x = target.x + (change_x + temp_x) * exp;
            output_y = target.y + (change_y + temp_y) * exp;
            output_z = target.z + (change_z + temp_z) * exp; // Prevent overshooting

            var origMinusCurrent_x = originalTo.x - current.x;
            var origMinusCurrent_y = originalTo.y - current.y;
            var origMinusCurrent_z = originalTo.z - current.z;
            var outMinusOrig_x = output_x - originalTo.x;
            var outMinusOrig_y = output_y - originalTo.y;
            var outMinusOrig_z = output_z - originalTo.z;

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
          var comps = self.__comps__;

          for (var i = 0; i < comps.length; i++) {
            if (comps[i].value.uuid.value == uuid) {
              return '__comps__.' + i;
            }
          }

          return null;
        }

        _EditorUtils.getComponentPath = getComponentPath;

        function applyComponentProperty(_x2, _x3, _x4, _x5, _x6) {
          return _applyComponentProperty.apply(this, arguments);
        }

        function _applyComponentProperty() {
          _applyComponentProperty = _asyncToGenerator(function* (nodeUuid, compUuid, property, value, type) {
            var tree = yield Editor.Message.request('scene', 'query-node', nodeUuid);
            var path = EditorUtils.getComponentPath(tree, compUuid);

            if (path == null) {
              return;
            }

            console.info("set-property: " + path + "." + property);
            yield Editor.Message.request('scene', 'set-property', {
              uuid: nodeUuid,
              path: path + "." + property,
              dump: {
                value: value,
                type: type
              }
            });
          });
          return _applyComponentProperty.apply(this, arguments);
        }

        _EditorUtils.applyComponentProperty = applyComponentProperty;
      })(EditorUtils || _export("EditorUtils", EditorUtils = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62e5dfb3be437571496a2e02ef854746b497bbd3.js.map
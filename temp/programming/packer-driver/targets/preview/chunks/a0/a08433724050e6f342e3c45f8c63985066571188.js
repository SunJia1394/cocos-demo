System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, CubismPhysicsMath;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "85eb74F4XxGgJZUEtt0V8Ad", "CubismPhysicsMath", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['math']);

      /** Math utilities for physics. */
      _export("default", CubismPhysicsMath = class CubismPhysicsMath {
        static degreesToRadian(degrees) {
          return degrees / 180.0 * Math.PI;
        }
        /**
         * Gets angle from both vector direction.
         * @param from From vector.
         * @param to To vector.
         * @returns Angle of radian.
         */


        static directionToRadian(from, to) {
          var q1 = Math.atan2(to.y, to.x);
          var q2 = Math.atan2(from.y, from.x);
          return this.getAngleDiff(q1, q2);
        }

        static getAngleDiff(q1, q2) {
          var ret = q1 - q2;

          while (ret < -Math.PI) {
            ret += Math.PI * 2.0;
          }

          while (ret > Math.PI) {
            ret -= Math.PI * 2.0;
          }

          return ret;
        }

        static radianToDirection(totalAngle) {
          var ret = new math.Vec2(Math.sin(totalAngle), Math.cos(totalAngle));
          return ret;
        }

        static getRangeValue(min, max) {
          var maxValue = Math.max(min, max);
          var minValue = Math.min(min, max);
          return Math.abs(maxValue - minValue);
        }

        static getDefaultValue(min, max) {
          var minValue = Math.min(min, max);
          return minValue + CubismPhysicsMath.getRangeValue(min, max) / 2.0;
        }

        static normalize(parameter, parameterValue, normalizedMinimum, normalizedMaximum, normalizedDefault, isInverted) {
          if (isInverted === void 0) {
            isInverted = false;
          }

          var result = 0.0;
          var maxValue = Math.max(parameter.maximumValue, parameter.minimumValue);
          var minValue = Math.min(parameter.maximumValue, parameter.minimumValue);
          parameterValue = math.clamp(parameterValue, minValue, maxValue);
          var minNormValue = Math.min(normalizedMinimum, normalizedMaximum);
          var maxNormValue = Math.max(normalizedMinimum, normalizedMaximum);
          var middleNormValue = normalizedDefault;
          var middleValue = CubismPhysicsMath.getDefaultValue(minValue, maxValue);
          var paramValue = parameterValue - middleValue;

          switch (Math.sign(paramValue)) {
            case 1:
              {
                var nLength = maxNormValue - middleNormValue;
                var pLength = maxValue - middleValue;

                if (pLength != 0.0) {
                  result = paramValue * (nLength / pLength);
                  result += middleNormValue;
                }

                break;
              }

            case -1:
              {
                var _nLength = minNormValue - middleNormValue;

                var _pLength = minValue - middleValue;

                if (_pLength != 0.0) {
                  result = paramValue * (_nLength / _pLength);
                  result += middleNormValue;
                }

                break;
              }

            case 0:
              {
                result = middleNormValue;
                break;
              }
          }

          return {
            normalized: isInverted ? result : result * -1.0,
            clamped: parameterValue
          };
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=a08433724050e6f342e3c45f8c63985066571188.js.map
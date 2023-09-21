System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, CubismPhysicsMath, _crd;

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  _export("default", void 0);

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
          const q1 = Math.atan2(to.y, to.x);
          const q2 = Math.atan2(from.y, from.x);
          return this.getAngleDiff(q1, q2);
        }

        static getAngleDiff(q1, q2) {
          let ret = q1 - q2;

          while (ret < -Math.PI) {
            ret += Math.PI * 2.0;
          }

          while (ret > Math.PI) {
            ret -= Math.PI * 2.0;
          }

          return ret;
        }

        static radianToDirection(totalAngle) {
          const ret = new math.Vec2(Math.sin(totalAngle), Math.cos(totalAngle));
          return ret;
        }

        static getRangeValue(min, max) {
          const maxValue = Math.max(min, max);
          const minValue = Math.min(min, max);
          return Math.abs(maxValue - minValue);
        }

        static getDefaultValue(min, max) {
          const minValue = Math.min(min, max);
          return minValue + CubismPhysicsMath.getRangeValue(min, max) / 2.0;
        }

        static normalize(parameter, parameterValue, normalizedMinimum, normalizedMaximum, normalizedDefault, isInverted = false) {
          let result = 0.0;
          const maxValue = Math.max(parameter.maximumValue, parameter.minimumValue);
          const minValue = Math.min(parameter.maximumValue, parameter.minimumValue);
          parameterValue = math.clamp(parameterValue, minValue, maxValue);
          const minNormValue = Math.min(normalizedMinimum, normalizedMaximum);
          const maxNormValue = Math.max(normalizedMinimum, normalizedMaximum);
          const middleNormValue = normalizedDefault;
          const middleValue = CubismPhysicsMath.getDefaultValue(minValue, maxValue);
          const paramValue = parameterValue - middleValue;

          switch (Math.sign(paramValue)) {
            case 1:
              {
                const nLength = maxNormValue - middleNormValue;
                const pLength = maxValue - middleValue;

                if (pLength != 0.0) {
                  result = paramValue * (nLength / pLength);
                  result += middleNormValue;
                }

                break;
              }

            case -1:
              {
                const nLength = minNormValue - middleNormValue;
                const pLength = minValue - middleValue;

                if (pLength != 0.0) {
                  result = paramValue * (nLength / pLength);
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

      _crd = false;
    }
  };
});
//# sourceMappingURL=80eda5e5ff9cbe1410b7aae61f56c3ade1a5ce53.js.map
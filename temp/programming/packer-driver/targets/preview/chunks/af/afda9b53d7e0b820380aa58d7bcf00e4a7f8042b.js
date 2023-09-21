System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, CCString, CCFloat, _decorator, CubismMotion3Json, CubismSerializableCurve, CubismSerializableKeyFrame, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, ccclass, property, CubismFadeMotionData, CubismSerializableCurves;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function isString(value) {
    return typeof value == 'string';
  }

  function isNumber(value) {
    return typeof value == 'number';
  }

  function asArray(src, isTypeFunc) {
    if (!Array.isArray(src)) {
      return undefined;
    }

    if (!src.every(isTypeFunc)) {
      return undefined;
    }

    return src;
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      CCString = _cc.CCString;
      CCFloat = _cc.CCFloat;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismMotion3Json = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismSerializableCurve = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismSerializableKeyFrame = _unresolved_3.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "4d581b8x49CpoJsh+kPQxAi", "CubismFadeMotionData", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Asset', 'CCString', 'CCFloat', 'RealCurve', '_decorator', 'RealKeyframeValue', 'math']);

      ({
        ccclass,
        property
      } = _decorator);
      /** from ScriptableObject */

      _export("default", CubismFadeMotionData = (_dec = ccclass('CubismFadeMotionData'), _dec2 = property(CCString), _dec3 = property(CCFloat), _dec4 = property(CCFloat), _dec5 = property([CCString]), _dec6 = property([CubismSerializableCurve]), _dec7 = property([CCFloat]), _dec8 = property([CCFloat]), _dec9 = property(CCFloat), _dec(_class = (_class2 = class CubismFadeMotionData extends Asset {
        onLoaded() {
          this.internalConvertToCurves();
        }

        constructor(motionName, fadeInTime, fadeOutTime, parameterIds, internalParameterCurves, parameterFadeInTimes, parameterFadeOutTimes, motionLength) {
          super();

          /** Name of motion. */
          _initializerDefineProperty(this, "motionName", _descriptor, this);

          /** Time to fade in. */
          _initializerDefineProperty(this, "fadeInTime", _descriptor2, this);

          /** Time to fade out. */
          _initializerDefineProperty(this, "fadeOutTime", _descriptor3, this);

          /** Parameter ids. */
          _initializerDefineProperty(this, "parameterIds", _descriptor4, this);

          /** Parameter curves. */
          this.parameterCurves = void 0;

          _initializerDefineProperty(this, "internalParameterCurves", _descriptor5, this);

          /** Fade in time parameters. */
          _initializerDefineProperty(this, "parameterFadeInTimes", _descriptor6, this);

          /** Fade out time parameters. */
          _initializerDefineProperty(this, "parameterFadeOutTimes", _descriptor7, this);

          /** Motion length. */
          _initializerDefineProperty(this, "motionLength", _descriptor8, this);

          this.motionName = motionName != null ? motionName : '';
          this.fadeInTime = fadeInTime != null ? fadeInTime : 0;
          this.fadeOutTime = fadeOutTime != null ? fadeOutTime : 0;
          this.parameterIds = parameterIds != null ? parameterIds : new Array(0);
          this.internalParameterCurves = internalParameterCurves != null ? internalParameterCurves : new Array(0);
          this.parameterCurves = new Array(this.internalParameterCurves.length);
          this.parameterFadeInTimes = parameterFadeInTimes != null ? parameterFadeInTimes : new Array(0);
          this.parameterFadeOutTimes = parameterFadeOutTimes != null ? parameterFadeOutTimes : new Array(0);
          this.motionLength = motionLength != null ? motionLength : 0;
          this.internalConvertToCurves();
        }

        internalConvertToCurves() {
          var {
            internalParameterCurves: iCurves
          } = this;
          var oCurves = new Array(iCurves.length);

          for (var i = 0; i < iCurves.length; i++) {
            var element = iCurves[i];
            oCurves[i] = element.toRealCurve();
          }

          this.parameterCurves = oCurves;
        }
        /**
         * Create CubismFadeMotionData from CubismMotion3Json.
         * @param motion3Json Motion3json as the creator.
         * @param motionName Motion name of interest.
         * @param motionLength Length of target motion.
         * @param shouldImportAsOriginalWorkflow Whether the original work flow or not.
         * @param isCallFromModelJson Whether it is a call from the model json.
         * @returns Fade data created based on motion3json.
         */


        static createInstance(motion3Json, motionName, motionLength, shouldImportAsOriginalWorkflow, isCallFromModelJson) {
          if (shouldImportAsOriginalWorkflow === void 0) {
            shouldImportAsOriginalWorkflow = false;
          }

          if (isCallFromModelJson === void 0) {
            isCallFromModelJson = false;
          }

          var fadeMotion = new CubismFadeMotionData();
          var curveCount = motion3Json.curves.length;
          fadeMotion.parameterIds = new Array(curveCount);
          fadeMotion.parameterFadeInTimes = new Array(curveCount);
          fadeMotion.parameterFadeOutTimes = new Array(curveCount);
          fadeMotion.parameterCurves = new Array(curveCount);
          return this.toSetInstance(fadeMotion, motion3Json, motionName, motionLength, shouldImportAsOriginalWorkflow, isCallFromModelJson);
        }
        /**
         * Put motion3json's fade information back into fade motion data.
         * @param fadeMotion Instance containing fade information.
         * @param motion3Json Target motion3json.
         * @param motionName Motion name of interest.
         * @param motionLength Motion length.
         * @param shouldImportAsOriginalWorkflow Whether the original work flow or not.
         * @param isCallFormModelJson Whether it is a call from the model json.
         * @returns Fade data created based on fademotiondata.
         */


        static toSetInstance(fadeMotion, motion3Json, motionName, motionLength, shouldImportAsOriginalWorkflow, isCallFormModelJson) {
          if (shouldImportAsOriginalWorkflow === void 0) {
            shouldImportAsOriginalWorkflow = false;
          }

          if (isCallFormModelJson === void 0) {
            isCallFormModelJson = false;
          }

          fadeMotion.motionName = motionName;
          fadeMotion.motionLength = motionLength;
          fadeMotion.fadeInTime = motion3Json.meta.fadeInTime < 0.0 ? 1.0 : motion3Json.meta.fadeInTime;
          fadeMotion.fadeOutTime = motion3Json.meta.fadeOutTime < 0.0 ? 1.0 : motion3Json.meta.fadeOutTime;
          var {
            curves: jsonCurves
          } = motion3Json;
          var {
            parameterIds,
            parameterFadeInTimes,
            parameterFadeOutTimes,
            parameterCurves,
            internalParameterCurves
          } = fadeMotion;

          if (parameterIds != null && parameterFadeInTimes != null && parameterFadeOutTimes != null) {
            parameterCurves.length = parameterCurves.length < jsonCurves.length ? jsonCurves.length : parameterCurves.length;
            internalParameterCurves.length = internalParameterCurves.length < jsonCurves.length ? jsonCurves.length : internalParameterCurves.length;

            for (var i = 0; i < jsonCurves.length; i++) {
              var curve = jsonCurves[i]; // In original workflow mode, skip add part opacity curve when call not from model3.json.

              if (curve.target == 'PartOpacity' && shouldImportAsOriginalWorkflow && !isCallFormModelJson) {
                continue;
              }

              parameterIds[i] = curve.id;
              parameterFadeInTimes[i] = curve.fadeInTime < 0.0 ? -1.0 : curve.fadeInTime;
              parameterFadeOutTimes[i] = curve.fadeOutTime < 0.0 ? -1.0 : curve.fadeOutTime;
              var keys = CubismMotion3Json.convertCurveSegmentsToKeyframes(curve.segments);
              internalParameterCurves[i] = new CubismSerializableCurve(keys.length);

              for (var j = 0; j < keys.length; j++) {
                var {
                  0: t,
                  1: v
                } = keys[j];
                var keyFrame = new CubismSerializableKeyFrame(t, v.value, v.leftTangent, v.leftTangentWeight, v.rightTangent, v.rightTangentWeight);
                internalParameterCurves[i].setKeyFrame(j, keyFrame);
              }
            }
          }

          fadeMotion.onLoaded();
          return fadeMotion;
        }

        static deserializeFromJson(json) {
          var motionName = json.motionName;

          if (!isString(motionName)) {
            return undefined;
          }

          var fadeInTime = json.fadeInTime;

          if (!isNumber(fadeInTime)) {
            return undefined;
          }

          var fadeOutTime = json.fadeOutTime;

          if (!isNumber(fadeOutTime)) {
            return undefined;
          }

          var parameterIds = asArray(json.parameterIds, isString);

          if (!parameterIds) {
            return undefined;
          }

          var internalParameterCurves = CubismSerializableCurves.instantiateFromJson(json.internalParameterCurves);

          if (!internalParameterCurves) {
            return undefined;
          }

          var parameterFadeInTimes = asArray(json.parameterFadeInTimes, isNumber);

          if (!parameterFadeInTimes) {
            return undefined;
          }

          var parameterFadeOutTimes = asArray(json.parameterFadeOutTimes, isNumber);

          if (!parameterFadeOutTimes) {
            return undefined;
          }

          var motionLength = json.motionLength;

          if (!isNumber(motionLength)) {
            return undefined;
          }

          var instance = new CubismFadeMotionData(motionName, fadeInTime, fadeOutTime, parameterIds, internalParameterCurves, parameterFadeInTimes, parameterFadeOutTimes, motionLength);
          return instance;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "motionName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fadeInTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fadeOutTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "parameterIds", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "internalParameterCurves", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "parameterFadeInTimes", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "parameterFadeOutTimes", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "motionLength", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      (function (_CubismSerializableCurves) {
        function instantiateFromJson(src) {
          if (!Array.isArray(src)) {
            return undefined;
          }

          var curves = new Array(src.length);

          for (var i = 0; i < src.length; i++) {
            var curve = CubismSerializableCurve.instantiateFromJson(src[i]);

            if (curve == null) {
              return undefined;
            }

            curves[i] = curve;
          }

          return curves;
        }

        _CubismSerializableCurves.instantiateFromJson = instantiateFromJson;
      })(CubismSerializableCurves || (CubismSerializableCurves = {}));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=afda9b53d7e0b820380aa58d7bcf00e4a7f8042b.js.map
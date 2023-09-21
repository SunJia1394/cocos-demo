System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, AnimationClip, CCInteger, _decorator, CubismParameter, CubismPart, CubismRenderController, CubismEyeBlinkController, CubismMouthController, JsonParseUtils, ArrayExtensions, _dec, _class, _dec2, _class3, _dec3, _class5, _dec4, _dec5, _dec6, _dec7, _dec8, _class7, _class8, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, asArray, asBoolean, asNumber, asString, RealKeyframeValue, SerializableMeta, SerializableCurve, SerializableUserData, CubismMotion3Json;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function getTrackFromPath(clip, path) {
    for (let i = 0; i < clip.tracksCount; i++) {
      const track = clip.getTrack(i);

      if (isEqualsTrackPath(track.path, path) && track instanceof animation.RealTrack) {
        return track;
      }
    }

    return undefined;
  }

  function isEqualsTrackPath(pathA, pathB) {
    if (pathA.length != pathB.length) {
      return false;
    }

    for (let i = 0; i < pathA.length; i++) {
      if (pathA.isHierarchyAt(i)) {
        if (!pathB.isHierarchyAt(i)) {
          return false;
        }

        if (pathA.parseHierarchyAt(i) != pathB.parseHierarchyAt(i)) {
          return false;
        } else {
          continue;
        }
      }

      if (pathA.isComponentAt(i)) {
        if (!pathB.isComponentAt(i)) {
          return false;
        }

        if (pathA.parseComponentAt(i) != pathB.parseComponentAt(i)) {
          return false;
        } else {
          continue;
        }
      }

      if (pathA.isPropertyAt(i)) {
        if (!pathB.isPropertyAt(i)) {
          return false;
        }

        if (pathA.parsePropertyAt(i) != pathB.parsePropertyAt(i)) {
          return false;
        } else {
          continue;
        }
      }

      if (pathA.isElementAt(i)) {
        if (!pathB.isElementAt(i)) {
          return false;
        }

        if (pathA.parseElementAt(i) != pathB.parseElementAt(i)) {
          return false;
        } else {
          continue;
        }
      }
    }

    return true;
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPart(extras) {
    _reporterNs.report("CubismPart", "../../Core/CubismPart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRenderController(extras) {
    _reporterNs.report("CubismRenderController", "../../Rendering/CubismRenderController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismEyeBlinkController(extras) {
    _reporterNs.report("CubismEyeBlinkController", "../CubismEyeBlinkController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMouthController(extras) {
    _reporterNs.report("CubismMouthController", "../MouthMovement/CubismMouthController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonParseUtils(extras) {
    _reporterNs.report("JsonParseUtils", "./JsonParseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPose3Json(extras) {
    _reporterNs.report("CubismPose3Json", "./CubismPose3Json", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStructLike(extras) {
    _reporterNs.report("IStructLike", "../../IStructLike", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrayExtensions(extras) {
    _reporterNs.report("ArrayExtensions", "../../Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      animation = _cc.animation;
      AnimationClip = _cc.AnimationClip;
      CCInteger = _cc.CCInteger;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CubismParameter = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPart = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismRenderController = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismEyeBlinkController = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismMouthController = _unresolved_6.default;
    }, function (_unresolved_7) {
      JsonParseUtils = _unresolved_7.default;
    }, function (_unresolved_8) {
      ArrayExtensions = _unresolved_8.ArrayExtensions;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "436b1ycY7ROkb8ZD7JOTCiG", "CubismMotion3Json", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['animation', 'AnimationClip', 'CCInteger', 'JsonAsset', '_decorator', '__private']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        asArray,
        asBoolean,
        asNumber,
        asString
      } = _crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
        error: Error()
      }), JsonParseUtils) : JsonParseUtils);

      (function (_RealKeyframeValue) {
        function instantiate(value) {
          return {
            value: value,
            rightTangent: 0,
            rightTangentWeight: 0,
            leftTangent: 0,
            leftTangentWeight: 0
          };
        }

        _RealKeyframeValue.instantiate = instantiate;
      })(RealKeyframeValue || (RealKeyframeValue = {}));
      /** Delegate */


      //#region Json Object Types
      _export("SerializableMeta", SerializableMeta = (_dec = ccclass('CubismMotion3Json.SerializableMeta'), _dec(_class = class SerializableMeta {
        constructor(args = {}) {
          var _args$duration, _args$fps, _args$loop, _args$curveCount, _args$totalSegmentCou, _args$totalPointCount, _args$areBeziersRestr, _args$userDataCount, _args$totalUserDataSi, _args$fadeInTime, _args$fadeOutTime;

          /** Duration in seconds. */
          this.duration = void 0;

          /** Framerate in seconds. */
          this.fps = void 0;

          /** True if motion is looping. */
          this.loop = void 0;

          /** Number of curves. */
          this.curveCount = void 0;

          /** Total number of curve segments. */
          this.totalSegmentCount = void 0;

          /** Total number of curve points. */
          this.totalPointCount = void 0;

          /** True if beziers are restricted. */
          this.areBeziersRestricted = void 0;

          /** Total number of UserData. */
          this.userDataCount = void 0;

          /** Total size of UserData in bytes. */
          this.totalUserDataSize = void 0;

          /** [Optional] Time of the Fade-In for easing in seconds. */
          this.fadeInTime = void 0;

          /** [Optional] Time of the Fade-Out for easing in seconds. */
          this.fadeOutTime = void 0;
          this.duration = (_args$duration = args.duration) != null ? _args$duration : 0;
          this.fps = (_args$fps = args.fps) != null ? _args$fps : 0;
          this.loop = (_args$loop = args.loop) != null ? _args$loop : false;
          this.curveCount = (_args$curveCount = args.curveCount) != null ? _args$curveCount : 0;
          this.totalSegmentCount = (_args$totalSegmentCou = args.totalSegmentCount) != null ? _args$totalSegmentCou : 0;
          this.totalPointCount = (_args$totalPointCount = args.totalPointCount) != null ? _args$totalPointCount : 0;
          this.areBeziersRestricted = (_args$areBeziersRestr = args.areBeziersRestricted) != null ? _args$areBeziersRestr : false;
          this.userDataCount = (_args$userDataCount = args.userDataCount) != null ? _args$userDataCount : 0;
          this.totalUserDataSize = (_args$totalUserDataSi = args.totalUserDataSize) != null ? _args$totalUserDataSi : 0;
          this.fadeInTime = (_args$fadeInTime = args.fadeInTime) != null ? _args$fadeInTime : -1.0;
          this.fadeOutTime = (_args$fadeOutTime = args.fadeOutTime) != null ? _args$fadeOutTime : -1.0;
        }

        copyWith(args = {}) {
          var _args$duration2, _args$fps2, _args$loop2, _args$curveCount2, _args$totalSegmentCou2, _args$totalPointCount2, _args$areBeziersRestr2, _args$userDataCount2, _args$totalUserDataSi2, _args$fadeInTime2, _args$fadeOutTime2;

          return new SerializableMeta({
            duration: (_args$duration2 = args.duration) != null ? _args$duration2 : this.duration,
            fps: (_args$fps2 = args.fps) != null ? _args$fps2 : this.fps,
            loop: (_args$loop2 = args.loop) != null ? _args$loop2 : this.loop,
            curveCount: (_args$curveCount2 = args.curveCount) != null ? _args$curveCount2 : this.curveCount,
            totalSegmentCount: (_args$totalSegmentCou2 = args.totalSegmentCount) != null ? _args$totalSegmentCou2 : this.totalSegmentCount,
            totalPointCount: (_args$totalPointCount2 = args.totalPointCount) != null ? _args$totalPointCount2 : this.totalPointCount,
            areBeziersRestricted: (_args$areBeziersRestr2 = args.areBeziersRestricted) != null ? _args$areBeziersRestr2 : this.areBeziersRestricted,
            userDataCount: (_args$userDataCount2 = args.userDataCount) != null ? _args$userDataCount2 : this.userDataCount,
            totalUserDataSize: (_args$totalUserDataSi2 = args.totalUserDataSize) != null ? _args$totalUserDataSi2 : this.totalUserDataSize,
            fadeInTime: (_args$fadeInTime2 = args.fadeInTime) != null ? _args$fadeInTime2 : this.fadeInTime,
            fadeOutTime: (_args$fadeOutTime2 = args.fadeOutTime) != null ? _args$fadeOutTime2 : this.fadeOutTime
          });
        }

        equals(other) {
          return this === other ? true : this.duration == other.duration && this.fps == other.fps && this.loop == other.loop && this.curveCount == other.curveCount && this.totalSegmentCount == other.totalSegmentCount && this.totalPointCount == other.totalPointCount && this.areBeziersRestricted == other.areBeziersRestricted && this.userDataCount == other.userDataCount && this.totalUserDataSize == other.totalUserDataSize && this.fadeInTime == other.fadeInTime && this.fadeOutTime == other.fadeOutTime;
        }

        strictEquals(other) {
          return this === other;
        }
        /**
         * **Required properties**
         * - Duration
         * - Fps
         * - CurveCount
         * - TotalSegmentCount
         * - TotalPointCount
         *
         * **Optional properties**
         * - Loop
         * - AreBeziersRestricted
         * - FadeInTime
         * - FadeOutTime
         * - UserDataCount
         * - TotalUserDataSize
         * @param json
         * @returns
         */


        static instantiateFromJson(json) {
          if (json == null) {
            return undefined;
          }

          const duration = asNumber(json.Duration);
          const fps = asNumber(json.Fps);
          const curveCount = asNumber(json.CurveCount);
          const totalSegmentCount = asNumber(json.TotalSegmentCount);
          const totalPointCount = asNumber(json.TotalPointCount);

          if (duration === undefined || fps === undefined || curveCount === undefined || totalSegmentCount === undefined) {
            return undefined;
          }

          const loop = asBoolean(json.Loop);
          const areBeziersRestricted = asBoolean(json.AreBeziersRestricted);
          const fadeInTime = asNumber(json.FadeInTime);
          const fadeOutTime = asNumber(json.FadeOutTime);
          const userDataCount = asNumber(json.UserDataCount);
          const totalUserDataSize = asNumber(json.TotalUserDataSize);
          return new SerializableMeta({
            duration: duration,
            fps: fps,
            loop: loop,
            areBeziersRestricted: areBeziersRestricted,
            curveCount: curveCount,
            totalSegmentCount: totalSegmentCount,
            totalPointCount: totalPointCount,
            userDataCount: userDataCount,
            totalUserDataSize: totalUserDataSize,
            fadeInTime: fadeInTime,
            fadeOutTime: fadeOutTime
          });
        }

      }) || _class));

      _export("SerializableCurve", SerializableCurve = (_dec2 = ccclass('CubismMotion3Json.SerializableCurve'), _dec2(_class3 = class SerializableCurve {
        constructor(args = {}) {
          var _args$target, _args$id, _args$segments, _args$fadeInTime3, _args$fadeOutTime3;

          /** Target type. */
          this.target = void 0;

          /** Id within target. */
          this.id = void 0;

          /** Flattened curve segments. */
          this.segments = void 0;

          /** [Optional] Time of the overall Fade-In for easing in seconds. */
          this.fadeInTime = void 0;

          /** [Optional] Time of the overall Fade-Out for easing in seconds. */
          this.fadeOutTime = void 0;
          this.target = (_args$target = args.target) != null ? _args$target : '';
          this.id = (_args$id = args.id) != null ? _args$id : '';
          this.segments = (_args$segments = args.segments) != null ? _args$segments : new Array(0);
          this.fadeInTime = (_args$fadeInTime3 = args.fadeInTime) != null ? _args$fadeInTime3 : -1.0;
          this.fadeOutTime = (_args$fadeOutTime3 = args.fadeOutTime) != null ? _args$fadeOutTime3 : -1.0;
        }

        copyWith(args = {}) {
          var _args$target2, _args$id2, _args$segments2, _args$fadeInTime4, _args$fadeOutTime4;

          return new SerializableCurve({
            target: (_args$target2 = args.target) != null ? _args$target2 : this.target,
            id: (_args$id2 = args.id) != null ? _args$id2 : this.id,
            segments: (_args$segments2 = args.segments) != null ? _args$segments2 : this.segments,
            fadeInTime: (_args$fadeInTime4 = args.fadeInTime) != null ? _args$fadeInTime4 : this.fadeInTime,
            fadeOutTime: (_args$fadeOutTime4 = args.fadeOutTime) != null ? _args$fadeOutTime4 : this.fadeOutTime
          });
        }

        equals(other) {
          return this === other ? true : this.target == other.target && this.id == other.id && (_crd && ArrayExtensions === void 0 ? (_reportPossibleCrUseOfArrayExtensions({
            error: Error()
          }), ArrayExtensions) : ArrayExtensions).isEquals((x, y) => x == y, this.segments, other.segments) && this.fadeInTime == other.fadeInTime && this.fadeOutTime == other.fadeOutTime;
        }

        strictEquals(other) {
          return this === other;
        }
        /**
         * **Required properties**
         * - Target
         * - Id
         * - Segments
         *
         * **Optional properties**
         * - FadeInTime
         * - FadeOutTime
         * @param json
         * @returns
         */


        static instantiateFromJson(json) {
          if (json == null) {
            return undefined;
          }

          const target = asString(json.Target);
          const id = asString(json.Id);
          const tempSegments = asArray(json.Segments);

          if (target === undefined || id === undefined || tempSegments === undefined) {
            return undefined;
          }

          const segments = new Array(tempSegments.length);

          for (let i = 0; i < tempSegments.length; i++) {
            const num = asNumber(tempSegments[i]);

            if (num === undefined) {
              return undefined;
            }

            segments[i] = num;
          }

          const fadeInTime = asNumber(json.FadeInTime);
          const fadeOutTime = asNumber(json.FadeOutTime);
          return new SerializableCurve({
            target: target,
            id: id,
            segments: segments,
            fadeInTime: fadeInTime,
            fadeOutTime: fadeOutTime
          });
        }

      }) || _class3));

      _export("SerializableUserData", SerializableUserData = (_dec3 = ccclass('CubismMotion3Json.SerializableUserData'), _dec3(_class5 = class SerializableUserData {
        constructor(args = {}) {
          var _args$time, _args$value;

          /** Time in seconds. */
          this.time = void 0;

          /** Content of user data. */
          this.value = void 0;
          this.time = (_args$time = args.time) != null ? _args$time : 0;
          this.value = (_args$value = args.value) != null ? _args$value : '';
        }

        copyWith(args = {}) {
          var _args$time2, _args$value2;

          return new SerializableUserData({
            time: (_args$time2 = args.time) != null ? _args$time2 : this.time,
            value: (_args$value2 = args.value) != null ? _args$value2 : this.value
          });
        }

        equals(other) {
          return this === other ? true : this.time == other.time && this.value == other.value;
        }

        strictEquals(other) {
          return this === other;
        }
        /**
         * **Required properties**
         * - Time
         * - Value
         * @param json
         * @returns
         */


        static instantiateFromJson(json) {
          if (json == null) {
            return undefined;
          }

          const time = asNumber(json.Time);
          const value = asString(json.Value);

          if (time === undefined || value === undefined) {
            return undefined;
          }

          return new SerializableUserData({
            time: time,
            value: value
          });
        }

      }) || _class5));

      (function (_SerializableMeta) {
        const DEFAULT = _SerializableMeta.DEFAULT = new SerializableMeta();
      })(SerializableMeta || _export("SerializableMeta", SerializableMeta = {}));

      (function (_SerializableCurve) {
        const DEFAULT = _SerializableCurve.DEFAULT = new SerializableCurve();
      })(SerializableCurve || _export("SerializableCurve", SerializableCurve = {}));

      (function (_SerializableUserData) {
        const DEFAULT = _SerializableUserData.DEFAULT = new SerializableUserData();
      })(SerializableUserData || _export("SerializableUserData", SerializableUserData = {})); //#endregion

      /**
       * Contains Cubism motion3.json data.
       *
       * **Sealed class.**
       */


      _export("default", CubismMotion3Json = (_dec4 = ccclass('CubismMotion3Json'), _dec5 = property(CCInteger), _dec6 = property(SerializableMeta), _dec7 = property([SerializableCurve]), _dec8 = property([SerializableUserData]), _dec4(_class7 = (_class8 = class CubismMotion3Json {
        constructor() {
          //#endregion
          //#region Json Data

          /** The model3.json format version. */
          _initializerDefineProperty(this, "version", _descriptor, this);

          /** Motion meta info. */
          _initializerDefineProperty(this, "meta", _descriptor2, this);

          /** Curves. */
          _initializerDefineProperty(this, "curves", _descriptor3, this);

          /** User data. */
          _initializerDefineProperty(this, "userData", _descriptor4, this);
        } //#region Load Methods

        /**
         * Loads a motion3.json asset.
         * @param motion3Json motion3.json to deserialize.
         * @returns Deserialized motion3.json on success; null otherwise.
         */


        static loadFrom(motion3Json) {
          const json = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
            error: Error()
          }), JsonParseUtils) : JsonParseUtils).parse(motion3Json);

          if (!json) {
            return null;
          }

          return this.loadFromJson(json);
        }
        /**
         * Loads a motion3.json asset.
         * @param motion3JsonAsset motion3.json to deserialize.
         * @returns Deserialized motion3.json on success; null otherwise.
         */


        static loadFromJsonAsset(motion3JsonAsset) {
          if (motion3JsonAsset.json == null) {
            return null;
          }

          return this.loadFromJson(motion3JsonAsset.json);
        }

        static loadFromJson(json) {
          var _arrayedInstantiateFr;

          if (json == null) {
            return null;
          }

          const version = asNumber(json.Version);
          const meta = SerializableMeta.instantiateFromJson(json.Meta);
          const userData = (_arrayedInstantiateFr = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
            error: Error()
          }), JsonParseUtils) : JsonParseUtils).arrayedInstantiateFromJson(json.UserData, SerializableUserData.instantiateFromJson)) != null ? _arrayedInstantiateFr : new Array(0);
          const curves = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
            error: Error()
          }), JsonParseUtils) : JsonParseUtils).arrayedInstantiateFromJson(json.Curves, SerializableCurve.instantiateFromJson);

          if (version === undefined || meta === undefined || curves === undefined) {
            return null;
          }

          const asset = new CubismMotion3Json();
          asset.version = version;
          asset.meta = meta;
          asset.userData = userData;
          asset.curves = curves;
          return asset;
        }

        /**
         * Converts motion curve segments into Keyframes.
         * @param segments Data to convert.
         * @returns Keyframes.
         */
        static convertCurveSegmentsToKeyframes(segments) {
          // Return early on invalid input.
          if (segments.length < 1) {
            return new Array(0);
          } // Initialize container for keyframes.


          const keyframes = new Array(1);
          keyframes[0] = [segments[0], RealKeyframeValue.instantiate(segments[1])]; // Parse segments.

          for (var i = 2; i < segments.length;) {
            i = this.parsers(segments[i])(segments, keyframes, i);
          }

          return keyframes;
        }
        /**
         * Converts stepped curves to liner curves.
         * @param curve Data to convert.
         * @param poseFadeInTime
         * @returns Animation curve.
         */


        static convertSteppedCurveToLinerCurver(curve, poseFadeInTime) {
          poseFadeInTime = poseFadeInTime < 0 ? 0.5 : poseFadeInTime;
          const segments = curve.segments;
          let segmentsCount = 2;

          for (var index = 2; index < segments.length; index += 3) {
            // if current segment type is stepped and
            // next segment type is stepped or next segment is last segment
            // then convert segment type to liner.
            const currentSegmentTypeIsStepped = curve.segments[index] == 2;
            const currentSegmentIsLast = index == curve.segments.length - 3;
            const nextSegmentTypeIsStepped = currentSegmentIsLast ? false : curve.segments[index + 3] == 2;
            const nextSegmentIsLast = currentSegmentIsLast ? false : index + 3 == curve.segments.length - 3;

            if (currentSegmentTypeIsStepped && (nextSegmentTypeIsStepped || nextSegmentIsLast)) {
              segments.length += 3;
              segments[segmentsCount + 0] = 0;
              segments[segmentsCount + 1] = curve.segments[index + 1];
              segments[segmentsCount + 2] = curve.segments[index - 1];
              segments[segmentsCount + 3] = 0;
              segments[segmentsCount + 4] = curve.segments[index + 1] + poseFadeInTime;
              segments[segmentsCount + 5] = curve.segments[index + 2];
              segmentsCount += 6;
            } else if (curve.segments[index] == 1) {
              segments[segmentsCount + 0] = curve.segments[index + 0];
              segments[segmentsCount + 1] = curve.segments[index + 1];
              segments[segmentsCount + 2] = curve.segments[index + 2];
              segments[segmentsCount + 3] = curve.segments[index + 3];
              segments[segmentsCount + 4] = curve.segments[index + 4];
              segments[segmentsCount + 5] = curve.segments[index + 5];
              segments[segmentsCount + 6] = curve.segments[index + 6];
              index += 4;
              segmentsCount += 7;
            } else {
              segments[segmentsCount + 0] = curve.segments[index + 0];
              segments[segmentsCount + 1] = curve.segments[index + 1];
              segments[segmentsCount + 2] = curve.segments[index + 2];
              segmentsCount += 3;
            }
          }

          return CubismMotion3Json.convertCurveSegmentsToKeyframes(segments);
        }
        /**
         * Instantiates an AnimationClip.
         * Note this method generates AnimationClip.legacy clips when called at runtime.
         * @param shouldImportAsOriginalWorkflow Should import as original workflow.
         * @param shouldClearAnimationCurves Should clear animation clip curves.
         * @param isCallFormModelJson Is function call form CubismModel3Json.
         * @param poseJson pose3.json asset.
         * @returns The instantiated clip on success; null otherwise.
         */


        toAnimationClipA(shouldImportAsOriginalWorkflow = false, shouldClearAnimationCurves = false, isCallFormModelJson = false, poseJson = null) {
          // Check béziers restriction flag.
          if (!this.meta.areBeziersRestricted) {
            console.warn('Béziers are not restricted and curves might be off. Please export motions from Cubism in restricted mode for perfect match.');
          } // Create animation clip.


          const animationClip = new AnimationClip();
          return this.toAnimationClipB(animationClip, shouldImportAsOriginalWorkflow, shouldClearAnimationCurves, isCallFormModelJson, poseJson);
        }
        /**
         * Instantiates an AnimationClip.
         * Note this method generates AnimationClip.legacy clips when called at runtime.
         * @param animationClip Previous animation clip.
         * @param shouldImportAsOriginalWorkflow Should import as original workflow.
         * @param shouldClearAnimationCurves Should clear animation clip curves.
         * @param isCallFormModelJson Is function call form CubismModel3Json.
         * @param poseJson pose3.json asset.
         * @returns The instantiated clip on success; null otherwise.
         */


        toAnimationClipB(animationClip, shouldImportAsOriginalWorkflow = false, shouldClearAnimationCurves = false, isCallFormModelJson = false, poseJson = null) {
          // Clear curves.
          if (shouldClearAnimationCurves && (!shouldImportAsOriginalWorkflow || isCallFormModelJson && shouldImportAsOriginalWorkflow)) {
            animationClip.clearTracks();
          }

          animationClip.sample = this.meta.fps; // Convert curves.

          for (let i = 0; i < this.curves.length; i++) {
            const curve = this.curves[i]; // If should import as original workflow mode, skip add part opacity curve when call not from model3.json.

            if (curve.target == 'PartOpacity' && shouldImportAsOriginalWorkflow && !isCallFormModelJson) {
              continue;
            }

            let relativePath = new animation.TrackPath();
            let animationCurve = CubismMotion3Json.convertCurveSegmentsToKeyframes(curve.segments); // Create model binding.

            if (curve.target == 'Model') {
              // Bind opacity.
              if (curve.id == 'Opacity') {
                relativePath = new animation.TrackPath().toComponent(_crd && CubismRenderController === void 0 ? (_reportPossibleCrUseOfCubismRenderController({
                  error: Error()
                }), CubismRenderController) : CubismRenderController).toProperty('opacity');
              } // Bind eye-blink.
              else if (curve.id == 'EyeBlink') {
                relativePath = new animation.TrackPath().toComponent(_crd && CubismEyeBlinkController === void 0 ? (_reportPossibleCrUseOfCubismEyeBlinkController({
                  error: Error()
                }), CubismEyeBlinkController) : CubismEyeBlinkController).toProperty('EyeOpening');
              } // Bind lip-sync.
              else if (curve.id == 'LipSync') {
                relativePath = new animation.TrackPath().toComponent(_crd && CubismMouthController === void 0 ? (_reportPossibleCrUseOfCubismMouthController({
                  error: Error()
                }), CubismMouthController) : CubismMouthController).toProperty('MouthOpening');
              }
            } // Create parameter binding.
            else if (curve.target == 'Parameter') {
              relativePath = new animation.TrackPath().toHierarchy('Parameters/' + curve.id).toComponent(_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
                error: Error()
              }), CubismParameter) : CubismParameter).toProperty('value');
            } // Create part opacity binding.
            else if (curve.target == 'PartOpacity') {
              relativePath = new animation.TrackPath().toHierarchy('Parts/' + curve.id).toComponent(_crd && CubismPart === void 0 ? (_reportPossibleCrUseOfCubismPart({
                error: Error()
              }), CubismPart) : CubismPart).toProperty('opacity'); // original workflow.

              if (shouldImportAsOriginalWorkflow && poseJson != null && poseJson.fadeInTime != 0.0) {
                let track = CubismMotion3Json.convertSteppedCurveToLinerCurver(curve, poseJson.fadeInTime);
              }
            }

            let track = getTrackFromPath(animationClip, relativePath);

            if (!track) {
              track = new animation.RealTrack();
              track.path = relativePath;
              animationClip.addTrack(track);
            }

            track.channel.curve.assignSorted(animationCurve);
          }

          animationClip.duration = this.meta.duration;

          if (this.meta.loop) {
            animationClip.wrapMode = AnimationClip.WrapMode.Loop;
          } else {
            animationClip.wrapMode = AnimationClip.WrapMode.Default;
          }

          if (this.userData.length > 0) {
            for (let i = 0; i < this.userData.length; i++) {
              const params = new Array();
              params.push(this.userData[i].value);
              const frame = this.userData[i].time; // 指定frameにeventがなければ新規追加 あれば更新

              const existFrameIndex = animationClip.events.findIndex(v => v.frame === frame);

              if (existFrameIndex === -1) {
                animationClip.events.push({
                  frame: frame,
                  func: `CubismMotionEvent`,
                  params: params
                });
              } else {
                animationClip.events[existFrameIndex] = {
                  frame: frame,
                  func: `CubismMotionEvent`,
                  params: params
                };
              }
            }
          }

          return animationClip;
        }
        /** Offset to use for setting of keyframes. */


        static get offsetGranularity() {
          return 0.01;
        }
        /** Available segment parsers. */


        static parsers(id) {
          switch (id) {
            case 0:
              return CubismMotion3Json.parseLinearSegment;

            case 1:
              return CubismMotion3Json.parseBezierSegment;

            case 2:
              return CubismMotion3Json.parseSteppedSegment;

            case 3:
              return CubismMotion3Json.parseInverseSteppedSegment;

            default:
              console.warn('CubismMotion3Json.Parsers: Called default case in switch statement.');
              return CubismMotion3Json.parseLinearSegment;
          }
        }
        /** Parses a linear segment. */


        static parseLinearSegment(segments, result, position) {
          // return position: int
          // Compute slope.
          const length = segments[position + 1] - result[result.length - 1][0];
          const slope = (segments[position + 2] - result[result.length - 1][1].value) / length; // Determine tangents.

          const outTangent = slope;
          const inTangent = outTangent; // Create keyframes.

          let keyframe = [result[result.length - 1][0], RealKeyframeValue.instantiate(result[result.length - 1][1].value)];
          keyframe[1].leftTangent = result[result.length - 1][1].leftTangent;
          keyframe[1].rightTangent = outTangent;
          result[result.length - 1] = keyframe;
          keyframe = [segments[position + 1], RealKeyframeValue.instantiate(segments[position + 2])];
          keyframe[1].leftTangent = inTangent;
          keyframe[1].rightTangent = 0;
          result.push(keyframe); // Update position.

          return position + 3;
        }
        /** Parses a bezier segment. */


        static parseBezierSegment(segments, result, position) {
          // Compute tangents.
          const tangentLength = Math.abs(result[result.length - 1][0] - segments[position + 5]) * (1 / 3);
          const outTangent = (segments[position + 2] - result[result.length - 1][1].value) / tangentLength;
          const inTangent = (segments[position + 6] - segments[position + 4]) / tangentLength; // Create keyframes.

          let keyframe = [result[result.length - 1][0], RealKeyframeValue.instantiate(result[result.length - 1][1].value)];
          keyframe[1].leftTangent = result[result.length - 1][1].leftTangent;
          keyframe[1].rightTangent = outTangent;
          result[result.length - 1] = keyframe;
          keyframe = [segments[position + 5], RealKeyframeValue.instantiate(segments[position + 6])];
          keyframe[1].leftTangent = inTangent;
          keyframe[1].rightTangent = 0;
          result.push(keyframe); // Update position.

          return position + 7;
        }
        /** Parses a stepped segment. */


        static parseSteppedSegment(segments, result, position) {
          // Create keyframe.
          const keyframe = [segments[position + 1], RealKeyframeValue.instantiate(segments[position + 2])];
          keyframe[1].leftTangent = Number.POSITIVE_INFINITY;
          result.push(keyframe); // Update position.

          return position + 3;
        }
        /** Parses a inverse-stepped segment. */


        static parseInverseSteppedSegment(segments, result, position) {
          // Compute tangents.
          let keyframe = result[result.length - 1];
          const tangent = Math.atan2(segments[position + 2] - keyframe[1].value, segments[position + 1] - keyframe[0]);
          keyframe[1].rightTangent = tangent;
          result[result.length - 1] = keyframe;
          keyframe = [keyframe[0] + CubismMotion3Json.offsetGranularity, RealKeyframeValue.instantiate(segments[position + 2])];
          keyframe[1].leftTangent = tangent;
          keyframe[1].rightTangent = 0;
          result.push(keyframe);
          keyframe = [segments[position + 1], RealKeyframeValue.instantiate(segments[position + 2])];
          keyframe[1].leftTangent = 0;
          result.push(keyframe); // Update position.

          return position + 3;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class8.prototype, "version", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class8.prototype, "meta", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new SerializableMeta();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class8.prototype, "curves", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array(0);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class8.prototype, "userData", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array(0);
        }
      })), _class8)) || _class7));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a1d7cd97ce3048aa16ba52e050dcaa60ce09d62.js.map
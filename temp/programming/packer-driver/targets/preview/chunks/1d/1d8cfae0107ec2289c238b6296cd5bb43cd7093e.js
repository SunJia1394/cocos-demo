System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, AnimationClip, CCInteger, _decorator, CubismParameter, CubismPart, CubismRenderController, CubismEyeBlinkController, CubismMouthController, JsonParseUtils, ArrayExtensions, _dec, _class, _dec2, _class3, _dec3, _class5, _dec4, _dec5, _dec6, _dec7, _dec8, _class7, _class8, _descriptor, _descriptor2, _descriptor3, _descriptor4, ccclass, property, asArray, asBoolean, asNumber, asString, RealKeyframeValue, SerializableMeta, SerializableCurve, SerializableUserData, CubismMotion3Json;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function getTrackFromPath(clip, path) {
    for (var i = 0; i < clip.tracksCount; i++) {
      var track = clip.getTrack(i);

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

    for (var i = 0; i < pathA.length; i++) {
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

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      animation = _cc.animation;
      AnimationClip = _cc.AnimationClip;
      CCInteger = _cc.CCInteger;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismParameter = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismPart = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismRenderController = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismEyeBlinkController = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismMouthController = _unresolved_5.default;
    }, function (_unresolved_6) {
      JsonParseUtils = _unresolved_6.default;
    }, function (_unresolved_7) {
      ArrayExtensions = _unresolved_7.ArrayExtensions;
    }],
    execute: function () {
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
      } = JsonParseUtils);

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
        constructor(args) {
          var _args$duration, _args$fps, _args$loop, _args$curveCount, _args$totalSegmentCou, _args$totalPointCount, _args$areBeziersRestr, _args$userDataCount, _args$totalUserDataSi, _args$fadeInTime, _args$fadeOutTime;

          if (args === void 0) {
            args = {};
          }

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

        copyWith(args) {
          var _args$duration2, _args$fps2, _args$loop2, _args$curveCount2, _args$totalSegmentCou2, _args$totalPointCount2, _args$areBeziersRestr2, _args$userDataCount2, _args$totalUserDataSi2, _args$fadeInTime2, _args$fadeOutTime2;

          if (args === void 0) {
            args = {};
          }

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

          var duration = asNumber(json.Duration);
          var fps = asNumber(json.Fps);
          var curveCount = asNumber(json.CurveCount);
          var totalSegmentCount = asNumber(json.TotalSegmentCount);
          var totalPointCount = asNumber(json.TotalPointCount);

          if (duration === undefined || fps === undefined || curveCount === undefined || totalSegmentCount === undefined) {
            return undefined;
          }

          var loop = asBoolean(json.Loop);
          var areBeziersRestricted = asBoolean(json.AreBeziersRestricted);
          var fadeInTime = asNumber(json.FadeInTime);
          var fadeOutTime = asNumber(json.FadeOutTime);
          var userDataCount = asNumber(json.UserDataCount);
          var totalUserDataSize = asNumber(json.TotalUserDataSize);
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
        constructor(args) {
          var _args$target, _args$id, _args$segments, _args$fadeInTime3, _args$fadeOutTime3;

          if (args === void 0) {
            args = {};
          }

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

        copyWith(args) {
          var _args$target2, _args$id2, _args$segments2, _args$fadeInTime4, _args$fadeOutTime4;

          if (args === void 0) {
            args = {};
          }

          return new SerializableCurve({
            target: (_args$target2 = args.target) != null ? _args$target2 : this.target,
            id: (_args$id2 = args.id) != null ? _args$id2 : this.id,
            segments: (_args$segments2 = args.segments) != null ? _args$segments2 : this.segments,
            fadeInTime: (_args$fadeInTime4 = args.fadeInTime) != null ? _args$fadeInTime4 : this.fadeInTime,
            fadeOutTime: (_args$fadeOutTime4 = args.fadeOutTime) != null ? _args$fadeOutTime4 : this.fadeOutTime
          });
        }

        equals(other) {
          return this === other ? true : this.target == other.target && this.id == other.id && ArrayExtensions.isEquals((x, y) => x == y, this.segments, other.segments) && this.fadeInTime == other.fadeInTime && this.fadeOutTime == other.fadeOutTime;
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

          var target = asString(json.Target);
          var id = asString(json.Id);
          var tempSegments = asArray(json.Segments);

          if (target === undefined || id === undefined || tempSegments === undefined) {
            return undefined;
          }

          var segments = new Array(tempSegments.length);

          for (var i = 0; i < tempSegments.length; i++) {
            var num = asNumber(tempSegments[i]);

            if (num === undefined) {
              return undefined;
            }

            segments[i] = num;
          }

          var fadeInTime = asNumber(json.FadeInTime);
          var fadeOutTime = asNumber(json.FadeOutTime);
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
        constructor(args) {
          var _args$time, _args$value;

          if (args === void 0) {
            args = {};
          }

          /** Time in seconds. */
          this.time = void 0;

          /** Content of user data. */
          this.value = void 0;
          this.time = (_args$time = args.time) != null ? _args$time : 0;
          this.value = (_args$value = args.value) != null ? _args$value : '';
        }

        copyWith(args) {
          var _args$time2, _args$value2;

          if (args === void 0) {
            args = {};
          }

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

          var time = asNumber(json.Time);
          var value = asString(json.Value);

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
        var DEFAULT = _SerializableMeta.DEFAULT = new SerializableMeta();
      })(SerializableMeta || _export("SerializableMeta", SerializableMeta = {}));

      (function (_SerializableCurve) {
        var DEFAULT = _SerializableCurve.DEFAULT = new SerializableCurve();
      })(SerializableCurve || _export("SerializableCurve", SerializableCurve = {}));

      (function (_SerializableUserData) {
        var DEFAULT = _SerializableUserData.DEFAULT = new SerializableUserData();
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
          var json = JsonParseUtils.parse(motion3Json);

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
          var _JsonParseUtils$array;

          if (json == null) {
            return null;
          }

          var version = asNumber(json.Version);
          var meta = SerializableMeta.instantiateFromJson(json.Meta);
          var userData = (_JsonParseUtils$array = JsonParseUtils.arrayedInstantiateFromJson(json.UserData, SerializableUserData.instantiateFromJson)) != null ? _JsonParseUtils$array : new Array(0);
          var curves = JsonParseUtils.arrayedInstantiateFromJson(json.Curves, SerializableCurve.instantiateFromJson);

          if (version === undefined || meta === undefined || curves === undefined) {
            return null;
          }

          var asset = new CubismMotion3Json();
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


          var keyframes = new Array(1);
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
          var segments = curve.segments;
          var segmentsCount = 2;

          for (var index = 2; index < segments.length; index += 3) {
            // if current segment type is stepped and
            // next segment type is stepped or next segment is last segment
            // then convert segment type to liner.
            var currentSegmentTypeIsStepped = curve.segments[index] == 2;
            var currentSegmentIsLast = index == curve.segments.length - 3;
            var nextSegmentTypeIsStepped = currentSegmentIsLast ? false : curve.segments[index + 3] == 2;
            var nextSegmentIsLast = currentSegmentIsLast ? false : index + 3 == curve.segments.length - 3;

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


        toAnimationClipA(shouldImportAsOriginalWorkflow, shouldClearAnimationCurves, isCallFormModelJson, poseJson) {
          if (shouldImportAsOriginalWorkflow === void 0) {
            shouldImportAsOriginalWorkflow = false;
          }

          if (shouldClearAnimationCurves === void 0) {
            shouldClearAnimationCurves = false;
          }

          if (isCallFormModelJson === void 0) {
            isCallFormModelJson = false;
          }

          if (poseJson === void 0) {
            poseJson = null;
          }

          // Check béziers restriction flag.
          if (!this.meta.areBeziersRestricted) {
            console.warn('Béziers are not restricted and curves might be off. Please export motions from Cubism in restricted mode for perfect match.');
          } // Create animation clip.


          var animationClip = new AnimationClip();
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


        toAnimationClipB(animationClip, shouldImportAsOriginalWorkflow, shouldClearAnimationCurves, isCallFormModelJson, poseJson) {
          var _this = this;

          if (shouldImportAsOriginalWorkflow === void 0) {
            shouldImportAsOriginalWorkflow = false;
          }

          if (shouldClearAnimationCurves === void 0) {
            shouldClearAnimationCurves = false;
          }

          if (isCallFormModelJson === void 0) {
            isCallFormModelJson = false;
          }

          if (poseJson === void 0) {
            poseJson = null;
          }

          // Clear curves.
          if (shouldClearAnimationCurves && (!shouldImportAsOriginalWorkflow || isCallFormModelJson && shouldImportAsOriginalWorkflow)) {
            animationClip.clearTracks();
          }

          animationClip.sample = this.meta.fps; // Convert curves.

          for (var i = 0; i < this.curves.length; i++) {
            var curve = this.curves[i]; // If should import as original workflow mode, skip add part opacity curve when call not from model3.json.

            if (curve.target == 'PartOpacity' && shouldImportAsOriginalWorkflow && !isCallFormModelJson) {
              continue;
            }

            var relativePath = new animation.TrackPath();
            var animationCurve = CubismMotion3Json.convertCurveSegmentsToKeyframes(curve.segments); // Create model binding.

            if (curve.target == 'Model') {
              // Bind opacity.
              if (curve.id == 'Opacity') {
                relativePath = new animation.TrackPath().toComponent(CubismRenderController).toProperty('opacity');
              } // Bind eye-blink.
              else if (curve.id == 'EyeBlink') {
                relativePath = new animation.TrackPath().toComponent(CubismEyeBlinkController).toProperty('EyeOpening');
              } // Bind lip-sync.
              else if (curve.id == 'LipSync') {
                relativePath = new animation.TrackPath().toComponent(CubismMouthController).toProperty('MouthOpening');
              }
            } // Create parameter binding.
            else if (curve.target == 'Parameter') {
              relativePath = new animation.TrackPath().toHierarchy('Parameters/' + curve.id).toComponent(CubismParameter).toProperty('value');
            } // Create part opacity binding.
            else if (curve.target == 'PartOpacity') {
              relativePath = new animation.TrackPath().toHierarchy('Parts/' + curve.id).toComponent(CubismPart).toProperty('opacity'); // original workflow.

              if (shouldImportAsOriginalWorkflow && poseJson != null && poseJson.fadeInTime != 0.0) {
                var _track = CubismMotion3Json.convertSteppedCurveToLinerCurver(curve, poseJson.fadeInTime);
              }
            }

            var track = getTrackFromPath(animationClip, relativePath);

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
            var _loop = function _loop() {
              var params = new Array();
              params.push(_this.userData[_i].value);
              var frame = _this.userData[_i].time; // 指定frameにeventがなければ新規追加 あれば更新

              var existFrameIndex = animationClip.events.findIndex(v => v.frame === frame);

              if (existFrameIndex === -1) {
                animationClip.events.push({
                  frame: frame,
                  func: "CubismMotionEvent",
                  params: params
                });
              } else {
                animationClip.events[existFrameIndex] = {
                  frame: frame,
                  func: "CubismMotionEvent",
                  params: params
                };
              }
            };

            for (var _i = 0; _i < this.userData.length; _i++) {
              _loop();
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
          var length = segments[position + 1] - result[result.length - 1][0];
          var slope = (segments[position + 2] - result[result.length - 1][1].value) / length; // Determine tangents.

          var outTangent = slope;
          var inTangent = outTangent; // Create keyframes.

          var keyframe = [result[result.length - 1][0], RealKeyframeValue.instantiate(result[result.length - 1][1].value)];
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
          var tangentLength = Math.abs(result[result.length - 1][0] - segments[position + 5]) * (1 / 3);
          var outTangent = (segments[position + 2] - result[result.length - 1][1].value) / tangentLength;
          var inTangent = (segments[position + 6] - segments[position + 4]) / tangentLength; // Create keyframes.

          var keyframe = [result[result.length - 1][0], RealKeyframeValue.instantiate(result[result.length - 1][1].value)];
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
          var keyframe = [segments[position + 1], RealKeyframeValue.instantiate(segments[position + 2])];
          keyframe[1].leftTangent = Number.POSITIVE_INFINITY;
          result.push(keyframe); // Update position.

          return position + 3;
        }
        /** Parses a inverse-stepped segment. */


        static parseInverseSteppedSegment(segments, result, position) {
          // Compute tangents.
          var keyframe = result[result.length - 1];
          var tangent = Math.atan2(segments[position + 2] - keyframe[1].value, segments[position + 1] - keyframe[0]);
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
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class8.prototype, "meta", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new SerializableMeta();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class8.prototype, "curves", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array(0);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class8.prototype, "userData", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array(0);
        }
      })), _class8)) || _class7));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=1d8cfae0107ec2289c238b6296cd5bb43cd7093e.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, math, CubismPhysicsOutput, CubismPhysicsParticle, CubismPhysicsSourceComponent, CubismPhysicsInput, CubismPhysicsNormalization, CubismPhysicsNormalizationTuplet, CubismPhysicsRig, CubismPhysicsSubRig, JsonParseUtils, ArrayExtensions, CubismPhysics3Json, _crd, asBoolean, asNumber, asString;

  function _reportPossibleCrUseOfCubismPhysicsOutput(extras) {
    _reporterNs.report("CubismPhysicsOutput", "../Physics/CubismPhysicsOutput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsParticle(extras) {
    _reporterNs.report("CubismPhysicsParticle", "../Physics/CubismPhysicsParticle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsSourceComponent(extras) {
    _reporterNs.report("CubismPhysicsSourceComponent", "../Physics/CubismPhysicsSourceComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsInput(extras) {
    _reporterNs.report("CubismPhysicsInput", "../Physics/CubismPhysicsInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsNormalization(extras) {
    _reporterNs.report("CubismPhysicsNormalization", "../Physics/CubismPhysicsNormalization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsNormalizationTuplet(extras) {
    _reporterNs.report("CubismPhysicsNormalizationTuplet", "../Physics/CubismPhysicsNormalization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsRig(extras) {
    _reporterNs.report("CubismPhysicsRig", "../Physics/CubismPhysicsRig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsSubRig(extras) {
    _reporterNs.report("CubismPhysicsSubRig", "../Physics/CubismPhysicsSubRig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonParseUtils(extras) {
    _reporterNs.report("JsonParseUtils", "./JsonParseUtils", _context.meta, extras);
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
      js = _cc.js;
      math = _cc.math;
    }, function (_unresolved_2) {
      CubismPhysicsOutput = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPhysicsParticle = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismPhysicsSourceComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismPhysicsInput = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismPhysicsNormalization = _unresolved_6.default;
      CubismPhysicsNormalizationTuplet = _unresolved_6.CubismPhysicsNormalizationTuplet;
    }, function (_unresolved_7) {
      CubismPhysicsRig = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismPhysicsSubRig = _unresolved_8.default;
    }, function (_unresolved_9) {
      JsonParseUtils = _unresolved_9.default;
    }, function (_unresolved_10) {
      ArrayExtensions = _unresolved_10.ArrayExtensions;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7259RrDqhNQ4Ro8ZT9refo", "CubismPhysics3Json", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['js', 'JsonAsset', 'math']);

      ({
        asBoolean,
        asNumber,
        asString
      } = _crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
        error: Error()
      }), JsonParseUtils) : JsonParseUtils);
      /** **Sealed class.** */

      CubismPhysics3Json = class CubismPhysics3Json {
        constructor() {
          //#region Json Data

          /** Json file format version. */
          this.version = 0;

          /** Additional data describing physics. */
          this.meta = new CubismPhysics3Json.SerializableMeta();

          /** TODO Document. */
          this.physicsSettings = null;
        }
        /**
         * Loads a physics3.json asset.
         * @param physics3Json physics3.json to deserialize.
         * @returns Deserialized physics3.json on success; null otherwise.
         */


        static loadFrom(physics3Json) {
          const json = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
            error: Error()
          }), JsonParseUtils) : JsonParseUtils).parse(physics3Json);

          if (!json) {
            return null;
          }

          return CubismPhysics3Json.loadFromJson(json);
        }
        /**
         * Loads a physics3.json asset.
         * @param physics3JsonAsset motion3.json to deserialize.
         * @returns Deserialized physics3.json on success; null otherwise.
         */


        static loadFromJsonAsset(physics3JsonAsset) {
          if (physics3JsonAsset.json == null) {
            return null;
          }

          return CubismPhysics3Json.loadFromJson(physics3JsonAsset.json);
        }

        static loadFromJson(json) {
          const {
            SerializableMeta,
            SerializablePhysicsSettings
          } = CubismPhysics3Json;
          let result = new CubismPhysics3Json();

          if (!js.isNumber(json.Version)) {
            return null;
          }

          result.version = json.Version;

          if (json.Meta != null) {
            const meta = SerializableMeta.instantiateFromJson(json.Meta);

            if (meta != null) {
              result.meta = meta;
            }
          }

          if (Array.isArray(json.PhysicsSettings)) {
            const physicsSettings = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
              error: Error()
            }), JsonParseUtils) : JsonParseUtils).arrayedInstantiateFromJson(json.PhysicsSettings, SerializablePhysicsSettings.instantiateFromJson);

            if (physicsSettings != null) {
              result.physicsSettings = physicsSettings;
            }
          }

          return result;
        }

        toRig() {
          let instance = new (_crd && CubismPhysicsRig === void 0 ? (_reportPossibleCrUseOfCubismPhysicsRig({
            error: Error()
          }), CubismPhysicsRig) : CubismPhysicsRig)();
          instance.gravity = new math.Vec2(this.meta.effectiveForces.gravity.x, this.meta.effectiveForces.gravity.y);
          instance.wind = new math.Vec2(this.meta.effectiveForces.wind.x, this.meta.effectiveForces.wind.y);

          if (this.physicsSettings != null) {
            if (this.physicsSettings.length != this.meta.physicsSettingCount) {
              console.warn('PhysicsSettings.Length and Meta.PhysicsSettingCount are unequaled.');
              console.warn('physicsSettings.length: %d, this.meta.physicsSettingCount: %d', this.physicsSettings.length, this.meta.physicsSettingCount);
              console.warn(this.physicsSettings);
            }

            console.trace();
            instance.fps = this.meta.fps;
            instance.subRigs = new Array(this.physicsSettings.length);

            for (var i = 0; i < instance.subRigs.length; i++) {
              const subRig = new (_crd && CubismPhysicsSubRig === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSubRig({
                error: Error()
              }), CubismPhysicsSubRig) : CubismPhysicsSubRig)();
              const physicsSetting = this.physicsSettings[i];

              if (physicsSetting.input != null) {
                subRig.input = this.readInput(physicsSetting.input);
              }

              if (physicsSetting.output != null) {
                subRig.output = this.readOutput(physicsSetting.output);
              }

              if (physicsSetting.vertices != null) {
                subRig.particles = this.readParticles(physicsSetting.vertices);
              }

              if (physicsSetting.normalization != null) {
                subRig.normalization = this.readNormalization(physicsSetting.normalization);
              }

              instance.subRigs[i] = subRig;
            }
          }

          return instance;
        }

        readInput(source) {
          let dataArray = new Array(source.length);

          for (let i = 0; i < dataArray.length; i++) {
            dataArray[i] = new (_crd && CubismPhysicsInput === void 0 ? (_reportPossibleCrUseOfCubismPhysicsInput({
              error: Error()
            }), CubismPhysicsInput) : CubismPhysicsInput)();
            dataArray[i].sourceId = source[i].source.id;
            dataArray[i].angleScale = 0.0;
            dataArray[i].scaleOfTranslation = math.Vec2.ZERO;
            dataArray[i].weight = source[i].weight;

            if (source[i].type == null) {
              console.warn('source[' + i + '].type is null.');
              dataArray[i].sourceComponent = (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
                error: Error()
              }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).X;
            } else {
              var _purse;

              dataArray[i].sourceComponent = (_purse = (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
                error: Error()
              }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).purse(source[i].type)) != null ? _purse : (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
                error: Error()
              }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).X;
            }

            dataArray[i].isInverted = source[i].reflect;
          }

          return dataArray;
        }

        readOutput(source) {
          let dataArray = new Array(source.length);

          for (var i = 0; i < dataArray.length; i++) {
            dataArray[i] = new (_crd && CubismPhysicsOutput === void 0 ? (_reportPossibleCrUseOfCubismPhysicsOutput({
              error: Error()
            }), CubismPhysicsOutput) : CubismPhysicsOutput)();
            dataArray[i].destinationId = source[i].destination.id;
            dataArray[i].particleIndex = source[i].vertexIndex;
            dataArray[i].translationScale = math.Vec2.ZERO;
            dataArray[i].angleScale = source[i].scale;
            dataArray[i].weight = source[i].weight;

            if (source[i].type == null) {
              console.warn('source[' + i + '].type is null.');
              dataArray[i].sourceComponent = (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
                error: Error()
              }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).X;
            } else {
              var _purse2;

              dataArray[i].sourceComponent = (_purse2 = (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
                error: Error()
              }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).purse(source[i].type)) != null ? _purse2 : (_crd && CubismPhysicsSourceComponent === void 0 ? (_reportPossibleCrUseOfCubismPhysicsSourceComponent({
                error: Error()
              }), CubismPhysicsSourceComponent) : CubismPhysicsSourceComponent).X;
            }

            dataArray[i].isInverted = source[i].reflect;
            dataArray[i].valueBelowMinimum = 0.0;
            dataArray[i].valueExceededMaximum = 0.0;
          }

          return dataArray;
        }

        readParticles(source) {
          let dataArray = new Array(source.length);

          for (var i = 0; i < dataArray.length; i++) {
            dataArray[i] = new (_crd && CubismPhysicsParticle === void 0 ? (_reportPossibleCrUseOfCubismPhysicsParticle({
              error: Error()
            }), CubismPhysicsParticle) : CubismPhysicsParticle)({
              initialPosition: new math.Vec2(source[i].position.x, source[i].position.y),
              mobility: source[i].mobility,
              delay: source[i].delay,
              acceleration: source[i].acceleration,
              radius: source[i].radius,
              position: math.Vec2.ZERO,
              lastPosition: math.Vec2.ZERO,
              lastGravity: new math.Vec2(0, 1),
              // DOWN
              force: math.Vec2.ZERO,
              velocity: math.Vec2.ZERO
            });
          }

          return dataArray;
        }

        readNormalization(source) {
          return new (_crd && CubismPhysicsNormalization === void 0 ? (_reportPossibleCrUseOfCubismPhysicsNormalization({
            error: Error()
          }), CubismPhysicsNormalization) : CubismPhysicsNormalization)({
            position: new (_crd && CubismPhysicsNormalizationTuplet === void 0 ? (_reportPossibleCrUseOfCubismPhysicsNormalizationTuplet({
              error: Error()
            }), CubismPhysicsNormalizationTuplet) : CubismPhysicsNormalizationTuplet)({
              maximum: source.position.maximum,
              minimum: source.position.minimum,
              defaultValue: source.position.default
            }),
            angle: new (_crd && CubismPhysicsNormalizationTuplet === void 0 ? (_reportPossibleCrUseOfCubismPhysicsNormalizationTuplet({
              error: Error()
            }), CubismPhysicsNormalizationTuplet) : CubismPhysicsNormalizationTuplet)({
              maximum: source.angle.maximum,
              minimum: source.angle.minimum,
              defaultValue: source.angle.default
            })
          });
        } //#endregion


      }; //#region Json Helpers

      (function (_CubismPhysics3Json) {
        class SerializableVector2 {
          constructor(args = {}) {
            var _args$x, _args$y;

            this.x = void 0;
            this.y = void 0;
            this.x = (_args$x = args.x) != null ? _args$x : 0;
            this.y = (_args$y = args.y) != null ? _args$y : 0;
          }

          clone() {
            return new SerializableVector2({
              x: this.x,
              y: this.y
            });
          }

          copyWith(x, y) {
            return new SerializableVector2({
              x: x != null ? x : this.x,
              y: y != null ? y : this.y
            });
          }
          /**
           * **Required properties**
           * - X
           * - Y
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const x = asNumber(json.X);
            const y = asNumber(json.Y);

            if (x === undefined || y === undefined) {
              return undefined;
            }

            return new SerializableVector2({
              x: x,
              y: y
            });
          }

          equals(other) {
            return this === other ? true : this.x == other.x && this.y == other.y;
          }

          strictEquals(other) {
            return this === other;
          }

        }

        _CubismPhysics3Json.SerializableVector2 = SerializableVector2;

        class SerializableNormalizationValue {
          constructor(args = {}) {
            var _args$minimum, _args$defaultValue, _args$maximum;

            /** Minimum of normalization. */
            this.minimum = void 0;

            /** Center of normalization range. */
            this.default = void 0;

            /** Maximum of normalization. */
            this.maximum = void 0;
            this.minimum = (_args$minimum = args.minimum) != null ? _args$minimum : 0;
            this.default = (_args$defaultValue = args.defaultValue) != null ? _args$defaultValue : 0;
            this.maximum = (_args$maximum = args.maximum) != null ? _args$maximum : 0;
          }

          copyWith(args = {}) {
            var _args$minimum2, _args$defaultValue2, _args$maximum2;

            return new SerializableNormalizationValue({
              minimum: (_args$minimum2 = args.minimum) != null ? _args$minimum2 : this.minimum,
              defaultValue: (_args$defaultValue2 = args.defaultValue) != null ? _args$defaultValue2 : this.default,
              maximum: (_args$maximum2 = args.maximum) != null ? _args$maximum2 : this.maximum
            });
          }

          equals(other) {
            return this === other ? true : this.minimum == other.minimum && this.default == other.default && this.maximum == other.maximum;
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           * **Required properties**
           * - Minimum
           * - Default
           * - Maximum
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const minimum = asNumber(json.Minimum);
            const defaultValue = asNumber(json.Default);
            const maximum = asNumber(json.Maximum);

            if (minimum === undefined || defaultValue === undefined || maximum === undefined) {
              return undefined;
            }

            return new SerializableNormalizationValue({
              minimum: minimum,
              defaultValue: defaultValue,
              maximum: maximum
            });
          }

        }

        _CubismPhysics3Json.SerializableNormalizationValue = SerializableNormalizationValue;

        class SerializableParameter {
          constructor(args = {}) {
            var _args$target, _args$id;

            /** Target type. */
            this.target = void 0;

            /** Parameter ID. */
            this.id = void 0;
            this.target = (_args$target = args.target) != null ? _args$target : '';
            this.id = (_args$id = args.id) != null ? _args$id : '';
          }

          equals(other) {
            return this === other ? true : this.target == other.target && this.id == other.id;
          }

          strictEquals(other) {
            return this === other;
          }

          copyWith(args = {}) {
            return new SerializableParameter({
              target: args.target !== undefined ? args.target : this.target,
              id: args.id !== undefined ? args.id : this.id
            });
          }
          /**
           * **Required properties**
           * - Target
           * - Id
           * - Maximum
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const target = asString(json.Target);
            const id = asString(json.Id);

            if (target === undefined || id === undefined) {
              return undefined;
            }

            return new SerializableParameter({
              target: target,
              id: id
            });
          }

        }

        _CubismPhysics3Json.SerializableParameter = SerializableParameter;

        class SerializableInput {
          constructor(args = {}) {
            var _args$weight, _args$type, _args$reflect;

            /** Target parameter. */
            this.source = void 0;

            /** Influence ratio of each kind. */
            this.weight = void 0;

            /** Type of source. */
            this.type = void 0;

            /** TODO Document. */
            this.reflect = void 0;
            this.source = args.source != null ? args.source : SerializableParameter.DEFAULT;
            this.weight = (_args$weight = args.weight) != null ? _args$weight : 0;
            this.type = (_args$type = args.type) != null ? _args$type : '';
            this.reflect = (_args$reflect = args.reflect) != null ? _args$reflect : false;
          }

          copyWith(args = {}) {
            var _args$source, _args$weight2, _args$type2, _args$reflect2;

            return new SerializableInput({
              source: (_args$source = args.source) != null ? _args$source : this.source,
              weight: (_args$weight2 = args.weight) != null ? _args$weight2 : this.weight,
              type: (_args$type2 = args.type) != null ? _args$type2 : this.type,
              reflect: (_args$reflect2 = args.reflect) != null ? _args$reflect2 : this.reflect
            });
          }

          equals(other) {
            return this === other || this.source.equals(other.source) && this.weight == other.weight && this.type == other.type && this.reflect == other.reflect;
          }

          strictEquals(other) {
            return this === other;
          }

          static isEquals(a, b) {
            return a.equals(b);
          }
          /**
           * **Required properties**
           * - Source
           * - Weight
           * - Type
           * - Reflect
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const source = SerializableParameter.instantiateFromJson(json.Source);
            const weight = asNumber(json.Weight);
            const type = asString(json.Type);
            const reflect = asBoolean(json.Reflect);

            if (source === undefined || weight === undefined || type === undefined || reflect === undefined) {
              return undefined;
            }

            return new SerializableInput({
              source: source,
              weight: weight,
              type: type,
              reflect: reflect
            });
          }

        }

        _CubismPhysics3Json.SerializableInput = SerializableInput;

        class SerializableOutput {
          constructor(args = {}) {
            var _args$destination, _args$vertexIndex, _args$scale, _args$weight3, _args$type3, _args$reflect3;

            /** Target parameter. */
            this.destination = void 0;

            /** Index of referenced vertex. */
            this.vertexIndex = void 0;

            /** Scale. */
            this.scale = void 0;

            /** Influence ratio of each kind. */
            this.weight = void 0;

            /** Type of destination. */
            this.type = void 0;

            /** TODO Document. */
            this.reflect = void 0;
            this.destination = (_args$destination = args.destination) != null ? _args$destination : SerializableParameter.DEFAULT;
            this.vertexIndex = (_args$vertexIndex = args.vertexIndex) != null ? _args$vertexIndex : 0;
            this.scale = (_args$scale = args.scale) != null ? _args$scale : 0;
            this.weight = (_args$weight3 = args.weight) != null ? _args$weight3 : 0;
            this.type = (_args$type3 = args.type) != null ? _args$type3 : '';
            this.reflect = (_args$reflect3 = args.reflect) != null ? _args$reflect3 : false;
          }

          equals(other) {
            return this === other || this.destination.equals(other.destination) && this.vertexIndex == other.vertexIndex && this.scale == other.scale && this.weight == other.weight && this.type == other.type && this.reflect == other.reflect;
          }

          strictEquals(other) {
            return this === other;
          }

          copyWith(args = {}) {
            var _args$destination2, _args$vertexIndex2, _args$scale2, _args$weight4, _args$type4, _args$reflect4;

            return new SerializableOutput({
              destination: (_args$destination2 = args.destination) != null ? _args$destination2 : this.destination,
              vertexIndex: (_args$vertexIndex2 = args.vertexIndex) != null ? _args$vertexIndex2 : this.vertexIndex,
              scale: (_args$scale2 = args.scale) != null ? _args$scale2 : this.scale,
              weight: (_args$weight4 = args.weight) != null ? _args$weight4 : this.weight,
              type: (_args$type4 = args.type) != null ? _args$type4 : this.type,
              reflect: (_args$reflect4 = args.reflect) != null ? _args$reflect4 : this.reflect
            });
          }

          static isEquals(a, b) {
            return a.equals(b);
          }
          /**
           * **Required properties**
           * - Destination
           * - VertexIndex
           * - Scale
           * - Weight
           * - Type
           * - Reflect
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const destination = SerializableParameter.instantiateFromJson(json.Destination);
            const vertexIndex = asNumber(json.VertexIndex);
            const scale = asNumber(json.Scale);
            const weight = asNumber(json.Weight);
            const type = asString(json.Type);
            const reflect = asBoolean(json.Reflect);

            if (destination === undefined || vertexIndex === undefined || scale === undefined || weight === undefined || type === undefined || reflect === undefined) {
              return undefined;
            }

            return new SerializableOutput({
              destination: destination,
              vertexIndex: vertexIndex,
              scale: scale,
              weight: weight,
              type: type,
              reflect: reflect
            });
          }

        }

        _CubismPhysics3Json.SerializableOutput = SerializableOutput;

        class SerializableVertex {
          constructor(args = {}) {
            var _args$position, _args$mobility, _args$delay, _args$acceleration, _args$radius;

            /** Default position. */
            this.position = void 0;

            /** Mobility. */
            this.mobility = void 0;

            /** Delay ratio. */
            this.delay = void 0;

            /** Acceleration. */
            this.acceleration = void 0;

            /** Length. */
            this.radius = void 0;
            this.position = (_args$position = args.position) != null ? _args$position : SerializableVector2.DEFAULT;
            this.mobility = (_args$mobility = args.mobility) != null ? _args$mobility : 0;
            this.delay = (_args$delay = args.delay) != null ? _args$delay : 0;
            this.acceleration = (_args$acceleration = args.acceleration) != null ? _args$acceleration : 0;
            this.radius = (_args$radius = args.radius) != null ? _args$radius : 0;
          }

          equals(other) {
            return this === other || this.position.equals(other.position) && this.mobility == other.mobility && this.delay == other.delay && this.acceleration == other.acceleration && this.radius == other.radius;
          }

          strictEquals(other) {
            return this === other;
          }

          copyWith(args = {}) {
            var _args$position$clone, _args$position2, _args$mobility2, _args$delay2, _args$acceleration2, _args$radius2;

            return new SerializableVertex({
              position: (_args$position$clone = (_args$position2 = args.position) == null ? void 0 : _args$position2.clone()) != null ? _args$position$clone : this.position.clone(),
              mobility: (_args$mobility2 = args.mobility) != null ? _args$mobility2 : this.mobility,
              delay: (_args$delay2 = args.delay) != null ? _args$delay2 : this.delay,
              acceleration: (_args$acceleration2 = args.acceleration) != null ? _args$acceleration2 : this.acceleration,
              radius: (_args$radius2 = args.radius) != null ? _args$radius2 : this.radius
            });
          }

          static isEquals(a, b) {
            return a.equals(b);
          }
          /**
           * **Required properties**
           * - Position
           * - Mobility
           * - Delay
           * - Acceleration
           * - Radius
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const position = SerializableVector2.instantiateFromJson(json.Position);
            const mobility = asNumber(json.Mobility);
            const delay = asNumber(json.Delay);
            const acceleration = asNumber(json.Acceleration);
            const radius = asNumber(json.Radius);

            if (position === undefined || mobility === undefined || delay === undefined || acceleration === undefined || radius === undefined) {
              return undefined;
            }

            return new SerializableVertex({
              position: position,
              mobility: mobility,
              delay: delay,
              acceleration: acceleration,
              radius: radius
            });
          }

        }

        _CubismPhysics3Json.SerializableVertex = SerializableVertex;

        class SerializableNormalization {
          constructor(args = {}) {
            var _args$position3, _args$angle;

            /** Normalization value of position. */
            this.position = void 0;

            /** Normalization value of angle. */
            this.angle = void 0;
            this.position = (_args$position3 = args.position) != null ? _args$position3 : SerializableNormalizationValue.DEFAULT;
            this.angle = (_args$angle = args.angle) != null ? _args$angle : SerializableNormalizationValue.DEFAULT;
          }

          copyWith(args = {}) {
            var _args$position4, _args$angle2;

            return new SerializableNormalization({
              position: (_args$position4 = args.position) != null ? _args$position4 : this.position,
              angle: (_args$angle2 = args.angle) != null ? _args$angle2 : this.angle
            });
          }

          equals(other) {
            return this === other || this.position.equals(other.position) && this.angle.equals(other.angle);
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           * **Required properties**
           * - Position
           * - Angle
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const position = SerializableNormalizationValue.instantiateFromJson(json.Position);
            const angle = SerializableNormalizationValue.instantiateFromJson(json.Angle);

            if (position === undefined || angle === undefined) {
              return undefined;
            }

            return new SerializableNormalization({
              position: position,
              angle: angle
            });
          }

        }

        _CubismPhysics3Json.SerializableNormalization = SerializableNormalization;

        class SerializablePhysicsSettings {
          constructor(args = {}) {
            var _args$id2, _args$input, _args$output, _args$vertices, _args$normalization;

            /** TODO Document. */
            this.id = void 0;

            /** Input array. */
            this.input = void 0;

            /** Output array. */
            this.output = void 0;

            /** Vertices. */
            this.vertices = void 0;

            /** Normalization parameter of using input. */
            this.normalization = void 0;
            this.id = (_args$id2 = args.id) != null ? _args$id2 : '';
            this.input = (_args$input = args.input) != null ? _args$input : new Array();
            this.output = (_args$output = args.output) != null ? _args$output : new Array();
            this.vertices = (_args$vertices = args.vertices) != null ? _args$vertices : new Array();
            this.normalization = (_args$normalization = args.normalization) != null ? _args$normalization : SerializableNormalization.DEFAULT;
          }

          copyWith(args = {}) {
            var _args$id3, _args$input2, _args$output2, _args$vertices2, _args$normalization2;

            return new SerializablePhysicsSettings({
              id: (_args$id3 = args.id) != null ? _args$id3 : this.id,
              input: (_args$input2 = args.input) != null ? _args$input2 : this.input,
              output: (_args$output2 = args.output) != null ? _args$output2 : this.output,
              vertices: (_args$vertices2 = args.vertices) != null ? _args$vertices2 : this.vertices,
              normalization: (_args$normalization2 = args.normalization) != null ? _args$normalization2 : this.normalization
            });
          }

          equals(other) {
            const {
              isEquals
            } = _crd && ArrayExtensions === void 0 ? (_reportPossibleCrUseOfArrayExtensions({
              error: Error()
            }), ArrayExtensions) : ArrayExtensions;
            return this === other || this.id == other.id && isEquals(SerializableInput.isEquals, this.input, other.input) && isEquals(SerializableOutput.isEquals, this.output, other.output) && isEquals(SerializableVertex.isEquals, this.vertices, other.vertices) && this.normalization.equals(other.normalization);
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           * **Required properties**
           * - Id
           * - Input
           * - Vertices
           * - Output
           * - Normalization
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const {
              asString,
              asArray
            } = _crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
              error: Error()
            }), JsonParseUtils) : JsonParseUtils;
            const id = asString(json.Id);
            const input = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
              error: Error()
            }), JsonParseUtils) : JsonParseUtils).arrayedInstantiateFromJson(json.Input, SerializableInput.instantiateFromJson);
            const output = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
              error: Error()
            }), JsonParseUtils) : JsonParseUtils).arrayedInstantiateFromJson(json.Output, SerializableOutput.instantiateFromJson);
            const vertices = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
              error: Error()
            }), JsonParseUtils) : JsonParseUtils).arrayedInstantiateFromJson(json.Vertices, SerializableVertex.instantiateFromJson);
            const normalization = SerializableNormalization.instantiateFromJson(json.Normalization);

            if (id === undefined || input === undefined || output === undefined || vertices === undefined || normalization === undefined) {
              return undefined;
            }

            return new SerializablePhysicsSettings({
              id: id,
              input: input,
              output: output,
              vertices: vertices,
              normalization: normalization
            });
          }

        }

        _CubismPhysics3Json.SerializablePhysicsSettings = SerializablePhysicsSettings;

        class SerializableMeta {
          constructor(args = {}) {
            var _args$physicsSettingC, _args$totalInputCount, _args$totalOutputCoun, _args$totalVertexCoun, _args$effectiveForces, _args$fps;

            /** Number of physics settings. */
            this.physicsSettingCount = void 0;

            /** Total number of input parameters. */
            this.totalInputCount = void 0;

            /** Total number of output parameters. */
            this.totalOutputCount = void 0;

            /** Total number of vertices. */
            this.totalVertexCount = void 0;

            /** TODO Document. */
            this.effectiveForces = void 0;

            /**
             * [Optional] Fps of physics operations.
             * If the value is not set to Json, it will change according to the application's operating FPS.
             */
            this.fps = void 0;
            this.physicsSettingCount = (_args$physicsSettingC = args.physicsSettingCount) != null ? _args$physicsSettingC : 0;
            this.totalInputCount = (_args$totalInputCount = args.totalInputCount) != null ? _args$totalInputCount : 0;
            this.totalOutputCount = (_args$totalOutputCoun = args.totalOutputCount) != null ? _args$totalOutputCoun : 0;
            this.totalVertexCount = (_args$totalVertexCoun = args.totalVertexCount) != null ? _args$totalVertexCoun : 0;
            this.effectiveForces = (_args$effectiveForces = args.effectiveForces) != null ? _args$effectiveForces : SerializableEffectiveForces.DEFAULT;
            this.fps = (_args$fps = args.fps) != null ? _args$fps : 0;
          }

          copyWith(args = {}) {
            var _args$physicsSettingC2, _args$totalInputCount2, _args$totalOutputCoun2, _args$totalVertexCoun2, _args$effectiveForces2, _args$fps2;

            return new SerializableMeta({
              physicsSettingCount: (_args$physicsSettingC2 = args.physicsSettingCount) != null ? _args$physicsSettingC2 : this.physicsSettingCount,
              totalInputCount: (_args$totalInputCount2 = args.totalInputCount) != null ? _args$totalInputCount2 : this.totalInputCount,
              totalOutputCount: (_args$totalOutputCoun2 = args.totalOutputCount) != null ? _args$totalOutputCoun2 : this.totalOutputCount,
              totalVertexCount: (_args$totalVertexCoun2 = args.totalVertexCount) != null ? _args$totalVertexCoun2 : this.totalVertexCount,
              effectiveForces: (_args$effectiveForces2 = args.effectiveForces) != null ? _args$effectiveForces2 : this.effectiveForces,
              fps: (_args$fps2 = args.fps) != null ? _args$fps2 : this.fps
            });
          }

          equals(other) {
            return this === other ? true : this.physicsSettingCount == other.physicsSettingCount && this.totalInputCount == other.totalInputCount && this.totalOutputCount == other.totalOutputCount && this.totalVertexCount == other.totalVertexCount && this.effectiveForces.equals(other.effectiveForces) && this.fps == other.fps;
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           * **Required properties**
           * - PhysicsSettingCount
           * - TotalInputCount
           * - TotalOutputCount
           * - VertexCount
           * - EffectiveForces
           * - PhysicsDictionary (for Unity 未実装)
           *
           * **Optional properties**
           * - Fps (for Unity 未実装)
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const physicsSettingCount = asNumber(json.PhysicsSettingCount);
            const totalInputCount = asNumber(json.TotalInputCount);
            const totalOutputCount = asNumber(json.TotalOutputCount);
            const vertexCount = asNumber(json.VertexCount);
            const effectiveForces = SerializableEffectiveForces.instantiateFromJson(json.EffectiveForces);

            if (physicsSettingCount === undefined || totalInputCount === undefined || totalOutputCount === undefined || vertexCount === undefined || effectiveForces === undefined) {
              return undefined;
            }

            const fps = asNumber(json.Fps);
            return new SerializableMeta({
              physicsSettingCount: physicsSettingCount,
              totalInputCount: totalInputCount,
              totalOutputCount: totalOutputCount,
              totalVertexCount: vertexCount,
              effectiveForces: effectiveForces,
              fps: fps
            });
          }

        }

        _CubismPhysics3Json.SerializableMeta = SerializableMeta;

        class SerializableEffectiveForces {
          constructor(args = {}) {
            var _args$gravity, _args$wind;

            /** Gravity. */
            this.gravity = void 0;

            /** Wind. (Not in use) */
            this.wind = void 0;
            this.gravity = (_args$gravity = args.gravity) != null ? _args$gravity : SerializableVector2.DEFAULT;
            this.wind = (_args$wind = args.wind) != null ? _args$wind : SerializableVector2.DEFAULT;
          }

          copyWith(args = {}) {
            var _args$gravity2, _args$wind2;

            return new SerializableEffectiveForces({
              gravity: (_args$gravity2 = args.gravity) != null ? _args$gravity2 : this.gravity,
              wind: (_args$wind2 = args.wind) != null ? _args$wind2 : this.wind
            });
          }
          /**
           * **Required properties**
           * - Gravity
           * - Wind
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            const gravity = SerializableVector2.instantiateFromJson(json.Gravity);
            const wind = SerializableVector2.instantiateFromJson(json.Wind);

            if (gravity === undefined || wind === undefined) {
              return undefined;
            }

            return new SerializableEffectiveForces({
              gravity: gravity,
              wind: wind
            });
          }

          equals(other) {
            return this === other || this.gravity.equals(other.gravity) && this.wind.equals(other.wind);
          }

          strictEquals(other) {
            return this === other;
          }

        }

        _CubismPhysics3Json.SerializableEffectiveForces = SerializableEffectiveForces;

        (function (_SerializableVector) {
          const DEFAULT = _SerializableVector.DEFAULT = new SerializableVector2();
        })(SerializableVector2 || (SerializableVector2 = _CubismPhysics3Json.SerializableVector2 || (_CubismPhysics3Json.SerializableVector2 = {})));

        (function (_SerializableEffectiveForces) {
          const DEFAULT = _SerializableEffectiveForces.DEFAULT = new SerializableEffectiveForces();
        })(SerializableEffectiveForces || (SerializableEffectiveForces = _CubismPhysics3Json.SerializableEffectiveForces || (_CubismPhysics3Json.SerializableEffectiveForces = {})));

        (function (_SerializableMeta) {
          const DEFAULT = _SerializableMeta.DEFAULT = new SerializableMeta();
        })(SerializableMeta || (SerializableMeta = _CubismPhysics3Json.SerializableMeta || (_CubismPhysics3Json.SerializableMeta = {})));

        (function (_SerializableNormalizationValue) {
          const DEFAULT = _SerializableNormalizationValue.DEFAULT = new SerializableNormalizationValue();
        })(SerializableNormalizationValue || (SerializableNormalizationValue = _CubismPhysics3Json.SerializableNormalizationValue || (_CubismPhysics3Json.SerializableNormalizationValue = {})));

        (function (_SerializableParameter) {
          const DEFAULT = _SerializableParameter.DEFAULT = new SerializableParameter();
        })(SerializableParameter || (SerializableParameter = _CubismPhysics3Json.SerializableParameter || (_CubismPhysics3Json.SerializableParameter = {})));

        (function (_SerializableInput) {
          const DEFAULT = _SerializableInput.DEFAULT = new SerializableInput();
        })(SerializableInput || (SerializableInput = _CubismPhysics3Json.SerializableInput || (_CubismPhysics3Json.SerializableInput = {})));

        (function (_SerializableVertex) {
          const DEFAULT = _SerializableVertex.DEFAULT = new SerializableVertex();
        })(SerializableVertex || (SerializableVertex = _CubismPhysics3Json.SerializableVertex || (_CubismPhysics3Json.SerializableVertex = {})));

        (function (_SerializableNormalization) {
          const DEFAULT = _SerializableNormalization.DEFAULT = new SerializableNormalization();
        })(SerializableNormalization || (SerializableNormalization = _CubismPhysics3Json.SerializableNormalization || (_CubismPhysics3Json.SerializableNormalization = {})));

        (function (_SerializablePhysicsSettings) {
          const DEFAULT = _SerializablePhysicsSettings.DEFAULT = new SerializablePhysicsSettings();
        })(SerializablePhysicsSettings || (SerializablePhysicsSettings = _CubismPhysics3Json.SerializablePhysicsSettings || (_CubismPhysics3Json.SerializablePhysicsSettings = {})));
      })(CubismPhysics3Json || (CubismPhysics3Json = {})); //#endregion


      _export("default", CubismPhysics3Json);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=81f00da02dfdebe708183e4d994248c8f520ebcc.js.map
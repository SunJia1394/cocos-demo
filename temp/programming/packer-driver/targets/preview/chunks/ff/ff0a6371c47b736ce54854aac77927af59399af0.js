System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CubismUserDataBody, CubismUserDataTargetType, JsonParseUtils, CubismUserData3Json, _crd, asNumber, asString;

  function _reportPossibleCrUseOfCubismUserDataBody(extras) {
    _reporterNs.report("CubismUserDataBody", "../UserData/CubismUserDataBody", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUserDataTargetType(extras) {
    _reporterNs.report("CubismUserDataTargetType", "../UserData/CubismUserDataTargetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonParseUtils(extras) {
    _reporterNs.report("JsonParseUtils", "./JsonParseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStructLike(extras) {
    _reporterNs.report("IStructLike", "../../IStructLike", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      CubismUserDataBody = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismUserDataTargetType = _unresolved_3.default;
    }, function (_unresolved_4) {
      JsonParseUtils = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f43a4Nj3htD+I6pc1c/jZEj", "CubismUserData3Json", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */
      __checkObsolete__(['JsonAsset']);

      ({
        asNumber,
        asString
      } = _crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
        error: Error()
      }), JsonParseUtils) : JsonParseUtils);
      /**
       * Handles user data from cdi3.json.
       *
       * **Sealed class.**
       */

      CubismUserData3Json = class CubismUserData3Json {
        constructor() {
          // #region Json Data

          /** Json file format version. */
          this.version = 0;

          /** Additional data describing physics. */
          this.meta = CubismUserData3Json.SerializableMeta.DEFAULT;

          /** Array of user data. */
          this.userData = null;
        }
        /**
         * Loads a cdi3.json asset.
         * @param userData3Json  cdi3.json to deserialize.
         * @returns Deserialized cdi3.json on success; null otherwise.
         */


        static loadFrom(userData3Json) {
          var json = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
            error: Error()
          }), JsonParseUtils) : JsonParseUtils).parse(userData3Json);

          if (!json) {
            return null;
          }

          return this.loadFromJson(json);
        }
        /**
         * Loads a cdi3.json asset.
         * @param userData3JsonAsset cdi3.json to deserialize.
         * @returns Deserialized cdi3.json on success; null otherwise.
         */


        static loadFromJsonAsset(userData3JsonAsset) {
          if (!userData3JsonAsset.json) {
            return null;
          }

          return this.loadFromJson(userData3JsonAsset.json);
        }

        static loadFromJson(json) {
          var version = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
            error: Error()
          }), JsonParseUtils) : JsonParseUtils).asNumber(json.Version);
          var meta = CubismUserData3Json.SerializableMeta.instantiateFromJson(json.Meta);
          var userData = (_crd && JsonParseUtils === void 0 ? (_reportPossibleCrUseOfJsonParseUtils({
            error: Error()
          }), JsonParseUtils) : JsonParseUtils).arrayedInstantiateFromJson(json.UserData, CubismUserData3Json.SerializableUserData.instantiateFromJson);

          if (version === undefined || meta === undefined || userData === undefined) {
            return null;
          }

          var result = new CubismUserData3Json();
          result.version = version;
          result.meta = meta;
          result.userData = userData;
          return result;
        }
        /**
         * Makes CubismUserDataBody array that was selected by CubismUserDataTargetType.
         * @param targetType Target object type.
         * @returns CubismUserDataBody array. Selected by CubismUserDataTargetType.
         */


        toBodyArray(targetType) {
          var userDataList = new Array();

          if (this.userData != null) {
            for (var i = 0; i < this.userData.length; i++) {
              var body = new (_crd && CubismUserDataBody === void 0 ? (_reportPossibleCrUseOfCubismUserDataBody({
                error: Error()
              }), CubismUserDataBody) : CubismUserDataBody)({
                id: this.userData[i].id,
                value: this.userData[i].value
              });

              switch (targetType) {
                case (_crd && CubismUserDataTargetType === void 0 ? (_reportPossibleCrUseOfCubismUserDataTargetType({
                  error: Error()
                }), CubismUserDataTargetType) : CubismUserDataTargetType).ArtMesh:
                  {
                    // Only drawables.
                    if (this.userData[i].target == 'ArtMesh') {
                      userDataList.push(body);
                    }

                    break;
                  }

                default:
                  {
                    var neverCheck = targetType;
                    break;
                  }
              }
            }
          }

          return userDataList;
        } // #endregion


      }; // #region Json Helpers

      (function (_CubismUserData3Json) {
        class SerializableMeta {
          constructor(args) {
            var _args$userDataCount, _args$totalUserDataCo;

            if (args === void 0) {
              args = {};
            }

            /** Number of user data. */
            this.userDataCount = void 0;

            /** Total number of user data. */
            this.totalUserDataCount = void 0;
            this.userDataCount = (_args$userDataCount = args.userDataCount) != null ? _args$userDataCount : 0;
            this.totalUserDataCount = (_args$totalUserDataCo = args.totalUserDataCount) != null ? _args$totalUserDataCo : 0;
          }

          copyWith(args) {
            var _args$userDataCount2, _args$totalUserDataCo2;

            if (args === void 0) {
              args = {};
            }

            return new SerializableMeta({
              userDataCount: (_args$userDataCount2 = args.userDataCount) != null ? _args$userDataCount2 : this.userDataCount,
              totalUserDataCount: (_args$totalUserDataCo2 = args.totalUserDataCount) != null ? _args$totalUserDataCo2 : this.totalUserDataCount
            });
          }

          equals(other) {
            return this === other ? true : this.userDataCount == other.userDataCount && this.totalUserDataCount == other.totalUserDataCount;
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           * **Required properties**
           * - UserDataCount
           * - TotalUserDataSize
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            var userDataCount = asNumber(json.UserDataCount);
            var totalUserDataSize = asNumber(json.TotalUserDataSize);

            if (userDataCount === undefined || totalUserDataSize === undefined) {
              return undefined;
            }

            return new SerializableMeta({
              userDataCount: userDataCount,
              totalUserDataCount: totalUserDataSize
            });
          }

        }

        _CubismUserData3Json.SerializableMeta = SerializableMeta;

        class SerializableUserData {
          constructor(args) {
            var _args$target, _args$id, _args$value;

            if (args === void 0) {
              args = {};
            }

            /** Type of target object. */
            this.target = void 0;

            /** Name of target object. */
            this.id = void 0;

            /** Value. */
            this.value = void 0;
            this.target = (_args$target = args.target) != null ? _args$target : '';
            this.id = (_args$id = args.id) != null ? _args$id : '';
            this.value = (_args$value = args.value) != null ? _args$value : '';
          }

          equals(other) {
            return this === other ? true : this.target == other.target && this.id == other.id && this.value == other.value;
          }

          strictEquals(other) {
            return this === other;
          }

          copyWith(args) {
            var _args$target2, _args$id2, _args$value2;

            if (args === void 0) {
              args = {};
            }

            return new SerializableUserData({
              target: (_args$target2 = args.target) != null ? _args$target2 : this.target,
              id: (_args$id2 = args.id) != null ? _args$id2 : this.id,
              value: (_args$value2 = args.value) != null ? _args$value2 : this.value
            });
          }
          /**
           * **Required properties**
           * - Target
           * - Id
           * - Value
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            if (json == null) {
              return undefined;
            }

            var target = asString(json.Target);
            var id = asString(json.Id);
            var value = asString(json.Value);

            if (target === undefined || id === undefined || value === undefined) {
              return undefined;
            }

            return new SerializableUserData({
              target: target,
              id: id,
              value: value
            });
          }

        }

        _CubismUserData3Json.SerializableUserData = SerializableUserData;

        (function (_SerializableUserData) {
          var DEFAULT = _SerializableUserData.DEFAULT = new SerializableUserData();
        })(SerializableUserData || (SerializableUserData = _CubismUserData3Json.SerializableUserData || (_CubismUserData3Json.SerializableUserData = {})));

        (function (_SerializableMeta) {
          var DEFAULT = _SerializableMeta.DEFAULT = new SerializableMeta();
        })(SerializableMeta || (SerializableMeta = _CubismUserData3Json.SerializableMeta || (_CubismUserData3Json.SerializableMeta = {})));
      })(CubismUserData3Json || (CubismUserData3Json = {})); // #endregion


      _export("default", CubismUserData3Json);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff0a6371c47b736ce54854aac77927af59399af0.js.map
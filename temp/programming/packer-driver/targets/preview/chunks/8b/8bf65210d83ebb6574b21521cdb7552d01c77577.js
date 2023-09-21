System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, JsonParseUtils, CubismDisplayInfo3Json, SerializableParameters, SerializableParameterGroups, SerializableParts, asNumber, asString;

  _export({
    default: void 0,
    SerializableParameters: void 0,
    SerializableParameterGroups: void 0,
    SerializableParts: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_) {
      JsonParseUtils = _unresolved_.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "19ff9aJTvFNZJS6zWScjCOz", "CubismDisplayInfo3Json", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      ({
        asNumber,
        asString
      } = JsonParseUtils);
      /**
       * Handles display info from cdi3.json.
       *
       * **Sealed class.**
       */

      _export("default", CubismDisplayInfo3Json = class CubismDisplayInfo3Json {
        constructor() {
          // #region Json Data

          /** Json file format version. */
          this.version = 0;

          /** Array of model parameters. */
          this.parameters = new Array(0);

          /** Array of ParameterGroups. */
          this.parameterGroups = new Array(0);

          /** Array of Parts. */
          this.parts = new Array(0);
        }
        /**
         * Loads a cdi3.json.
         * @param cdi3Json cdi3.json to deserialize.
         * @returns Deserialized cdi3.json on success; null otherwise.
         */


        static loadFrom(cdi3Json) {
          var json = JsonParseUtils.parse(cdi3Json);

          if (!json) {
            return null;
          }

          return this.loadFromJson(json);
        }
        /**
         * **Required properties**
         * - Version
         * - ParameterGroups
         * - Parts
         *
         * **Optional properties**
         * - Parameters
         *
         * @param json
         * @returns
         */


        static loadFromJson(json) {
          var _JsonParseUtils$array;

          if (json == null) {
            return null;
          }

          var version = asNumber(json.Version);
          var parameterGroups = JsonParseUtils.arrayedInstantiateFromJson(json.Parameters, SerializableParameterGroups.instantiateFromJson);
          var parts = JsonParseUtils.arrayedInstantiateFromJson(json.Parts, SerializableParts.instantiateFromJson);

          if (version === undefined || parameterGroups === undefined || parts === undefined) {
            return null;
          }

          var parameters = (_JsonParseUtils$array = JsonParseUtils.arrayedInstantiateFromJson(json.Parameters, SerializableParameters.instantiateFromJson)) != null ? _JsonParseUtils$array : new Array(0);
          var result = new CubismDisplayInfo3Json();
          result.version = version;
          result.parameterGroups = parameterGroups;
          result.parts = parts;
          result.parameters = parameters;
          return result;
        } // #endregion


      }); // #region Json Helpers

      /** (struct) */


      _export("SerializableParameters", SerializableParameters = class SerializableParameters {
        constructor(args) {
          var _args$id, _args$groupId, _args$name;

          if (args === void 0) {
            args = {};
          }

          /** The ID of the parameter. */
          this.id = void 0;

          /** The Group ID of the parameter. */
          this.groupId = void 0;

          /** The Name of the parameter. */
          this.name = void 0;
          this.id = (_args$id = args.id) != null ? _args$id : '';
          this.groupId = (_args$groupId = args.groupId) != null ? _args$groupId : '';
          this.name = (_args$name = args.name) != null ? _args$name : '';
        }

        copyWith(args) {
          var _args$id2, _args$groupid, _args$name2;

          if (args === void 0) {
            args = {};
          }

          return new SerializableParameters({
            id: (_args$id2 = args.id) != null ? _args$id2 : this.id,
            groupId: (_args$groupid = args.groupid) != null ? _args$groupid : this.groupId,
            name: (_args$name2 = args.name) != null ? _args$name2 : this.name
          });
        }

        equals(other) {
          return this === other ? true : this.id == other.id && this.groupId == other.groupId && this.name == other.name;
        }

        strictEquals(other) {
          return this === other;
        }
        /**
         * **Required properties**
         * - Id
         * - GroupId
         * - Name
         * @param json
         * @returns
         */


        static instantiateFromJson(json) {
          if (json == null) {
            return undefined;
          }

          var id = asString(json.Id);
          var groupId = asString(json.GroupId);
          var name = asString(json.Name);

          if (id === undefined || groupId === undefined || name === undefined) {
            return undefined;
          }

          return new SerializableParameters({
            id: id,
            groupId: groupId,
            name: name
          });
        }

      });
      /** (struct) */


      _export("SerializableParameterGroups", SerializableParameterGroups = class SerializableParameterGroups {
        constructor(args) {
          var _args$id3, _args$groupId2, _args$name3;

          if (args === void 0) {
            args = {};
          }

          /** The ID of the parameter. */
          this.id = void 0;

          /** The Group ID of the parameter. */
          this.groupId = void 0;

          /** The Name of the parameter. */
          this.name = void 0;
          this.id = (_args$id3 = args.id) != null ? _args$id3 : '';
          this.groupId = (_args$groupId2 = args.groupId) != null ? _args$groupId2 : '';
          this.name = (_args$name3 = args.name) != null ? _args$name3 : '';
        }

        copyWith(args) {
          var _args$id4, _args$groupid2, _args$name4;

          if (args === void 0) {
            args = {};
          }

          return new SerializableParameterGroups({
            id: (_args$id4 = args.id) != null ? _args$id4 : this.id,
            groupId: (_args$groupid2 = args.groupid) != null ? _args$groupid2 : this.groupId,
            name: (_args$name4 = args.name) != null ? _args$name4 : this.name
          });
        }

        equals(other) {
          return this === other ? true : this.id == other.id && this.groupId == other.groupId && this.name == other.name;
        }

        strictEquals(other) {
          return this === other;
        }
        /**
         * **Required properties**
         * - Id
         * - GroupId
         * - Name
         * @param json
         * @returns
         */


        static instantiateFromJson(json) {
          if (json == null) {
            return undefined;
          }

          var id = asString(json.Id);
          var groupId = asString(json.GroupId);
          var name = asString(json.Name);

          if (id === undefined || groupId === undefined || name === undefined) {
            return undefined;
          }

          return new SerializableParameterGroups({
            id: id,
            groupId: groupId,
            name: name
          });
        }

      });
      /** (struct) */


      _export("SerializableParts", SerializableParts = class SerializableParts {
        constructor(args) {
          var _args$id5, _args$name5;

          if (args === void 0) {
            args = {};
          }

          /** The ID of the part. */
          this.id = void 0;

          /** The Name of the part. */
          this.name = void 0;
          this.id = (_args$id5 = args.id) != null ? _args$id5 : '';
          this.name = (_args$name5 = args.name) != null ? _args$name5 : '';
        }

        copyWith(args) {
          var _args$id6, _args$name6;

          if (args === void 0) {
            args = {};
          }

          return new SerializableParts({
            id: (_args$id6 = args.id) != null ? _args$id6 : this.id,
            name: (_args$name6 = args.name) != null ? _args$name6 : this.name
          });
        }

        equals(other) {
          return this === other ? true : this.id == other.id && this.name == other.name;
        }

        strictEquals(other) {
          return this === other;
        }
        /**
         * **Required properties**
         * - Id
         * - Name
         * @param json
         * @returns
         */


        static instantiateFromJson(json) {
          if (json == null) {
            return undefined;
          }

          var id = asString(json.Id);
          var name = asString(json.Name);

          if (id === undefined || name === undefined) {
            return undefined;
          }

          return new SerializableParts({
            id: id,
            name: name
          });
        }

      });

      (function (_SerializableParameters) {
        var DEFAULT = _SerializableParameters.DEFAULT = new SerializableParameters();
      })(SerializableParameters || _export("SerializableParameters", SerializableParameters = {}));

      (function (_SerializableParameterGroups) {
        var DEFAULT = _SerializableParameterGroups.DEFAULT = new SerializableParameterGroups();
      })(SerializableParameterGroups || _export("SerializableParameterGroups", SerializableParameterGroups = {}));

      (function (_SerializableParts) {
        var DEFAULT = _SerializableParts.DEFAULT = new SerializableParts();
      })(SerializableParts || _export("SerializableParts", SerializableParts = {})); // #endregion


      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=8bf65210d83ebb6574b21521cdb7552d01c77577.js.map
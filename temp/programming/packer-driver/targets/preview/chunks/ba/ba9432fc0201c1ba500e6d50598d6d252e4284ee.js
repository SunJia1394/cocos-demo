System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonParseUtils, CubismPose3Json, asArray, asNumber, asString;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_) {
      JsonParseUtils = _unresolved_.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "1f13aUgMmJDeZg4lGTUQ/gb", "CubismPose3Json", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */
      __checkObsolete__(['JsonAsset', '_decorator']);

      ({
        asArray,
        asNumber,
        asString
      } = JsonParseUtils);
      /**
       * Handles pose from pose3.json.
       *
       * **Sealed class.**
       */

      CubismPose3Json = class CubismPose3Json {
        constructor() {
          //#region Json Data

          /** The type of cubism pose. */
          this.type = '';

          /** [Optional] Time of the Fade-in for easing in seconds.. */
          this.fadeInTime = 0;

          /** Array of Groups. */
          this.groups = null;
        }
        /**
         * Loads a pose3.json.
         * @param pose3Json pose3.json to deserialize.
         * @returns Deserialized pose3.json on success; null otherwise.
         */


        static loadFrom(pose3Json) {
          var json = JsonParseUtils.parse(pose3Json);

          if (!json) {
            return null;
          }

          return CubismPose3Json.loadFromJson(json);
        }
        /**
         * Loads a pose3.json asset.
         * @param pose3JsonAsset pose3.json asset to deserialize.
         * @returns Deserialized pose3.json asset on success; null otherwise.
         */


        static loadFromJsonAsset(pose3JsonAsset) {
          return pose3JsonAsset.json == null ? null : CubismPose3Json.loadFromJson(pose3JsonAsset.json);
        }

        static loadFromJson(json) {
          var _asNumber;

          if (json == null) {
            return null;
          }

          var type = asString(json.Type);
          var groups = CubismPose3Json.parseGroups(json.Groups);

          if (type === undefined || groups == undefined) {
            return null;
          }

          var fadeInTime = (_asNumber = asNumber(json.FadeInTime)) != null ? _asNumber : 0.5;
          var ret = new CubismPose3Json();
          ret.type = type;
          ret.groups = groups;
          ret.fadeInTime = fadeInTime;
          return ret;
        }

        static parseGroups(src) {
          var obj = asArray(src);

          if (obj == null) {
            return undefined;
          }

          var groups = Array(obj.length);

          for (var i = 0; i < groups.length; i++) {
            var group = JsonParseUtils.arrayedInstantiateFromJson(obj[i], CubismPose3Json.SerializablePoseGroup.instantiateFromJson);

            if (group == null) {
              return undefined;
            }

            groups[i] = group;
          }

          return groups;
        } //#endregion


      }; //#region Json Helpers

      (function (_CubismPose3Json) {
        class SerializablePoseGroup {
          constructor(args) {
            var _args$id, _args$link;

            if (args === void 0) {
              args = {};
            }

            /** The part id of group. */
            this.id = '';

            /** The link part ids. */
            this.link = new Array(0);
            this.id = (_args$id = args.id) != null ? _args$id : '';
            this.link = (_args$link = args.link) != null ? _args$link : new Array(0);
          }

          copyWith(args) {
            var _args$id2, _args$link2;

            if (args === void 0) {
              args = {};
            }

            return new SerializablePoseGroup({
              id: (_args$id2 = args.id) != null ? _args$id2 : this.id,
              link: (_args$link2 = args.link) != null ? _args$link2 : this.link
            });
          }

          equals(other) {
            return this === other ? true : this.id == other.id && this.link == other.link;
          }

          strictEquals(other) {
            return this === other;
          }

          static instantiateFromJson(json) {
            var id = asString(json.Id);

            if (id === undefined) {
              return undefined;
            }

            var link = JsonParseUtils.arrayedInstantiateFromJson(json.Link, asString);
            return new SerializablePoseGroup({
              id: id,
              link: link
            });
          }

        }

        _CubismPose3Json.SerializablePoseGroup = SerializablePoseGroup;
      })(CubismPose3Json || (CubismPose3Json = {})); //#endregion


      _export("default", CubismPose3Json);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=ba9432fc0201c1ba500e6d50598d6d252e4284ee.js.map
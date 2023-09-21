System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, JsonParseUtils, CubismExp3Json, _dec, _class2, ccclass, asNumber, asString, SerializableExpressionParameter;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      JsonParseUtils = _unresolved_.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f1f185lqcBBAqkzQsbTAFHm", "CubismExp3Json", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['JsonAsset', '_decorator']);

      ({
        ccclass
      } = _decorator);
      ({
        asNumber,
        asString
      } = JsonParseUtils);
      /**
       * Cubism exp3.json data.
       *
       * **Sealed class.**
       */

      _export("default", CubismExp3Json = class CubismExp3Json {
        constructor() {
          // #region Json Data

          /** Expression Type */
          this.type = '';

          /** Expression FadeInTime */
          this.fadeInTime = 1.0;

          /** Expression FadeOutTime */
          this.fadeOutTime = 1.0;

          /** Expression Parameters */
          this.parameters = new Array(0);
        }
        /**
         * Loads a exp3.json asset.
         * @param exp3Json exp3.json to deserialize.
         * @returns Deserialized exp3.json on success; null otherwise.
         */


        static loadFrom(exp3Json) {
          const json = JsonParseUtils.parse(exp3Json);

          if (!json) {
            return null;
          }

          return this.loadFromJson(json);
        }
        /**
         * Loads a exp3.json asset.
         * @param exp3JsonAsset exp3.json to deserialize.
         * @returns Deserialized exp3.json on success; null otherwise.
         */


        static loadFromJsonAsset(exp3JsonAsset) {
          if (exp3JsonAsset.json != null) {
            return this.loadFromJson(exp3JsonAsset.json);
          }

          return null;
        }
        /**
         * **Required properties**
         * - Type
         * - Parameters
         *
         * **Optional properties**
         * - FadeInTime
         * - FadeOutTime
         * @param json
         * @returns
         */


        static loadFromJson(json) {
          const type = asString(json.Type);
          const parameters = JsonParseUtils.arrayedInstantiateFromJson(json.Parameters, SerializableExpressionParameter.instantiateFromJson);
          const fadeInTime = asNumber(json.FadeInTime);
          const fadeOutTime = asNumber(json.FadeOutTime);

          if (type === undefined || parameters === undefined) {
            return null;
          }

          const result = new CubismExp3Json();
          result.type = type;
          result.parameters = parameters;
          result.fadeInTime = fadeInTime != null ? fadeInTime : 1.0;
          result.fadeOutTime = fadeOutTime != null ? fadeOutTime : 1.0;
          return result;
        } // #endregion


      }); // #region Json Helpers

      /** Expression Parameter (struct) */


      _export("SerializableExpressionParameter", SerializableExpressionParameter = (_dec = ccclass('SerializableExpressionParameter'), _dec(_class2 = class SerializableExpressionParameter {
        constructor(args = {}) {
          var _args$id, _args$value, _args$blend;

          /** Expression Parameter Id */
          this.id = void 0;

          /** Expression Parameter Value */
          this.value = void 0;

          /** Expression Parameter Blend Mode */
          this.blend = void 0;
          this.id = (_args$id = args.id) != null ? _args$id : '';
          this.value = (_args$value = args.value) != null ? _args$value : 0;
          this.blend = (_args$blend = args.blend) != null ? _args$blend : '';
        }

        copyWith(args = {}) {
          var _args$id2, _args$value2, _args$blend2;

          return new SerializableExpressionParameter({
            id: (_args$id2 = args.id) != null ? _args$id2 : this.id,
            value: (_args$value2 = args.value) != null ? _args$value2 : this.value,
            blend: (_args$blend2 = args.blend) != null ? _args$blend2 : this.blend
          });
        }

        equals(other) {
          throw this === other ? true : this.id == other.id && this.value == other.value && this.blend == other.blend;
        }

        strictEquals(other) {
          return this === other;
        }
        /**
         * **Required properties**
         * - Id
         * - Value
         *
         * **Optional properties**
         * - Blend
         * @param json
         * @returns
         */


        static instantiateFromJson(json) {
          const id = asString(json.Id);
          const value = asNumber(json.Value);

          if (id === undefined || value === undefined) {
            return;
          }

          const blend = asString(json.Blend);
          return new SerializableExpressionParameter({
            id: id,
            value: value,
            blend: blend
          });
        }

      }) || _class2));

      (function (_SerializableExpressionParameter) {
        const DEFAULT = _SerializableExpressionParameter.DEFAULT = new SerializableExpressionParameter();
      })(SerializableExpressionParameter || _export("SerializableExpressionParameter", SerializableExpressionParameter = {})); // #endregion


      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=9e509cf928c852f36af041d60cb209feef6da763.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, JsonParseUtils;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "888bdMEmLpK3aU6UG/XjmxD", "JsonParseUtils", undefined);

      (function (_JsonParseUtils) {
        function parse(value) {
          try {
            return JSON.parse(value);
          } catch (_unused) {}

          return null;
        }

        _JsonParseUtils.parse = parse;

        function isBoolean(value) {
          return typeof value == 'boolean';
        }

        _JsonParseUtils.isBoolean = isBoolean;

        function isNumber(value) {
          return typeof value == 'number';
        }

        _JsonParseUtils.isNumber = isNumber;

        function isString(value) {
          return typeof value == 'string';
        }

        _JsonParseUtils.isString = isString;

        function isObject(value) {
          return typeof value == 'object' && value != null;
        }

        _JsonParseUtils.isObject = isObject;

        function asBoolean(value) {
          return isBoolean(value) ? value : undefined;
        }

        _JsonParseUtils.asBoolean = asBoolean;

        function asNumber(value) {
          return isNumber(value) ? value : undefined;
        }

        _JsonParseUtils.asNumber = asNumber;

        function asString(value) {
          return isString(value) ? value : undefined;
        }

        _JsonParseUtils.asString = asString;

        function asObject(value) {
          return isObject(value) ? value : undefined;
        }

        _JsonParseUtils.asObject = asObject;

        function asArray(value) {
          return Array.isArray(value) ? value : undefined;
        }

        _JsonParseUtils.asArray = asArray;

        function getBoolean(obj, key) {
          var value = Reflect.get(obj, key);

          if (isBoolean(value)) {
            return value;
          }

          return undefined;
        }

        _JsonParseUtils.getBoolean = getBoolean;

        function getNumber(obj, key) {
          var value = Reflect.get(obj, key);

          if (isNumber(value)) {
            return value;
          }

          return undefined;
        }

        _JsonParseUtils.getNumber = getNumber;

        function getString(obj, key) {
          var value = Reflect.get(obj, key);

          if (isString(value)) {
            return value;
          }

          return undefined;
        }

        _JsonParseUtils.getString = getString;

        function getObject(obj, key) {
          var value = Reflect.get(obj, key);

          if (isObject(value)) {
            return value;
          }

          return undefined;
        }

        _JsonParseUtils.getObject = getObject;

        function getArray(obj, key) {
          var value = Reflect.get(obj, key);

          if (Array.isArray(value)) {
            return value;
          }

          return undefined;
        }

        _JsonParseUtils.getArray = getArray;

        function arrayedInstantiateFromJson(inData, func) {
          if (!Array.isArray(inData)) {
            return undefined;
          }

          var outData = new Array(inData.length);

          for (var i = 0; i < inData.length; i++) {
            var input = func(inData[i]);

            if (input == null) {
              return undefined;
            }

            outData[i] = input;
          }

          return outData;
        }

        _JsonParseUtils.arrayedInstantiateFromJson = arrayedInstantiateFromJson;
      })(JsonParseUtils || (JsonParseUtils = {}));

      _export("default", JsonParseUtils);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=532a5c709d7215350c0749647ae749cf6adaae34.js.map
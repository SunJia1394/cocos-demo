System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ComponentExtensionMethods, CubismDisplayInfoParameterName, _dec, _class, _crd, CubismParametersInspector;

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDisplayInfoParameterName(extras) {
    _reporterNs.report("CubismDisplayInfoParameterName", "./CubismDisplayInfoParameterName", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      ComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismDisplayInfoParameterName = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7471eDPXypMFbkncpIW4VCX", "CubismParametersInspector", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component']);

      _export("default", CubismParametersInspector = (_dec = _decorator.ccclass('CubismParametersInspector'), _dec(_class = class CubismParametersInspector extends Component {
        /**
         * Editor(Inspector) で 情報を取得するための実装
         * @returns
         */
        getParameters() {
          var cubismModel = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this);

          if (cubismModel == null) {
            console.error('Find CubismModel failed.');
            return null;
          }

          var parametersSource = cubismModel.parameters;

          if (parametersSource == null) {
            console.error('CubismModel.parameters is null.');
            return null;
          }

          var parameters = new Array(parametersSource.length);

          for (var i = 0; i < parametersSource.length; i++) {
            var displayName = void 0;
            var diParamName = parametersSource[i].getComponent(_crd && CubismDisplayInfoParameterName === void 0 ? (_reportPossibleCrUseOfCubismDisplayInfoParameterName({
              error: Error()
            }), CubismDisplayInfoParameterName) : CubismDisplayInfoParameterName);

            if (diParamName != null) {
              displayName = diParamName.displayName;

              if (!displayName) {
                displayName = diParamName.parameterName;
              }
            }

            if (!displayName) {
              displayName = parametersSource[i].id;
            }

            parameters[i] = {
              nodeUuid: parametersSource[i].node.uuid,
              componentUuid: parametersSource[i].uuid,
              id: parametersSource[i].id,
              minimumValue: parametersSource[i].minimumValue,
              maximumValue: parametersSource[i].maximumValue,
              defaultValue: parametersSource[i].defaultValue,
              value: parametersSource[i].value,
              displayName: displayName
            };
          }

          return {
            cubismModel: cubismModel.uuid,
            parameters: parameters
          };
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d31666098029c843297918837b7152b986651afe.js.map
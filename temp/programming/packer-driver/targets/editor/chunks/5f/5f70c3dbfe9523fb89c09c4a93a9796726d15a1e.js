System.register(["cc", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ComponentExtensionMethods, CubismDisplayInfoParameterName, _dec, _class, CubismParametersInspector;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_) {
      ComponentExtensionMethods = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismDisplayInfoParameterName = _unresolved_2.default;
    }],
    execute: function () {
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
          const cubismModel = ComponentExtensionMethods.findCubismModel(this);

          if (cubismModel == null) {
            console.error('Find CubismModel failed.');
            return null;
          }

          const parametersSource = cubismModel.parameters;

          if (parametersSource == null) {
            console.error('CubismModel.parameters is null.');
            return null;
          }

          const parameters = new Array(parametersSource.length);

          for (let i = 0; i < parametersSource.length; i++) {
            let displayName;
            const diParamName = parametersSource[i].getComponent(CubismDisplayInfoParameterName);

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
    }
  };
});
//# sourceMappingURL=5f70c3dbfe9523fb89c09c4a93a9796726d15a1e.js.map
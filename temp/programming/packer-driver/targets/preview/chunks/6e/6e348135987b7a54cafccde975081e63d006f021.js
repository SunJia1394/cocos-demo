System.register(["cc", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ComponentExtensionMethods, CubismDisplayInfoPartName, _dec, _class, CubismPartsInspector;

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
      CubismDisplayInfoPartName = _unresolved_2.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5c2c46mWtNFHrE7MhGjVYTp", "CubismPartsInspector", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component']);

      _export("default", CubismPartsInspector = (_dec = _decorator.ccclass('CubismPartsInspector'), _dec(_class = class CubismPartsInspector extends Component {
        /**
         * Editor(Inspector) で 情報を取得するための実装
         * @returns
         */
        getParts() {
          var cubismModel = ComponentExtensionMethods.findCubismModel(this);

          if (cubismModel == null) {
            console.error('Find CubismModel failed.');
            return null;
          }

          var partsSource = cubismModel.parts;

          if (partsSource == null) {
            console.error('CubismModel.parts is null.');
            return null;
          }

          var parts = new Array(partsSource.length);

          for (var i = 0; i < partsSource.length; i++) {
            var displayName = void 0;
            var diPartName = partsSource[i].getComponent(CubismDisplayInfoPartName);

            if (diPartName != null) {
              displayName = diPartName.displayName;

              if (!displayName) {
                displayName = diPartName.partName;
              }
            }

            if (!displayName) {
              displayName = partsSource[i].id;
            }

            parts[i] = {
              nodeUuid: partsSource[i].node.uuid,
              componentUuid: partsSource[i].uuid,
              id: partsSource[i].id,
              opacity: partsSource[i].opacity,
              displayName: displayName
            };
          }

          return {
            cubismModel: cubismModel.uuid,
            parts: parts
          };
        }

      }) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=6e348135987b7a54cafccde975081e63d006f021.js.map
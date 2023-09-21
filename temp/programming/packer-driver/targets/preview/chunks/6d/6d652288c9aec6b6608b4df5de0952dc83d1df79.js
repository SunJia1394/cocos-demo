System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ComponentExtensionMethods, CubismDisplayInfoPartName, _dec, _class, _crd, CubismPartsInspector;

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDisplayInfoPartName(extras) {
    _reporterNs.report("CubismDisplayInfoPartName", "./CubismDisplayInfoPartName", _context.meta, extras);
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
      CubismDisplayInfoPartName = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

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
          var cubismModel = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this);

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
            var diPartName = partsSource[i].getComponent(_crd && CubismDisplayInfoPartName === void 0 ? (_reportPossibleCrUseOfCubismDisplayInfoPartName({
              error: Error()
            }), CubismDisplayInfoPartName) : CubismDisplayInfoPartName);

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

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d652288c9aec6b6608b4df5de0952dc83d1df79.js.map
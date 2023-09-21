System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, CubismModel, _crd, ComponentExtensionMethods;

  function _reportPossibleCrUseOfCubismModel(extras) {
    _reporterNs.report("CubismModel", "../Core/CubismModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      CubismModel = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa383iCMhZIlKPW+c8CT62l", "ComponentExtensionMethods", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      (function (_ComponentExtensionMethods) {
        function findCubismModel(self, includeParents = false) {
          // Validate arguments.
          if (self == null) {
            return null;
          }

          let model = self.getComponent(_crd && CubismModel === void 0 ? (_reportPossibleCrUseOfCubismModel({
            error: Error()
          }), CubismModel) : CubismModel); // Return model if found.

          if (model != null) {
            return model;
          } // Recursively search in parents if requested.


          if (includeParents) {
            // Scene 内 root node の Node.parent は Scene が入っているためnullにならない。
            for (let current = self.node.parent; current != null && Node.isNode(current); current = current.parent) {
              model = current.getComponent(_crd && CubismModel === void 0 ? (_reportPossibleCrUseOfCubismModel({
                error: Error()
              }), CubismModel) : CubismModel);

              if (model != null) {
                return model;
              }
            }
          } // Signal not found.


          return null;
        }

        _ComponentExtensionMethods.findCubismModel = findCubismModel;
      })(ComponentExtensionMethods || (ComponentExtensionMethods = {}));

      _export("default", ComponentExtensionMethods);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd387f6249ecfdde4a0ffb8d713ebf69fa972c76.js.map
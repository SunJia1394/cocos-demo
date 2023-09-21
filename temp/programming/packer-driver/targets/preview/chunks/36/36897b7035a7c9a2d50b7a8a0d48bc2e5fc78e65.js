System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, CubismModel, ComponentExtensionMethods;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }, function (_unresolved_) {
      CubismModel = _unresolved_.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "fa383iCMhZIlKPW+c8CT62l", "ComponentExtensionMethods", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      (function (_ComponentExtensionMethods) {
        function findCubismModel(self, includeParents) {
          if (includeParents === void 0) {
            includeParents = false;
          }

          // Validate arguments.
          if (self == null) {
            return null;
          }

          var model = self.getComponent(CubismModel); // Return model if found.

          if (model != null) {
            return model;
          } // Recursively search in parents if requested.


          if (includeParents) {
            // Scene 内 root node の Node.parent は Scene が入っているためnullにならない。
            for (var current = self.node.parent; current != null && Node.isNode(current); current = current.parent) {
              model = current.getComponent(CubismModel);

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
    }
  };
});
//# sourceMappingURL=36897b7035a7c9a2d50b7a8a0d48bc2e5fc78e65.js.map
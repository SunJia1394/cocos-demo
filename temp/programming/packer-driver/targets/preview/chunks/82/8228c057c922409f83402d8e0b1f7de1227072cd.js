System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, ObjectExtensionMethods;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f8931HSXuBL3rRLHNftFIsQ", "ObjectExtensionMethods", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /** Extensions for Objects. */
      __checkObsolete__(['Asset', 'CCObject', 'Component', 'Node']);

      (function (_ObjectExtensionMethods) {
        function getInterface(self, isImplementsFunc) {
          if (isImplementsFunc(self)) {
            return self;
          } // Deal with Nodes.


          if (!Node.isNode(self)) {
            return null;
          }

          var node = self;
          var handlers = node.getComponents(Component).filter((value, _index, _array) => isImplementsFunc(value));
          var result = null;

          if (handlers.length > 0) {
            result = handlers[0];
          } // Warn on error.


          if (result == null) {
            console.warn(self + " doesn't expose requested interface of type.");
          }

          return result;
        }

        _ObjectExtensionMethods.getInterface = getInterface;

        function toNullUnlessImplementsInterface(self, isImplementsFunc) {
          var exposesInterface = implementsInterface(self, isImplementsFunc); // Warn on error.

          if (!exposesInterface) {
            console.warn(self + " doesn't expose requested interface of type.");
          }

          return exposesInterface ? self : null;
        }

        _ObjectExtensionMethods.toNullUnlessImplementsInterface = toNullUnlessImplementsInterface;

        function implementsInterface(self, isImplementsFunc) {
          // Return early in case argument matches type.
          if (self == null) {
            return false;
          }

          if (isImplementsFunc(self)) {
            return true;
          } // Search in components in case object is a GameObject.


          if (Node.isNode(self)) {
            var comp = self;

            if (comp != null) {
              return comp.getComponents(Component).some((value, _index, _array) => isImplementsFunc(value));
            }
          } // Return on fail.


          return false;
        }

        _ObjectExtensionMethods.implementsInterface = implementsInterface;
      })(ObjectExtensionMethods || (ObjectExtensionMethods = {}));

      _export("default", ObjectExtensionMethods);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=8228c057c922409f83402d8e0b1f7de1227072cd.js.map
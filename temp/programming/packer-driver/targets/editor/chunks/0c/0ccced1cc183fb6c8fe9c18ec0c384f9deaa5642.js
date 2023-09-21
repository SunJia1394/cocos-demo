System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, ComponentExtensionMethods;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56a64y2cJxDI45XpW7JBWij", "ComponentExtensionMethods", undefined);

      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */
      __checkObsolete__(['Component', '__private']);

      (function (_ComponentExtensionMethods) {
        function getComponentsMany(self, classConstructor) {
          let components = new Array();

          for (let i = 0; i < self.length; i++) {
            const range = self[i].getComponents(classConstructor); // Skip empty ranges.

            if (range.length == 0) {
              continue;
            }

            components = components.concat(range);
          }

          return components;
        }

        _ComponentExtensionMethods.getComponentsMany = getComponentsMany;

        function addComponentEach(self, classConstructor) {
          const components = new Array(self.length);

          for (let i = 0; i < self.length; ++i) {
            components[i] = self[i].node.addComponent(classConstructor);
            console.assert(components[i]);
          }

          return components;
        }

        _ComponentExtensionMethods.addComponentEach = addComponentEach;
      })(ComponentExtensionMethods || (ComponentExtensionMethods = {}));

      _export("default", ComponentExtensionMethods);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ccced1cc183fb6c8fe9c18ec0c384f9deaa5642.js.map
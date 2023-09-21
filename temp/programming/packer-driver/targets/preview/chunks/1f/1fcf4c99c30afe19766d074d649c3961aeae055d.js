System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, ArrayExtensionMethods;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "60df1i8+jVI4Jf37zgsKMr7", "ArrayExtensionMethods", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['math']);

      (function (_ArrayExtensionMethods) {
        function findByIdFromParameters(self, id) {
          for (var i = 0; i < self.length; ++i) {
            if (self[i].id != id) {
              continue;
            }

            return self[i];
          }

          return null;
        }

        _ArrayExtensionMethods.findByIdFromParameters = findByIdFromParameters;

        function reviveParameters(self, model) {
          if (model == null) {
            return;
          }

          self.sort((a, b) => a.unmanagedIndex - b.unmanagedIndex);

          for (var i = 0; i < self.length; ++i) {
            self[i].revive(model);
          }
        }

        _ArrayExtensionMethods.reviveParameters = reviveParameters;

        function writeToModelFromParameters(self, model) {
          // Get address.
          var values = model.parameters.values; // Push.

          for (var i = 0; i < self.length; i++) {
            values[self[i].unmanagedIndex] = self[i].value;
          }
        }

        _ArrayExtensionMethods.writeToModelFromParameters = writeToModelFromParameters;

        function readFromParameters(self, model) {
          var _model$parameters;

          if (((_model$parameters = model.parameters) == null ? void 0 : _model$parameters.values) == null) {
            return;
          } // Get address.


          var values = model.parameters.values; // Pull.

          for (var i = 0; i < self.length; i++) {
            self[i].value = values[self[i].unmanagedIndex];
          }
        }

        _ArrayExtensionMethods.readFromParameters = readFromParameters;

        function findByIdFromParts(self, id) {
          for (var i = 0; i < self.length; ++i) {
            if (self[i].id != id) {
              continue;
            }

            return self[i];
          }

          return null;
        }

        _ArrayExtensionMethods.findByIdFromParts = findByIdFromParts;

        function reviveParts(self, model) {
          if (model == null) {
            return;
          }

          self.sort((a, b) => a.unmanagedIndex - b.unmanagedIndex);

          for (var i = 0; i < self.length; ++i) {
            self[i].revive(model);
          }
        }

        _ArrayExtensionMethods.reviveParts = reviveParts;

        function writeToModelFromParts(self, model) {
          // Get address.
          var opacities = model.parts.opacities; // Push.

          for (var i = 0; i < self.length; i++) {
            opacities[self[i].unmanagedIndex] = self[i].opacity;
          }
        }

        _ArrayExtensionMethods.writeToModelFromParts = writeToModelFromParts;

        function findByIdFromDrawables(self, id) {
          for (var i = 0; i < self.length; ++i) {
            if (self[i].id != id) {
              continue;
            }

            return self[i];
          }

          return null;
        }

        _ArrayExtensionMethods.findByIdFromDrawables = findByIdFromDrawables;

        function reviveDrawables(self, model) {
          if (model == null) {
            return;
          }

          self.sort((a, b) => a.unmanagedIndex - b.unmanagedIndex);

          for (var i = 0; i < self.length; ++i) {
            self[i].revive(model);
          }
        }

        _ArrayExtensionMethods.reviveDrawables = reviveDrawables;

        function readFromArrayCubismDynamicDrawableData(self, unmanagedModel) {
          var drawables = unmanagedModel.drawables;
          var flags = drawables.dynamicFlags;
          var opacities = drawables.opacities;
          var drawOrders = drawables.drawOrders;
          var renderOrders = drawables.renderOrders;
          var vertexPositions = drawables.vertexPositions;
          var multiplyColors = drawables.multiplyColors;
          var screenColors = drawables.screenColors; // Pull data.

          for (var i = 0; i < self.length; i++) {
            var data = self[i];
            data.flags = flags[i];
            data.opacity = opacities[i];
            data.drawOrder = drawOrders[i];
            data.renderOrder = renderOrders[i]; // Read vertex positions only if necessary.

            if (!data.areVertexPositionsDirty) {
              continue;
            } // Copy vertex positions.


            for (var j = 0; j < data.vertexPositions.length; j++) {
              data.vertexPositions[j] = new math.Vec3(vertexPositions[i][j * 2 + 0], vertexPositions[i][j * 2 + 1]);
            }

            if (!data.isBlendColorDirty) {
              continue;
            }

            var rgbaIndex = i * 4;
            data.multiplyColor = new math.Color(multiplyColors[rgbaIndex] * 255, multiplyColors[rgbaIndex + 1] * 255, multiplyColors[rgbaIndex + 2] * 255, multiplyColors[rgbaIndex + 3] * 255);
            data.screenColor = new math.Color(screenColors[rgbaIndex] * 255, screenColors[rgbaIndex + 1] * 255, screenColors[rgbaIndex + 2] * 255, screenColors[rgbaIndex + 3] * 255);
          } // Clear dynamic flags.


          drawables.resetDynamicFlags();
        }

        _ArrayExtensionMethods.readFromArrayCubismDynamicDrawableData = readFromArrayCubismDynamicDrawableData;
      })(ArrayExtensionMethods || (ArrayExtensionMethods = {}));

      _export("default", ArrayExtensionMethods);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=1fcf4c99c30afe19766d074d649c3961aeae055d.js.map
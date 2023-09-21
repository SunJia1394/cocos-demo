System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, _crd, ArrayExtensionMethods;

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDrawable(extras) {
    _reporterNs.report("CubismDrawable", "./CubismDrawable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDynamicDrawableData(extras) {
    _reporterNs.report("CubismDynamicDrawableData", "./CubismDynamicDrawableData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "./CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPart(extras) {
    _reporterNs.report("CubismPart", "./CubismPart", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
    }],
    execute: function () {
      _crd = true;

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
          for (let i = 0; i < self.length; ++i) {
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

          for (let i = 0; i < self.length; ++i) {
            self[i].revive(model);
          }
        }

        _ArrayExtensionMethods.reviveParameters = reviveParameters;

        function writeToModelFromParameters(self, model) {
          // Get address.
          const values = model.parameters.values; // Push.

          for (let i = 0; i < self.length; i++) {
            values[self[i].unmanagedIndex] = self[i].value;
          }
        }

        _ArrayExtensionMethods.writeToModelFromParameters = writeToModelFromParameters;

        function readFromParameters(self, model) {
          var _model$parameters;

          if (((_model$parameters = model.parameters) == null ? void 0 : _model$parameters.values) == null) {
            return;
          } // Get address.


          const values = model.parameters.values; // Pull.

          for (let i = 0; i < self.length; i++) {
            self[i].value = values[self[i].unmanagedIndex];
          }
        }

        _ArrayExtensionMethods.readFromParameters = readFromParameters;

        function findByIdFromParts(self, id) {
          for (let i = 0; i < self.length; ++i) {
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

          for (let i = 0; i < self.length; ++i) {
            self[i].revive(model);
          }
        }

        _ArrayExtensionMethods.reviveParts = reviveParts;

        function writeToModelFromParts(self, model) {
          // Get address.
          const opacities = model.parts.opacities; // Push.

          for (let i = 0; i < self.length; i++) {
            opacities[self[i].unmanagedIndex] = self[i].opacity;
          }
        }

        _ArrayExtensionMethods.writeToModelFromParts = writeToModelFromParts;

        function findByIdFromDrawables(self, id) {
          for (let i = 0; i < self.length; ++i) {
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

          for (let i = 0; i < self.length; ++i) {
            self[i].revive(model);
          }
        }

        _ArrayExtensionMethods.reviveDrawables = reviveDrawables;

        function readFromArrayCubismDynamicDrawableData(self, unmanagedModel) {
          const drawables = unmanagedModel.drawables;
          const flags = drawables.dynamicFlags;
          const opacities = drawables.opacities;
          const drawOrders = drawables.drawOrders;
          const renderOrders = drawables.renderOrders;
          const vertexPositions = drawables.vertexPositions;
          const multiplyColors = drawables.multiplyColors;
          const screenColors = drawables.screenColors; // Pull data.

          for (let i = 0; i < self.length; i++) {
            const data = self[i];
            data.flags = flags[i];
            data.opacity = opacities[i];
            data.drawOrder = drawOrders[i];
            data.renderOrder = renderOrders[i]; // Read vertex positions only if necessary.

            if (!data.areVertexPositionsDirty) {
              continue;
            } // Copy vertex positions.


            for (let j = 0; j < data.vertexPositions.length; j++) {
              data.vertexPositions[j] = new math.Vec3(vertexPositions[i][j * 2 + 0], vertexPositions[i][j * 2 + 1]);
            }

            if (!data.isBlendColorDirty) {
              continue;
            }

            const rgbaIndex = i * 4;
            data.multiplyColor = new math.Color(multiplyColors[rgbaIndex] * 255, multiplyColors[rgbaIndex + 1] * 255, multiplyColors[rgbaIndex + 2] * 255, multiplyColors[rgbaIndex + 3] * 255);
            data.screenColor = new math.Color(screenColors[rgbaIndex] * 255, screenColors[rgbaIndex + 1] * 255, screenColors[rgbaIndex + 2] * 255, screenColors[rgbaIndex + 3] * 255);
          } // Clear dynamic flags.


          drawables.resetDynamicFlags();
        }

        _ArrayExtensionMethods.readFromArrayCubismDynamicDrawableData = readFromArrayCubismDynamicDrawableData;
      })(ArrayExtensionMethods || (ArrayExtensionMethods = {}));

      _export("default", ArrayExtensionMethods);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f80c6fdd26d4cbaf537649fea3a9b35ad80159e9.js.map
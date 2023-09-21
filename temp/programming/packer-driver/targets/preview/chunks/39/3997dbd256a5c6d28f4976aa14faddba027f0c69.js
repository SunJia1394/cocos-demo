System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CubismShaderVariables;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e78e6LLLbBHPpbTJSpLGOmc", "CubismShaderVariables", undefined);

      (function (_CubismShaderVariables) {
        var mainTexture = _CubismShaderVariables.mainTexture = 'mainTexture';
        var modelOpacity = _CubismShaderVariables.modelOpacity = 'cubism_ModelOpacity';
        var maskTexture = _CubismShaderVariables.maskTexture = 'cubism_MaskTexture';
        var maskTile = _CubismShaderVariables.maskTile = 'cubism_MaskTile';
        var maskTransform = _CubismShaderVariables.maskTransform = 'cubism_MaskTransform';
        var multiplyColor = _CubismShaderVariables.multiplyColor = 'multiplyColor';
        var screenColor = _CubismShaderVariables.screenColor = 'screenColor';
      })(CubismShaderVariables || (CubismShaderVariables = {}));

      _export("default", CubismShaderVariables);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3997dbd256a5c6d28f4976aa14faddba027f0c69.js.map
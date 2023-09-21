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
        const mainTexture = _CubismShaderVariables.mainTexture = 'mainTexture';
        const modelOpacity = _CubismShaderVariables.modelOpacity = 'cubism_ModelOpacity';
        const maskTexture = _CubismShaderVariables.maskTexture = 'cubism_MaskTexture';
        const maskTile = _CubismShaderVariables.maskTile = 'cubism_MaskTile';
        const maskTransform = _CubismShaderVariables.maskTransform = 'cubism_MaskTransform';
        const multiplyColor = _CubismShaderVariables.multiplyColor = 'multiplyColor';
        const screenColor = _CubismShaderVariables.screenColor = 'screenColor';
      })(CubismShaderVariables || (CubismShaderVariables = {}));

      _export("default", CubismShaderVariables);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3997dbd256a5c6d28f4976aa14faddba027f0c69.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ComponentExtensionMethods, CubismExpressionController, _dec, _class, _crd, ccclass, property, CubismExpressionPreview;

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismExpressionController(extras) {
    _reporterNs.report("CubismExpressionController", "../../../Framework/Expression/CubismExpressionController", _context.meta, extras);
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
      CubismExpressionController = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b9e0i+o2xCSoYa6MiaU01T", "CubismExpressionPreview", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CubismExpressionPreview = (_dec = ccclass('CubismExpressionPreview'), _dec(_class = class CubismExpressionPreview extends Component {
        constructor() {
          super(...arguments);

          /** ExpressionController to be operated. */
          this._expressionController = null;
        }

        /** Get expression controller. */
        start() {
          var model = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this);

          if (model == null) {
            console.assert(model != null);
            return;
          }

          this._expressionController = model.getComponent(_crd && CubismExpressionController === void 0 ? (_reportPossibleCrUseOfCubismExpressionController({
            error: Error()
          }), CubismExpressionController) : CubismExpressionController);
        }
        /**
         * Change facial expression.
         * @param expressionIndex index of facial expression to set.
         */


        changeExpression(event, customEventData) {
          if (this._expressionController != null) {
            this._expressionController.currentExpressionIndex = Number.parseInt(customEventData);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=295076d01aceeaab1218577ff19c1a7439d5b495.js.map
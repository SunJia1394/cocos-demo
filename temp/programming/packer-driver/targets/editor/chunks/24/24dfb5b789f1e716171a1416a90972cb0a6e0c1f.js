System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ICubismUpdatable, CubismUpdateExecutionOrder, ComponentExtensionMethods, _dec, _class, _crd, ccclass, executeInEditMode, CubismUpdateController;

  function _reportPossibleCrUseOfICubismUpdatable(extras) {
    _reporterNs.report("ICubismUpdatable", "./ICubismUpdatable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateExecutionOrder(extras) {
    _reporterNs.report("CubismUpdateExecutionOrder", "./CubismUpdateExecutionOrder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../Core/ComponentExtensionMethods", _context.meta, extras);
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
      ICubismUpdatable = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismUpdateExecutionOrder = _unresolved_3.default;
    }, function (_unresolved_4) {
      ComponentExtensionMethods = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33421+BTy9KWLHKtaaSDRGh", "CubismUpdateController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        executeInEditMode
      } = _decorator);

      _export("default", CubismUpdateController = (_dec = ccclass('CubismUpdateController'), _dec(_class = executeInEditMode(_class = class CubismUpdateController extends Component {
        constructor(...args) {
          super(...args);
          this._onLateUpdate = [];
        }

        refresh() {
          const model = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this); // Fail silently...

          if (model == null) {
            console.error('CubismUpdateController.refresh(): model is null.');
            return;
          } // Set delegate.


          let components = model.getComponents(Component).filter((value, index, array) => (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).isImplements(value));
          (_crd && CubismUpdateExecutionOrder === void 0 ? (_reportPossibleCrUseOfCubismUpdateExecutionOrder({
            error: Error()
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).sortByExecutionOrder(components); // Set the null value when refreshed UpdateController to avoid duplicated registering.

          this._onLateUpdate = components.map((value, _index, _array) => value.bindedOnLateUpdate);
        }

        start() {
          this.refresh();
        }

        lateUpdate(deltaTime) {
          // Cubism late update.
          this._onLateUpdate.forEach(element => {
            element(deltaTime);
          });
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24dfb5b789f1e716171a1416a90972cb0a6e0c1f.js.map
System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ICubismUpdatable, CubismUpdateExecutionOrder, ComponentExtensionMethods, _dec, _class, ccclass, executeInEditMode, CubismUpdateController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_) {
      ICubismUpdatable = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismUpdateExecutionOrder = _unresolved_2.default;
    }, function (_unresolved_3) {
      ComponentExtensionMethods = _unresolved_3.default;
    }],
    execute: function () {
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
          const model = ComponentExtensionMethods.findCubismModel(this); // Fail silently...

          if (model == null) {
            console.error('CubismUpdateController.refresh(): model is null.');
            return;
          } // Set delegate.


          let components = model.getComponents(Component).filter((value, index, array) => ICubismUpdatable.isImplements(value));
          CubismUpdateExecutionOrder.sortByExecutionOrder(components); // Set the null value when refreshed UpdateController to avoid duplicated registering.

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
    }
  };
});
//# sourceMappingURL=0f8e0e48790facb8607d180a83b7ccb25e6cdd07.js.map
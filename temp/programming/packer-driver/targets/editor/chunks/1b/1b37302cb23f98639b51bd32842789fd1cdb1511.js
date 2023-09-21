System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, ICubismLookTarget, _ICubismLookTarget$SY, _dec, _class, ccclass, CubismLookTargetBehaviour;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      ICubismLookTarget = _unresolved_.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e90f9lG7QxK3Y6khOJ4EjEY", "CubismLookTargetBehaviour", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Component', 'math', '_decorator']);

      ({
        ccclass
      } = _decorator);
      /** Straight-forward {@link ICubismLookTarget} {@link Component}. */

      _export("default", CubismLookTargetBehaviour = (_dec = ccclass('CubismLookTargetBehaviour'), _dec(_class = (_ICubismLookTarget$SY = ICubismLookTarget.SYMBOL, class CubismLookTargetBehaviour extends Component {
        constructor(...args) {
          super(...args);
          this[_ICubismLookTarget$SY] = ICubismLookTarget.SYMBOL;
        }

        //#region Implementation of ICubismLookTarget

        /**
         * Gets the position of the target.
         * @returns The position of the target in world space.
         */
        getPosition() {
          return this.node.worldPosition;
        }
        /**
         * Gets whether the target is active.
         * @returns true if the target is active; false otherwise.
         */


        isActive() {
          return this.enabledInHierarchy;
        } //#endregion


      })) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=1b37302cb23f98639b51bd32842789fd1cdb1511.js.map
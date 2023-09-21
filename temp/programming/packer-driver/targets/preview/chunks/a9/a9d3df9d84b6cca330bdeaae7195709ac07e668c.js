System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, ICubismLookTarget, _SYMBOL, _dec, _class, _crd, ccclass, CubismLookTargetBehaviour;

  function _reportPossibleCrUseOfICubismLookTarget(extras) {
    _reporterNs.report("ICubismLookTarget", "./ICubismLookTarget", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ICubismLookTarget = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

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

      _export("default", CubismLookTargetBehaviour = (_dec = ccclass('CubismLookTargetBehaviour'), _dec(_class = (_SYMBOL = (_crd && ICubismLookTarget === void 0 ? (_reportPossibleCrUseOfICubismLookTarget({
        error: Error()
      }), ICubismLookTarget) : ICubismLookTarget).SYMBOL, class CubismLookTargetBehaviour extends Component {
        constructor() {
          super(...arguments);
          this[_SYMBOL] = (_crd && ICubismLookTarget === void 0 ? (_reportPossibleCrUseOfICubismLookTarget({
            error: Error()
          }), ICubismLookTarget) : ICubismLookTarget).SYMBOL;
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

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9d3df9d84b6cca330bdeaae7195709ac07e668c.js.map
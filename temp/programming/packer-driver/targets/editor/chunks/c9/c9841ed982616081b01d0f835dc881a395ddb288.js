System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CubismTaskQueue, _crd;

  function _reportPossibleCrUseOfICubismTask(extras) {
    _reporterNs.report("ICubismTask", "./ICubismTask", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f042h8xptJ+452UtUzXbDg", "CubismTaskQueue", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */
      //#region Delegates


      //#endregion

      /** TOOD Document. */
      CubismTaskQueue = class CubismTaskQueue {
        constructor() {} // #region Events

        /** Event triggered on new {@link ICubismTask} enqueued. */


        // #endregion

        /**
         * Enqeues a {@link ICubismTask}.
         * @param task
         * @returns
         */
        static enqueue(task) {
          // Execute task idrectly in case enqueueing isn't enabled.
          if (CubismTaskQueue.onTask == null) {
            task.execute();
            return;
          }

          CubismTaskQueue.onTask(task);
        }

      };
      CubismTaskQueue.onTask = null;

      _export("default", CubismTaskQueue);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9841ed982616081b01d0f835dc881a395ddb288.js.map
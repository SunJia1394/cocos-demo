System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CubismTaskQueue;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
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
    }
  };
});
//# sourceMappingURL=d9ef6d6e0c0c0e88d84d15ac1b7ea2dd26303d69.js.map
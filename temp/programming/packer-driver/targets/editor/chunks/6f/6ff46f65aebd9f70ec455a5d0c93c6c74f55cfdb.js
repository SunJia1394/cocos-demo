System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cclegacy, Model, ArrayExtensionMethods, CubismDynamicDrawableData, CubismTaskQueue, CubismTaskableModel, TaskState;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_) {
      Model = _unresolved_.Model;
    }, function (_unresolved_2) {
      ArrayExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismDynamicDrawableData = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismTaskQueue = _unresolved_4.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "6a9632ZhOJOFLTFrO4O7/nl", "CubismTaskableModel", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /**
       * 'Atomic' {@link CubismModel} update task.
       *
       * **Sealed class**
       */
      _export("default", CubismTaskableModel = class CubismTaskableModel {
        // #region Constructor

        /**
         * Initializes instance.
         * @param moc Moc unmanaged model was instantiated from.
         * @param unmanagedModel
         * @param dynamicDrawableData
         */
        static instantiate(moc, unmanagedModel, dynamicDrawableData) {
          return new CubismTaskableModel(moc, unmanagedModel, dynamicDrawableData);
        }

        constructor(moc, unmanagedModel, dynamicDrawableData) {
          // #endregion
          this._unmanagedModel = void 0;
          this._moc = void 0;
          this._dynamicDrawableData = new Array(0);

          /** True if unmanaged model and moc should be released. */
          this._shouldReleaseUnmanaged = void 0;
          // #region Threading
          this._state = TaskState.idle;
          this._moc = moc;
          this._unmanagedModel = unmanagedModel;
          this._dynamicDrawableData = dynamicDrawableData;
          this._shouldReleaseUnmanaged = false;
        } // #endregion
        // #region Factory Methods

        /**
         * Creates a CubismTaskableModel from a CubismMoc.
         * @param moc Moc source.
         * @returns Instance.
         */


        static createTaskableModel(moc) {
          // Instantiate unmanaged model.
          const unmanagedMoc = moc.acquireUnmanagedMoc();
          console.assert(unmanagedMoc != null);
          const unmanagedModel = Model.fromMoc(unmanagedMoc);

          if (unmanagedModel == null) {
            console.error('Model.fromMoc() faileed.');
            return null;
          }

          const dynamicDrawableData = CubismDynamicDrawableData.createData(unmanagedModel);
          return new CubismTaskableModel(moc, unmanagedModel, dynamicDrawableData);
        }

        /**
         * Handle to unmanaged model.
         *
         * CubismUnmanagedModel
         */
        get unmanagedModel() {
          return this._unmanagedModel;
        }

        set unmanagedModel(value) {
          this._unmanagedModel = value;
        }

        /** CubismMoc the model was instantiated from. */
        get moc() {
          return this._moc;
        }

        set moc(value) {
          this._moc = value;
        }

        /** Buffer to write dynamic data to. */
        get dynamicDrawableData() {
          return this._dynamicDrawableData;
        }

        set dynamicDrawableData(value) {
          this._dynamicDrawableData = value;
        }
        /** True if task is currently executing. */


        get isExecuting() {
          return this.state == TaskState.enqueued || this.state == TaskState.executing;
        }
        /** True if did run to completion at least once. */


        get didExecute() {
          return this.state == TaskState.executed;
        }

        get shouldReleaseUnmanaged() {
          return this._shouldReleaseUnmanaged;
        }

        set shouldReleaseUnmanaged(value) {
          this._shouldReleaseUnmanaged = value;
        }
        /**
         * Tries to read parameters into a buffer.
         * @param parameters Buffer to write to.
         * @returns true on success; false otherwise.
         */


        tryReadParameters(parameters) {
          if (this.unmanagedModel == null) {
            console.error('CubismTaskableModel.tryReadParameters(): unmanagedModel is null.');
            return false;
          }

          if (this.state == TaskState.executed) {
            ArrayExtensionMethods.readFromParameters(parameters, this.unmanagedModel);
            return true;
          }

          return false;
        }
        /**
         * Tries to write parameters to a buffer.
         * @param parameters Buffer to read from.
         * @param parts true on success; false otherwise.
         */


        tryWriteParametersAndParts(parameters, parts) {
          if (this.unmanagedModel == null) {
            console.error('CubismTaskableModel.tryWriteParametersAndParts(): unmanagedModel is null.');
            return false;
          } // シングルスレッド調整のため常にtrue
          // if (this.state != TaskState.executing) {


          ArrayExtensionMethods.writeToModelFromParameters(parameters, this.unmanagedModel);
          ArrayExtensionMethods.writeToModelFromParts(parts, this.unmanagedModel);
          return true; // }
          // return false;
        }
        /** Dispatches the task for (maybe async) execution. */


        update() {
          if (this.state == TaskState.enqueued || this.state == TaskState.executing) {
            return;
          } // Update state.


          this.state = TaskState.enqueued;
          CubismTaskQueue.enqueue(this);
        }
        /**
         * Forces the task to run now to completion.
         * @returns
         */


        updateNow() {
          if (this.state == TaskState.enqueued || this.state == TaskState.executing) {
            return false;
          } // Update state.


          this.state = TaskState.enqueued; // Run execution directly.

          this.execute();
          return true;
        }
        /** Releases unmanaged resource. */


        releaseUnmanaged() {
          console.info('CubismTaskableModel.releaseUnmanaged()');
          this.shouldReleaseUnmanaged = true;

          if (this.state == TaskState.enqueued || this.state == TaskState.executing) {
            return;
          }

          this.onReleaseUnmanaged();
          this.shouldReleaseUnmanaged = false;
        }
        /** Runs the task. */


        execute() {
          if (this.unmanagedModel == null) {
            console.error('CubismTaskableModel.unmanagedModel is null.');
            return;
          }

          this.state = TaskState.executing; // Update native backend.

          this.unmanagedModel.update(); // Get results.

          ArrayExtensionMethods.readFromArrayCubismDynamicDrawableData(this._dynamicDrawableData, this.unmanagedModel);
          this.state = TaskState.executed; // Release native if requested.

          if (this.shouldReleaseUnmanaged) {
            this.onReleaseUnmanaged();
          }
        }
        /** Actually releases native resource(s). */


        onReleaseUnmanaged() {
          if (this.unmanagedModel == null) {
            console.warn('CubismTaskableModel.unmanagedModel is null.');
            return;
          }

          this.unmanagedModel.release();
          this.moc.releaseUnmanagedMoc();
          this.unmanagedModel = null;
        }

        /** Internal state. */
        get state() {
          return this._state;
        }

        set state(value) {
          this._state = value;
        } // #endregion


      });
      /** Task states. */


      TaskState = /*#__PURE__*/function (TaskState) {
        TaskState[TaskState["idle"] = 0] = "idle";
        TaskState[TaskState["enqueued"] = 1] = "enqueued";
        TaskState[TaskState["executing"] = 2] = "executing";
        TaskState[TaskState["executed"] = 3] = "executed";
        return TaskState;
      }(TaskState || {});

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=6ff46f65aebd9f70ec455a5d0c93c6c74f55cfdb.js.map
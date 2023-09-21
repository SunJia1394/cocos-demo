System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Model, ArrayExtensionMethods, CubismDynamicDrawableData, CubismTaskQueue, CubismTaskableModel, _crd, TaskState;

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrayExtensionMethods(extras) {
    _reporterNs.report("ArrayExtensionMethods", "./ArrayExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDynamicDrawableData(extras) {
    _reporterNs.report("CubismDynamicDrawableData", "./CubismDynamicDrawableData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismTaskQueue(extras) {
    _reporterNs.report("CubismTaskQueue", "./CubismTaskQueue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMoc(extras) {
    _reporterNs.report("CubismMoc", "./CubismMoc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "./CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPart(extras) {
    _reporterNs.report("CubismPart", "./CubismPart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismTask(extras) {
    _reporterNs.report("ICubismTask", "./ICubismTask", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Model = _unresolved_2.Model;
    }, function (_unresolved_3) {
      ArrayExtensionMethods = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismDynamicDrawableData = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismTaskQueue = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

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
          var unmanagedMoc = moc.acquireUnmanagedMoc();
          console.assert(unmanagedMoc != null);
          var unmanagedModel = (_crd && Model === void 0 ? (_reportPossibleCrUseOfModel({
            error: Error()
          }), Model) : Model).fromMoc(unmanagedMoc);

          if (unmanagedModel == null) {
            console.error('Model.fromMoc() faileed.');
            return null;
          }

          var dynamicDrawableData = (_crd && CubismDynamicDrawableData === void 0 ? (_reportPossibleCrUseOfCubismDynamicDrawableData({
            error: Error()
          }), CubismDynamicDrawableData) : CubismDynamicDrawableData).createData(unmanagedModel);
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
            (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).readFromParameters(parameters, this.unmanagedModel);
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


          (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
            error: Error()
          }), ArrayExtensionMethods) : ArrayExtensionMethods).writeToModelFromParameters(parameters, this.unmanagedModel);
          (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
            error: Error()
          }), ArrayExtensionMethods) : ArrayExtensionMethods).writeToModelFromParts(parts, this.unmanagedModel);
          return true; // }
          // return false;
        }
        /** Dispatches the task for (maybe async) execution. */


        update() {
          if (this.state == TaskState.enqueued || this.state == TaskState.executing) {
            return;
          } // Update state.


          this.state = TaskState.enqueued;
          (_crd && CubismTaskQueue === void 0 ? (_reportPossibleCrUseOfCubismTaskQueue({
            error: Error()
          }), CubismTaskQueue) : CubismTaskQueue).enqueue(this);
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

          (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
            error: Error()
          }), ArrayExtensionMethods) : ArrayExtensionMethods).readFromArrayCubismDynamicDrawableData(this._dynamicDrawableData, this.unmanagedModel);
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

      _crd = false;
    }
  };
});
//# sourceMappingURL=e07d24f314543c7270840fbe6757f6a92432d93e.js.map
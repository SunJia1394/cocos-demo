System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, game, Director, CubismDrawable, CubismParameter, CubismPart, ArrayExtensionMethods, CubismCanvasInformation, CubismParameterStore, CubismTaskableModel, CubismMoc, EDITOR, ModelUpdateFunctions, DynamicDrawableDataEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class3, _class4, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _init, _class5, _crd, ccclass, property, executeInEditMode, CubismModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCubismDrawable(extras) {
    _reporterNs.report("CubismDrawable", "./CubismDrawable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "./CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPart(extras) {
    _reporterNs.report("CubismPart", "./CubismPart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrayExtensionMethods(extras) {
    _reporterNs.report("ArrayExtensionMethods", "./ArrayExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismCanvasInformation(extras) {
    _reporterNs.report("CubismCanvasInformation", "./CubismCanvasInformation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameterStore(extras) {
    _reporterNs.report("CubismParameterStore", "../Framework/CubismParameterStore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismTaskableModel(extras) {
    _reporterNs.report("CubismTaskableModel", "./CubismTaskableModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMoc(extras) {
    _reporterNs.report("CubismMoc", "./CubismMoc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDynamicDrawableData(extras) {
    _reporterNs.report("CubismDynamicDrawableData", "./CubismDynamicDrawableData", _context.meta, extras);
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
      Node = _cc.Node;
      director = _cc.director;
      game = _cc.game;
      Director = _cc.Director;
    }, function (_unresolved_2) {
      CubismDrawable = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismParameter = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismPart = _unresolved_4.default;
    }, function (_unresolved_5) {
      ArrayExtensionMethods = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismCanvasInformation = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismParameterStore = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismTaskableModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismMoc = _unresolved_9.default;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c000q4f7ZLroQv8TE46Apl", "CubismModel", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'game', 'Director']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);
      ModelUpdateFunctions = class ModelUpdateFunctions {
        constructor() {
          this.functions = Array(0);
        }

        add(func) {
          this.functions.push(func);
        }

        remove(func) {
          this.functions = this.functions.filter(value => value != func);
        }

        invoke() {
          for (let i = 0; i < this.functions.length; i++) {
            this.functions[i]();
          }
        }

      }; // TODO: CubismDontMoveOnReimport

      /**
       * Runtime Cubism model.
       *
       * **Sealed class.**
       */

      _export("default", CubismModel = (_dec = ccclass('CubismModel'), _dec2 = property({
        type: _crd && CubismMoc === void 0 ? (_reportPossibleCrUseOfCubismMoc({
          error: Error()
        }), CubismMoc) : CubismMoc,
        serializable: true,
        visible: true
      }), _dec3 = property({
        serializable: false,
        visible: false
      }), _dec4 = property({
        serializable: false,
        visible: false
      }), _dec5 = property({
        serializable: false,
        visible: false
      }), _dec6 = property({
        serializable: false,
        visible: false
      }), _dec7 = property({
        serializable: false,
        visible: false
      }), _dec(_class3 = executeInEditMode(_class3 = (_class4 = (_class5 = class CubismModel extends Component {
        constructor(...args) {
          super(...args);
          // #region Events
          this._onDynamicDrawableData = new DynamicDrawableDataEvent();

          /** Moc backing field. */
          _initializerDefineProperty(this, "_moc", _descriptor, this);

          this._taskableModel = null;

          /** Parameters backing field. */
          _initializerDefineProperty(this, "_parameters", _descriptor2, this);

          /** Parts backing field. */
          _initializerDefineProperty(this, "_parts", _descriptor3, this);

          /** Drawables backing field. */
          _initializerDefineProperty(this, "_drawables", _descriptor4, this);

          /** CanvasInformation backing field. */
          _initializerDefineProperty(this, "_canvasInformation", _descriptor5, this);

          /** Parameter store cache. */
          this._parameterStore = null;
          this.wasAttachedModelUpdateFunction = false;
          this._wasJustEnabled = false;
          this._lastTick = 0;

          /**
           * コールバック登録用 onLoad にて初期化されます。
           * @param sender
           * @param data
           */
          this.bindedOnModelUpdateFunc = this.onModelUpdate.bind(this);
        }

        /** Event triggered if new CubismDynamicDrawableData is available for instance. */
        get onDynamicDrawableData() {
          return this._onDynamicDrawableData;
        } // #endregion
        // #region Factory Methods

        /**
         * Instantiates a CubismMoc.
         * @param moc3 Cubism moc to instantiate.
         * @returns Instance.
         */


        static instantiateFrom(moc) {
          // Create model.
          const node = new Node('Model');
          const modelComp = node.addComponent(CubismModel); // Initialize it by resetting it.

          modelComp.reset(moc);
          return modelComp;
        } // #endregion

        /**
         * Resets a CubismMoc reference in CubismModel.
         * @param model Target Cubism model.
         * @param moc Cubism moc to reset.
         */


        resetMocReference(model, moc) {
          model.moc = moc;
        }

        /** Moc the instance was instantiated from. */
        get moc() {
          return this._moc;
        }

        set moc(value) {
          this._moc = value;
        }

        get taskableModel() {
          return this._taskableModel;
        }

        set taskableModel(value) {
          this._taskableModel = value;
        }

        /** Drawables of model. */
        get parameters() {
          if (this._parameters == null) {
            this.revive();
          }

          return this._parameters;
        }

        set parameters(value) {
          this._parameters = value;
        }

        /** Drawables of model. */
        get parts() {
          if (this._parts == null) {
            this.revive();
          }

          return this._parts;
        }

        set parts(value) {
          this._parts = value;
        }

        /** Drawables of model. */
        get drawables() {
          if (this._drawables == null) {
            this.revive();
          }

          return this._drawables;
        }

        set drawables(value) {
          this._drawables = value;
        }

        /** Canvas information of model. */
        get canvasInformation() {
          if (this._canvasInformation == null) {
            this.revive();
          }

          return this._canvasInformation;
        }

        set canvasInformation(value) {
          this._canvasInformation = value;
        }

        /** True if instance is revived. */
        get isRevived() {
          return this.taskableModel != null;
        }

        get canRevive() {
          return this._moc != null;
        }
        /** Model update functions for player loop. */


        static get modelUpdateFunctions() {
          return this._modelUpdateFunctions;
        }

        /** True on the frame the instance was enabled. */
        get wasJustEnabled() {
          return this._wasJustEnabled;
        }

        set wasJustEnabled(value) {
          this._wasJustEnabled = value;
        }

        /** Frame number last update was done. */
        get lastTick() {
          return this._lastTick;
        }

        set lastTick(value) {
          this._lastTick = value;
        }
        /** Revives instance. */


        revive() {
          // Return if already revive.
          if (this.isRevived) {
            return;
          } // Return if revive isn't possible.


          if (this.moc == null) {
            console.error('CubismModel.revive(): this.moc is null.');
            return;
          }

          const model = (_crd && CubismTaskableModel === void 0 ? (_reportPossibleCrUseOfCubismTaskableModel({
            error: Error()
          }), CubismTaskableModel) : CubismTaskableModel).createTaskableModel(this.moc);

          if (model == null) {
            console.error('CubismModel.revive(): CubismTaskableModel.createTaskableModel() failed.');
            return;
          }

          this.taskableModel = model; // Revive proxies.

          this.parameters = this.getComponentsInChildren(_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
            error: Error()
          }), CubismParameter) : CubismParameter);

          if (this.taskableModel != null) {
            (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).reviveParameters(this.parameters, model.unmanagedModel);
          }

          this.parts = this.getComponentsInChildren(_crd && CubismPart === void 0 ? (_reportPossibleCrUseOfCubismPart({
            error: Error()
          }), CubismPart) : CubismPart);

          if (this.taskableModel != null) {
            (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).reviveParts(this.parts, model.unmanagedModel);
          } // Editor Only, For operation from inspector.


          if (EDITOR) {
            if (this.taskableModel != null) {
              this.parameters.forEach(e => {
                Reflect.set(e, '_model', this);
              });
              this.parts.forEach(e => {
                Reflect.set(e, '_model', this);
              });
            }
          }

          this.drawables = this.getComponentsInChildren(_crd && CubismDrawable === void 0 ? (_reportPossibleCrUseOfCubismDrawable({
            error: Error()
          }), CubismDrawable) : CubismDrawable);

          if (this.taskableModel != null) {
            (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).reviveDrawables(this.drawables, model.unmanagedModel);
          }

          if (model.unmanagedModel == null) {
            console.error('CubismModel.revive(): this.taskableModel.unmanagedModel is null.');
            return;
          }

          this.canvasInformation = (_crd && CubismCanvasInformation === void 0 ? (_reportPossibleCrUseOfCubismCanvasInformation({
            error: Error()
          }), CubismCanvasInformation) : CubismCanvasInformation).instantiate(model.unmanagedModel);
          this._parameterStore = this.getComponent(_crd && CubismParameterStore === void 0 ? (_reportPossibleCrUseOfCubismParameterStore({
            error: Error()
          }), CubismParameterStore) : CubismParameterStore);
        }
        /**
         * Initializes instance for first use.
         * @param moc Moc to instantiate from.
         */


        reset(moc) {
          this.moc = moc;
          this.name = moc.name;
          this.taskableModel = (_crd && CubismTaskableModel === void 0 ? (_reportPossibleCrUseOfCubismTaskableModel({
            error: Error()
          }), CubismTaskableModel) : CubismTaskableModel).createTaskableModel(moc);

          if (this.taskableModel == null) {
            console.error('CubismModel.reset(): CubismTaskableModel.createTaskableModel() failed.');
            return;
          }

          console.assert(this.taskableModel.unmanagedModel != null);
          const unmanagedModel = this.taskableModel.unmanagedModel; // Create and initialize proxies.

          const parameters = (_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
            error: Error()
          }), CubismParameter) : CubismParameter).createParameters(unmanagedModel);
          const parts = (_crd && CubismPart === void 0 ? (_reportPossibleCrUseOfCubismPart({
            error: Error()
          }), CubismPart) : CubismPart).createParts(unmanagedModel);
          const drawables = (_crd && CubismDrawable === void 0 ? (_reportPossibleCrUseOfCubismDrawable({
            error: Error()
          }), CubismDrawable) : CubismDrawable).createDrawables(unmanagedModel);
          this.node.addChild(parameters);
          this.node.addChild(parts);
          this.node.addChild(drawables);
          this.parameters = parameters.getComponentsInChildren(_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
            error: Error()
          }), CubismParameter) : CubismParameter);
          this.parts = parts.getComponentsInChildren(_crd && CubismPart === void 0 ? (_reportPossibleCrUseOfCubismPart({
            error: Error()
          }), CubismPart) : CubismPart);
          this.drawables = drawables.getComponentsInChildren(_crd && CubismDrawable === void 0 ? (_reportPossibleCrUseOfCubismDrawable({
            error: Error()
          }), CubismDrawable) : CubismDrawable);
          this.canvasInformation = (_crd && CubismCanvasInformation === void 0 ? (_reportPossibleCrUseOfCubismCanvasInformation({
            error: Error()
          }), CubismCanvasInformation) : CubismCanvasInformation).instantiate(unmanagedModel);
        }
        /** Forces update. */


        forceUpdateNow() {
          this.wasJustEnabled = true;
          this.lastTick = -1;
          this.revive();
          this.onModelUpdate();
        }
        /** Calls model update functions for player loop. */


        static onModelsUpdate() {
          if (CubismModel._modelUpdateFunctions != null) {
            CubismModel._modelUpdateFunctions.invoke();
          }
        }
        /**
         * Register the model update function into the player loop.
         *
         * Unity における PreLateUpdate の位置で実行できるイベントがないため
         * Unity における onRenderObject と同程度の実行タイミング {@link Director.EVENT_AFTER_DRAW} で
         * {@link CubismModel.onModelsUpdate} が実行されるよう実装
         */


        static registerCallbackFunction() {
          // Prepare the function for using player loop.
          director.off(Director.EVENT_AFTER_DRAW, CubismModel.onModelsUpdate);
          director.on(Director.EVENT_AFTER_DRAW, CubismModel.onModelsUpdate);
        }
        /**
         * Called by Cocos Creator. Triggers this to update.
         * @param deltaTime
         */


        update(deltaTime) {
          if (!this.wasAttachedModelUpdateFunction) {
            CubismModel._modelUpdateFunctions.add(this.bindedOnModelUpdateFunc);

            this.wasAttachedModelUpdateFunction = true;
          } // Return on first frame enabled.


          if (this.wasJustEnabled) {
            return;
          } // Return unless revived.


          if (!this.isRevived) {
            return;
          }

          if (this.taskableModel == null) {
            console.error('CubismModel.update(): this.taskableModel is null.');
            return;
          }

          if (this.parameters == null) {
            console.error('CubismModel.update(): this.parameters is null.');
            return;
          } // Return if backend is ticking.


          if (!this.taskableModel.didExecute) {
            return;
          } // Sync parameters back.


          this.taskableModel.tryReadParameters(this.parameters); // restore last frame parameters value and parts opacity.

          if (this._parameterStore != null) {
            this._parameterStore.restoreParameters();
          } // Trigger event.


          if (this.onDynamicDrawableData == null) {
            return;
          }

          this._onDynamicDrawableData.invoke(this, this.taskableModel.dynamicDrawableData);
        }
        /** Update model states. */


        onModelUpdate() {
          // Return unless revived.
          if (!this.isRevived) {
            return;
          } // Return if already ticked this frame.


          const frameCount = director.getTotalFrames();

          if (this.lastTick == frameCount
          /* && Application.isPlaying*/
          ) {
            return;
          }

          this.lastTick = frameCount;

          if (this.taskableModel == null) {
            console.warn('CubismModel.taskableModel is null.');
            return;
          }

          if (this.parameters == null) {
            console.error('CubismModel.update(): this.parameters is null.');
            return;
          }

          if (this.parts == null) {
            console.error('CubismModel.update(): this.parts is null.');
            return;
          } // Try to sync parameters and parts (without caring whether task is executing or not).


          this.taskableModel.tryWriteParametersAndParts(this.parameters, this.parts); // Return if task is executing.
          // シングルスレッド調整のため常にfalse
          // if (this.taskableModel.isExecuting) {
          //   return;
          // }
          // Force blocking update on first frame enabled.

          if (this.wasJustEnabled) {
            // Force sync update.
            this.taskableModel.updateNow(); // Unset condition.

            this.wasJustEnabled = false; // Fetch results by calling own 'Update()'.

            this.update(game.deltaTime);
            return;
          } // Enqueue update task.


          this.taskableModel.update();
        }
        /** Called by Cocos Creator. Revives instance. */


        onEnable() {
          this.wasJustEnabled = true;
          this.revive();
        }

        onDisable() {
          if (this.wasAttachedModelUpdateFunction) {
            CubismModel.modelUpdateFunctions.remove(this.bindedOnModelUpdateFunc);
            this.wasAttachedModelUpdateFunction = false;
          }
        }
        /** Called by Cocos Creator. Releases unmanaged memory. */


        onDestroy() {
          if (!this.isRevived) {
            return;
          }

          this.taskableModel = null;
        }
        /** Called by Cocos Creator. Triggers onEnable. */


        onValidate() {
          this.onEnable();
        }

      }, _class5._modelUpdateFunctions = new ModelUpdateFunctions(), _class5), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, "_moc", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class4.prototype, "_parameters", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class4.prototype, "_parts", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class4.prototype, "_drawables", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class4.prototype, "_canvasInformation", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class4, "_modelUpdateFunctions", [_dec7], (_init = Object.getOwnPropertyDescriptor(_class4, "_modelUpdateFunctions"), _init = _init ? _init.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function () {
          return _init;
        }
      }), _class4)), _class4)) || _class3) || _class3));

      DynamicDrawableDataEvent = class DynamicDrawableDataEvent {
        constructor() {
          this.functions = Array(0);
        }

        add(func) {
          this.functions.push(func);
        }

        remove(func) {
          this.functions = this.functions.filter(value => value != func);
        }

        invoke(sender, data) {
          for (let i = 0; i < this.functions.length; i++) {
            this.functions[i](sender, data);
          }
        }

      };
      CubismModel.registerCallbackFunction();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=30b36525796c4a014cfdb32deb2680fc6b8eaff0.js.map
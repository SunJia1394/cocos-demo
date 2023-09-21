System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, BufferAsset, CCInteger, JsonAsset, path, resources, Texture2D, _decorator, CubismMoc, CubismModel, CubismRenderController, CubismMaskController, ArrayExtensions, isNullOrEmpty, CubismDisplayInfoParameterName, CubismDisplayInfoPartName, CubismEyeBlinkController, CubismEyeBlinkParameter, CubismHitDrawable, CubismParameterStore, CubismUpdateController, CubismExpressionController, CubismFadeController, CubismMouthController, CubismMouthParameter, CubismPhysicsController, CubismPoseController, CubismRaycastable, CubismUserDataTag, CubismUserDataTargetType, CubismDisplayInfo3Json, CubismExp3Json, CubismPhysics3Json, CubismPose3Json, CubismUserData3Json, CubismBuiltinPickers, JsonParseUtils, CubismParametersInspector, CubismPartsInspector, CubismPosePart, ArrayExtensionMethods, EDITOR, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, property, CubismModel3Json, CubismModelNodeGenerator, Internal;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  _export("CubismModelNodeGenerator", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      animation = _cc.animation;
      BufferAsset = _cc.BufferAsset;
      CCInteger = _cc.CCInteger;
      JsonAsset = _cc.JsonAsset;
      path = _cc.path;
      resources = _cc.resources;
      Texture2D = _cc.Texture2D;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismMoc = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismRenderController = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismMaskController = _unresolved_4.default;
    }, function (_unresolved_5) {
      ArrayExtensions = _unresolved_5.ArrayExtensions;
      isNullOrEmpty = _unresolved_5.isNullOrEmpty;
    }, function (_unresolved_6) {
      CubismDisplayInfoParameterName = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismDisplayInfoPartName = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismEyeBlinkController = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismEyeBlinkParameter = _unresolved_9.default;
    }, function (_unresolved_10) {
      CubismHitDrawable = _unresolved_10.default;
    }, function (_unresolved_11) {
      CubismParameterStore = _unresolved_11.default;
    }, function (_unresolved_12) {
      CubismUpdateController = _unresolved_12.default;
    }, function (_unresolved_13) {
      CubismExpressionController = _unresolved_13.default;
    }, function (_unresolved_14) {
      CubismFadeController = _unresolved_14.default;
    }, function (_unresolved_15) {
      CubismMouthController = _unresolved_15.default;
    }, function (_unresolved_16) {
      CubismMouthParameter = _unresolved_16.default;
    }, function (_unresolved_17) {
      CubismPhysicsController = _unresolved_17.default;
    }, function (_unresolved_18) {
      CubismPoseController = _unresolved_18.default;
    }, function (_unresolved_19) {
      CubismRaycastable = _unresolved_19.default;
    }, function (_unresolved_20) {
      CubismUserDataTag = _unresolved_20.default;
    }, function (_unresolved_21) {
      CubismUserDataTargetType = _unresolved_21.default;
    }, function (_unresolved_22) {
      CubismDisplayInfo3Json = _unresolved_22.default;
    }, function (_unresolved_23) {
      CubismExp3Json = _unresolved_23.default;
    }, function (_unresolved_24) {
      CubismPhysics3Json = _unresolved_24.default;
    }, function (_unresolved_25) {
      CubismPose3Json = _unresolved_25.default;
    }, function (_unresolved_26) {
      CubismUserData3Json = _unresolved_26.default;
    }, function (_unresolved_27) {
      CubismBuiltinPickers = _unresolved_27.default;
    }, function (_unresolved_28) {
      JsonParseUtils = _unresolved_28.default;
    }, function (_unresolved_29) {
      CubismParametersInspector = _unresolved_29.default;
    }, function (_unresolved_30) {
      CubismPartsInspector = _unresolved_30.default;
    }, function (_unresolved_31) {
      CubismPosePart = _unresolved_31.default;
    }, function (_unresolved_32) {
      ArrayExtensionMethods = _unresolved_32.default;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "930c2vGv29PALBF0voMGMxr", "CubismModel3Json", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['animation', 'Asset', 'BufferAsset', 'CCInteger', 'JsonAsset', 'Material', 'path', 'resources', 'Texture2D', '_decorator']);

      ({
        property
      } = _decorator); //#region Delegates

      //#endregion

      /**
       * Exposes moc3.json asset data.
       *
       * **Sealed class.**
       */
      CubismModel3Json = (_dec = property({
        type: CCInteger,
        serializable: true,
        visible: true
      }), _dec2 = property({
        serializable: true
      }), _dec3 = property({
        serializable: true
      }), _dec4 = property({
        serializable: true
      }), _dec5 = property({
        serializable: false
      }), _dec6 = property({
        serializable: false
      }), _dec7 = property({
        serializable: false
      }), (_class = class CubismModel3Json {
        /** Makes construction only possible through factories. */
        constructor() {
          // #endregion
          this._assetPath = null;
          this._loadAssetAtPath = null;

          // #region Json Data

          /** The motion3.json format version. */
          _initializerDefineProperty(this, "version", _descriptor, this);

          /** The file references. */
          _initializerDefineProperty(this, "fileReferences", _descriptor2, this);

          /** Groups. */
          _initializerDefineProperty(this, "groups", _descriptor3, this);

          /** Hit areas. */
          _initializerDefineProperty(this, "hitAreas", _descriptor4, this);

          /** CubismPose3Json backing field. */
          _initializerDefineProperty(this, "_pose3Json", _descriptor5, this);

          /** Expression3Jsons backing field. */
          _initializerDefineProperty(this, "_expression3Jsons", _descriptor6, this);

          /** Textures backing field. */
          _initializerDefineProperty(this, "_textures", _descriptor7, this);
        } // #region Load Methods

        /**
         * Loads a model.json asset.
         * @param assetPath The path to the asset.
         * @param loadAssetAtPath Handler for loading assets.
         * @param loadBufferAssetAtPath Handler for loading assets.
         * @returns The CubismModel3Json on success; null otherwise.
         */


        static async loadAtPath(assetPath, loadAssetAtPath) {
          var _loadAssetAtPath;

          (_loadAssetAtPath = loadAssetAtPath) != null ? _loadAssetAtPath : loadAssetAtPath = CubismModel3Json.builtinAssetAtPath; // Load Json asset.

          let modelJsonAsset = await loadAssetAtPath(assetPath, JsonAsset); // Return early in case Json asset wasn't loaded.

          if (modelJsonAsset == null || modelJsonAsset.json == null) {
            return null;
          }

          const model3 = CubismModel3Json.loadFromJson(modelJsonAsset.json);

          if (model3 == null) {
            return null;
          }

          model3.assetPath = assetPath;
          model3._loadAssetAtPath = loadAssetAtPath;
          return model3;
        }
        /**
         * **Required properties**
         * Version
         * FileReferences
         *
         * **Optional properties**
         * Groups
         * HitAreas
         * Layout
         * @param json
         * @returns
         */


        static loadFromJson(json) {
          var _SerializableFileRefe;

          const errorMessage = 'CubismModel3Json.loadFromJson(): json parsing error.';
          const {
            SerializableFileReferences,
            SerializableGroup,
            SerializableHitArea
          } = CubismModel3Json;
          const version = JsonParseUtils.getNumber(json, 'Version');
          const tempfileReferences = JsonParseUtils.getObject(json, 'FileReferences');

          if (version === undefined || tempfileReferences === undefined) {
            console.error(errorMessage);
            return null;
          }

          const fileReferences = (_SerializableFileRefe = SerializableFileReferences.instantiateFromJson(tempfileReferences)) != null ? _SerializableFileRefe : undefined;

          if (fileReferences === undefined) {
            console.error(errorMessage);
            return null;
          }

          const tempGroups = JsonParseUtils.getArray(json, 'Groups');
          const tempHitAreas = JsonParseUtils.getArray(json, 'HitAreas');
          const model3Json = new CubismModel3Json();
          model3Json.version = version;
          model3Json.fileReferences = fileReferences;

          function purse(inData, func) {
            var _JsonParseUtils$array;

            return inData !== undefined ? (_JsonParseUtils$array = JsonParseUtils.arrayedInstantiateFromJson(inData, func)) != null ? _JsonParseUtils$array : new Array(0) : new Array(0);
          }

          model3Json.groups = purse(tempGroups, SerializableGroup.instantiateFromJson);
          model3Json.hitAreas = purse(tempHitAreas, SerializableHitArea.instantiateFromJson);
          return model3Json;
        }

        /** Path to this. */
        get assetPath() {
          return this._assetPath;
        }

        set assetPath(value) {
          this._assetPath = value;
        }

        /** Method for loading assets. */
        async loadAssetAtPath(assetPath, constructor) {
          if (this._loadAssetAtPath == null) {
            return Promise.reject(null);
          }

          return this._loadAssetAtPath(assetPath, constructor);
        }

        setLoadAssetAtPath(value) {
          this._loadAssetAtPath = value;
        }

        // #endregion

        /**
         * The contents of the referenced moc3 asset.
         *
         * The contents isn't cached internally.
         */
        async getMoc3() {
          return this.fileReferences.moc != null ? await this.loadArrayBuffer(this.fileReferences.moc) : null;
        }

        /** The contents of pose3.json asset. */
        async getPose3Json() {
          if (this._pose3Json != null) {
            return this._pose3Json;
          }

          const json = this.fileReferences.pose.length == 0 ? null : await this.loadJson(this.fileReferences.pose);
          this._pose3Json = json != null ? CubismPose3Json.loadFromJson(json) : null;
          return this._pose3Json;
        }

        /**
         * The referenced expression assets.
         *
         * The references aren't cached internally.
         */
        async getExpression3Jsons() {
          // Load expression only if necessary.
          if (this._expression3Jsons == null) {
            this._expression3Jsons = new Array(this.fileReferences.expressions.length);

            for (let i = 0; i < this._expression3Jsons.length; i++) {
              let expressionJson = this.fileReferences.expressions[i].file.length == 0 ? null : await this.loadJson(this.fileReferences.expressions[i].file);
              this._expression3Jsons[i] = expressionJson != null ? CubismExp3Json.loadFromJson(expressionJson) : null;
            }
          }

          return this._expression3Jsons;
        }
        /** The contents of physics3.json asset. */


        async getPhysics3Json() {
          return isNullOrEmpty(this.fileReferences.physics) ? null : await this.loadJson(this.fileReferences.physics);
        }

        async getUserData3Json() {
          return isNullOrEmpty(this.fileReferences.userData) ? null : await this.loadJson(this.fileReferences.userData);
        }
        /** The contents of cdi3.json asset. */


        async getDisplayInfo3Json() {
          return isNullOrEmpty(this.fileReferences.displayInfo) ? null : await this.loadJson(this.fileReferences.displayInfo);
        }

        /**
         * The referenced texture assets.
         *
         * The references aren't cached internally.
         */
        async getTexture(index) {
          var _this$_textures, _this$_textures$index;

          // Load textures only if necessary.
          if (this._textures == null) {
            this._textures = new Array(this.fileReferences.textures.length);

            for (let i = 0; i < this._textures.length; i++) {
              this._textures[i] = null;
            }
          }

          (_this$_textures$index = (_this$_textures = this._textures)[index]) != null ? _this$_textures$index : _this$_textures[index] = await this.loadTexture(this.fileReferences.textures[index]);
          return this._textures[index];
        }
        /**
         * Instantiates a model source and a model.
         * @param pickMaterial The material mapper to use.
         * @param pickTexture The texture mapper to use.
         * @param shouldImportAsOriginalWorkflow Should import as original workflow.
         * @returns The instantiated model on success; null otherwise.
         */


        async toModel(args = {}) {
          var _args$shouldImportAsO, _args$pickMaterial, _args$pickTexture;

          const shouldImportAsOriginalWorkflow = (_args$shouldImportAsO = args.shouldImportAsOriginalWorkflow) != null ? _args$shouldImportAsO : false;
          const pickMaterial = (_args$pickMaterial = args.pickMaterial) != null ? _args$pickMaterial : CubismBuiltinPickers.materialPicker;
          const pickTexture = (_args$pickTexture = args.pickTexture) != null ? _args$pickTexture : CubismBuiltinPickers.texturePicker; // Initialize model source and instantiate it.

          const mocAsBytes = await this.getMoc3();

          if (mocAsBytes == null) {
            return null;
          }

          const moc = CubismMoc.createFrom(mocAsBytes); //Load from cdi3.json

          const displayInfo3Json = await this.getDisplayInfo3Json(); // Initialize physics if JSON exists.

          const physics3Json = await this.getPhysics3Json();
          const userData3Json = await this.getUserData3Json();
          return CubismModelNodeGenerator.generateModel({
            model3Json: this,
            moc: moc,
            materialPicker: pickMaterial,
            texturePicker: pickTexture,
            displayInfo3Json: displayInfo3Json,
            physics3Json: physics3Json,
            userData3Json: userData3Json,
            shouldImportAsOriginalWorkflow: shouldImportAsOriginalWorkflow
          });
        } // #region Helper Methods

        /**
         * Type-safely loads an asset.
         *
         * @param referencedFile Path to asset.
         * @returns The asset on success; null otherwise.
         */


        async loadJson(referencedFile) {
          if (this.assetPath != null) {
            var _asset$json;

            const assetPath = path.dirname(this.assetPath) + '/' + referencedFile;
            const asset = await this.loadAssetAtPath(assetPath, JsonAsset);
            return (_asset$json = asset == null ? void 0 : asset.json) != null ? _asset$json : null;
          }

          return null;
        }
        /**
         * Type-safely loads an asset.
         *
         * @param referencedFile Path to asset.
         * @returns The asset on success; null otherwise.
         */


        async loadArrayBuffer(referencedFile) {
          if (this.assetPath != null) {
            var _await$this$loadAsset, _await$this$loadAsset2;

            const assetPath = path.dirname(this.assetPath) + '/' + referencedFile;
            return (_await$this$loadAsset = (_await$this$loadAsset2 = await this.loadAssetAtPath(assetPath, BufferAsset)) == null ? void 0 : _await$this$loadAsset2.buffer()) != null ? _await$this$loadAsset : null;
          }

          return null;
        }
        /**
         * Type-safely loads an asset.
         *
         * @param referencedFile Path to asset.
         * @returns The asset on success; null otherwise.
         */


        async loadTexture(referencedFile) {
          if (this.assetPath != null) {
            const assetPath = path.dirname(this.assetPath) + '/' + referencedFile;
            return this.loadAssetAtPath(assetPath, Texture2D);
          }

          return null;
        }
        /**
         * Builtin method for loading assets.
         * @param assetPath Path to asset.
         * @returns The asset on success; null otherwise.
         */


        static builtinAssetAtPath(assetPath, constructor) {
          const ext = path.extname(assetPath);
          assetPath = assetPath.substring(0, assetPath.length - ext.length);

          if (constructor == Texture2D) {
            assetPath = path.join(assetPath, 'texture');
          } // Explicitly deal with byte arrays.


          const promise = new Promise((resolve, reject) => {
            resources.load(assetPath, constructor, (error, asset) => {
              if (error != null) {
                reject(null);
              } else {
                resolve(asset);
              }
            });
          });
          return promise;
        }
        /**
         * Checks whether the parameter is an eye blink parameter.
         *
         * (forUnity private method)
         * @param parameter Parameter to check.
         * @param groupName Name of group to query for.
         * @returns true if parameter is an eye blink parameter; false otherwise.
         */


        isParameterInGroup(parameter, groupName) {
          // Return early if groups aren't available...
          if (this.groups == null || this.groups.length == 0) {
            return false;
          }

          for (let i = 0; i < this.groups.length; i++) {
            const group = this.groups[i];

            if (group.name != groupName) {
              continue;
            }

            if (group.ids != null) {
              const ids = group.ids;

              for (let j = 0; j < ids.length; j++) {
                if (ids[j] == parameter.node.name) {
                  return true;
                }
              }
            }
          }

          return false;
        }
        /**
         * Get body index from body array by Id.
         *
         * (forUnity private method)
         * @param bodies Target body array.
         * @param id Id for find.
         * @returns Array index if Id found; -1 otherwise.
         */


        getBodyIndexById(bodies, id) {
          for (let i = 0; i < bodies.length; i++) {
            if (bodies[i].id == id) {
              return i;
            }
          }

          return -1;
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "version", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "fileReferences", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new CubismModel3Json.SerializableFileReferences();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "groups", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array(0);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "hitAreas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array(0);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "_pose3Json", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "_expression3Jsons", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "_textures", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class)); // #region Json Helpers

      (function (_CubismModel3Json) {
        class SerializableFileReferences {
          constructor(args = {}) {
            var _args$moc, _args$textures, _args$pose, _args$expressions, _args$motions, _args$physics, _args$userData, _args$displayInfo;

            /** Relative path to the moc3 asset. */
            this.moc = void 0;

            /** Relative paths to texture assets. */
            this.textures = void 0;

            /** Relative path to the pose3.json. */
            this.pose = void 0;

            /** Relative path to the expression asset. */
            this.expressions = void 0;

            /** Relative path to the pose motion3.json. */
            this.motions = void 0;

            /** Relative path to the physics asset. */
            this.physics = void 0;

            /** Relative path to the user data asset. */
            this.userData = void 0;

            /** Relative path to the cdi3.json. */
            this.displayInfo = void 0;
            this.moc = (_args$moc = args.moc) != null ? _args$moc : '';
            this.textures = (_args$textures = args.textures) != null ? _args$textures : new Array();
            this.pose = (_args$pose = args.pose) != null ? _args$pose : '';
            this.expressions = (_args$expressions = args.expressions) != null ? _args$expressions : new Array();
            this.motions = (_args$motions = args.motions) != null ? _args$motions : SerializableMotions.DEFAULT;
            this.physics = (_args$physics = args.physics) != null ? _args$physics : '';
            this.userData = (_args$userData = args.userData) != null ? _args$userData : '';
            this.displayInfo = (_args$displayInfo = args.displayInfo) != null ? _args$displayInfo : '';
          }

          copyWith(args = {}) {
            var _args$moc2, _args$textures2, _args$pose2, _args$expressions2, _args$motions2, _args$physics2, _args$userData2, _args$displayInfo2;

            return new SerializableFileReferences({
              moc: (_args$moc2 = args.moc) != null ? _args$moc2 : this.moc,
              textures: (_args$textures2 = args.textures) != null ? _args$textures2 : this.textures,
              pose: (_args$pose2 = args.pose) != null ? _args$pose2 : this.pose,
              expressions: (_args$expressions2 = args.expressions) != null ? _args$expressions2 : this.expressions,
              motions: (_args$motions2 = args.motions) != null ? _args$motions2 : this.motions,
              physics: (_args$physics2 = args.physics) != null ? _args$physics2 : this.physics,
              userData: (_args$userData2 = args.userData) != null ? _args$userData2 : this.userData,
              displayInfo: (_args$displayInfo2 = args.displayInfo) != null ? _args$displayInfo2 : this.displayInfo
            });
          }

          equals(other) {
            return this === other ? true : this.moc == other.moc && ArrayExtensions.isEquals((x, y) => x == y, this.textures, other.textures) && this.pose == other.pose && ArrayExtensions.isEquals(SerializableExpression.isEquals, this.expressions, other.expressions) && this.motions == other.motions && this.physics == other.physics && this.userData == other.userData && this.displayInfo == other.displayInfo;
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           * **Required properties**
           * - Moc
           * - Textures
           *
           * **Optional properties**
           * - Pose
           * - Expressions
           * - Motions
           * - Physics
           * - UserData
           * - DisplayInfo
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            var _SerializableExpressi, _SerializableMotions$;

            const moc = JsonParseUtils.getString(json, 'Moc');
            const textures = JsonParseUtils.getArray(json, 'Textures');

            if (moc === undefined || textures === undefined) {
              console.error('SerializableFileReferences.instantiateFromJson(): json parsing error.');
              return null;
            }

            if (!textures.every((value, i, arr) => JsonParseUtils.isString(value))) {
              console.error('SerializableFileReferences.instantiateFromJson(): json parsing error.');
              return null;
            }

            const pose = JsonParseUtils.getString(json, 'Pose');
            const tempExp = JsonParseUtils.getArray(json, 'Expressions');
            const expressions = tempExp !== undefined ? (_SerializableExpressi = SerializableExpressions.instantiateFromJson(tempExp)) != null ? _SerializableExpressi : undefined : undefined;
            const tempMotions = JsonParseUtils.getObject(json, 'Motions');
            const motions = tempMotions !== undefined ? (_SerializableMotions$ = SerializableMotions.instantiateFromJson(tempMotions)) != null ? _SerializableMotions$ : undefined : undefined;
            const physics = JsonParseUtils.getString(json, 'Physics');
            const userData = JsonParseUtils.getString(json, 'UserData');
            const displayInfo = JsonParseUtils.getString(json, 'DisplayInfo');
            return new SerializableFileReferences({
              moc: moc,
              textures: textures,
              pose: pose,
              expressions: expressions,
              motions: motions,
              physics: physics,
              userData: userData,
              displayInfo: displayInfo
            });
          }

        }

        _CubismModel3Json.SerializableFileReferences = SerializableFileReferences;

        class SerializableGroup {
          constructor(args = {}) {
            var _args$target, _args$name, _args$ids;

            /** Target type. */
            this.target = void 0;

            /** Group name. */
            this.name = void 0;

            /** Referenced IDs. */
            this.ids = void 0;
            this.target = (_args$target = args.target) != null ? _args$target : '';
            this.name = (_args$name = args.name) != null ? _args$name : '';
            this.ids = (_args$ids = args.ids) != null ? _args$ids : new Array(0);
          }

          copyWith(args = {}) {
            var _args$target2, _args$name2, _args$ids2;

            return new SerializableGroup({
              target: (_args$target2 = args.target) != null ? _args$target2 : this.target,
              name: (_args$name2 = args.name) != null ? _args$name2 : this.name,
              ids: (_args$ids2 = args.ids) != null ? _args$ids2 : this.ids
            });
          }

          equals(other) {
            return this === other ? true : this.target == other.target && this.name == other.name && this.ids == other.ids;
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           * **Required properties**
           * - Target
           * - Name
           * - Ids
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            const target = JsonParseUtils.getString(json, 'Target');
            const name = JsonParseUtils.getString(json, 'Name');
            const ids = JsonParseUtils.getArray(json, 'Ids');

            if (target === undefined || name === undefined || ids === undefined) {
              console.error('SerializableGroup.instantiateFromJson(): json parsing error. (Target: %s, Name: %s, Ids: %s)', target, name, ids);
              return null;
            }

            if (!ids.every((value, index, array) => JsonParseUtils.isString(value))) {
              console.error('SerializableGroup.instantiateFromJson(): json parsing error.');
              return null;
            }

            return new SerializableGroup({
              target: target,
              name: name,
              ids: ids
            });
          }

        }

        _CubismModel3Json.SerializableGroup = SerializableGroup;

        class SerializableExpression {
          constructor(args = {}) {
            var _args$name3, _args$file, _args$fadeInTime, _args$fadeOutTime;

            /** Expression Name. */
            this.name = void 0;

            /** Expression File. */
            this.file = void 0;

            /** Expression FadeInTime. */
            this.fadeInTime = void 0;

            /** Expression FadeOutTime. */
            this.fadeOutTime = void 0;
            this.name = (_args$name3 = args.name) != null ? _args$name3 : '';
            this.file = (_args$file = args.file) != null ? _args$file : '';
            this.fadeInTime = (_args$fadeInTime = args.fadeInTime) != null ? _args$fadeInTime : 0;
            this.fadeOutTime = (_args$fadeOutTime = args.fadeOutTime) != null ? _args$fadeOutTime : 0;
          }

          copyWith(args = {}) {
            var _args$name4, _args$file2, _args$fadeInTime2, _args$fadeOutTime2;

            return new SerializableExpression({
              name: (_args$name4 = args.name) != null ? _args$name4 : this.name,
              file: (_args$file2 = args.file) != null ? _args$file2 : this.file,
              fadeInTime: (_args$fadeInTime2 = args.fadeInTime) != null ? _args$fadeInTime2 : this.fadeInTime,
              fadeOutTime: (_args$fadeOutTime2 = args.fadeOutTime) != null ? _args$fadeOutTime2 : this.fadeOutTime
            });
          }

          equals(other) {
            return this === other ? true : this.name == other.name && this.file == other.file && this.fadeInTime == this.fadeOutTime && this.fadeOutTime == other.fadeOutTime;
          }

          strictEquals(other) {
            return this === other;
          }

          static isEquals(a, b) {
            return a.equals(b);
          }
          /**
           * **Required properties**
           * - Name
           * - File
           *
           * **Optional properties**
           * - FadeInTime
           * - FadeOutTime
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            const name = JsonParseUtils.getString(json, 'Name');
            const file = JsonParseUtils.getString(json, 'File');

            if (name === undefined || file === undefined) {
              console.error('SerializableExpression.instantiateFromJson(): json parsing error. (Name: %s, File: %s)', name, file);
              return null;
            }

            const fadeInTime = JsonParseUtils.getNumber(json, 'FadeInTime');
            const fadeOutTime = JsonParseUtils.getNumber(json, 'FadeOutTime');
            return new SerializableExpression({
              name: name,
              file: file,
              fadeInTime: fadeInTime,
              fadeOutTime: fadeOutTime
            });
          }

        }

        _CubismModel3Json.SerializableExpression = SerializableExpression;
        let SerializableExpressions;

        (function (_SerializableExpressions) {
          function instantiateFromJson(json) {
            const errorMessage = 'SerializableExpressions.instantiateFromJson(): json parsing error.';
            const expressions = new Array(json.length);

            for (let i = 0; i < json.length; i++) {
              if (!JsonParseUtils.isObject(json[i])) {
                console.error(errorMessage);
                return null;
              }

              const instance = SerializableExpression.instantiateFromJson(json[i]);

              if (instance == null) {
                console.error(errorMessage);
                return null;
              }

              expressions[i] = instance;
            }

            return expressions;
          }

          _SerializableExpressions.instantiateFromJson = instantiateFromJson;
        })(SerializableExpressions || (SerializableExpressions = _CubismModel3Json.SerializableExpressions || (_CubismModel3Json.SerializableExpressions = {})));

        class SerializableMotions {
          get(key) {
            var _this$motions$get;

            return (_this$motions$get = this.motions.get(key)) != null ? _this$motions$get : null;
          }

          constructor(args = {}) {
            this.motions = new Map();

            /** Motion group names. */
            this.groupNames = void 0;

            if (args.motions != null) {
              if (!Object.isFrozen(args.motions)) {
                this.motions = new Map();
                this.groupNames = new Array(args.motions.size);
                let i = 0;

                for (const entry of args.motions.entries()) {
                  this.motions.set(entry[0], entry[1]);
                  this.groupNames[i++] = entry[0];
                }

                return;
              } else {
                this.motions = args.motions;
                this.groupNames = new Array(args.motions.size);
                let i = 0;

                for (const key of args.motions.keys()) {
                  this.groupNames[i++] = key;
                }
              }
            } else {
              this.motions = new Map();
              this.groupNames = new Array(0);
            }
          }

          copyWith(args = {}) {
            var _args$motions3;

            return new SerializableMotions({
              motions: (_args$motions3 = args.motions) != null ? _args$motions3 : this.motions
            });
          }

          equals(other) {
            if (this === other) {
              return true;
            }

            if (this.motions === other.motions) {
              return true;
            }

            if (this.motions.size != other.motions.size) {
              return false;
            }

            for (const key of this.motions.keys()) {
              if (this.motions.get(key) != other.motions.get(key)) {
                return false;
              }
            }

            return true;
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           *
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            const errorMessage = 'SerializableMotions.instantiateFromJson(): json parsing error.';
            const groupNames = Object.keys(json);
            const map = new Map();

            for (let i = 0; i < groupNames.length; i++) {
              const item = JsonParseUtils.getArray(json, groupNames[i]);

              if (item === undefined) {
                console.error(errorMessage);
                return null;
              }

              const motion = new Array(item.length);

              for (let j = 0; j < motion.length; j++) {
                if (item[j] == null) {
                  console.error(errorMessage);
                  return null;
                }

                const input = SerializableMotion.instantiateFromJson(item[j]);

                if (input == null) {
                  console.error(errorMessage);
                  return null;
                }

                motion[j] = input;
              }

              map.set(groupNames[i], motion);
            }

            return new SerializableMotions({
              motions: map
            });
          }

        }

        _CubismModel3Json.SerializableMotions = SerializableMotions;

        class SerializableMotion {
          constructor(args = {}) {
            var _args$file3, _args$sound, _args$fadeInTime3, _args$fadeOutTime3;

            /** File path. */
            this.file = void 0;

            /** Sound path. */
            this.sound = void 0;

            /** Fade in time. */
            this.fadeInTime = void 0;

            /** Fade out time. */
            this.fadeOutTime = void 0;
            this.file = (_args$file3 = args.file) != null ? _args$file3 : '';
            this.sound = (_args$sound = args.sound) != null ? _args$sound : '';
            this.fadeInTime = (_args$fadeInTime3 = args.fadeInTime) != null ? _args$fadeInTime3 : 0;
            this.fadeOutTime = (_args$fadeOutTime3 = args.fadeOutTime) != null ? _args$fadeOutTime3 : 0;
          }

          copyWith(args = {}) {
            var _args$file4, _args$sound2, _args$fadeInTime4, _args$fadeOutTime4;

            return new SerializableMotion({
              file: (_args$file4 = args.file) != null ? _args$file4 : this.file,
              sound: (_args$sound2 = args.sound) != null ? _args$sound2 : this.sound,
              fadeInTime: (_args$fadeInTime4 = args.fadeInTime) != null ? _args$fadeInTime4 : this.fadeInTime,
              fadeOutTime: (_args$fadeOutTime4 = args.fadeOutTime) != null ? _args$fadeOutTime4 : this.fadeOutTime
            });
          }

          equals(other) {
            return this === other ? true : this.file == other.file && this.sound == other.sound && this.fadeInTime == other.fadeInTime && this.fadeOutTime == other.fadeOutTime;
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           * **Required properties**
           * - File
           *
           * **Optional properties**
           * - FadeOutTime
           * - FadeInTime
           * - Sound
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            const errorMessage = 'SerializableMotion.instantiateFromJson(): json parsing error.';
            const file = JsonParseUtils.getString(json, 'File');

            if (file === undefined) {
              console.error(errorMessage);
              return null;
            }

            const sound = JsonParseUtils.getString(json, 'Sound');
            const fadeInTime = JsonParseUtils.getNumber(json, 'FadeInTime');
            const fadeOutTime = JsonParseUtils.getNumber(json, 'FadeOutTime');
            return new SerializableMotion({
              file: file,
              sound: sound,
              fadeInTime: fadeInTime,
              fadeOutTime: fadeOutTime
            });
          }

        }

        _CubismModel3Json.SerializableMotion = SerializableMotion;

        class SerializableHitArea {
          constructor(args = {}) {
            var _args$name5, _args$id;

            /** Hit area name. */
            this.name = void 0;

            /** Hit area id. */
            this.id = void 0;
            this.name = (_args$name5 = args.name) != null ? _args$name5 : '';
            this.id = (_args$id = args.id) != null ? _args$id : '';
          }

          copyWith(args = {}) {
            return new SerializableHitArea({
              name: args.name ? args.name : this.name,
              id: args.id ? args.id : this.id
            });
          }

          equals(other) {
            return this === other ? true : this.name == other.name && this.id == other.id;
          }

          strictEquals(other) {
            return this === other;
          }
          /**
           * **Required properties**
           * - Name
           * - Id
           * @param json
           * @returns
           */


          static instantiateFromJson(json) {
            const errorMessage = 'SerializableHitArea.instantiateFromJson(): json parsing error.';
            const name = JsonParseUtils.getString(json, 'Name');

            if (name === undefined) {
              console.error(errorMessage);
              return null;
            }

            const id = JsonParseUtils.getString(json, 'Id');

            if (id === undefined) {
              console.error(errorMessage);
              return null;
            }

            return new SerializableHitArea({
              name: name,
              id: id
            });
          }

        }

        _CubismModel3Json.SerializableHitArea = SerializableHitArea;

        (function (_SerializableGroup) {
          const DEFAULT = _SerializableGroup.DEFAULT = new SerializableGroup();
        })(SerializableGroup || (SerializableGroup = _CubismModel3Json.SerializableGroup || (_CubismModel3Json.SerializableGroup = {})));

        (function (_SerializableExpression) {
          const DEFAULT = _SerializableExpression.DEFAULT = new SerializableExpression();
        })(SerializableExpression || (SerializableExpression = _CubismModel3Json.SerializableExpression || (_CubismModel3Json.SerializableExpression = {})));

        (function (_SerializableMotions) {
          const DEFAULT = _SerializableMotions.DEFAULT = new SerializableMotions();
        })(SerializableMotions || (SerializableMotions = _CubismModel3Json.SerializableMotions || (_CubismModel3Json.SerializableMotions = {})));

        (function (_SerializableMotion) {
          const DEFAULT = _SerializableMotion.DEFAULT = new SerializableMotion();
        })(SerializableMotion || (SerializableMotion = _CubismModel3Json.SerializableMotion || (_CubismModel3Json.SerializableMotion = {})));

        (function (_SerializableHitArea) {
          const DEFAULT = _SerializableHitArea.DEFAULT = new SerializableHitArea();
        })(SerializableHitArea || (SerializableHitArea = _CubismModel3Json.SerializableHitArea || (_CubismModel3Json.SerializableHitArea = {})));
      })(CubismModel3Json || (CubismModel3Json = {})); // #endregion


      _export("default", CubismModel3Json);

      (function (_CubismModelNodeGenerator) {
        async function generateModel(args) {
          var _args$shouldImportAsO2, _args$displayInfo3Jso;

          const shouldImportAsOriginalWorkflow = (_args$shouldImportAsO2 = args.shouldImportAsOriginalWorkflow) != null ? _args$shouldImportAsO2 : false;
          const model3 = args.model3Json;
          const model = CubismModel.instantiateFrom(args.moc);

          if (model == null) {
            console.error('CubismModelNodeGenerator.generateModel(): CubismModel.instantiateFrom() failed.');
            return null;
          }

          model.name = path.basename(model3.fileReferences.moc); // Add parameters and parts inspectors.

          if (EDITOR) {
            model.addComponent(CubismParametersInspector);
            model.addComponent(CubismPartsInspector);
          } // Create renderers.


          const rendererController = Internal.setupCubismRenderController(model);
          console.assert(rendererController);
          console.assert(rendererController.renderers);
          const renderers = rendererController.renderers;
          console.assert(model.drawables);
          const drawables = model.drawables;
          await Internal.setupMaterialsAndTextures(model3, drawables, renderers, args.materialPicker, args.texturePicker); // Initialize drawables.

          if (model3.hitAreas != null) {
            Internal.setupHitAreas(drawables, model3);
          } // Load from cdi3.json


          Internal.setupFromDisplayInfo3Json((_args$displayInfo3Jso = args.displayInfo3Json) != null ? _args$displayInfo3Jso : null, model, model3); // Add mask controller if required.

          Internal.setupMaskController(model, drawables); // Add original workflow component if is original workflow.

          if (shouldImportAsOriginalWorkflow) {
            Internal.setupOriginalWorkflow(model, args.expList);
          } // Initialize physics if JSON exists.


          if (args.physics3Json != null) {
            Internal.setupPhysicsController(args.physics3Json, model);
          }

          if (args.pose3Json != null) {
            Internal.setupCubismPosePart(args.pose3Json, model);
          }

          if (args.userData3Json != null) {
            Internal.setupUserDataTag(args.userData3Json, model3, drawables);
          }

          Internal.setupAnimationController(model);
          Internal.finalize(model);
          return model;
        }

        _CubismModelNodeGenerator.generateModel = generateModel;
      })(CubismModelNodeGenerator || _export("CubismModelNodeGenerator", CubismModelNodeGenerator = {}));

      (function (_Internal) {
        function setupCubismRenderController(model) {
          const rendererController = model.addComponent(CubismRenderController);
          console.assert(rendererController); // シーン上に存在しないため初期化処理が入らないので無理やり呼び出す。

          if (Reflect.has(rendererController, 'onEnable')) {
            const func = Reflect.get(rendererController, 'onEnable');
            const onEnable = typeof func == 'function' ? func : undefined;

            if (onEnable) {
              onEnable.call(rendererController);
            } else {
              console.error('Internal.setupCubismRenderController(): rendererController.onEnable is not function property.');
              return null;
            }
          } else {
            console.error('Internal.setupCubismRenderController(): rendererController.onEnable is undefined.');
            return null;
          }

          return rendererController;
        }

        _Internal.setupCubismRenderController = setupCubismRenderController;

        async function setupMaterialsAndTextures(sender, drawables, renderers, pickMaterial, pickTexture) {
          // Initialize materials.
          for (let i = 0; i < renderers.length; i++) {
            renderers[i].material = await pickMaterial(sender, drawables[i]);
          } // Initialize textures.


          for (let i = 0; i < renderers.length; i++) {
            renderers[i].mainTexture = await pickTexture(sender, drawables[i]);
          }
        }

        _Internal.setupMaterialsAndTextures = setupMaterialsAndTextures;

        function setupHitAreas(drawables, model3) {
          for (let i = 0; i < model3.hitAreas.length; i++) {
            for (let j = 0; j < drawables.length; j++) {
              if (drawables[j].id == model3.hitAreas[i].id) {
                const hitArea = model3.hitAreas[i]; // Add components for hit judgement to HitArea target Drawables.

                const hitDrawable = drawables[j].addComponent(CubismHitDrawable);
                console.assert(hitDrawable != null);
                hitDrawable.name = hitArea.name;
                const raycastable = drawables[j].addComponent(CubismRaycastable);
                console.assert(raycastable != null);
                break;
              }
            }
          }
        }

        _Internal.setupHitAreas = setupHitAreas;

        function setupFromDisplayInfo3Json(json, model, model3) {
          const cdi3Json = CubismDisplayInfo3Json.loadFromJson(json); // Initialize groups.

          console.assert(model.parameters);
          const parameters = model.parameters;

          for (let i = 0; i < parameters.length; i++) {
            if (model3.isParameterInGroup(parameters[i], 'EyeBlink')) {
              var _model$getComponent;

              const eyeBlinkController = (_model$getComponent = model.getComponent(CubismEyeBlinkController)) != null ? _model$getComponent : model.addComponent(CubismEyeBlinkController);
              console.assert(eyeBlinkController);
              const eyeBlinkParameter = parameters[i].addComponent(CubismEyeBlinkParameter);
              console.assert(eyeBlinkParameter);
            } // Set up mouth parameters.


            if (model3.isParameterInGroup(parameters[i], 'LipSync')) {
              var _model$getComponent2;

              const mouthController = (_model$getComponent2 = model.getComponent(CubismMouthController)) != null ? _model$getComponent2 : model.addComponent(CubismMouthController);
              console.assert(mouthController);
              const mouthParameter = parameters[i].addComponent(CubismMouthParameter);
              console.assert(mouthParameter);
            } // Setting up the parameter name for display.


            if (cdi3Json != null) {
              const cubismDisplayInfoParameterName = parameters[i].addComponent(CubismDisplayInfoParameterName);
              console.assert(cubismDisplayInfoParameterName);

              for (let j = 0; j < cdi3Json.parameters.length; j++) {
                if (cdi3Json.parameters[j].id == parameters[i].id) {
                  cubismDisplayInfoParameterName.parameterName = cdi3Json.parameters[j].name;
                  break;
                }
              }

              cubismDisplayInfoParameterName.displayName = '';
            }
          } // Setting up the part name for display.


          if (cdi3Json != null) {
            // Initialize groups.
            console.assert(model.parts);
            const parts = model.parts;

            for (let i = 0; i < parts.length; i++) {
              const cubismDisplayInfoPartNames = parts[i].addComponent(CubismDisplayInfoPartName);
              console.assert(cubismDisplayInfoPartNames);

              for (let j = 0; j < cdi3Json.parts.length; j++) {
                if (cdi3Json.parts[j].id == parts[i].id) {
                  cubismDisplayInfoPartNames.partName = cdi3Json.parts[j].name;
                  break;
                }
              }

              cubismDisplayInfoPartNames.displayName = '';
            }
          }
        }

        _Internal.setupFromDisplayInfo3Json = setupFromDisplayInfo3Json;

        function setupMaskController(model, drawables) {
          if (drawables.some((value, index, array) => value.isMasked)) {
            const maskController = model.addComponent(CubismMaskController);
            console.assert(maskController);
          }
        }

        _Internal.setupMaskController = setupMaskController;

        function setupOriginalWorkflow(model, expList) {
          var _model$getComponent3, _model$getComponent4, _model$getComponent5, _model$getComponent6, _model$getComponent7;

          // Add cubism update manager.
          const updateController = (_model$getComponent3 = model.getComponent(CubismUpdateController)) != null ? _model$getComponent3 : model.addComponent(CubismUpdateController);
          console.assert(updateController); // Add parameter store.

          const parameterStore = (_model$getComponent4 = model.getComponent(CubismParameterStore)) != null ? _model$getComponent4 : model.addComponent(CubismParameterStore);
          console.assert(parameterStore); // Add pose controller.

          const poseController = (_model$getComponent5 = model.getComponent(CubismPoseController)) != null ? _model$getComponent5 : model.addComponent(CubismPoseController);
          console.assert(poseController); // Add expression controller.

          const expressionController = (_model$getComponent6 = model.getComponent(CubismExpressionController)) != null ? _model$getComponent6 : model.addComponent(CubismExpressionController);
          console.assert(expressionController);

          if (expList) {
            expressionController.expressionsList = expList;
          } // Add fade controller.


          const motionFadeController = (_model$getComponent7 = model.getComponent(CubismFadeController)) != null ? _model$getComponent7 : model.addComponent(CubismFadeController);
          console.assert(motionFadeController);
        }

        _Internal.setupOriginalWorkflow = setupOriginalWorkflow;

        function setupPhysicsController(json, model) {
          var _model$getComponent8;

          const physics3Json = CubismPhysics3Json.loadFromJson(json);

          if (physics3Json == null) {
            return;
          }

          const physicsController = (_model$getComponent8 = model.getComponent(CubismPhysicsController)) != null ? _model$getComponent8 : model.addComponent(CubismPhysicsController);
          console.assert(physicsController);
          physicsController.initialize(physics3Json.toRig());
        }

        _Internal.setupPhysicsController = setupPhysicsController;

        function setupUserDataTag(json, model3, drawables) {
          const userData3Json = CubismUserData3Json.loadFromJson(json);

          if (userData3Json == null) {
            return;
          }

          const drawableBodies = userData3Json.toBodyArray(CubismUserDataTargetType.ArtMesh);

          for (let i = 0; i < drawables.length; i++) {
            const index = model3.getBodyIndexById(drawableBodies, drawables[i].id);

            if (index >= 0) {
              var _drawables$i$getCompo;

              const tag = (_drawables$i$getCompo = drawables[i].getComponent(CubismUserDataTag)) != null ? _drawables$i$getCompo : drawables[i].addComponent(CubismUserDataTag);
              console.assert(tag);
              tag.initialize(drawableBodies[index]);
            }
          }
        }

        _Internal.setupUserDataTag = setupUserDataTag;

        function setupCubismPosePart(json, model) {
          const pose3Json = CubismPose3Json.loadFromJson(json);

          if (pose3Json == null) {
            return;
          }

          const {
            parts
          } = model;
          const {
            groups
          } = pose3Json; // Fail silently...

          if (parts == null || groups == null) {
            return;
          }

          for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
            const group = groups[groupIndex]; // Fail silently...

            if (group == null) {
              continue;
            }

            for (let partIndex = 0; partIndex < group.length; partIndex++) {
              var _part$getComponent;

              const part = ArrayExtensionMethods.findByIdFromParts(parts, group[partIndex].id);

              if (part == null) {
                continue;
              }

              const posePart = (_part$getComponent = part.getComponent(CubismPosePart)) != null ? _part$getComponent : part.addComponent(CubismPosePart);
              console.assert(posePart);
              posePart.groupIndex = groupIndex;
              posePart.partIndex = partIndex;
              posePart.link = group[partIndex].link;
            }
          }
        }

        _Internal.setupCubismPosePart = setupCubismPosePart;

        function setupAnimationController(model) {
          var _model$getComponent9;

          const animationController = (_model$getComponent9 = model.getComponent(animation.AnimationController)) != null ? _model$getComponent9 : model.addComponent(animation.AnimationController);
          console.assert(animationController);
        }

        _Internal.setupAnimationController = setupAnimationController;

        function finalize(model) {
          // Make sure model is 'fresh'
          model.forceUpdateNow();
        }

        _Internal.finalize = finalize;
      })(Internal || (Internal = {}));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=0402f79fed3f5e4132f64888fe1fc40134d78ab8.js.map
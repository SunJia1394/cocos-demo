System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, ComponentExtensionMethods, CubismUpdateController, CubismUpdateExecutionOrder, ICubismUpdatable, CubismRenderer, CubismMaskMaskedJunction, CubismMaskRenderer, CubismMaskTexture, MasksMaskedsPair, MasksMaskedsPairs, _SYMBOL, _dec, _dec2, _dec3, _dec4, _class3, _class4, _descriptor, _descriptor2, _crd, ccclass, property, executeInEditMode, CubismMaskController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentExtensionMethods(extras) {
    _reporterNs.report("ComponentExtensionMethods", "../../Core/ComponentExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateController(extras) {
    _reporterNs.report("CubismUpdateController", "../../Framework/CubismUpdateController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateExecutionOrder(extras) {
    _reporterNs.report("CubismUpdateExecutionOrder", "../../Framework/CubismUpdateExecutionOrder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismUpdatable(extras) {
    _reporterNs.report("ICubismUpdatable", "../../Framework/ICubismUpdatable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRenderer(extras) {
    _reporterNs.report("CubismRenderer", "../CubismRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskMaskedJunction(extras) {
    _reporterNs.report("CubismMaskMaskedJunction", "./CubismMaskMaskedJunction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskRenderer(extras) {
    _reporterNs.report("CubismMaskRenderer", "./CubismMaskRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskTexture(extras) {
    _reporterNs.report("CubismMaskTexture", "./CubismMaskTexture", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismDrawable(extras) {
    _reporterNs.report("CubismDrawable", "../../Core/CubismDrawable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskTile(extras) {
    _reporterNs.report("CubismMaskTile", "./CubismMaskTile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismMaskTextureCommandSource(extras) {
    _reporterNs.report("ICubismMaskTextureCommandSource", "./ICubismMaskTextureCommandSource", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismMaskCommandBuffer(extras) {
    _reporterNs.report("CubismMaskCommandBuffer", "./CubismMaskCommandBuffer", _context.meta, extras);
  }

  _export({
    MasksMaskedsPair: void 0,
    MasksMaskedsPairs: void 0
  });

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
      ComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismUpdateController = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismUpdateExecutionOrder = _unresolved_4.default;
    }, function (_unresolved_5) {
      ICubismUpdatable = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismRenderer = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismMaskMaskedJunction = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismMaskRenderer = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismMaskTexture = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8010gm5vNNBbXfEqGF7gvd", "CubismMaskController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator); // TODO: CubismDontMoveOnReimport

      /** Controls rendering of Cubism masks. */

      _export("default", CubismMaskController = (_dec = ccclass('CubismMaskController'), _dec2 = property({
        type: _crd && CubismMaskTexture === void 0 ? (_reportPossibleCrUseOfCubismMaskTexture({
          error: Error()
        }), CubismMaskTexture) : CubismMaskTexture,
        serializable: true,
        visible: false
      }), _dec3 = property({
        type: _crd && CubismMaskTexture === void 0 ? (_reportPossibleCrUseOfCubismMaskTexture({
          error: Error()
        }), CubismMaskTexture) : CubismMaskTexture,
        visible: true,
        readonly: true
      }), _dec4 = property({
        serializable: true,
        visible: false
      }), _dec(_class3 = executeInEditMode(_class3 = (_class4 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismMaskController extends Component {
        constructor() {
          super(...arguments);

          /** MaskTexture backing field. */
          _initializerDefineProperty(this, "_maskTexture", _descriptor, this);

          /** CubismMaskRenderers. */
          this._junctions = null;

          /** Model has update controller component. */
          _initializerDefineProperty(this, "_hasUpdateController", _descriptor2, this);

          /** ICubismUpdatable Binded callback function. */
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);

          /** ICubismUpdatable metadata */
          this[_SYMBOL] = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).SYMBOL;
        }

        /** Mask texture. */
        get maskTexture() {
          // Fall back to global mask texture.
          if (this._maskTexture == null) {
            this._maskTexture = (_crd && CubismMaskTexture === void 0 ? (_reportPossibleCrUseOfCubismMaskTexture({
              error: Error()
            }), CubismMaskTexture) : CubismMaskTexture).globalMaskTexture;
          }

          return this._maskTexture;
        }

        set maskTexture(value) {
          // Return early if same value given.
          if (value == this._maskTexture) {
            return;
          }

          this._maskTexture = value; // Try switch mask textures.

          this.onDestroy();
          this.start();
        }

        get junctions() {
          return this._junctions;
        }

        set junctions(value) {
          this._junctions = value;
        }
        /** True if controller is revived. */


        get isRevived() {
          return this.junctions != null;
        }

        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        }
        /** Makes sure controller is initialized once. */


        tryRevive() {
          if (this.isRevived) {
            return;
          }

          this.forceRevive();
        }
        /** Initializes Junctions. */


        forceRevive() {
          var model = (_crd && ComponentExtensionMethods === void 0 ? (_reportPossibleCrUseOfComponentExtensionMethods({
            error: Error()
          }), ComponentExtensionMethods) : ComponentExtensionMethods).findCubismModel(this);

          if (model == null) {
            console.warn('ComponentExtensionMethods.findCubismModel() failed.');
            return;
          }

          var drawables = model.drawables;

          if (drawables == null) {
            console.warn('ComponentExtensionMethods.findCubismModel().drawables is null.');
            return;
          } // Find mask pairs.


          var pairs = new MasksMaskedsPairs();

          for (var i = 0; i < drawables.length; i++) {
            if (!drawables[i].isMasked) {
              continue;
            } // Make sure no leftover null-entries are added as mask.


            var masks = drawables[i].masks.filter(mask => mask != null);

            if (masks.length == 0) {
              continue;
            }

            pairs.add(drawables[i], masks);
          } // Initialize junctions.


          this.junctions = new Array(pairs.entries.length);

          for (var i = 0; i < this.junctions.length; ++i) {
            // Create mask renderers for junction.
            var _masks = new Array(pairs.entries[i].masks.length);

            for (var j = 0; j < _masks.length; ++j) {
              _masks[j] = new (_crd && CubismMaskRenderer === void 0 ? (_reportPossibleCrUseOfCubismMaskRenderer({
                error: Error()
              }), CubismMaskRenderer) : CubismMaskRenderer)().setMainRenderer(pairs.entries[i].masks[j]);
            } // Create junction.


            if (this.maskTexture == null) {
              console.warn('CubismMaskController.maskTexture is null.');
              return;
            }

            this.junctions[i] = new (_crd && CubismMaskMaskedJunction === void 0 ? (_reportPossibleCrUseOfCubismMaskMaskedJunction({
              error: Error()
            }), CubismMaskMaskedJunction) : CubismMaskMaskedJunction)().setMasks(_masks).setMaskeds(pairs.entries[i].maskeds).setMaskTexture(this.maskTexture);
          }
        }
        /** Called by cubism update controller. Order to invoke OnLateUpdate. */


        get executionOrder() {
          return (_crd && CubismUpdateExecutionOrder === void 0 ? (_reportPossibleCrUseOfCubismUpdateExecutionOrder({
            error: Error()
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_MASK_CONTROLLER;
        }
        /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */


        get needsUpdateOnEditing() {
          return true;
        }
        /** Called by cubism update controller. Updates {@link junctions}. */


        onLateUpdate() {
          if (!this.enabled || !this.isRevived) {
            return;
          }

          if (this.junctions == null) {
            console.error('CubismMaskController.junctions is null.');
            return;
          }

          for (var i = 0; i < this.junctions.length; i++) {
            this.junctions[i].update();
          }
        }

        // #region Cocos Creator Event Handling

        /** Initializes instance. */
        start() {
          // Fail silently.
          if (this.maskTexture == null) {
            return;
          }

          this.maskTexture.addSource(this); // Get cubism update controller.

          this.hasUpdateController = this.getComponent(_crd && CubismUpdateController === void 0 ? (_reportPossibleCrUseOfCubismUpdateController({
            error: Error()
          }), CubismUpdateController) : CubismUpdateController) != null;
        }
        /** Called by Cocos Creator. */


        lateUpdate() {
          if (!this.hasUpdateController) {
            this.onLateUpdate();
          }
        }
        /** Finalizes instance. */


        onDestroy() {
          if (this.maskTexture == null) {
            return;
          }

          this.maskTexture.removeSource(this);
        } // #endregion
        // #region ICubismMaskDrawSource

        /**
         * Queries the number of tiles needed by the source.
         * @returns The necessary number of tiles needed.
         */


        getNecessaryTileCount() {
          this.tryRevive();
          var junctions = this.junctions;

          if (junctions == null) {
            console.warn('CubismMaskController.junctions is null.');
            return 0;
          }

          return junctions.length;
        }
        /**
         * Assigns the tiles.
         * @param value Tiles to assign.
         */


        setTiles(value) {
          var junctions = this.junctions;

          if (junctions == null) {
            console.error('CubismMaskController.junctions is null.');
            return;
          }

          for (var i = 0; i < junctions.length; i++) {
            junctions[i].setMaskTile(value[i]);
          }
        }
        /**
         * Called when source should instantly draw.
         * @param buffer
         */


        addToCommandBuffer(buffer) {
          var junctions = this.junctions;

          if (junctions == null) {
            console.error('CubismMaskController.junctions is null.');
            return;
          }

          for (var i = 0; i < junctions.length; i++) {
            junctions[i].addToCommandBuffer(buffer);
          }
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, "_maskTexture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "maskTexture", [_dec3], Object.getOwnPropertyDescriptor(_class4.prototype, "maskTexture"), _class4.prototype), _descriptor2 = _applyDecoratedDescriptor(_class4.prototype, "_hasUpdateController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class4)) || _class3) || _class3));

      // #region Mask-Masked Pair

      /** Pair of masks and masked drawables. (struct) */
      _export("MasksMaskedsPair", MasksMaskedsPair = class MasksMaskedsPair {
        constructor(args) {
          var _args$masks, _args$maskeds;

          if (args === void 0) {
            args = {};
          }

          /** Mask drawables. */
          this.masks = void 0;

          /** Masked drawables. */
          this.maskeds = void 0;
          this.masks = (_args$masks = args.masks) != null ? _args$masks : new Array(0);
          this.maskeds = (_args$maskeds = args.maskeds) != null ? _args$maskeds : new Array(0);
        }

      });

      _export("MasksMaskedsPairs", MasksMaskedsPairs = class MasksMaskedsPairs {
        constructor() {
          /** List of MasksMaskedsPair */
          this.entries = new Array();
        }

        /**
         * Add MasksMaskedsPair to the list.
         * @param masked
         * @param masks
         * @returns
         */
        add(masked, masks) {
          // Try to add masked to existing mask compound.
          for (var i = 0; i < this.entries.length; i++) {
            var match = this.entries[i].masks.length == masks.length;

            if (!match) {
              continue;
            }

            for (var j = 0; j < this.entries[i].masks.length; j++) {
              if (this.entries[i].masks[j] != masks[j].getComponent(_crd && CubismRenderer === void 0 ? (_reportPossibleCrUseOfCubismRenderer({
                error: Error()
              }), CubismRenderer) : CubismRenderer)) {
                match = false;
                break;
              }
            }

            if (!match) {
              continue;
            }

            var _renderer = masked.getComponent(_crd && CubismRenderer === void 0 ? (_reportPossibleCrUseOfCubismRenderer({
              error: Error()
            }), CubismRenderer) : CubismRenderer);

            if (_renderer == null) {
              console.warn('masked.getComponent(CubismRenderer) failed.');
              return;
            }

            this.entries[i].maskeds.push(_renderer);
            return;
          } // Create new pair.


          var renderers = new Array(masks.length);

          for (var _i = 0; _i < masks.length; _i++) {
            var _renderer2 = masks[_i].getComponent(_crd && CubismRenderer === void 0 ? (_reportPossibleCrUseOfCubismRenderer({
              error: Error()
            }), CubismRenderer) : CubismRenderer);

            if (_renderer2 == null) {
              console.warn('masks[i].getComponent(CubismRenderer) failed.');
              return;
            }

            renderers[_i] = _renderer2;
          }

          var renderer = masked.getComponent(_crd && CubismRenderer === void 0 ? (_reportPossibleCrUseOfCubismRenderer({
            error: Error()
          }), CubismRenderer) : CubismRenderer);

          if (renderer == null) {
            console.warn('masked.getComponent(CubismRenderer) failed.');
            return;
          }

          this.entries.push(new MasksMaskedsPair({
            masks: renderers,
            maskeds: new Array(renderer)
          }));
        }

      }); // #endregion


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32faa0fba90ddfaae1d406a3d4a97bb5a8ad01ab.js.map
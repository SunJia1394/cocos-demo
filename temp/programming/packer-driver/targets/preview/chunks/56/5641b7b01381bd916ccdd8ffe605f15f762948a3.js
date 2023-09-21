System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, assetManager, CCInteger, Game, game, RenderTexture, _decorator, CubismMaskCommandBuffer, CubismMaskTilePool, ArrayExtensions, isImporter, MathExtensions, CubismMaskTile, EDITOR, SourcesItem, _dec, _dec2, _dec3, _class2, _class3, _descriptor, _descriptor2, _class4, ccclass, property, CubismMaskTexture, maskTex;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      assetManager = _cc.assetManager;
      CCInteger = _cc.CCInteger;
      Game = _cc.Game;
      game = _cc.game;
      RenderTexture = _cc.RenderTexture;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      CubismMaskCommandBuffer = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismMaskTilePool = _unresolved_2.default;
    }, function (_unresolved_3) {
      ArrayExtensions = _unresolved_3.ArrayExtensions;
      isImporter = _unresolved_3.isImporter;
      MathExtensions = _unresolved_3.MathExtensions;
    }, function (_unresolved_4) {
      CubismMaskTile = _unresolved_4.default;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: async function () {
      _cclegacy._RF.push({}, "35687g6IiJGDpUQG5fyUc/n", "CubismMaskTexture", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Asset', 'assetManager', 'CCInteger', 'Game', 'game', 'RenderTexture', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Texture for rendering masks.
       *
       * ScriptableObject
       * [CreateAssetMenu(menuName = "Live2D Cubism/Mask Texture")]
       */

      _export("default", CubismMaskTexture = (_dec = ccclass('CubismMaskTexture'), _dec2 = property({
        type: CCInteger,
        serializable: true,
        visible: false
      }), _dec3 = property({
        type: CCInteger,
        serializable: true,
        visible: false
      }), _dec(_class2 = (_class3 = (_class4 = class CubismMaskTexture extends Asset {
        // #region Conversion

        /**
         * Converts a CubismMaskTexture to a Texture.
         * @returns Value to convert.
         */
        getTextureReference() {
          return this.renderTexture;
        } // #endregion


        static initGlobalMaskTexture() {
          game.once(Game.EVENT_GAME_INITED, () => {
            assetManager.loadBundle('Live2DCubismBuiltinResource', (error, bundle) => {
              if (error != null) {
                console.error(error);
              } else {
                bundle.load('GlobalMaskTexture', (error, asset) => {
                  if (error != null) {
                    console.error(error);
                  } else {// CubismMaskTexture._globalMaskTexture = asset;
                  }
                });
              }
            });
          });
        }

        /** The global mask texture. */
        static get globalMaskTexture() {
          return CubismMaskTexture._globalMaskTexture;
        }
        /** Size backing field. */


        /** Texture size in pixels. */
        get size() {
          return this._size;
        }

        set size(value) {
          // Return early if same value given.
          if (value == this._size) {
            return;
          } // Fail silently if not power-of-two.


          if (!MathExtensions.isPowerOfTwo(value)) {
            return;
          } // Apply changes.


          this._size = value;
          this.refreshRenderTexture();
        }
        /** Channel count. */


        get channels() {
          return 4;
        }
        /** Subdivisions backing field. */


        /** Subdivision level. */
        get subdivisions() {
          return this._subdivisions;
        }

        set subdivisions(value) {
          if (value == this._subdivisions) {
            return;
          } // Apply changes.


          this._subdivisions = value;
          this.refreshRenderTexture();
        }

        /** Tile pool 'allocator'. */
        get tilePool() {
          return this._tilePool;
        }

        set tilePool(value) {
          this._tilePool = value;
        }
        /** RenderTexture backing field. */


        /** RenderTexture to draw on. */
        get renderTexture() {
          if (this._renderTexture == null) {
            this.refreshRenderTexture();
          }

          return this._renderTexture;
        }

        set renderTexture(value) {
          this._renderTexture = value;
        }

        /** Sources. */
        get sources() {
          return this._sources;
        }

        set sources(value) {
          this._sources = value;
        }
        /** True if instance is revived. */


        get isRevived() {
          return this.tilePool != null;
        }
        /** True if instance contains any sources. */


        get containsSources() {
          return this.sources != null && this.sources.length > 0;
        } // #region Interface For ICubismMaskSources

        /**
         * Add source of masks for drawing.
         * @param source
         */


        addSource(source) {
          // Make sure instance is valid.
          this.tryRevive(); // Initialize container if necessary.

          if (this.sources == null) {
            this.sources = new Array();
          } // Return early if source already exists.
          else if (this.sources.findIndex((value, index, obj) => value.source == source) != -1) {
            return;
          } // Register source.


          if (this.tilePool == null) {
            console.warn('CubismMaskTexture.tilePool is null.');
            return;
          }

          var tiles = this.tilePool.acquireTiles(source.getNecessaryTileCount());

          if (tiles == null) {
            console.warn('CubismMaskTexture.tilePool.acquireTiles() failed.');
            return;
          }

          var item = new SourcesItem({
            source: source,
            tiles: tiles
          });
          this.sources.push(item); // Apply tiles to source.

          source.setTiles(item.tiles);
        }
        /**
         * Remove source of masks
         * @param source
         */


        removeSource(source) {
          // Return early if empty.
          if (!this.containsSources) {
            return;
          }

          var itemIndex = this.sources.findIndex((value, index, obj) => {
            return value.source == source;
          }); // Return if source is invalid.

          if (itemIndex == -1) {
            return;
          } // Return tiles and deregister source.


          if (this.tilePool == null) {
            console.warn('CubismMaskTexture.tilePool is null.');
            return;
          }

          this.tilePool.returnTiles(this.sources[itemIndex].tiles);
          this.sources.splice(itemIndex, 1);
        } // #endregion


        tryRevive() {
          // Return early if already revived.
          if (this.isRevived) {
            return;
          }

          this.refreshRenderTexture();
        }

        reinitializeSources() {
          // Reallocate tiles if sources exist.
          if (this.containsSources) {
            if (this.tilePool == null) {
              console.warn('CubismMaskTexture.tilePool is null.');
              return;
            }

            for (var i = 0; i < this.sources.length; i++) {
              var source = this.sources[i];

              if (source.source == null) {
                console.warn('CubismMaskTexture.sources[i].source is null.');
                return;
              }

              var tiles = this.tilePool.acquireTiles(source.source.getNecessaryTileCount());

              if (tiles == null) {
                console.warn('CubismMaskTexture.tilePool.acquireTiles() failed.');
                return;
              }

              source.source.setTiles(tiles);
              this.sources[i] = source.copyWith({
                source: source.source,
                tiles: tiles
              });
            }
          }
        }

        refreshRenderTexture() {
          // Recreate render texture.
          this._renderTexture = new RenderTexture();

          this._renderTexture.initialize({
            width: this.size,
            height: this.size,
            name: 'CubismMaskTextureInstance'
          }); // Recreate allocator.


          this.tilePool = new CubismMaskTilePool(this.subdivisions, this.channels); // Reinitialize sources.

          this.reinitializeSources();
        } //#region Cocos Creator Event Handling

        /** Initializes instance. */


        onLoaded() {
          super.onLoaded();
          CubismMaskTexture._globalMaskTexture = this;

          if (EDITOR) {
            var key = Symbol.for('CubismMaskTexture.globalMaskTexture');
            var global = globalThis;
            global[key] = this;
          }

          CubismMaskCommandBuffer.addSource(this);
        }

        static reviveInEditor() {
          console.info('reviveInEditor');

          if (EDITOR) {
            var key = Symbol.for('CubismMaskTexture.globalMaskTexture');
            var global = globalThis;

            if (global[key]) {
              CubismMaskTexture._globalMaskTexture = global[key];
            }
          }
        }
        /** Finalizes instance. */


        destroy() {
          CubismMaskTexture._globalMaskTexture = null;
          CubismMaskCommandBuffer.removeSource(this);
          var ret = super.destroy();
          return ret;
        } //#endregion
        // #region ICubismMaskCommandSource

        /**
         * Called to enqueue source.
         * @param buffer Buffer to enqueue in.
         */


        addToCommandBuffer(buffer) {
          // Return early if empty.
          if (!this.containsSources) {
            return;
          } // Enqueue render target.


          for (var i = 0; i < this.sources.length; i++) {
            var _this$sources$i$sourc;

            (_this$sources$i$sourc = this.sources[i].source) == null ? void 0 : _this$sources$i$sourc.addToCommandBuffer(buffer);
          }
        } // #endregion


        constructor(size, subdivisions) {
          super(); // Parameters cannot be given during deserialization, so none of the parameters in the constructor may be present
          // The build process removes the same data as the default value.
          // So if no parameters are passed in and no data is restored, the default values on the class are used

          _initializerDefineProperty(this, "_size", _descriptor, this);

          _initializerDefineProperty(this, "_subdivisions", _descriptor2, this);

          this._tilePool = null;
          this._renderTexture = null;
          this._sources = new Array(0);

          if (size !== undefined) {
            this._size = size;
          }

          if (subdivisions !== undefined) {
            this._subdivisions = subdivisions;
          }
        }

        static generateCubismMaskTexture(size, subdivisions) {
          if (size === void 0) {
            size = 512;
          }

          if (subdivisions === void 0) {
            subdivisions = 3;
          }

          // Fail silently if not power-of-two.
          if (!MathExtensions.isPowerOfTwo(size)) {
            return null;
          }

          return new CubismMaskTexture(size, subdivisions);
        }

      }, _class4._globalMaskTexture = null, _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "_size", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1024;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "_subdivisions", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class3)) || _class2));

      // #region Source Item

      /** Source of masks and its tiles (struct) */
      SourcesItem = class SourcesItem {
        constructor(args) {
          var _args$source, _args$tiles;

          if (args === void 0) {
            args = {};
          }

          /** SourcesItem instance. */
          this.source = void 0;

          /** Tiles assigned to the instance. */
          this.tiles = void 0;
          this.source = (_args$source = args.source) != null ? _args$source : null;
          this.tiles = (_args$tiles = args.tiles) != null ? _args$tiles : new Array(0);
        }

        copyWith(args) {
          var _args$tiles2;

          if (args === void 0) {
            args = {};
          }

          return new SourcesItem({
            source: args.source !== undefined ? args.source : this.source,
            tiles: (_args$tiles2 = args.tiles) != null ? _args$tiles2 : this.tiles
          });
        }

        equals(other) {
          return this === other ? true : this.source === other.source && ArrayExtensions.isEquals(CubismMaskTile.isEquals, this.tiles, other.tiles);
        }

        strictEquals(other) {
          return this === other;
        }

      }; // #endregion
      // 他の処理が実行される前に CubismMaskCommandBuffer を展開するため GlobalMaskTexture をロードします。

      if (!EDITOR) {
        CubismMaskTexture.initGlobalMaskTexture();
      } else {
        if (!isImporter()) {
          maskTex = await Editor.Message.request('asset-db', 'query-uuid', 'db://live2d_cubismsdk_cocoscreator/resources/GlobalMaskTexture.asset');
          CubismMaskTexture.reviveInEditor();

          if (!CubismMaskTexture.globalMaskTexture) {
            console.info('loadAny');
            assetManager.loadAny(maskTex, null, (error, asset) => {
              if (error) {
                console.error(error);
              }
            });
          }
        }
      }

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=5641b7b01381bd916ccdd8ffe605f15f762948a3.js.map
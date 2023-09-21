System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CubismMaskTile, CubismMaskTilePool, _crd;

  function _reportPossibleCrUseOfCubismMaskTile(extras) {
    _reporterNs.report("CubismMaskTile", "./CubismMaskTile", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CubismMaskTile = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e9cdi/745El7s5DLD8lpG2", "CubismMaskTilePool", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /** Virtual pool allocator for CubismMaskTiles. */
      _export("default", CubismMaskTilePool = class CubismMaskTilePool {
        /** Level of subdivisions. */
        get subdivisions() {
          return this._subdivisions;
        }

        set subdivisions(value) {
          this._subdivisions = value;
        }

        /**
         * Pool slots.
         *
         * true slots are in use, false are available slots.
         */
        get slots() {
          return this._slots;
        }

        set slots(value) {
          this._slots = value;
        } // #region Ctors

        /**
         * Initializes instance.
         * @param subdivisions Number of CubismMaskTexture subdivisions.
         * @param channels Number of CubismMaskTexture color channels.
         */


        constructor(subdivisions, channels) {
          this._subdivisions = 0;
          this._slots = new Array(0);
          this.subdivisions = subdivisions;
          this.slots = new Array(Math.pow(4, subdivisions) * channels);
        } // #endregion

        /**
         * Acquires tiles.
         * @param count Number of tiles to acquire.
         * @returns Acquired tiles on success; null otherwise.
         */


        acquireTiles(count) {
          const result = new Array(count); // Populate container.

          for (let i = 0; i < count; i++) {
            let allocationSuccessful = false;

            for (let j = 0; j < this.slots.length; j++) {
              // Skip occupied slots.
              if (this.slots[j]) {
                continue;
              } // Generate tile.


              result[i] = this.toTile(j); // Flag slot as occupied.

              this.slots[j] = true; // Flag allocation as successful.

              allocationSuccessful = true;
              break;
            } // Return as soon as one allocation fails.


            if (!allocationSuccessful) {
              return null;
            }
          } // Return on success.


          return result;
        }
        /**
         * Releases tiles.
         * @param tiles Tiles to release.
         */


        returnTiles(tiles) {
          // Flag slots as available.
          for (var i = 0; i < tiles.length; i++) {
            this.slots[this.toIndex(tiles[i])] = false;
          }
        }
        /**
         * Converts from index to CubismMaskTile.
         * @param index Index to convert.
         * @returns Mask tile matching index.
         */


        toTile(index) {
          const {
            trunc,
            pow
          } = Math;
          const tileCounts = trunc(pow(4, this.subdivisions - 1));
          const tilesPerRow = trunc(pow(2, this.subdivisions - 1));
          const tileSize = 1 / tilesPerRow;
          const channel = trunc(index / tileCounts);
          const currentTilePosition = index - channel * tileCounts;
          const column = trunc(currentTilePosition / tilesPerRow);
          const rowId = currentTilePosition % tilesPerRow;
          return new (_crd && CubismMaskTile === void 0 ? (_reportPossibleCrUseOfCubismMaskTile({
            error: Error()
          }), CubismMaskTile) : CubismMaskTile)({
            channel: channel,
            column: column,
            row: rowId,
            size: tileSize
          });
        }
        /**
         * Converts from <see cref="CubismMaskTile"/> to index.
         * @param tile Tile to convert.
         * @returns Tile index.
         */


        toIndex(tile) {
          const {
            trunc,
            pow
          } = Math;
          const tileCounts = trunc(pow(4, this.subdivisions - 1));
          const tilesPerRow = trunc(pow(2, this.subdivisions - 1));
          return trunc(tile.channel * tileCounts + tile.column * tilesPerRow + tile.row);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d309f58a94ab444ade2002e7e2b38ccd0cbb5cbf.js.map
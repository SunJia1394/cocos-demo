System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, _decorator, Moc, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, ccclass, property, CubismMoc;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      Moc = _unresolved_.Moc;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "da146+EXyNKE4wiHugfvWbA", "CubismMoc", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Asset', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Cubism moc asset.
       *
       * **Sealed class.**
       */

      _export("default", CubismMoc = (_dec = ccclass('CubismMoc'), _dec2 = property({
        serializable: false,
        visible: false
      }), _dec3 = property({
        serializable: false,
        visible: false
      }), _dec(_class = (_class2 = class CubismMoc extends Asset {
        constructor(...args) {
          super(...args);
          // #endregion

          /** Bytes backing field. */
          this._bytes = void 0;

          _initializerDefineProperty(this, "_unmanagedMoc", _descriptor, this);

          _initializerDefineProperty(this, "referenceCount", _descriptor2, this);
        }

        // #region Factory Methods

        /**
         * Checks consistency of a moc.
         * @param mocByte Source.
         * @returns `true` if Moc is valid; `false` otherwise.
         */
        hasMocConsistency(mocByte) {
          return Moc.hasMocConsistency(mocByte) === 1 ? true : false;
        }
        /**
         * Creates a CubismMoc asset from raw bytes.
         * @param moc3 Source.
         * @returns Instance.
         */


        static createFrom(moc3) {
          let moc = new CubismMoc();
          moc._bytes = moc3;
          return moc;
        }

        /** Raw moc bytes. */
        get bytes() {
          return this._bytes;
        }

        set bytes(value) {
          this._bytes = value;
        }
        /** Raw moc bytes. */


        get _nativeAsset() {
          return this._bytes;
        }

        set _nativeAsset(value) {
          this._bytes = value;
        }

        get unmanagedMoc() {
          return this._unmanagedMoc;
        }

        set unmanagedMoc(value) {
          this._unmanagedMoc = value;
        }

        // True if instance is revived.
        get isRevived() {
          return this.unmanagedMoc != null;
        }
        /**
         * Acquires native handle.
         * @returns Valid handle on success; IntPtr.Zero otherwise.
         */


        acquireUnmanagedMoc() {
          this.referenceCount++;
          this.revive();
          return this.unmanagedMoc;
        }
        /** Releases native handle. */


        releaseUnmanagedMoc() {
          this.referenceCount--; // Release instance of unmanaged moc in case the instance isn't referenced any longer.

          if (this.referenceCount == 0) {
            var _this$unmanagedMoc;

            (_this$unmanagedMoc = this.unmanagedMoc) == null ? void 0 : _this$unmanagedMoc._release();
            this.unmanagedMoc = null;
          } // Deal with invalid reference counts.
          else if (this.referenceCount < 0) {
            this.referenceCount = 0;
          }
        }
        /** Revives instance without acquiring it. */


        revive() {
          // Return if already revived.
          if (this.isRevived) {
            return;
          } // Return if no bytes are available.


          if (this.bytes.byteLength <= 0) {
            return;
          } // Try revive.


          this.unmanagedMoc = Moc.fromArrayBuffer(this.bytes);
        }

        validate() {
          return !!this._bytes;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_unmanagedMoc", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "referenceCount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=a26a7a9dfd4ed05fe5dea1af1365b78f15277fb2.js.map
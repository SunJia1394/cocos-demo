System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CubismCanvasInformation, _crd;

  function _reportPossibleCrUseOfCanvasInfo(extras) {
    _reporterNs.report("CanvasInfo", "../CubismCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "../CubismCore", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d91d0D8SJFWq813kFtEwlZ", "CubismCanvasInformation", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      /**
       * Single {@link CubismModel} canvas information.
       *
       * **Sealed class**
       */
      _export("default", CubismCanvasInformation = class CubismCanvasInformation {
        constructor(unmanagedModel) {
          this._unmanagedCanvasInformation = null;
          this.reset(unmanagedModel);
        }
        /**
         * Initializes instance.
         * @param unmanagedModel Handle to unmanaged model.
         */


        static instantiate(unmanagedModel) {
          return new CubismCanvasInformation(unmanagedModel);
        }

        /** Unmanaged canvas information from unmanaged model. */
        get unmanagedCanvasInformation() {
          return this._unmanagedCanvasInformation;
        }

        set unmanagedCanvasInformation(value) {
          this._unmanagedCanvasInformation = value;
        }
        /** Width of native model canvas. */


        get canvasWidth() {
          var _this$unmanagedCanvas, _this$unmanagedCanvas2;

          return (_this$unmanagedCanvas = (_this$unmanagedCanvas2 = this.unmanagedCanvasInformation) == null ? void 0 : _this$unmanagedCanvas2.CanvasWidth) != null ? _this$unmanagedCanvas : 0;
        }
        /** Height of native model canvas. */


        get canvasHeight() {
          var _this$unmanagedCanvas3, _this$unmanagedCanvas4;

          return (_this$unmanagedCanvas3 = (_this$unmanagedCanvas4 = this.unmanagedCanvasInformation) == null ? void 0 : _this$unmanagedCanvas4.CanvasHeight) != null ? _this$unmanagedCanvas3 : 0;
        }
        /** Coordinate origin of X axis. */


        get canvasOriginX() {
          var _this$unmanagedCanvas5, _this$unmanagedCanvas6;

          return (_this$unmanagedCanvas5 = (_this$unmanagedCanvas6 = this.unmanagedCanvasInformation) == null ? void 0 : _this$unmanagedCanvas6.CanvasOriginX) != null ? _this$unmanagedCanvas5 : 0;
        }
        /** Coordinate origin of Y axis. */


        get canvasOriginY() {
          var _this$unmanagedCanvas7, _this$unmanagedCanvas8;

          return (_this$unmanagedCanvas7 = (_this$unmanagedCanvas8 = this.unmanagedCanvasInformation) == null ? void 0 : _this$unmanagedCanvas8.CanvasOriginY) != null ? _this$unmanagedCanvas7 : 0;
        }
        /** Pixels per unit of native model. */


        get pixelsPerUnit() {
          var _this$unmanagedCanvas9, _this$unmanagedCanvas10;

          return (_this$unmanagedCanvas9 = (_this$unmanagedCanvas10 = this.unmanagedCanvasInformation) == null ? void 0 : _this$unmanagedCanvas10.PixelsPerUnit) != null ? _this$unmanagedCanvas9 : 0;
        }
        /**
         * Revives the instance.
         * @param unmanagedModel Handle to unmanaged model.
         */


        revive(unmanagedModel) {
          this.unmanagedCanvasInformation = unmanagedModel.canvasinfo;
        }
        /**
         * Restores instance to initial state.
         * @param unmanagedModel Handle to unmanaged model.
         */


        reset(unmanagedModel) {
          this.revive(unmanagedModel);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07e5ebe8575c763657af6c26f60a40ee57d1932e.js.map
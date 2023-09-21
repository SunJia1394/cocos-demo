System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Camera, renderer, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Billboarder;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Camera = _cc.Camera;
      renderer = _cc.renderer;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "444101o3PVEkbWEgl+bozaO", "Billboarder", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component', 'Camera', 'renderer', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Billboarder", Billboarder = (_dec = ccclass('Billboarder'), _dec2 = property({
        type: Camera
      }), _dec(_class = (_class2 = class Billboarder extends Component {
        constructor() {
          super(...arguments);

          /**
           * Camera to face.
           */
          _initializerDefineProperty(this, "cameraToFace", _descriptor, this);
        }

        /**
         * Called by Cocos Creator. Updates facing.
         * @param deltaTime
         * @returns
         */
        update(deltaTime) {
          if (this.cameraToFace == null) {
            return;
          }

          var {
            worldPosition
          } = this.node;
          var {
            worldPosition: cameraPos,
            rotation: cameraRot
          } = this.cameraToFace.node;
          var up = Vec3.transformQuat(new Vec3(), Vec3.UP, cameraRot);

          if (this.cameraToFace.projection == renderer.scene.CameraProjection.ORTHO) {
            var forward = Vec3.transformQuat(new Vec3(), Vec3.FORWARD, cameraRot);
            var p = Vec3.subtract(new Vec3(), worldPosition, forward);
            this.node.lookAt(p, up);
          } else {
            this.node.lookAt(cameraPos, up);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraToFace", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f2308349e4e2d60801d7deaccc9e3ffedebdaad.js.map
System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, Component, _decorator, ComponentExtensionMethods4Core, ComponentExtensionMethods, CubismPosePart, CubismPart, CubismUpdateController, CubismUpdateExecutionOrder, ArrayExtensionMethods, ICubismUpdatable, CubismPoseData, _ICubismUpdatable$SYM, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, ccclass, property, BACK_OPACITY_THRESHOLD, CubismPoseController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      ComponentExtensionMethods4Core = _unresolved_.default;
    }, function (_unresolved_2) {
      ComponentExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPosePart = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismPart = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismUpdateController = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismUpdateExecutionOrder = _unresolved_6.default;
    }, function (_unresolved_7) {
      ArrayExtensionMethods = _unresolved_7.default;
    }, function (_unresolved_8) {
      ICubismUpdatable = _unresolved_8.default;
    }, function (_unresolved_9) {
      CubismPoseData = _unresolved_9.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "07045YhQjlBi7PjTiFfkNiw", "CubismPoseController", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCInteger', 'Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Back opacity threshold.
       */

      BACK_OPACITY_THRESHOLD = 0.15;
      /**
       * Cubism pose controller.
       *
       * **Sealed class**
       */

      _export("default", CubismPoseController = (_dec = ccclass('CubismPoseController'), _dec2 = property({
        type: CCInteger
      }), _dec3 = property({
        visible: false
      }), _dec4 = property({
        visible: false
      }), _dec(_class = (_class2 = (_ICubismUpdatable$SYM = ICubismUpdatable.SYMBOL, class CubismPoseController extends Component {
        constructor(...args) {
          super(...args);

          //#region variable

          /** Default visible pose index. */
          _initializerDefineProperty(this, "defaultPoseIndex", _descriptor, this);

          /** Cubism model cache. */
          this._model = null;

          _initializerDefineProperty(this, "_hasUpdateController", _descriptor2, this);

          /** Pose data. */
          this._poseData = new Array(0);
          //#endregion

          /** ICubismUpdatable Binded callback function. */
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);

          /** ICubismUpdatable metadata */
          this[_ICubismUpdatable$SYM] = ICubismUpdatable.SYMBOL;
        }

        /** Model has update controller component. */
        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        }

        //#endregion
        //#region Function

        /** update hidden part opacity. */
        refresh() {
          this._model = ComponentExtensionMethods4Core.findCubismModel(this); // Fail silently...

          if (this._model == null) {
            return;
          }

          const {
            parts
          } = this._model;

          if (parts == null) {
            console.assert(parts);
            return;
          }

          const tags = ComponentExtensionMethods.getComponentsMany(parts, CubismPosePart);

          for (let i = 0; i < tags.length; i++) {
            var _data$part;

            const groupIndex = tags[i].groupIndex;
            const partIndex = tags[i].partIndex;

            if (this._poseData == null) {
              this._poseData = new Array(1);
              this._poseData[0] = new Array(0);
            } else if (this._poseData.length <= groupIndex) {
              const start = this._poseData.length;
              this._poseData.length = groupIndex + 1;

              this._poseData.fill(new Array(0), start, groupIndex + 1);
            }

            const arr = this._poseData[groupIndex];

            if (arr.length <= partIndex) {
              const start = arr.length;
              arr.length = partIndex + 1;
              arr.fill(new CubismPoseData(), start, partIndex + 1);
            }

            let data = arr[partIndex];
            data = data.copyWith({
              posePart: tags[i],
              part: tags[i].getComponent(CubismPart)
            });
            arr[partIndex] = data;
            this.defaultPoseIndex = this.defaultPoseIndex < 0 ? 0 : this.defaultPoseIndex;

            if (partIndex != this.defaultPoseIndex) {
              const {
                part
              } = data;

              if (part == null) {
                console.assert(part);
                continue;
              }

              part.opacity = 0.0;
            }

            console.assert(data.part);
            data = data.copyWith({
              opacity: (_data$part = data.part) == null ? void 0 : _data$part.opacity
            });
            arr[partIndex] = data;

            if (tags[i].link == null || tags[i].link.length == 0) {
              continue;
            }

            const linkParts = new Array(tags[i].link.length);

            for (let j = 0; j < tags[i].link.length; j++) {
              let linkId = tags[i].link[j];
              const part = ArrayExtensionMethods.findByIdFromParts(parts, linkId);
              linkParts[j] = part;
            }

            data = data.copyWith({
              linkParts: linkParts
            });
            arr[partIndex] = data;
          } // Get cubism update controller.


          this.hasUpdateController = this.getComponent(CubismUpdateController) != null;
        }
        /** update hidden part opacity. */


        doFade() {
          for (let groupIndex = 0; groupIndex < this._poseData.length; groupIndex++) {
            let appearPartsGroupIndex = -1;
            let appearPartsGroupOpacity = 1.0; // Find appear parts group index and opacity.

            const arr = this._poseData[groupIndex];

            for (let i = 0; i < arr.length; i++) {
              const {
                part
              } = arr[i];

              if (!part) {
                console.assert(part);
                continue;
              }

              if (part.opacity > arr[i].opacity) {
                appearPartsGroupIndex = i;
                appearPartsGroupOpacity = part.opacity;
                break;
              }
            } // Fail silently...


            if (appearPartsGroupIndex < 0) {
              return;
            } // Delay disappearing parts groups disappear.


            for (let i = 0; i < arr.length; i++) {
              // Fail silently...
              if (i == appearPartsGroupIndex) {
                continue;
              }

              const {
                part
              } = arr[i];

              if (!part) {
                console.assert(part);
                continue;
              }

              let delayedOpacity = part.opacity;
              const backOpacity = (1.0 - delayedOpacity) * (1.0 - appearPartsGroupOpacity); // When restricting the visible proportion of the background

              if (backOpacity > BACK_OPACITY_THRESHOLD) {
                delayedOpacity = 1.0 - BACK_OPACITY_THRESHOLD / (1.0 - appearPartsGroupOpacity);
              } // Overwrite the opacity if it's greater than the delayed opacity.


              if (part.opacity > delayedOpacity) {
                part.opacity = delayedOpacity;
              }
            }
          }
        }
        /** Copy opacity to linked parts. */


        copyPartOpacities() {
          for (let groupIndex = 0; groupIndex < this._poseData.length; groupIndex++) {
            const arr = this._poseData[groupIndex];

            for (let partIndex = 0; partIndex < arr.length; partIndex++) {
              const {
                linkParts,
                part
              } = arr[partIndex];

              if (!linkParts.length) {
                continue;
              }

              if (!part) {
                console.assert(part);
                continue;
              }

              const opacity = part.opacity;

              for (let linkIndex = 0; linkIndex < linkParts.length; linkIndex++) {
                const linkPart = linkParts[linkIndex];

                if (linkPart) {
                  linkPart.opacity = opacity;
                }
              }
            }
          }
        }
        /** Save parts opacity. */


        savePartOpacities() {
          for (let groupIndex = 0; groupIndex < this._poseData.length; groupIndex++) {
            const arr = this._poseData[groupIndex];

            for (let partIndex = 0; partIndex < arr.length; partIndex++) {
              let data = arr[partIndex];
              const {
                part
              } = data;
              console.assert(part);
              data.copyWith({
                opacity: part == null ? void 0 : part.opacity
              });
            }
          }
        }
        /** Called by cubism update controller. Order to invoke OnLateUpdate. */


        get executionOrder() {
          return CubismUpdateExecutionOrder.CUBISM_POSE_CONTROLLER;
        }
        /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */


        get needsUpdateOnEditing() {
          return false;
        }
        /** Called by cubism update manager. Updates controller. */


        onLateUpdate() {
          // Fail silently...
          if (!this.enabled || this._model == null || this._poseData == null) {
            return;
          }

          this.doFade();
          this.copyPartOpacities();
          this.savePartOpacities();
        } //#endregion
        //#region Cocos Creator Event Handling

        /** Called by Cocos Creator. Makes sure cache is initialized. */


        onEnable() {
          this.refresh();
        }
        /** Called by Cocos Creator. */


        lateUpdate() {
          if (!this.hasUpdateController) {
            this.onLateUpdate();
          }
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultPoseIndex", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_hasUpdateController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "hasUpdateController", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "hasUpdateController"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=54f9064a26c9c60e3588dba063c1e44418f5119f.js.map
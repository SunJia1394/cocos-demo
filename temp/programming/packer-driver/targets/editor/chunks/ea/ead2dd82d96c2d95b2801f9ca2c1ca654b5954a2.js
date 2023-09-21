System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, _decorator, _dec, _class, _crd, ccclass, CubismFadeStateObserver;

  function _reportPossibleCrUseOfCubismFadeMotionList(extras) {
    _reporterNs.report("CubismFadeMotionList", "./CubismFadeMotionList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismFadePlayingMotion(extras) {
    _reporterNs.report("CubismFadePlayingMotion", "./CubismFadePlayingMotion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismFadeState(extras) {
    _reporterNs.report("ICubismFadeState", "./ICubismFadeState", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      animation = _cc.animation;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "877a8QJxKtKt5Yz/nVzDxqJ", "CubismFadeStateObserver", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['animation', '_decorator']);

      ({
        ccclass
      } = _decorator);

      _export("default", CubismFadeStateObserver = (_dec = ccclass('CubismFadeStateObserver'), _dec(_class = class CubismFadeStateObserver extends animation.StateMachineComponent {
        constructor(...args) {
          super(...args);
          this._cubismFadeMotionList = null;
          this._playingMotions = null;
          this._isDefaulState = false;
          this._layerIndex = 0;
          this._layerWeight = 0;
          this._isStateTransitionFinished = false;
        }

        getPlayingMotions() {
          return this._playingMotions;
        }

        isDefaultState() {
          return this._isDefaulState;
        }

        getLayerWeight() {
          return this._layerWeight;
        }

        getStateTransitionFinished() {
          return this._isStateTransitionFinished;
        }

        setStateTransitionFinished(isFinished) {
          this._isStateTransitionFinished = isFinished;
        }

        stopAnimation(index) {
          if (this._playingMotions == null) {
            return;
          }

          this._playingMotions = this._playingMotions.splice(index, 1);
        }

        onEnable() {
          this._isStateTransitionFinished = false;

          if (this._playingMotions == null) {
            this._playingMotions = new Array();
          }
        } // public override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex, AnimatorControllerPlayable controller)


        onMotionStateEnter(animator, stateInfo) {
          super.onMotionStateEnter(animator, stateInfo); // const fadeController = animator.node.getComponent(CubismFadeController);
          // // Fail silently...
          // if (fadeController == null) {
          //   return;
          // }
          // this._cubismFadeMotionList = fadeController.CubismFadeMotionList;
          // this._layerIndex = layerIndex;
          // this._layerWeight = this._layerIndex == 0 ? 1.0 : animator.GetLayerWeight(this._layerIndex);
          // const animatorClipInfo = controller.GetNextAnimatorClipInfo(layerIndex);
          // this._isDefaulState = animatorClipInfo.Length == 0;
          // if (this._isDefaulState) {
          //   // Get the motion of Default State only for the first time.
          //   animatorClipInfo = controller.GetCurrentAnimatorClipInfo(layerIndex);
          // }
          // // Set playing motions end time.
          // if (
          //   this._playingMotions != null /*To Cocos*/ &&
          //   this._playingMotions.length > 0 &&
          //   this._playingMotions[this._playingMotions.length - 1].Motion != null
          // ) {
          //   const motion = this._playingMotions[this._playingMotions.length - 1];
          //   const time = game.totalTime;
          //   if (motion.Motion != null) {
          //     const newEndTime = time + motion.Motion.FadeOutTime;
          //     motion.EndTime = newEndTime;
          //     while (motion.IsLooping) {
          //       if (motion.StartTime + motion.Motion.MotionLength >= time) {
          //         break;
          //       }
          //       motion.StartTime += motion.Motion.MotionLength;
          //     }
          //   }
          //   this._playingMotions[this._playingMotions.length - 1] = motion;
          // }
          // if (
          //   this._playingMotions != null &&
          //   this._cubismFadeMotionList != null &&
          //   this._cubismFadeMotionList.MotionInstanceIds != null &&
          //   this._cubismFadeMotionList.CubismFadeMotionObjects != null
          // ) {
          //   for (const i = 0; i < animatorClipInfo.Length; ++i) {
          //     const playingMotion = new CubismFadePlayingMotion();
          //     const instanceId = -1;
          //     const events = animatorClipInfo[i].clip.events;
          //     for (const k = 0; k < events.Length; ++k) {
          //       if (events[k].func != 'InstanceId') {
          //         continue;
          //       }
          //       instanceId = events[k].intParameter;
          //       break;
          //     }
          //     const motionIndex = -1;
          //     for (const j = 0; j < this._cubismFadeMotionList.MotionInstanceIds.length; ++j) {
          //       if (this._cubismFadeMotionList.MotionInstanceIds[j] != instanceId) {
          //         continue;
          //       }
          //       motionIndex = j;
          //       break;
          //     }
          //     playingMotion.Motion =
          //       motionIndex == -1
          //         ? null
          //         : this._cubismFadeMotionList?.CubismFadeMotionObjects[motionIndex];
          //     playingMotion.Speed = 1.0;
          //     playingMotion.StartTime = game.totalTime;
          //     playingMotion.FadeInStartTime = game.totalTime;
          //     if (playingMotion.Motion != null) {
          //       playingMotion.EndTime =
          //         playingMotion.Motion.MotionLength <= 0
          //           ? -1
          //           : playingMotion.StartTime + playingMotion.Motion.MotionLength;
          //     }
          //     playingMotion.IsLooping = animatorClipInfo[i].clip.isLooping;
          //     playingMotion.Weight = 0.0;
          //     this._playingMotions.push(playingMotion);
          //   }
          // }[TODO]
        }

        onMotionStateExit(animator, stateInfo) {
          super.onMotionStateExit(animator, stateInfo);
          this._isStateTransitionFinished = true;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ead2dd82d96c2d95b2801f9ca2c1ca654b5954a2.js.map
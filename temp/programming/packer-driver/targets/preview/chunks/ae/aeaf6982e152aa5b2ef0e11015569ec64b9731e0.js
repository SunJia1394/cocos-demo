System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, animation, Node, math, ICubismUpdatable, CubismModel, CubismParameter, CubismPart, CubismUpdateExecutionOrder, ValueCache, _SYMBOL, _dec, _dec2, _dec3, _dec4, _class2, _class3, _descriptor, _crd, ccclass, property, requireComponent, CubismMotionApplier;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function getTrackValue(track, time) {
    for (var channel of track.channels()) {
      var evaluated = channel.curve.evaluate(time);

      if (typeof evaluated === 'number') {
        return evaluated;
      }

      break;
    }

    return Number.NaN;
  }

  function makePath(comp, model) {
    var current = comp.node;
    var name = '';

    do {
      name = current.name + '/' + name;

      if (!Node.isNode(current.parent)) {
        break;
      }

      current = current.parent;
    } while (current != model.node);

    return name.slice(0, -1);
  }

  function _reportPossibleCrUseOfICubismUpdatable(extras) {
    _reporterNs.report("ICubismUpdatable", "./ICubismUpdatable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismModel(extras) {
    _reporterNs.report("CubismModel", "../Core/CubismModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPart(extras) {
    _reporterNs.report("CubismPart", "../Core/CubismPart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismUpdateExecutionOrder(extras) {
    _reporterNs.report("CubismUpdateExecutionOrder", "./CubismUpdateExecutionOrder", _context.meta, extras);
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
      animation = _cc.animation;
      Node = _cc.Node;
      math = _cc.math;
    }, function (_unresolved_2) {
      ICubismUpdatable = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismParameter = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismPart = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismUpdateExecutionOrder = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e37a2n90jBL1oVF3mK4mb/0", "CubismMotionApplier", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'Component', 'animation', 'Node', 'math']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);
      ValueCache = class ValueCache {
        constructor(ref) {
          this.ref = void 0;
          this.value = Number.NaN;
          this.calcValue = Number.NaN;
          this.ref = ref;
        }

      };

      _export("default", CubismMotionApplier = (_dec = ccclass('CubismMotionApplier'), _dec2 = requireComponent(animation.AnimationController), _dec3 = requireComponent(_crd && CubismModel === void 0 ? (_reportPossibleCrUseOfCubismModel({
        error: Error()
      }), CubismModel) : CubismModel), _dec4 = property({
        serializable: true,
        visible: false
      }), _dec(_class2 = _dec2(_class2 = _dec3(_class2 = (_class3 = (_SYMBOL = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
        error: Error()
      }), ICubismUpdatable) : ICubismUpdatable).SYMBOL, class CubismMotionApplier extends Component {
        constructor() {
          super(...arguments);

          /** AnimationController cache. */
          this.animCtrl = null;

          /** Parameters cache. */
          this.parameters = new Map();

          /** Parts cache. */
          this.parts = new Map();

          /** ICubismUpdatable Binded callback function. */
          this.bindedOnLateUpdate = this.onLateUpdate.bind(this);

          _initializerDefineProperty(this, "_hasUpdateController", _descriptor, this);

          /** ICubismUpdatable metadata */
          this[_SYMBOL] = (_crd && ICubismUpdatable === void 0 ? (_reportPossibleCrUseOfICubismUpdatable({
            error: Error()
          }), ICubismUpdatable) : ICubismUpdatable).SYMBOL;
        }

        refresh() {
          this.animCtrl = this.getComponent(animation.AnimationController);

          if (this.animCtrl == null) {
            console.error('Not found AnimationController.');
            this.enabled = false;
            return;
          }

          var model = this.getComponent(_crd && CubismModel === void 0 ? (_reportPossibleCrUseOfCubismModel({
            error: Error()
          }), CubismModel) : CubismModel);

          if (model == null) {
            console.error('Not found CubismModel.');
            this.enabled = false;
            return;
          }

          var {
            parameters,
            parts
          } = model;

          if (parameters != null) {
            for (var i = 0; i < parameters.length; i++) {
              var path = makePath(parameters[i], model);
              this.parameters.set(path, new ValueCache(parameters[i]));
            }
          }

          if (parts != null) {
            for (var _i = 0; _i < parts.length; _i++) {
              var _path = makePath(parts[_i], model);

              this.parts.set(_path, new ValueCache(parts[_i]));
            }
          }
        }

        valueUpdate(clipStatuses, progress, transProgress) {
          if (transProgress === void 0) {
            transProgress = 1.0;
          }

          for (var clipStatus of clipStatuses) {
            var t = clipStatus.clip.duration * progress;

            for (var track of clipStatus.clip.tracks) {
              var value = getTrackValue(track, t);

              if (!Number.isNaN(value)) {
                this.setCache(track, value, transProgress);
              }
            }
          }
        }

        setCache(track, value, transProgress) {
          var nodePath = '',
              compName = '',
              propName = '';

          for (var i = 0; i < track.path.length; i++) {
            if (track.path.isHierarchyAt(i)) {
              nodePath = track.path.parseHierarchyAt(i);
            } else if (track.path.isComponentAt(i)) {
              compName = track.path.parseComponentAt(i);
            } else if (track.path.isPropertyAt(i)) {
              propName = track.path.parsePropertyAt(i);
            }
          }

          switch (compName) {
            case (_crd && CubismParameter === void 0 ? (_reportPossibleCrUseOfCubismParameter({
              error: Error()
            }), CubismParameter) : CubismParameter).prototype.name:
              this.setParameterCache(nodePath, propName, value, transProgress);
              break;

            case (_crd && CubismPart === void 0 ? (_reportPossibleCrUseOfCubismPart({
              error: Error()
            }), CubismPart) : CubismPart).prototype.name:
              this.setPartCache(nodePath, propName, value, transProgress);
              break;

            default:
              console.warn('Not supported component.');
              break;
          }
        }

        setParameterCache(nodePath, propName, value, transProgress) {
          if (propName != 'value') {
            console.warn("Not supported property.");
            return;
          }

          var cache = this.parameters.get(nodePath);

          if (cache == null) {
            // console.warn(`Not found node. (${nodePath})`);
            return;
          }

          if (Number.isNaN(cache.calcValue)) {
            cache.calcValue = value;
          } else {
            cache.calcValue = math.lerp(cache.calcValue, value, transProgress);
          }
        }

        setPartCache(nodePath, propName, value, transProgress) {
          if (propName != 'opacity') {
            console.warn("Not supported property.");
            return;
          }

          var cache = this.parts.get(nodePath);

          if (cache == null) {
            // console.warn(`Not found node. (${nodePath})`);
            return;
          }

          if (Number.isNaN(cache.calcValue)) {
            cache.calcValue = value;
          } else {
            cache.calcValue = math.lerp(cache.calcValue, value, transProgress);
          }
        }

        calcCache(layerWeight) {
          this.parameters.forEach((cache, _key, _map) => {
            if (Number.isNaN(cache.value)) {
              cache.value = cache.calcValue;
            } else if (!Number.isNaN(cache.calcValue)) {
              cache.value = math.lerp(cache.value, cache.calcValue, layerWeight);
            }

            cache.calcValue = Number.NaN;
          });
          this.parts.forEach((cache, _key, _map) => {
            if (Number.isNaN(cache.value)) {
              cache.value = cache.calcValue;
            } else if (!Number.isNaN(cache.calcValue)) {
              cache.value = math.lerp(cache.value, cache.calcValue, layerWeight);
            }

            cache.calcValue = Number.NaN;
          });
        }

        applyValues() {
          this.parameters.forEach((cache, _key, _map) => {
            if (!Number.isNaN(cache.value)) {
              cache.ref.value = cache.value;
            }

            cache.value = Number.NaN;
          });
          this.parts.forEach((cache, _key, _map) => {
            if (!Number.isNaN(cache.value)) {
              cache.ref.opacity = cache.value;
            }

            cache.value = Number.NaN;
          });
        }

        onLateUpdate(deltaTime) {
          var {
            animCtrl: ctrl
          } = this;

          if (ctrl == null) {
            return;
          }

          if (ctrl.graph == null) {
            return;
          }

          if (!ctrl.isValid) {
            console.warn('AnimationController invalid.');
            return;
          }

          for (var i = 0; i < ctrl.layerCount; i++) {
            var currentStateStatus = ctrl.getCurrentStateStatus(i);

            if (currentStateStatus == null) {
              console.warn('CurrentStateStatus is null.');
              continue;
            }

            var currentClipStatuses = ctrl.getCurrentClipStatuses(i);
            this.valueUpdate(currentClipStatuses, currentStateStatus.progress);
            var currentTransition = ctrl.getCurrentTransition(i); // 遷移中なら有効な値

            if (currentTransition != null) {
              var nextStateStatus = ctrl.getNextStateStatus(i);

              if (nextStateStatus == null) {
                console.warn('NextStateStatus is null.');
              } else {
                var transProgress = currentTransition.duration == 0 ? 1.0 : currentTransition.time / currentTransition.duration;
                var nextClipStatuses = ctrl.getNextClipStatuses(i);
                this.valueUpdate(nextClipStatuses, nextStateStatus.progress, transProgress);
              }
            }

            this.calcCache(ctrl.getLayerWeight(i));
          }

          this.applyValues();
        }
        /** Called by Cocos Creator. Makes sure cache is initialized. */


        start() {
          // Initialize cache.
          this.refresh();
        }
        /** Called by Cocos Creator. Updates controller. */


        lateUpdate(deltaTime) {
          if (!this.hasUpdateController) {
            this.onLateUpdate(deltaTime);
          }
        }

        get executionOrder() {
          return (_crd && CubismUpdateExecutionOrder === void 0 ? (_reportPossibleCrUseOfCubismUpdateExecutionOrder({
            error: Error()
          }), CubismUpdateExecutionOrder) : CubismUpdateExecutionOrder).CUBISM_MOTION_APPLIER;
        }

        get needsUpdateOnEditing() {
          return false;
        }

        /** Model has update controller component. */
        get hasUpdateController() {
          return this._hasUpdateController;
        }

        set hasUpdateController(value) {
          this._hasUpdateController = value;
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "_hasUpdateController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class3)) || _class2) || _class2) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aeaf6982e152aa5b2ef0e11015569ec64b9731e0.js.map
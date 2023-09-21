System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, math, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, property, ccclass, CubismPhysicsParticle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      math = _cc.math;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5f186sAYFFB4JEQDBTmp9Us", "CubismPhysicsParticle", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['_decorator', 'math']);

      ({
        property,
        ccclass
      } = _decorator);
      /** Vertex data of physics. (struct) */

      _export("default", CubismPhysicsParticle = (_dec = ccclass('CubismPhysicsParticle'), _dec2 = property({
        serializable: true
      }), _dec3 = property({
        serializable: true
      }), _dec4 = property({
        serializable: true
      }), _dec5 = property({
        serializable: true
      }), _dec6 = property({
        serializable: false
      }), _dec7 = property({
        serializable: false
      }), _dec8 = property({
        serializable: false
      }), _dec9 = property({
        serializable: false
      }), _dec10 = property({
        serializable: false
      }), _dec(_class = (_class2 = class CubismPhysicsParticle {
        constructor(args) {
          var _args$initialPosition, _args$initialPosition2, _args$mobility, _args$delay, _args$acceleration, _args$radius, _args$position$clone, _args$position, _args$lastPosition$cl, _args$lastPosition, _args$lastGravity$clo, _args$lastGravity, _args$force$clone, _args$force, _args$velocity$clone, _args$velocity;

          if (args === void 0) {
            args = {};
          }

          /** Initial position. */
          this.initialPosition = void 0;

          /** Mobility ratio. */
          _initializerDefineProperty(this, "mobility", _descriptor, this);

          /** Delay ratio. */
          _initializerDefineProperty(this, "delay", _descriptor2, this);

          /** Current acceleration. */
          _initializerDefineProperty(this, "acceleration", _descriptor3, this);

          /** Length of radius. */
          _initializerDefineProperty(this, "radius", _descriptor4, this);

          /** Current position. (NonSerialized) */
          _initializerDefineProperty(this, "position", _descriptor5, this);

          /** Last position. (NonSerialized) */
          _initializerDefineProperty(this, "lastPosition", _descriptor6, this);

          /** Last gravity. (NonSerialized) */
          _initializerDefineProperty(this, "lastGravity", _descriptor7, this);

          /** Current force. (NonSerialized) */
          _initializerDefineProperty(this, "force", _descriptor8, this);

          /** Current velocity. (NonSerialized) */
          _initializerDefineProperty(this, "velocity", _descriptor9, this);

          var zero = math.Vec2.ZERO.clone();
          this.initialPosition = (_args$initialPosition = (_args$initialPosition2 = args.initialPosition) == null ? void 0 : _args$initialPosition2.clone()) != null ? _args$initialPosition : zero;
          this.mobility = (_args$mobility = args.mobility) != null ? _args$mobility : 0;
          this.delay = (_args$delay = args.delay) != null ? _args$delay : 0;
          this.acceleration = (_args$acceleration = args.acceleration) != null ? _args$acceleration : 0;
          this.radius = (_args$radius = args.radius) != null ? _args$radius : 0;
          this.position = (_args$position$clone = (_args$position = args.position) == null ? void 0 : _args$position.clone()) != null ? _args$position$clone : zero;
          this.lastPosition = (_args$lastPosition$cl = (_args$lastPosition = args.lastPosition) == null ? void 0 : _args$lastPosition.clone()) != null ? _args$lastPosition$cl : zero;
          this.lastGravity = (_args$lastGravity$clo = (_args$lastGravity = args.lastGravity) == null ? void 0 : _args$lastGravity.clone()) != null ? _args$lastGravity$clo : zero;
          this.force = (_args$force$clone = (_args$force = args.force) == null ? void 0 : _args$force.clone()) != null ? _args$force$clone : zero;
          this.velocity = (_args$velocity$clone = (_args$velocity = args.velocity) == null ? void 0 : _args$velocity.clone()) != null ? _args$velocity$clone : zero;
        }

        copyWith(args) {
          var _args$initialPosition3, _args$mobility2, _args$delay2, _args$acceleration2, _args$radius2, _args$position2, _args$lastPosition2, _args$lastGravity2, _args$force2, _args$velocity2;

          if (args === void 0) {
            args = {};
          }

          return new CubismPhysicsParticle({
            initialPosition: (_args$initialPosition3 = args.initialPosition) != null ? _args$initialPosition3 : this.initialPosition,
            mobility: (_args$mobility2 = args.mobility) != null ? _args$mobility2 : this.mobility,
            delay: (_args$delay2 = args.delay) != null ? _args$delay2 : this.delay,
            acceleration: (_args$acceleration2 = args.acceleration) != null ? _args$acceleration2 : this.acceleration,
            radius: (_args$radius2 = args.radius) != null ? _args$radius2 : this.radius,
            position: (_args$position2 = args.position) != null ? _args$position2 : this.position,
            lastPosition: (_args$lastPosition2 = args.lastPosition) != null ? _args$lastPosition2 : this.lastPosition,
            lastGravity: (_args$lastGravity2 = args.lastGravity) != null ? _args$lastGravity2 : this.lastGravity,
            force: (_args$force2 = args.force) != null ? _args$force2 : this.force,
            velocity: (_args$velocity2 = args.velocity) != null ? _args$velocity2 : this.velocity
          });
        }

        equals(other) {
          return this === other ? true : this.initialPosition.equals(other.initialPosition) && this.mobility == other.mobility && this.delay == other.delay && this.acceleration == other.acceleration && this.radius == other.radius && this.position.equals(other.position) && this.lastPosition.equals(other.lastPosition) && this.lastGravity.equals(other.lastGravity) && this.force.equals(other.force) && this.velocity.equals(other.velocity);
        }

        strictEquals(other) {
          return this === other;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mobility", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "delay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "acceleration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "position", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return math.Vec2.ZERO.clone();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lastPosition", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return math.Vec2.ZERO.clone();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lastGravity", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return math.Vec2.ZERO.clone();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "force", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return math.Vec2.ZERO.clone();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "velocity", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return math.Vec2.ZERO.clone();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=790f9a89328c0337b93c1377f3da0c3748a3b0d6.js.map
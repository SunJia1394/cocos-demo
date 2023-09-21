System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, _decorator, ArrayExtensionMethods, CubismPhysics, CubismPhysicsInput, CubismPhysicsMath, CubismPhysicsNormalization, CubismPhysicsOutput, CubismPhysicsParticle, isImporter, MathExtensions, EDITOR, SubRigPhysicsOutput, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, property, ccclass, Vec2, CubismPhysicsSubRig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      ArrayExtensionMethods = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismPhysics = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPhysicsInput = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismPhysicsMath = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismPhysicsNormalization = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismPhysicsOutput = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismPhysicsParticle = _unresolved_7.default;
    }, function (_unresolved_8) {
      isImporter = _unresolved_8.isImporter;
      MathExtensions = _unresolved_8.MathExtensions;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "561c4QkwAhNk4Iil02SKqA/", "CubismPhysicsSubRig", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['math', '_decorator']);

      ({
        property,
        ccclass
      } = _decorator);
      ({
        Vec2
      } = MathExtensions);

      _export("default", CubismPhysicsSubRig = (_dec = ccclass('CubismPhysicsSubRig'), _dec2 = property({
        type: [CubismPhysicsInput],
        serializable: true
      }), _dec3 = property({
        type: [CubismPhysicsOutput],
        serializable: true
      }), _dec4 = property({
        type: [CubismPhysicsParticle],
        serializable: true
      }), _dec5 = property({
        type: CubismPhysicsNormalization,
        serializable: true
      }), _dec6 = property({
        serializable: false
      }), _dec7 = property({
        serializable: false
      }), _dec8 = property({
        serializable: false
      }), _dec(_class2 = (_class3 = class CubismPhysicsSubRig {
        constructor() {
          _initializerDefineProperty(this, "input", _descriptor, this);

          _initializerDefineProperty(this, "output", _descriptor2, this);

          _initializerDefineProperty(this, "particles", _descriptor3, this);

          _initializerDefineProperty(this, "normalization", _descriptor4, this);

          _initializerDefineProperty(this, "_rig", _descriptor5, this);

          _initializerDefineProperty(this, "_currentRigOutput", _descriptor6, this);

          // Results of the latest pendulum calculation.
          _initializerDefineProperty(this, "_previousRigOutput", _descriptor7, this);
        }

        get rig() {
          return this._rig;
        }

        set rig(value) {
          this._rig = value;
        }

        // Result of previous pendulum calculation.

        /**
         * Applies the specified weights from the latest and one previous result of the pendulum operation.
         * @param weight Weight of latest results.
         */
        interpolate(weight) {
          //#region Assertion
          const {
            rig
          } = this;

          if (rig == null) {
            console.assert(rig != null);
            return;
          }

          const {
            controller
          } = rig;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          const {
            parameters
          } = controller;

          if (parameters == null) {
            console.assert(parameters != null);
            return;
          } //#endregion
          // Load input parameters.


          for (let i = 0; i < this.output.length; i++) {
            var _output$destination, _output$destinationId;

            const output = this.output[i];
            (_output$destination = output.destination) != null ? _output$destination : output.destination = ArrayExtensionMethods.findByIdFromParameters(parameters, (_output$destinationId = output.destinationId) != null ? _output$destinationId : '');

            if (output.destination == null) {
              continue;
            }

            output.destination.value = this.updateOutputParameterValue(output.destination, output.destination.value, this._previousRigOutput.output[i] * (1 - weight) + this._currentRigOutput.output[i] * weight, this.output[i]);
          }
        }
        /**
         * Updates parameter from output value.
         * @param parameter Target parameter.
         * @param parameterValue Target parameter Value.
         * @param translation Translation.
         * @param output Output value.
         * @returns Changed parameter value.
         */


        updateOutputParameterValue(parameter, parameterValue, translation, output) {
          //#region Assertion
          if (output.getScale == null) {
            console.assert(output.getScale != null);
            return parameterValue;
          } //#endregion


          const outputScale = output.getScale();
          let value = translation * outputScale;

          if (value < parameter.minimumValue) {
            if (value < output.valueBelowMinimum) {
              output.valueBelowMinimum = value;
            }

            value = parameter.minimumValue;
          } else if (value > parameter.maximumValue) {
            if (value > output.valueExceededMaximum) {
              output.valueExceededMaximum = value;
            }

            value = parameter.maximumValue;
          }

          const weight = output.weight / CubismPhysics.maximumWeight;

          if (weight >= 1.0) {
            return value;
          } else {
            return parameterValue * (1.0 - weight) + value * weight;
          }
        }
        /**
         * Updates particles in every frame.
         * @param strand Particles.
         * @param totalTranslation Total translation.
         * @param totalAngle Total angle.
         * @param wind Direction of wind.
         * @param thresholdValue Value of threshold.
         * @param deltaTime Time of delta.
         */


        updateParticles(strand, totalTranslation, totalAngle, wind, thresholdValue, deltaTime) {
          strand[0] = strand[0].copyWith({
            position: totalTranslation
          });
          const totalRadian = CubismPhysicsMath.degreesToRadian(totalAngle);
          const currentGravity = CubismPhysicsMath.radianToDirection(totalRadian);
          currentGravity.normalize();

          for (let i = 1; i < strand.length; i++) {
            const {
              acceleration
            } = strand[i];
            strand[i] = strand[i].copyWith({
              force: Vec2.add(Vec2.multiplySingle(currentGravity, acceleration), wind),
              lastPosition: strand[i].position
            }); // The Cubism Editor expects 30 FPS so we scale here by 30...

            const delay = strand[i].delay * deltaTime * 30.0;

            const direction = (() => {
              const tmp = Vec2.subtract(strand[i].position, strand[i - 1].position);
              const radian = CubismPhysicsMath.directionToRadian(strand[i].lastGravity, currentGravity) / CubismPhysics.airResistance;
              const x = Math.cos(radian) * tmp.x - tmp.y * Math.sin(radian);
              const y = Math.sin(radian) * x + tmp.y * Math.cos(radian);
              return new math.Vec2(x, y);
            })();

            strand[i] = strand[i].copyWith({
              position: Vec2.add(strand[i - 1].position, direction)
            });
            const velocity = Vec2.multiplySingle(strand[i].velocity, delay);
            const force = Vec2.multiplySingle(strand[i].force, delay * delay);
            strand[i] = strand[i].copyWith({
              position: Vec2.add(Vec2.add(strand[i].position, velocity), force)
            });
            const newDirection = Vec2.subtract(strand[i].position, strand[i - 1].position).normalize();
            strand[i] = strand[i].copyWith({
              position: Vec2.add(strand[i - 1].position, Vec2.multiplySingle(newDirection, strand[i].radius))
            });

            if (Math.abs(strand[i].position.x) < thresholdValue) {
              strand[i].position.x = 0.0;
            }

            if (delay != 0.0) {
              strand[i] = strand[i].copyWith({
                velocity: Vec2.multiplySingle(Vec2.divideSingle(Vec2.subtract(strand[i].position, strand[i].lastPosition), delay), strand[i].mobility)
              });
            }

            strand[i] = strand[i].copyWith({
              force: math.Vec2.ZERO,
              lastGravity: currentGravity
            });
          }
        }
        /**
         * Updates particles in stabilization function.
         * @param strand Particles
         * @param totalTranslation Total translation.
         * @param totalAngle Total angle.
         * @param wind Direction of wind.
         * @param thresholdValue Value of threshold.
         */


        updateParticlesForStabilization(strand, totalTranslation, totalAngle, // float
        wind, thresholdValue) {
          strand[0] = strand[0].copyWith({
            position: totalTranslation
          });
          const totalRadian = CubismPhysicsMath.degreesToRadian(totalAngle);
          const currentGravity = CubismPhysicsMath.radianToDirection(totalRadian);
          currentGravity.normalize();

          for (let i = 1; i < strand.length; i++) {
            strand[i] = strand[i].copyWith({
              force: MathExtensions.Vec2.add(MathExtensions.Vec2.multiplySingle(currentGravity, strand[i].acceleration), wind),
              lastPosition: strand[i].position,
              velocity: math.Vec2.ZERO
            });
            const force = strand[i].force;
            force.normalize();
            strand[i] = strand[i].copyWith({
              position: MathExtensions.Vec2.add(strand[i - 1].position, MathExtensions.Vec2.multiplySingle(force, strand[i].radius))
            });

            if (Math.abs(strand[i].position.x) < thresholdValue) {
              strand[i] = strand[i].copyWith({
                position: new math.Vec2(0.0, strand[i].position.y)
              });
            }

            strand[i] = strand[i].copyWith({
              force: math.Vec2.ZERO,
              lastGravity: currentGravity
            });
          }
        }
        /** Initializes this. */


        initialize() {
          var _this$rig;

          const strand = this.particles; // Initialize the top of particle.

          const gravity = (_this$rig = this.rig) == null ? void 0 : _this$rig.gravity;

          if (gravity == null) {
            console.assert(gravity != null);
            return;
          }

          strand[0] = strand[0].copyWith({
            initialPosition: math.Vec2.ZERO.clone(),
            lastPosition: math.Vec2.ZERO.clone(),
            lastGravity: new math.Vec2(gravity.x, gravity.y * -1.0)
          }); // Initialize particles.

          for (let i = 1; i < strand.length; i++) {
            var _this$rig2;

            const gravity = (_this$rig2 = this.rig) == null ? void 0 : _this$rig2.gravity;

            if (gravity == null) {
              console.assert(gravity != null);
              return;
            }

            const radius = new math.Vec2(0, strand[i].radius);
            const initialPosition = Vec2.add(strand[i - 1].initialPosition, radius);
            const position = initialPosition.clone();
            const lastPosition = initialPosition.clone();
            strand[i] = strand[i].copyWith({
              initialPosition: initialPosition,
              position: position,
              lastPosition: lastPosition,
              lastGravity: new math.Vec2(gravity.x, gravity.y * -1.0)
            });
          } // Initialize inputs.


          for (let i = 0; i < this.input.length; i++) {
            this.input[i].initializeGetter();
          }

          this._previousRigOutput = new SubRigPhysicsOutput();
          this._currentRigOutput = new SubRigPhysicsOutput(); // Initialize outputs.

          for (let i = 0; i < this.output.length; i++) {
            this.output[i].initializeGetter();
          }
        }
        /**
         * Evaluate rig in every frame.
         * @param deltaTime
         */


        evaluate(deltaTime) {
          if (EDITOR && isImporter()) {
            // Importer から呼び出されても処理を行いません。
            return;
          }

          let totalAngle = 0.0;
          let totalTranslation = math.Vec2.ZERO.clone();
          const {
            rig,
            normalization,
            particles,
            _currentRigOutput,
            _previousRigOutput
          } = this;

          if (rig == null || normalization == null) {
            console.assert(rig != null);
            console.assert(normalization != null);
            return;
          }

          const {
            controller
          } = rig;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          const {
            parameters
          } = controller;

          if (parameters == null) {
            console.assert(parameters != null);
            return;
          }

          for (let i = 0; i < this.input.length; i++) {
            var _input$source, _input$sourceId;

            const input = this.input[i];
            const weight = input.weight / CubismPhysics.maximumWeight;

            if (input.getNormalizedParameterValue == null) {
              console.assert(input.getNormalizedParameterValue != null);
              continue;
            }

            (_input$source = input.source) != null ? _input$source : input.source = ArrayExtensionMethods.findByIdFromParameters(parameters, (_input$sourceId = input.sourceId) != null ? _input$sourceId : '');
            const parameter = input.source;

            if (parameter == null) {
              console.assert(parameter != null);
              continue;
            }

            let index = parameters.indexOf(parameter);
            const funcResult = input.getNormalizedParameterValue(totalTranslation, totalAngle, parameter, rig.parametersCache[index], normalization, weight);
            rig.parametersCache[index] = funcResult.parameterValue;
            totalTranslation = funcResult.translation;
            totalAngle = funcResult.angle;
          }

          const radAngle = CubismPhysicsMath.degreesToRadian(-totalAngle);
          {
            const x = totalTranslation.x * Math.cos(radAngle) - totalTranslation.y * Math.sin(radAngle);
            const y = x * Math.sin(radAngle) + totalTranslation.y * Math.cos(radAngle);
            totalTranslation = new math.Vec2(x, y);
          }
          this.updateParticles(particles, totalTranslation, totalAngle, rig.wind, CubismPhysics.movementThreshold * normalization.position.maximum, deltaTime);

          for (let i = 0; i < this.output.length; i++) {
            var _output$destination2, _output$destinationId2;

            const output = this.output[i];
            const particleIndex = output.particleIndex;

            if (particleIndex < 1 || particleIndex >= particles.length) {
              break;
            }

            (_output$destination2 = output.destination) != null ? _output$destination2 : output.destination = ArrayExtensionMethods.findByIdFromParameters(parameters, (_output$destinationId2 = output.destinationId) != null ? _output$destinationId2 : '');
            const {
              destination
            } = output;

            if (destination == null) {
              console.assert(destination != null);
              continue;
            }

            const index = parameters.indexOf(destination);
            const translation = Vec2.subtract(particles[particleIndex].position, particles[particleIndex - 1].position);
            const parameter = destination;

            if (output.getValue == null) {
              console.assert(output.getValue != null);
              return;
            }

            const outputValue = output.getValue(translation, particles, particleIndex, rig.gravity);
            _currentRigOutput.output[i] = outputValue;
            _previousRigOutput.output[i] = outputValue;
            destination.value = this.updateOutputParameterValue(parameter, destination.value, outputValue, output);
            rig.parametersCache[index] = parameter.value;
          }
        }
        /** Calculate the state in which the physics operation stabilizes at the current parameter values. */


        stabilization() {
          //#region Assertion
          const {
            rig,
            normalization,
            particles,
            _previousRigOutput,
            _currentRigOutput
          } = this;

          if (rig == null || normalization == null) {
            console.assert(rig != null);
            console.assert(normalization != null);
            return;
          }

          const {
            controller
          } = rig;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          const {
            parameters
          } = controller;

          if (parameters == null) {
            console.assert(parameters != null);
            return;
          } //#endregion


          let totalAngle = 0.0;
          let totalTranslation = math.Vec2.ZERO;

          for (let i = 0; i < this.input.length; i++) {
            var _input$source2, _input$sourceId2;

            const input = this.input[i];

            if (input.getNormalizedParameterValue == null) {
              console.assert(input.getNormalizedParameterValue != null);
              continue;
            }

            const weight = input.weight / CubismPhysics.maximumWeight;
            (_input$source2 = input.source) != null ? _input$source2 : input.source = ArrayExtensionMethods.findByIdFromParameters(parameters, (_input$sourceId2 = input.sourceId) != null ? _input$sourceId2 : '');
            const {
              source
            } = input;

            if (source == null) {
              console.assert(source != null);
              continue;
            }

            const index = parameters.findIndex((value, _i, _a) => value === this.input[i].source);
            const parameter = source;
            const result = input.getNormalizedParameterValue(totalTranslation, totalAngle, parameter, source.value, normalization, weight);
            totalTranslation = result.translation;
            totalAngle = result.angle;
            source.value = result.parameterValue;
            rig.parametersCache[index] = source.value;
          }

          const radAngle = CubismPhysicsMath.degreesToRadian(-totalAngle);
          {
            const x = totalTranslation.x * Math.cos(radAngle) - totalTranslation.y * Math.sin(radAngle);
            const y = x * Math.sin(radAngle) + totalTranslation.y * Math.cos(radAngle);
            totalTranslation = new math.Vec2(x, y);
          }
          this.updateParticlesForStabilization(particles, totalTranslation, totalAngle, rig.wind, CubismPhysics.movementThreshold * normalization.position.maximum);

          for (let i = 0; i < this.output.length; i++) {
            var _output$destination3, _output$destinationId3;

            const output = this.output[i];

            if (output.getValue == null) {
              console.assert(output.getValue != null);
              continue;
            }

            _previousRigOutput.output[i] = _currentRigOutput.output[i];
            (_output$destination3 = output.destination) != null ? _output$destination3 : output.destination = ArrayExtensionMethods.findByIdFromParameters(parameters, (_output$destinationId3 = output.destinationId) != null ? _output$destinationId3 : '');

            if (output.destination == null) {
              continue;
            }

            const {
              particleIndex
            } = output;

            if (particleIndex < 1 || particleIndex >= this.particles.length) {
              continue;
            }

            const index = parameters.indexOf(output.destination);
            const translation = MathExtensions.Vec2.subtract(particles[particleIndex].position, particles[particleIndex - 1].position);
            const parameter = output.destination;
            const outputValue = output.getValue(translation, particles, particleIndex, rig.gravity);
            _currentRigOutput.output[i] = outputValue;
            _previousRigOutput.output[i] = outputValue;
            output.destination.value = this.updateOutputParameterValue(parameter, output.destination.value, outputValue, this.output[i]);
            rig.parametersCache[index] = output.destination.value;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "input", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "output", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "particles", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "normalization", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "_rig", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "_currentRigOutput", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new SubRigPhysicsOutput();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "_previousRigOutput", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new SubRigPhysicsOutput();
        }
      })), _class3)) || _class2));

      SubRigPhysicsOutput = class SubRigPhysicsOutput {
        constructor(args = {}) {
          var _args$output;

          this.output = new Array(0);
          this.output = (_args$output = args.output) != null ? _args$output : new Array(0);
        }

        copyWith(args = {}) {
          var _args$output2;

          return new SubRigPhysicsOutput({
            output: (_args$output2 = args.output) != null ? _args$output2 : this.output
          });
        }

        equals(other) {
          return this === other || this.output == other.output;
        }

        strictEquals(other) {
          return this === other;
        }

      };

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=367b822308ad764dd14b7dd673949603a1a59890.js.map
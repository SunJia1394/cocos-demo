System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, _decorator, ArrayExtensionMethods, CubismPhysics, CubismPhysicsInput, CubismPhysicsMath, CubismPhysicsNormalization, CubismPhysicsOutput, CubismPhysicsParticle, isImporter, MathExtensions, EDITOR, SubRigPhysicsOutput, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, property, ccclass, Vec2, CubismPhysicsSubRig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfArrayExtensionMethods(extras) {
    _reporterNs.report("ArrayExtensionMethods", "../../Core/ArrayExtensionMethods", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysics(extras) {
    _reporterNs.report("CubismPhysics", "./CubismPhysics", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsInput(extras) {
    _reporterNs.report("CubismPhysicsInput", "./CubismPhysicsInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsMath(extras) {
    _reporterNs.report("CubismPhysicsMath", "./CubismPhysicsMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsNormalization(extras) {
    _reporterNs.report("CubismPhysicsNormalization", "./CubismPhysicsNormalization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsOutput(extras) {
    _reporterNs.report("CubismPhysicsOutput", "./CubismPhysicsOutput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsParticle(extras) {
    _reporterNs.report("CubismPhysicsParticle", "./CubismPhysicsParticle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismPhysicsRig(extras) {
    _reporterNs.report("CubismPhysicsRig", "./CubismPhysicsRig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismParameter(extras) {
    _reporterNs.report("CubismParameter", "../../Core/CubismParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStructLike(extras) {
    _reporterNs.report("IStructLike", "../../IStructLike", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisImporter(extras) {
    _reporterNs.report("isImporter", "../../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathExtensions(extras) {
    _reporterNs.report("MathExtensions", "../../Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ArrayExtensionMethods = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismPhysics = _unresolved_3.default;
    }, function (_unresolved_4) {
      CubismPhysicsInput = _unresolved_4.default;
    }, function (_unresolved_5) {
      CubismPhysicsMath = _unresolved_5.default;
    }, function (_unresolved_6) {
      CubismPhysicsNormalization = _unresolved_6.default;
    }, function (_unresolved_7) {
      CubismPhysicsOutput = _unresolved_7.default;
    }, function (_unresolved_8) {
      CubismPhysicsParticle = _unresolved_8.default;
    }, function (_unresolved_9) {
      isImporter = _unresolved_9.isImporter;
      MathExtensions = _unresolved_9.MathExtensions;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

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
      } = _crd && MathExtensions === void 0 ? (_reportPossibleCrUseOfMathExtensions({
        error: Error()
      }), MathExtensions) : MathExtensions);

      _export("default", CubismPhysicsSubRig = (_dec = ccclass('CubismPhysicsSubRig'), _dec2 = property({
        type: [_crd && CubismPhysicsInput === void 0 ? (_reportPossibleCrUseOfCubismPhysicsInput({
          error: Error()
        }), CubismPhysicsInput) : CubismPhysicsInput],
        serializable: true
      }), _dec3 = property({
        type: [_crd && CubismPhysicsOutput === void 0 ? (_reportPossibleCrUseOfCubismPhysicsOutput({
          error: Error()
        }), CubismPhysicsOutput) : CubismPhysicsOutput],
        serializable: true
      }), _dec4 = property({
        type: [_crd && CubismPhysicsParticle === void 0 ? (_reportPossibleCrUseOfCubismPhysicsParticle({
          error: Error()
        }), CubismPhysicsParticle) : CubismPhysicsParticle],
        serializable: true
      }), _dec5 = property({
        type: _crd && CubismPhysicsNormalization === void 0 ? (_reportPossibleCrUseOfCubismPhysicsNormalization({
          error: Error()
        }), CubismPhysicsNormalization) : CubismPhysicsNormalization,
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
          var {
            rig
          } = this;

          if (rig == null) {
            console.assert(rig != null);
            return;
          }

          var {
            controller
          } = rig;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          var {
            parameters
          } = controller;

          if (parameters == null) {
            console.assert(parameters != null);
            return;
          } //#endregion
          // Load input parameters.


          for (var i = 0; i < this.output.length; i++) {
            var _output$destination, _output$destinationId;

            var output = this.output[i];
            (_output$destination = output.destination) != null ? _output$destination : output.destination = (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).findByIdFromParameters(parameters, (_output$destinationId = output.destinationId) != null ? _output$destinationId : '');

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


          var outputScale = output.getScale();
          var value = translation * outputScale;

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

          var weight = output.weight / (_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
            error: Error()
          }), CubismPhysics) : CubismPhysics).maximumWeight;

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
          var totalRadian = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).degreesToRadian(totalAngle);
          var currentGravity = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).radianToDirection(totalRadian);
          currentGravity.normalize();

          var _loop = function _loop(i) {
            var {
              acceleration
            } = strand[i];
            strand[i] = strand[i].copyWith({
              force: Vec2.add(Vec2.multiplySingle(currentGravity, acceleration), wind),
              lastPosition: strand[i].position
            }); // The Cubism Editor expects 30 FPS so we scale here by 30...

            var delay = strand[i].delay * deltaTime * 30.0;

            var direction = (() => {
              var tmp = Vec2.subtract(strand[i].position, strand[i - 1].position);
              var radian = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
                error: Error()
              }), CubismPhysicsMath) : CubismPhysicsMath).directionToRadian(strand[i].lastGravity, currentGravity) / (_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
                error: Error()
              }), CubismPhysics) : CubismPhysics).airResistance;
              var x = Math.cos(radian) * tmp.x - tmp.y * Math.sin(radian);
              var y = Math.sin(radian) * x + tmp.y * Math.cos(radian);
              return new math.Vec2(x, y);
            })();

            strand[i] = strand[i].copyWith({
              position: Vec2.add(strand[i - 1].position, direction)
            });
            var velocity = Vec2.multiplySingle(strand[i].velocity, delay);
            var force = Vec2.multiplySingle(strand[i].force, delay * delay);
            strand[i] = strand[i].copyWith({
              position: Vec2.add(Vec2.add(strand[i].position, velocity), force)
            });
            var newDirection = Vec2.subtract(strand[i].position, strand[i - 1].position).normalize();
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
          };

          for (var i = 1; i < strand.length; i++) {
            _loop(i);
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
          var totalRadian = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).degreesToRadian(totalAngle);
          var currentGravity = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).radianToDirection(totalRadian);
          currentGravity.normalize();

          for (var i = 1; i < strand.length; i++) {
            strand[i] = strand[i].copyWith({
              force: (_crd && MathExtensions === void 0 ? (_reportPossibleCrUseOfMathExtensions({
                error: Error()
              }), MathExtensions) : MathExtensions).Vec2.add((_crd && MathExtensions === void 0 ? (_reportPossibleCrUseOfMathExtensions({
                error: Error()
              }), MathExtensions) : MathExtensions).Vec2.multiplySingle(currentGravity, strand[i].acceleration), wind),
              lastPosition: strand[i].position,
              velocity: math.Vec2.ZERO
            });
            var force = strand[i].force;
            force.normalize();
            strand[i] = strand[i].copyWith({
              position: (_crd && MathExtensions === void 0 ? (_reportPossibleCrUseOfMathExtensions({
                error: Error()
              }), MathExtensions) : MathExtensions).Vec2.add(strand[i - 1].position, (_crd && MathExtensions === void 0 ? (_reportPossibleCrUseOfMathExtensions({
                error: Error()
              }), MathExtensions) : MathExtensions).Vec2.multiplySingle(force, strand[i].radius))
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

          var strand = this.particles; // Initialize the top of particle.

          var gravity = (_this$rig = this.rig) == null ? void 0 : _this$rig.gravity;

          if (gravity == null) {
            console.assert(gravity != null);
            return;
          }

          strand[0] = strand[0].copyWith({
            initialPosition: math.Vec2.ZERO.clone(),
            lastPosition: math.Vec2.ZERO.clone(),
            lastGravity: new math.Vec2(gravity.x, gravity.y * -1.0)
          }); // Initialize particles.

          for (var i = 1; i < strand.length; i++) {
            var _this$rig2;

            var _gravity = (_this$rig2 = this.rig) == null ? void 0 : _this$rig2.gravity;

            if (_gravity == null) {
              console.assert(_gravity != null);
              return;
            }

            var radius = new math.Vec2(0, strand[i].radius);
            var initialPosition = Vec2.add(strand[i - 1].initialPosition, radius);
            var position = initialPosition.clone();
            var lastPosition = initialPosition.clone();
            strand[i] = strand[i].copyWith({
              initialPosition: initialPosition,
              position: position,
              lastPosition: lastPosition,
              lastGravity: new math.Vec2(_gravity.x, _gravity.y * -1.0)
            });
          } // Initialize inputs.


          for (var _i2 = 0; _i2 < this.input.length; _i2++) {
            this.input[_i2].initializeGetter();
          }

          this._previousRigOutput = new SubRigPhysicsOutput();
          this._currentRigOutput = new SubRigPhysicsOutput(); // Initialize outputs.

          for (var _i3 = 0; _i3 < this.output.length; _i3++) {
            this.output[_i3].initializeGetter();
          }
        }
        /**
         * Evaluate rig in every frame.
         * @param deltaTime
         */


        evaluate(deltaTime) {
          if (EDITOR && (_crd && isImporter === void 0 ? (_reportPossibleCrUseOfisImporter({
            error: Error()
          }), isImporter) : isImporter)()) {
            // Importer から呼び出されても処理を行いません。
            return;
          }

          var totalAngle = 0.0;
          var totalTranslation = math.Vec2.ZERO.clone();
          var {
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

          var {
            controller
          } = rig;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          var {
            parameters
          } = controller;

          if (parameters == null) {
            console.assert(parameters != null);
            return;
          }

          for (var i = 0; i < this.input.length; i++) {
            var _input$source, _input$sourceId;

            var input = this.input[i];
            var weight = input.weight / (_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
              error: Error()
            }), CubismPhysics) : CubismPhysics).maximumWeight;

            if (input.getNormalizedParameterValue == null) {
              console.assert(input.getNormalizedParameterValue != null);
              continue;
            }

            (_input$source = input.source) != null ? _input$source : input.source = (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).findByIdFromParameters(parameters, (_input$sourceId = input.sourceId) != null ? _input$sourceId : '');
            var parameter = input.source;

            if (parameter == null) {
              console.assert(parameter != null);
              continue;
            }

            var index = parameters.indexOf(parameter);
            var funcResult = input.getNormalizedParameterValue(totalTranslation, totalAngle, parameter, rig.parametersCache[index], normalization, weight);
            rig.parametersCache[index] = funcResult.parameterValue;
            totalTranslation = funcResult.translation;
            totalAngle = funcResult.angle;
          }

          var radAngle = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).degreesToRadian(-totalAngle);
          {
            var x = totalTranslation.x * Math.cos(radAngle) - totalTranslation.y * Math.sin(radAngle);
            var y = x * Math.sin(radAngle) + totalTranslation.y * Math.cos(radAngle);
            totalTranslation = new math.Vec2(x, y);
          }
          this.updateParticles(particles, totalTranslation, totalAngle, rig.wind, (_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
            error: Error()
          }), CubismPhysics) : CubismPhysics).movementThreshold * normalization.position.maximum, deltaTime);

          for (var _i4 = 0; _i4 < this.output.length; _i4++) {
            var _output$destination2, _output$destinationId2;

            var output = this.output[_i4];
            var particleIndex = output.particleIndex;

            if (particleIndex < 1 || particleIndex >= particles.length) {
              break;
            }

            (_output$destination2 = output.destination) != null ? _output$destination2 : output.destination = (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).findByIdFromParameters(parameters, (_output$destinationId2 = output.destinationId) != null ? _output$destinationId2 : '');
            var {
              destination
            } = output;

            if (destination == null) {
              console.assert(destination != null);
              continue;
            }

            var _index = parameters.indexOf(destination);

            var translation = Vec2.subtract(particles[particleIndex].position, particles[particleIndex - 1].position);
            var _parameter = destination;

            if (output.getValue == null) {
              console.assert(output.getValue != null);
              return;
            }

            var outputValue = output.getValue(translation, particles, particleIndex, rig.gravity);
            _currentRigOutput.output[_i4] = outputValue;
            _previousRigOutput.output[_i4] = outputValue;
            destination.value = this.updateOutputParameterValue(_parameter, destination.value, outputValue, output);
            rig.parametersCache[_index] = _parameter.value;
          }
        }
        /** Calculate the state in which the physics operation stabilizes at the current parameter values. */


        stabilization() {
          var _this = this;

          //#region Assertion
          var {
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

          var {
            controller
          } = rig;

          if (controller == null) {
            console.assert(controller != null);
            return;
          }

          var {
            parameters
          } = controller;

          if (parameters == null) {
            console.assert(parameters != null);
            return;
          } //#endregion


          var totalAngle = 0.0;
          var totalTranslation = math.Vec2.ZERO;

          var _loop2 = function _loop2(i) {
            var _input$source2, _input$sourceId2;

            var input = _this.input[i];

            if (input.getNormalizedParameterValue == null) {
              console.assert(input.getNormalizedParameterValue != null);
              return 0; // continue
            }

            var weight = input.weight / (_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
              error: Error()
            }), CubismPhysics) : CubismPhysics).maximumWeight;
            (_input$source2 = input.source) != null ? _input$source2 : input.source = (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).findByIdFromParameters(parameters, (_input$sourceId2 = input.sourceId) != null ? _input$sourceId2 : '');
            var {
              source
            } = input;

            if (source == null) {
              console.assert(source != null);
              return 0; // continue
            }

            var index = parameters.findIndex((value, _i, _a) => value === _this.input[i].source);
            var parameter = source;
            var result = input.getNormalizedParameterValue(totalTranslation, totalAngle, parameter, source.value, normalization, weight);
            totalTranslation = result.translation;
            totalAngle = result.angle;
            source.value = result.parameterValue;
            rig.parametersCache[index] = source.value;
          },
              _ret;

          for (var i = 0; i < this.input.length; i++) {
            _ret = _loop2(i);
            if (_ret === 0) continue;
          }

          var radAngle = (_crd && CubismPhysicsMath === void 0 ? (_reportPossibleCrUseOfCubismPhysicsMath({
            error: Error()
          }), CubismPhysicsMath) : CubismPhysicsMath).degreesToRadian(-totalAngle);
          {
            var x = totalTranslation.x * Math.cos(radAngle) - totalTranslation.y * Math.sin(radAngle);
            var y = x * Math.sin(radAngle) + totalTranslation.y * Math.cos(radAngle);
            totalTranslation = new math.Vec2(x, y);
          }
          this.updateParticlesForStabilization(particles, totalTranslation, totalAngle, rig.wind, (_crd && CubismPhysics === void 0 ? (_reportPossibleCrUseOfCubismPhysics({
            error: Error()
          }), CubismPhysics) : CubismPhysics).movementThreshold * normalization.position.maximum);

          for (var _i5 = 0; _i5 < this.output.length; _i5++) {
            var _output$destination3, _output$destinationId3;

            var output = this.output[_i5];

            if (output.getValue == null) {
              console.assert(output.getValue != null);
              continue;
            }

            _previousRigOutput.output[_i5] = _currentRigOutput.output[_i5];
            (_output$destination3 = output.destination) != null ? _output$destination3 : output.destination = (_crd && ArrayExtensionMethods === void 0 ? (_reportPossibleCrUseOfArrayExtensionMethods({
              error: Error()
            }), ArrayExtensionMethods) : ArrayExtensionMethods).findByIdFromParameters(parameters, (_output$destinationId3 = output.destinationId) != null ? _output$destinationId3 : '');

            if (output.destination == null) {
              continue;
            }

            var {
              particleIndex
            } = output;

            if (particleIndex < 1 || particleIndex >= this.particles.length) {
              continue;
            }

            var index = parameters.indexOf(output.destination);
            var translation = (_crd && MathExtensions === void 0 ? (_reportPossibleCrUseOfMathExtensions({
              error: Error()
            }), MathExtensions) : MathExtensions).Vec2.subtract(particles[particleIndex].position, particles[particleIndex - 1].position);
            var parameter = output.destination;
            var outputValue = output.getValue(translation, particles, particleIndex, rig.gravity);
            _currentRigOutput.output[_i5] = outputValue;
            _previousRigOutput.output[_i5] = outputValue;
            output.destination.value = this.updateOutputParameterValue(parameter, output.destination.value, outputValue, this.output[_i5]);
            rig.parametersCache[index] = output.destination.value;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "input", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "output", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "particles", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "normalization", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "_rig", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "_currentRigOutput", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new SubRigPhysicsOutput();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "_previousRigOutput", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new SubRigPhysicsOutput();
        }
      })), _class3)) || _class2));

      SubRigPhysicsOutput = class SubRigPhysicsOutput {
        constructor(args) {
          var _args$output;

          if (args === void 0) {
            args = {};
          }

          this.output = new Array(0);
          this.output = (_args$output = args.output) != null ? _args$output : new Array(0);
        }

        copyWith(args) {
          var _args$output2;

          if (args === void 0) {
            args = {};
          }

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

      _crd = false;
    }
  };
});
//# sourceMappingURL=f409cb669c8a742df7191818eae93f32aaecc4a7.js.map
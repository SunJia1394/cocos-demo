System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, CCInteger, Color, math, utils, _decorator, Bounds, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, CubismMeshPrimitive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBounds(extras) {
    _reporterNs.report("Bounds", "../Core/CubismGeometry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      Color = _cc.Color;
      math = _cc.math;
      utils = _cc.utils;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Bounds = _unresolved_2.CubismBounds;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9015etHzgxH0ZwKDWd2/Gv8", "CubismMeshPrimitive", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['CCFloat', 'CCInteger', 'Color', 'math', 'Mesh', 'primitives', 'utils', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CubismMeshPrimitive = (_dec = ccclass('CubismMeshPrimitive'), _dec2 = property({
        type: [CCFloat]
      }), _dec3 = property({
        type: [CCFloat]
      }), _dec4 = property({
        type: [CCFloat]
      }), _dec5 = property({
        type: [CCInteger]
      }), _dec(_class = (_class2 = class CubismMeshPrimitive {
        get indexCount() {
          return this._rawIndices.length;
        }

        setColors(source) {
          this._rawColors.length = source.length * 4;

          for (var i = 0; i < source.length; i++) {
            this._rawColors[i * 4 + 0] = source[i].x;
            this._rawColors[i * 4 + 1] = source[i].y;
            this._rawColors[i * 4 + 2] = source[i].z;
            this._rawColors[i * 4 + 3] = source[i].w;
          }
        }

        setColorsFromRaw(source) {
          this._rawColors.length = source.length;

          for (var i = 0; i < source.length; i++) {
            this._rawColors[i] = source[i];
          }
        }

        getIndices() {
          return this._rawIndices;
        }

        setIndices(source) {
          this._rawIndices.length = source.length;

          for (var i = 0; i < source.length; i++) {
            this._rawIndices[i] = source[i];
          }
        }

        constructor(positions, uvs, colors, indices) {
          if (positions === void 0) {
            positions = [];
          }

          if (uvs === void 0) {
            uvs = [];
          }

          if (colors === void 0) {
            colors = [];
          }

          if (indices === void 0) {
            indices = [];
          }

          _initializerDefineProperty(this, "_rawPositions", _descriptor, this);

          _initializerDefineProperty(this, "_rawUvs", _descriptor2, this);

          _initializerDefineProperty(this, "_rawColors", _descriptor3, this);

          _initializerDefineProperty(this, "_rawIndices", _descriptor4, this);

          this._rawPositions = positions;
          this._rawUvs = uvs;
          this._rawColors = colors;
          this._rawIndices = indices;
        }

        static from(positions, uvs, colors) {
          var count = positions.length / 3;

          if (count != uvs.length / 2 || count != colors.length / 4) {
            return null;
          }

          var instance = new CubismMeshPrimitive(Array.from(positions), Array.from(uvs), Array.from(colors));
          return instance;
        }

        static makeEmpty() {
          return new CubismMeshPrimitive([], [], []);
        }

        get vertexCount() {
          return this._rawPositions.length / 3;
        }

        getPositions() {
          var raw = this._rawPositions;
          var positions = new Array(raw.length / 3);

          for (var i = 0; i < positions.length; i++) {
            var j = i * 3;
            positions[i] = new math.Vec3(raw[j + 0], raw[j + 1], raw[j + 2]);
          }

          return positions;
        }

        setPositions(source) {
          this._rawPositions.length = source.length * 3;

          for (var i = 0; i < source.length; i++) {
            this._rawPositions[i * 3 + 0] = source[i].x;
            this._rawPositions[i * 3 + 1] = source[i].y;
            this._rawPositions[i * 3 + 2] = source[i].z;
          }
        }

        getUvs() {
          var raw = this._rawUvs;
          var uvs = new Array(raw.length / 4);

          for (var i = 0; i < uvs.length; i++) {
            var j = i * 2;
            uvs[i] = new math.Vec2(raw[j + 0], raw[j + 1]);
          }

          return uvs;
        }

        getColors() {
          var raw = this._rawColors;
          var colors = new Array(raw.length / 4);

          for (var i = 0; i < colors.length; i++) {
            var j = i * 4;
            colors[i] = new Color(raw[j + 0], raw[j + 1], raw[j + 2], raw[j + 3]);
          }

          return colors;
        }

        createRuntimeMeshPrimitive() {
          return {
            positions: this._rawPositions,
            uvs: this._rawUvs,
            colors: this._rawColors,
            indices: this._rawIndices
          };
        }

        createMesh() {
          return this._rawPositions.length == 0 ? null : utils.MeshUtils.createMesh(this.createRuntimeMeshPrimitive(), undefined, {
            calculateBounds: true
          });
        }

        calculateBounds() {
          var positions = this._rawPositions;

          if (positions.length == 0) {
            return new (_crd && Bounds === void 0 ? (_reportPossibleCrUseOfBounds({
              error: Error()
            }), Bounds) : Bounds)(0, 0, 0, 0, 0, 0);
          }

          var min = {
            x: positions[0],
            y: positions[1],
            z: positions[2]
          };
          var max = {
            x: min.x,
            y: min.y,
            z: min.z
          };
          var count = Math.trunc(positions.length / 3);

          for (var i = 1; i < count; i++) {
            var x = positions[i * 3 + 0];
            var y = positions[i * 3 + 1];
            var z = positions[i * 3 + 2];
            min.x = x < min.x ? x : min.x;
            min.y = y < min.y ? y : min.y;
            min.z = z < min.z ? z : min.z;
            max.x = x > max.x ? x : max.x;
            max.y = y > max.y ? y : max.y;
            max.z = z > max.z ? z : max.z;
          }

          var o = {
            x: 0,
            y: 0,
            z: 0
          };
          math.Vec3.lerp(o, min, max, 0.5);
          return new (_crd && Bounds === void 0 ? (_reportPossibleCrUseOfBounds({
            error: Error()
          }), Bounds) : Bounds)(o.x, o.y, o.z, (max.x - min.x) * 0.5, (max.y - min.y) * 0.5, (max.z - min.z) * 0.5);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_rawPositions", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_rawUvs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_rawColors", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_rawIndices", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9ce593890613095ba80068c60c8299572b2702d.js.map
System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RichText, Camera, geometry, input, Input, math, game, CubismModel, CubismRaycaster, CubismRaycastHit, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, ccclass, property, RaycastHitDisplay;

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
      RichText = _cc.RichText;
      Camera = _cc.Camera;
      geometry = _cc.geometry;
      input = _cc.input;
      Input = _cc.Input;
      math = _cc.math;
      game = _cc.game;
    }, function (_unresolved_) {
      CubismModel = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismRaycaster = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismRaycastHit = _unresolved_3.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "636a5ijnj5JP4Z2stSspnkL", "RaycastHitDisplay", undefined);

      __checkObsolete__(['_decorator', 'Component', 'RichText', 'Camera', 'geometry', 'input', 'Input', 'EventMouse', 'math', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RaycastHitDisplay", RaycastHitDisplay = (_dec = ccclass('RaycastHitDisplay'), _dec2 = property({
        type: CubismModel,
        serializable: true
      }), _dec3 = property({
        type: RichText,
        serializable: true
      }), _dec4 = property({
        serializable: false
      }), _dec5 = property({
        type: Camera,
        serializable: true,
        visible: true
      }), _dec(_class = (_class2 = class RaycastHitDisplay extends Component {
        constructor() {
          super(...arguments);

          /** <see cref="CubismModel"/> to cast rays against. */
          _initializerDefineProperty(this, "model", _descriptor, this);

          /** UI element to display results in. */
          _initializerDefineProperty(this, "resultsText", _descriptor2, this);

          /** <see cref="CubismRaycaster"/> attached to <see cref="Model"/>. */
          _initializerDefineProperty(this, "_raycaster", _descriptor3, this);

          /** Buffer for raycast results. */
          this._results = new Array(4);

          _initializerDefineProperty(this, "_camera", _descriptor4, this);

          this._mouseDownEventData = null;
          this.bindedMouseDownEventHandler = this.mouseDownEventHandler.bind(this);
        }

        get raycaster() {
          return this._raycaster;
        }

        set raycaster(value) {
          this._raycaster = value;
        }

        get results() {
          return this._results;
        }

        set results(value) {
          this._results = value;
        }

        get camera() {
          return this._camera;
        }

        set camera(value) {
          this._camera = value;
        }
        /** Hit test. */


        doRaycast() {
          var {
            camera,
            raycaster,
            resultsText,
            results,
            _mouseDownEventData
          } = this;

          if (camera == null) {
            return;
          }

          if (raycaster == null) {
            return;
          }

          if (resultsText == null) {
            return;
          }

          if (results == null) {
            return;
          }

          if (_mouseDownEventData == null) {
            return;
          }

          if (game.canvas == null) {
            return;
          }

          var x = _mouseDownEventData.x / game.canvas.width;
          var y = _mouseDownEventData.y / game.canvas.height; // Cast ray from pointer position.
          // Input.mousePosition

          var ray = camera.screenPointToRay(_mouseDownEventData.x, _mouseDownEventData.y, new geometry.Ray());
          var hitCount = raycaster.raycast2(ray, this.results); // Return early if nothing was hit.

          if (hitCount == 0) {
            resultsText.string = '0\n';
            return;
          } // Show results.


          resultsText.string = hitCount + '\n';

          for (var i = 0; i < hitCount; i++) {
            var drawable = results[i].drawable;

            if (drawable != null) {
              resultsText.string += drawable.name + '\n';
            }
          }
        } //#region Cocos Creator Event Handling

        /** Called by Cocos Creator. Initializes instance. */


        start() {
          var {
            model,
            resultsText,
            results
          } = this;

          if (model == null) {
            return;
          }

          if (resultsText == null) {
            return;
          }

          if (results == null) {
            return;
          }

          this.raycaster = model.getComponent(CubismRaycaster);

          for (var i = 0; i < results.length; i++) {
            results[i] = new CubismRaycastHit();
          }
        }

        mouseDownEventHandler(event) {
          this._mouseDownEventData = event.getLocation(new math.Vec2());
        }

        onEnable() {
          input.on(Input.EventType.MOUSE_DOWN, this.bindedMouseDownEventHandler, this);
        }

        onDisable() {
          input.off(Input.EventType.MOUSE_DOWN, this.bindedMouseDownEventHandler, this);
          this._mouseDownEventData = null;
        }
        /** Called by Cocos Creator. Triggers raycasting. */


        update() {
          // Return early in case of no user interaction.
          if (this._mouseDownEventData == null) {
            return;
          }

          this.doRaycast();
          this._mouseDownEventData = null;
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resultsText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_raycaster", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_camera", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=48550558f21f923f73041e930315199edfcb940c.js.map
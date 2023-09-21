System.register(["__unresolved_0", "cc", "__unresolved_1", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Camera, MeshRenderer, CCObject, director, Node, renderer, _decorator, math, Layers, CubismMaskTexture, EDITOR, CubismMaskCommandBufferMetadata, _dec, _dec2, _class2, _class3, _crd, ccclass, executeInEditMode, disallowMultiple, requireComponent, CubismMaskCommandBuffer, userLayer19, PROXY_HIDE_FLAGS;

  function _reportPossibleCrUseOfCubismMaskTexture(extras) {
    _reporterNs.report("CubismMaskTexture", "./CubismMaskTexture", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubismRenderer(extras) {
    _reporterNs.report("CubismRenderer", "../CubismRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICubismMaskCommandSource(extras) {
    _reporterNs.report("ICubismMaskCommandSource", "./ICubismMaskCommandSource", _context.meta, extras);
  }

  _export("CubismMaskCommandBufferMetadata", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Camera = _cc.Camera;
      MeshRenderer = _cc.MeshRenderer;
      CCObject = _cc.CCObject;
      director = _cc.director;
      Node = _cc.Node;
      renderer = _cc.renderer;
      _decorator = _cc._decorator;
      math = _cc.math;
      Layers = _cc.Layers;
    }, function (_unresolved_2) {
      CubismMaskTexture = _unresolved_2.default;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d204vBAeVOE7Neav3CsD/3", "CubismMaskCommandBuffer", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Component', 'Camera', 'MeshRenderer', 'CCObject', 'director', 'Node', 'renderer', '_decorator', 'math', 'Layers']);

      ({
        ccclass,
        executeInEditMode,
        disallowMultiple,
        requireComponent
      } = _decorator);
      /** Singleton buffer for Cubism mask related draw commands. */

      _export("default", CubismMaskCommandBuffer = (_dec = ccclass('CubismMaskCommandBuffer'), _dec2 = requireComponent([Camera]), _dec(_class2 = disallowMultiple(_class2 = _dec2(_class2 = executeInEditMode(_class2 = (_class3 = class CubismMaskCommandBuffer extends Component {
        constructor() {
          super(...arguments);
          this._camera = null;
        }

        static get instance() {
          if (!CubismMaskCommandBuffer._instance) {
            CubismMaskCommandBuffer.initialize();
          }

          return CubismMaskCommandBuffer._instance;
        }

        /** Draw command sources. */
        static get sources() {
          return this._sources;
        }

        static set sources(value) {
          this._sources = value;
        }

        /** Command buffer. */
        static get buffer() {
          return this._buffer;
        }

        static set buffer(value) {
          this._buffer = value;
        }
        /** True if Sources are empty. */


        static get containsSources() {
          return this.sources.length > 0;
        }
        /** Makes sure class is initialized for static usage. */


        static initialize() {
          // Initialize containers.
          // Spawn update proxy.
          var proxyName = 'cubism_MaskCommandBuffer';
          var proxy = null; // @ts-ignore

          var persistRootNodes = director._persistRootNodes;

          if (EDITOR) {
            for (var key in persistRootNodes) {
              var obj = Reflect.get(persistRootNodes, key);

              if (obj.name == proxyName) {
                director.removePersistRootNode(obj);
              }
            }
          }

          for (var _key in persistRootNodes) {
            var _obj = Reflect.get(persistRootNodes, _key);

            if (_obj.name == proxyName) {
              proxy = _obj;
              break;
            }
          }

          if (proxy == null) {
            proxy = new Node(proxyName);
            director.addPersistRootNode(proxy);
            CubismMaskCommandBuffer._instance = proxy.addComponent(CubismMaskCommandBuffer);
            console.assert(CubismMaskCommandBuffer._instance);
          }

          proxy.hideFlags = PROXY_HIDE_FLAGS;
        }
        /**
         * Registers a new draw command source.
         * @param source Source to add.
         */


        static addSource(source) {
          // Make sure singleton is initialized.
          CubismMaskCommandBuffer.initialize(); // Prevent same source from being added twice.

          if (this.sources.includes(source)) {
            return;
          } // Add source and force refresh.


          this.sources.push(source);
        }
        /**
         * Deregisters a draw command source.
         * @param source Source to remove.
         */


        static removeSource(source) {
          // Make sure singleton is initialized.
          CubismMaskCommandBuffer.initialize(); // Remove source and force refresh.

          var index = 0;

          for (var i = 0; i < this.sources.length; i++) {
            if (this.sources[i] != source) {
              this.sources[index] = this.sources[i];
              index++;
            }
          }

          this.sources.length = index;
        }

        /** Forces the command buffer to be refreshed. */
        static refreshCommandBuffer() {
          // Clear buffer.
          if (!CubismMaskCommandBuffer.instance) {
            console.warn("CubismMaskCommandBuffer.instance is null.");
            return;
          }

          var renderers = CubismMaskCommandBuffer.instance.getComponentsInChildren(MeshRenderer);

          for (var i = 0; i < renderers.length; i++) {
            var meta = Reflect.get(renderers[i], CubismMaskCommandBuffer.metadataPropertySymbol);

            if (meta) {
              meta.enabled = false;
            }
          } // Enqueue sources.


          for (var _i = 0; _i < this.sources.length; _i++) {
            this.sources[_i].addToCommandBuffer(CubismMaskCommandBuffer.instance);
          }

          for (var _i2 = 0; _i2 < renderers.length; _i2++) {
            var _meta = Reflect.get(renderers[_i2], CubismMaskCommandBuffer.metadataPropertySymbol);

            if (_meta) {
              renderers[_i2].enabled = _meta.enabled;
            }
          }
        }

        get camera() {
          return this._camera;
        } // #region Cocos Creator Event Handling


        onLoad() {
          var _globalMaskTexture$ge, _globalMaskTexture;

          console.info('CubismMaskCommandBuffer.onLoad()');
          var camera = this.getComponent(Camera);

          if (camera == null) {
            camera = this.addComponent(Camera);
          }

          console.assert(camera);
          camera = camera;
          camera.priority = Number.MIN_SAFE_INTEGER;
          this.node.layer = userLayer19 | (EDITOR ? Layers.Enum.EDITOR : 0);
          camera.projection = renderer.scene.CameraProjection.ORTHO;
          camera.visibility = userLayer19 | (EDITOR ? Layers.Enum.EDITOR : 0);
          camera.clearFlags = Camera.ClearFlag.SOLID_COLOR;
          camera.clearColor = new math.Color(0, 0, 0, 0);
          camera.orthoHeight = 1;
          camera.near = -0.5;
          camera.far = 0.5; // TODO: HACK
          // Ignore SceneView camera

          if (EDITOR) {
            // @ts-ignore
            cce.Camera._camera.visibility &= ~userLayer19;
          }

          var targetTexture = (_globalMaskTexture$ge = (_globalMaskTexture = (_crd && CubismMaskTexture === void 0 ? (_reportPossibleCrUseOfCubismMaskTexture({
            error: Error()
          }), CubismMaskTexture) : CubismMaskTexture).globalMaskTexture) == null ? void 0 : _globalMaskTexture.getTextureReference()) != null ? _globalMaskTexture$ge : null;

          if (targetTexture == null) {
            console.error('CubismMaskCommandBuffer.onLoad(): CubismMaskTexture.globalMaskTexture is null.');
            return;
          }

          camera.targetTexture = targetTexture;
          console.assert(camera.targetTexture);
          this._camera = camera;
        }
        /** Executes Buffer. */


        lateUpdate(dt) {
          var scene = director.getScene();

          if (scene == null) {
            console.error('director.getScene() failed.');
            return;
          }

          if (scene.renderScene == null) {
            console.error('director.getScene().renderScene is null.');
            return;
          }

          if (!CubismMaskCommandBuffer.containsSources) {
            return;
          } // Refresh and execute buffer.


          CubismMaskCommandBuffer.refreshCommandBuffer();
        } // #endregion


      }, _class3._instance = null, _class3._sources = new Array(), _class3._buffer = new Map(), _class3.metadataPropertySymbol = Symbol.for('CubismMaskCommandBufferMetadata'), _class3)) || _class2) || _class2) || _class2) || _class2));

      _export("CubismMaskCommandBufferMetadata", CubismMaskCommandBufferMetadata = class CubismMaskCommandBufferMetadata {
        constructor() {
          this.enabled = false;
          this.cubismRenderer = null;
          this.meshRenderer = null;
        }

      });

      userLayer19 = 0x00080000; // 0x00080000

      PROXY_HIDE_FLAGS = CCObject.Flags.DontSave | CCObject.Flags.EditorOnly | CCObject.Flags.DontDestroy | CCObject.Flags.HideInHierarchy;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf3b943a797d5fd19a815960c651f25476f3e48b.js.map
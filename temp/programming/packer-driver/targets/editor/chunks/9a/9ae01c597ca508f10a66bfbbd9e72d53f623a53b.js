System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, MeshRenderer, Node, renderer, CubismDrawable, CubismShaderVariables, CubismMaskCommandBuffer, CubismMaskCommandBufferMetadata, CubismResources, CubismMaskRenderer, userLayer19;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
      MeshRenderer = _cc.MeshRenderer;
      Node = _cc.Node;
      renderer = _cc.renderer;
    }, function (_unresolved_) {
      CubismDrawable = _unresolved_.default;
    }, function (_unresolved_2) {
      CubismShaderVariables = _unresolved_2.default;
    }, function (_unresolved_3) {
      CubismMaskCommandBuffer = _unresolved_3.default;
      CubismMaskCommandBufferMetadata = _unresolved_3.CubismMaskCommandBufferMetadata;
    }, function (_unresolved_4) {
      CubismResources = _unresolved_4.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "306f5d0LslKdLIgQv0wHCm9", "CubismMaskRenderer", undefined);
      /**
       * Copyright(c) Live2D Inc. All rights reserved.
       *
       * Use of this source code is governed by the Live2D Open Software license
       * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
       */


      __checkObsolete__(['Material', 'math', 'MeshRenderer', 'Node', 'renderer']);

      userLayer19 = 0x00080000; // 0x00080000

      /**
       * Renders out a single Cubism mask.
       *
       * Note that - depending on the model - multiple CubismMaskRenderer might be assigned to a single CubismDrawable.
       */

      _export("default", CubismMaskRenderer = class CubismMaskRenderer {
        /** Main renderer. */
        get mainRenderer() {
          return this._mainRenderer;
        }

        set mainRenderer(value) {
          this._mainRenderer = value;
        }

        /** Mask material. */
        get maskMaterial() {
          return this._maskMaterial;
        }

        set maskMaterial(value) {
          this._maskMaterial = value;
        }

        /** Mask culling material. */
        get maskCullingMaterial() {
          return this._maskCullingMaterial;
        }

        set maskCullingMaterial(value) {
          this._maskCullingMaterial = value;
        }

        /** Culling setting. */
        get isCulling() {
          return this._isCulling;
        }

        set isCulling(value) {
          this._isCulling = value;
        }
        /** Bounds of {@link CubismRenderer.mesh}. */


        get meshBounds() {
          const mesh = this._mainRenderer.mesh;
          return mesh.calculateBounds();
        } // #region Ctors

        /** Initializes fields. */


        constructor() {
          /** Mask properties. */
          this._maskTile = math.Vec4.ZERO.clone();

          /** Mask properties. */
          this._maskTransform = math.Vec4.ZERO.clone();
          this._mainRenderer = null;
          this._maskMaterial = null;
          this._maskCullingMaterial = null;
          this._isCulling = false;
          this.maskMaterial = CubismResources.getMaskMaterial();
          this.maskCullingMaterial = CubismResources.getMaskCullingMaterial();
        } // #endregion
        // #region Interface For CubismMaskMaskedJunction

        /**
         * Sets the CubismRenderer to reference.
         * @param value Value to set.
         * @returns Instance.
         */


        setMainRenderer(value) {
          var _this$mainRenderer$no;

          this.mainRenderer = value;
          this.isCulling = !((_this$mainRenderer$no = this.mainRenderer.node.getComponent(CubismDrawable)) != null && _this$mainRenderer$no.isDoubleSided);
          return this;
        }
        /**
         * Sets CubismMaskTile.
         * @param value Value to set.
         * @returns Instance.
         */


        setMaskTile(value) {
          this._maskTile = value.toVec4();
          return this;
        }
        /**
         * Sets CubismMaskTransform.
         * @param value Value to set.
         * @returns Instance.
         */


        setMaskTransform(value) {
          this._maskTransform = value.toVec4();
          return this;
        }
        /**
         * Enqueues
         * @param buffer
         * @returns Buffer to enqueue in.
         */


        addToCommandBuffer(buffer) {
          // Lazily fetch drawable texture and mesh.
          const mainRenderer = this.mainRenderer;

          if (mainRenderer == null) {
            console.error('CubismMaskRenderer.addToCommandBuffer(): mainRenderer is null.');
            return;
          }

          let mainTexture = mainRenderer.mainTexture;
          let mesh = mainRenderer.mesh;

          if (mainTexture == null) {
            console.error('CubismMaskRenderer.addToCommandBuffer(): mainRenderer.mainTexture is null.');
            return;
          }

          if (mesh == null) {
            console.error('CubismMaskRenderer.addToCommandBuffer(): mainRenderer.mesh is null.');
            return;
          }

          if (mainRenderer.meshRenderer == null) {
            console.error('CubismMaskRenderer.addToCommandBuffer(): mainRenderer.meshRenderer is null.');
            return;
          }

          if (mainRenderer.meshRenderer.material == null) {
            console.error('CubismMaskRenderer.addToCommandBuffer(): mainRenderer.meshRenderer.material is null.');
            return;
          }

          console.assert(this.maskMaterial);
          const sym = CubismMaskCommandBuffer.metadataPropertySymbol;

          function findRenderer(renderers) {
            for (let i = 0; i < renderers.length; i++) {
              const meta = Reflect.get(renderers[i], sym);

              if (meta && meta.cubismRenderer == mainRenderer) {
                return meta;
              }
            }

            return undefined;
          }

          if (!CubismMaskCommandBuffer.instance) {
            console.warn(`CubismMaskCommandBuffer.instance is null.`);
            return;
          }

          const maskRenderers = CubismMaskCommandBuffer.instance.getComponentsInChildren(MeshRenderer);
          let meta = findRenderer(maskRenderers);

          if (!meta) {
            var _mainRenderer$node$ge;

            meta = new CubismMaskCommandBufferMetadata();
            const isCulling = !((_mainRenderer$node$ge = mainRenderer.node.getComponent(CubismDrawable)) != null && _mainRenderer$node$ge.isDoubleSided);
            const node = new Node(mainRenderer.node.name);
            buffer.node.addChild(node);
            node.layer = userLayer19;
            meta.cubismRenderer = mainRenderer;
            meta.meshRenderer = node.addComponent(MeshRenderer);
            const maskMaterial = isCulling ? this.maskMaterial : this.maskMaterial;
            meta.meshRenderer.setMaterial(maskMaterial, 0);
            CubismMaskCommandBuffer.buffer.set(mainRenderer, meta.meshRenderer);
          }

          const maskRenderer = meta.meshRenderer;
          const maskMaterial = maskRenderer.getMaterial(0);
          console.assert(maskMaterial);
          const material = new renderer.MaterialInstance({
            parent: maskMaterial
          });
          material.setProperty(CubismShaderVariables.mainTexture, mainTexture);
          material.setProperty(CubismShaderVariables.maskTile, this._maskTile);
          material.setProperty(CubismShaderVariables.maskTransform, this._maskTransform);
          maskRenderer.setMaterialInstance(material, 0);
          console.assert(maskRenderer);
          maskRenderer.mesh = mesh.createMesh();
          meta.enabled = true;
          Reflect.set(maskRenderer, sym, meta);
          maskRenderer.enabled = true;
        } // #endregion;


      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=9ae01c597ca508f10a66bfbbd9e72d53f623a53b.js.map
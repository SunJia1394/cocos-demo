System.register("chunks:///_virtual/Billboarder.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,o,t,a,n,i,c,l,s,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,o=e.inheritsLoose,t=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){n=e.cclegacy,i=e._decorator,c=e.Camera,l=e.Vec3,s=e.renderer,u=e.Component}],execute:function(){var p,d,f,h,m;n._RF.push({},"444101o3PVEkbWEgl+bozaO","Billboarder",void 0);var b=i.ccclass,y=i.property;e("Billboarder",(p=b("Billboarder"),d=y({type:c}),p((m=r((h=function(e){function r(){for(var r,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return r=e.call.apply(e,[this].concat(n))||this,t(r,"cameraToFace",m,a(r)),r}return o(r,e),r.prototype.update=function(e){if(null!=this.cameraToFace){var r=this.node.worldPosition,o=this.cameraToFace.node,t=o.worldPosition,a=o.rotation,n=l.transformQuat(new l,l.UP,a);if(this.cameraToFace.projection==s.scene.CameraProjection.ORTHO){var i=l.transformQuat(new l,l.FORWARD,a),c=l.subtract(new l,r,i);this.node.lookAt(c,n)}else this.node.lookAt(t,n)}},r}(u)).prototype,"cameraToFace",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=h))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/Live2DCubismBuiltinResource",["./Billboarder.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Live2DCubismBuiltinResource', 'chunks:///_virtual/Live2DCubismBuiltinResource'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
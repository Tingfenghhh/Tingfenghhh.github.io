import{G as e,c as s}from"./tsparticles-engine-3b45a3b7.js";class i{init(s){var i;const o=s.container,a=s.options.size.animation;a.enable&&(s.size.velocity=(null!==(i=s.retina.sizeAnimationSpeed)&&void 0!==i?i:o.retina.sizeAnimationSpeed)/100*o.retina.reduceFactor,a.sync||(s.size.velocity*=e()))}isEnabled(e){var s,i,o,a;return!e.destroyed&&!e.spawning&&e.size.enable&&((null!==(s=e.size.maxLoops)&&void 0!==s?s:0)<=0||(null!==(i=e.size.maxLoops)&&void 0!==i?i:0)>0&&(null!==(o=e.size.loops)&&void 0!==o?o:0)<(null!==(a=e.size.maxLoops)&&void 0!==a?a:0))}reset(e){e.size.loops=0}update(e,i){this.isEnabled(e)&&function(e,i){var o,a,n,l,t;const z=(null!==(o=e.size.velocity)&&void 0!==o?o:0)*i.factor,c=e.size.min,d=e.size.max,r=null!==(a=e.size.decay)&&void 0!==a?a:1;if(!(e.destroyed||!e.size.enable||(null!==(n=e.size.maxLoops)&&void 0!==n?n:0)>0&&(null!==(l=e.size.loops)&&void 0!==l?l:0)>(null!==(t=e.size.maxLoops)&&void 0!==t?t:0))){switch(e.size.status){case"increasing":e.size.value>=d?(e.size.status="decreasing",e.size.loops||(e.size.loops=0),e.size.loops++):e.size.value+=z;break;case"decreasing":e.size.value<=c?(e.size.status="increasing",e.size.loops||(e.size.loops=0),e.size.loops++):e.size.value-=z}e.size.velocity&&1!==r&&(e.size.velocity*=r),function(e,s,i,o){switch(e.options.size.animation.destroy){case"max":s>=o&&e.destroy();break;case"min":s<=i&&e.destroy()}}(e,e.size.value,c,d),e.destroyed||(e.size.value=s(e.size.value,c,d))}}(e,i)}}async function o(e){await e.addParticleUpdater("size",(()=>new i))}export{o as l};
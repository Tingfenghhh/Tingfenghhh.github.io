import{P as t,g as e}from"./tsparticles-engine-3b45a3b7.js";class a extends t{constructor(t){super(t)}clear(){}init(){}async interact(t){var a;const i=this.container,n=null!==(a=t.retina.attractDistance)&&void 0!==a?a:i.retina.attractDistance,o=t.getPosition(),r=i.particles.quadTree.queryCircle(o,n);for(const s of r){if(t===s||!s.options.move.attract.enable||s.destroyed||s.spawning)continue;const a=s.getPosition(),{dx:i,dy:n}=e(o,a),r=t.options.move.attract.rotate,c=i/(1e3*r.x),l=n/(1e3*r.y),y=s.size.value/t.size.value,v=1/y;t.velocity.x-=c*y,t.velocity.y-=l*y,s.velocity.x+=c*v,s.velocity.y+=l*v}}isEnabled(t){return t.options.move.attract.enable}reset(){}}async function i(t){await t.addInteractor("particlesAttract",(t=>new a(t)))}export{i as l};
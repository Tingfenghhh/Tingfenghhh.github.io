import{j as e,O as i,E as t,i as o,d as b,b as l,k as s,l as n,m as a,n as u,o as r,p as c,q as d,s as v,C as p,R as h,t as f,c as y}from"./tsparticles-engine-3b45a3b7.js";class m{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(t){if(t){if(void 0!==t.distance&&(this.distance=t.distance),void 0!==t.duration&&(this.duration=t.duration),void 0!==t.mix&&(this.mix=t.mix),void 0!==t.opacity&&(this.opacity=t.opacity),void 0!==t.color){const o=this.color instanceof Array?void 0:this.color;this.color=e(t.color,(e=>i.create(o,e)))}void 0!==t.size&&(this.size=t.size)}}}class z extends m{constructor(){super(),this.selectors=[]}get ids(){return e(this.selectors,(e=>e.replace("#","")))}set ids(i){this.selectors=e(i,(e=>`#${e}`))}load(e){super.load(e),e&&(void 0!==e.ids&&(this.ids=e.ids),void 0!==e.selectors&&(this.selectors=e.selectors))}}class O extends m{load(i){super.load(i),i&&(this.divs=e(i.divs,(e=>{const i=new z;return i.load(e),i})))}}function g(e,i,t,o){if(i>=t){return y(e+(i-t)*o,e,i)}if(i<t){return y(e-(t-i)*o,i,e)}}class x extends t{constructor(e){super(e),e.bubble||(e.bubble={}),this.handleClickMode=i=>{"bubble"===i&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,i,t){e.bubble.inRange&&!t||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,i=e.actualOptions.interactivity.modes.bubble;i&&(e.retina.bubbleModeDistance=i.distance*e.retina.pixelRatio,void 0!==i.size&&(e.retina.bubbleModeSize=i.size*e.retina.pixelRatio))}async interact(e){const i=this.container.actualOptions.interactivity.events,t=i.onHover,l=i.onClick,s=t.enable,n=t.mode,a=l.enable,u=l.mode,r=i.onDiv;s&&o("bubble",n)?this.hoverBubble(e):a&&o("bubble",u)?this.clickBubble(e):b("bubble",r,((i,t)=>this.singleSelectorHover(e,i,t)))}isEnabled(e){var i;const t=this.container,b=t.actualOptions,s=t.interactivity.mouse,n=(null!==(i=null==e?void 0:e.interactivity)&&void 0!==i?i:b.interactivity).events,a=n.onDiv,u=l("bubble",a);if(!(u||n.onHover.enable&&s.position||n.onClick.enable&&s.clickPosition))return!1;const r=n.onHover.mode,c=n.onClick.mode;return o("bubble",r)||o("bubble",c)||u}loadModeOptions(e,...i){e.bubble||(e.bubble=new O);for(const t of i)e.bubble.load(null==t?void 0:t.bubble)}reset(e){e.bubble.inRange=!1}clickBubble(e){var i,t;const o=this.container,b=o.actualOptions,l=o.interactivity.mouse.clickPosition,a=b.interactivity.modes.bubble;if(!a||!l)return;o.bubble||(o.bubble={});const u=o.retina.bubbleModeDistance;if(!u||u<0)return;const r=o.particles.quadTree.queryCircle(l,u,(e=>this.isEnabled(e)));for(const c of r){if(!o.bubble.clicking)continue;c.bubble.inRange=!o.bubble.durationEnd;const e=c.getPosition(),b=s(e,l),r=((new Date).getTime()-(o.interactivity.mouse.clickTime||0))/1e3;r>a.duration&&(o.bubble.durationEnd=!0),r>2*a.duration&&(o.bubble.clicking=!1,o.bubble.durationEnd=!1);const d={bubbleObj:{optValue:o.retina.bubbleModeSize,value:c.bubble.radius},particlesObj:{optValue:n(c.options.size.value)*o.retina.pixelRatio,value:c.size.value},type:"size"};this.process(c,b,r,d);const v={bubbleObj:{optValue:a.opacity,value:c.bubble.opacity},particlesObj:{optValue:n(c.options.opacity.value),value:null!==(t=null===(i=c.opacity)||void 0===i?void 0:i.value)&&void 0!==t?t:1},type:"opacity"};this.process(c,b,r,v),o.bubble.durationEnd?delete c.bubble.color:b<=u?this.hoverBubbleColor(c,b):delete c.bubble.color}}hoverBubble(e){const i=this.container,t=i.interactivity.mouse.position,o=i.retina.bubbleModeDistance;if(!o||o<0||void 0===t)return;const b=i.particles.quadTree.queryCircle(t,o,(e=>this.isEnabled(e)));for(const l of b){l.bubble.inRange=!0;const e=l.getPosition(),b=s(e,t),n=1-b/o;b<=o?n>=0&&i.interactivity.status===a&&(this.hoverBubbleSize(l,n),this.hoverBubbleOpacity(l,n),this.hoverBubbleColor(l,n)):this.reset(l),i.interactivity.status===u&&this.reset(l)}}hoverBubbleColor(e,i,t){const o=this.container.actualOptions,b=null!=t?t:o.interactivity.modes.bubble;if(b){if(!e.bubble.finalColor){const i=b.color;if(!i)return;const t=r(i);e.bubble.finalColor=c(t)}if(e.bubble.finalColor)if(b.mix){e.bubble.color=void 0;const t=e.getFillColor();e.bubble.color=t?d(v(t,e.bubble.finalColor,1-i,i)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}}hoverBubbleOpacity(e,i,t){var o,b,l,s;const a=this.container.actualOptions,u=null!==(o=null==t?void 0:t.opacity)&&void 0!==o?o:null===(b=a.interactivity.modes.bubble)||void 0===b?void 0:b.opacity;if(!u)return;const r=e.options.opacity.value,c=g(null!==(s=null===(l=e.opacity)||void 0===l?void 0:l.value)&&void 0!==s?s:1,u,n(r),i);void 0!==c&&(e.bubble.opacity=c)}hoverBubbleSize(e,i,t){const o=this.container,b=(null==t?void 0:t.size)?t.size*o.retina.pixelRatio:o.retina.bubbleModeSize;if(void 0===b)return;const l=n(e.options.size.value)*o.retina.pixelRatio,s=g(e.size.value,b,l,i);void 0!==s&&(e.bubble.radius=s)}process(e,i,t,o){const b=this.container,l=o.bubbleObj.optValue,s=b.actualOptions.interactivity.modes.bubble;if(!s||void 0===l)return;const n=s.duration,a=b.retina.bubbleModeDistance,u=o.particlesObj.optValue,r=o.bubbleObj.value,c=o.particlesObj.value||0,d=o.type;if(a&&!(a<0)&&l!==u)if(b.bubble||(b.bubble={}),b.bubble.durationEnd)r&&("size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity);else if(i<=a){if((null!=r?r:c)!==l){const i=c-t*(c-l)/n;"size"===d&&(e.bubble.radius=i),"opacity"===d&&(e.bubble.opacity=i)}}else"size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity}singleSelectorHover(e,i,t){const o=this.container,b=document.querySelectorAll(i),l=o.actualOptions.interactivity.modes.bubble;l&&b.length&&b.forEach((i=>{const b=i,s=o.retina.pixelRatio,n={x:(b.offsetLeft+b.offsetWidth/2)*s,y:(b.offsetTop+b.offsetHeight/2)*s},a=b.offsetWidth/2*s,u="circle"===t.type?new p(n.x,n.y,a):new h(b.offsetLeft*s,b.offsetTop*s,b.offsetWidth*s,b.offsetHeight*s),r=o.particles.quadTree.query(u,(e=>this.isEnabled(e)));for(const t of r){if(!u.contains(t.getPosition()))continue;t.bubble.inRange=!0;const i=l.divs,o=f(i,b);t.bubble.div&&t.bubble.div===b||(this.clear(t,e,!0),t.bubble.div=b),this.hoverBubbleSize(t,1,o),this.hoverBubbleOpacity(t,1,o),this.hoverBubbleColor(t,1,o)}}))}}async function C(e){await e.addInteractor("externalBubble",(e=>new x(e)))}export{C as l};
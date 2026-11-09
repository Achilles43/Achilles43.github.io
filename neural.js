(function(){
const RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
let MX=-1e4,MY=-1e4;
addEventListener('pointermove',e=>{MX=e.clientX;MY=e.clientY},{passive:true});
document.addEventListener('pointerleave',()=>{MX=MY=-1e4});
function isLight(){const m=getComputedStyle(document.body).backgroundColor.match(/\d+/g);if(!m)return false;return (+m[0]*0.299+ +m[1]*0.587+ +m[2]*0.114)>150}
function mkCanvas(fixed){const c=document.createElement('canvas');c.className='neural';c.setAttribute('aria-hidden','true');Object.assign(c.style,{position:fixed?'fixed':'absolute',inset:'0',width:'100%',height:'100%',pointerEvents:'none',zIndex:'0'});return c}
function loop(c,draw){
  const x=c.getContext('2d');let W=0,H=0,vis=true,raf=0;
  const size=()=>{const r=c.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);W=r.width;H=r.height;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)};
  new ResizeObserver(size).observe(c);size();
  if('IntersectionObserver'in window)new IntersectionObserver(es=>{vis=es[0].isIntersecting;if(vis&&!raf)tick()}).observe(c);
  let f=0;
  function tick(){raf=0;if(!vis||document.hidden){return}const r=c.getBoundingClientRect();x.clearRect(0,0,W,H);draw(x,W,H,MX-r.left,MY-r.top,f++);if(!RM)raf=requestAnimationFrame(tick)}
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!raf)tick()});
  tick();
}
function sphere(host,o){
  o=o||{};const c=mkCanvas(false);host.prepend(c);
  const N=o.n||180,g=Math.PI*(3-Math.sqrt(5)),P=[];
  for(let i=0;i<N;i++){const y=1-(i/(N-1))*2,r=Math.sqrt(1-y*y),t=g*i,k=.9+Math.random()*.2;P.push([Math.cos(t)*r*k,y*k,Math.sin(t)*r*k])}
  const E=[];for(let i=0;i<N;i++)for(let j=i+1;j<N;j++){const a=P[i],b=P[j],d=Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]);if(d<.3)E.push([i,j])}
  let ry=0,ox=0,oy=0;const S=new Array(N);const pulses=[];
  loop(c,(x,W,H,mx,my,f)=>{
    const small=W<760,cx=W*(small?.82:(o.cx||.76)),cy=H*(o.cy||.52),R=Math.min(W*.5,H)*(small?.48:(o.r||.44));
    const inside=mx>-50&&my>-50&&mx<W+50&&my<H+50;
    const tx=inside?(my/H-.5)*.7:0,ty=inside?(mx/W-.5)*.9:0;ox+=(tx-ox)*.04;oy+=(ty-oy)*.04;ry+=RM?0:.0018;
    const cY=Math.cos(ry+oy),sY=Math.sin(ry+oy),cX=Math.cos(.35+ox),sX=Math.sin(.35+ox);
    const a0=small?.45:1;
    for(let i=0;i<N;i++){const p=P[i];let X=p[0]*cY-p[2]*sY,Z=p[0]*sY+p[2]*cY,Y=p[1]*cX-Z*sX;Z=p[1]*sX+Z*cX;const s=1/(1.9-Z*.6),px=cx+X*R*s*1.4,py=cy+Y*R*s*1.4,dep=(Z+1)/2,dm=Math.hypot(px-mx,py-my),gl=inside?Math.max(0,1-dm/(R*.55)):0;S[i]=[px,py,dep,gl]}
    x.lineWidth=1;
    for(const [i,j] of E){const A=S[i],B=S[j],gl=Math.max(A[3],B[3]),al=(.04+.16*((A[2]+B[2])/2)+gl*.5)*a0;x.strokeStyle=`rgba(124,224,168,${al})`;x.beginPath();x.moveTo(A[0],A[1]);x.lineTo(B[0],B[1]);x.stroke()}
    if(inside&&!small){for(let i=0;i<N;i++){const s=S[i];if(s[3]>.45){x.strokeStyle=`rgba(124,224,168,${(s[3]-.45)*.9})`;x.beginPath();x.moveTo(mx,my);x.lineTo(s[0],s[1]);x.stroke()}}}
    for(let i=0;i<N;i++){const s=S[i],rad=.8+s[2]*1.8+s[3]*2.2;x.fillStyle=`rgba(${s[3]>.2?'168,240,200':'124,224,168'},${(.25+.65*s[2]+s[3])*a0})`;x.beginPath();x.arc(s[0],s[1],rad,0,6.283);x.fill()}
    if(!RM&&f%9===0&&pulses.length<14)pulses.push({e:E[(Math.random()*E.length)|0],t:0});
    for(let k=pulses.length-1;k>=0;k--){const p=pulses[k];p.t+=.03;if(p.t>=1){pulses.splice(k,1);continue}const A=S[p.e[0]],B=S[p.e[1]],px=A[0]+(B[0]-A[0])*p.t,py=A[1]+(B[1]-A[1])*p.t;x.fillStyle=`rgba(200,255,225,${.9*a0})`;x.shadowColor='#7CE0A8';x.shadowBlur=10;x.beginPath();x.arc(px,py,1.8,0,6.283);x.fill();x.shadowBlur=0}
  });
}
function field(){
  const c=mkCanvas(true);document.body.prepend(c);
  let P=[],light=false,lw=0;
  loop(c,(x,W,H,mx,my,f)=>{
    if(f%60===0)light=isLight();
    const want=Math.min(130,Math.round(W*H/15000));
    if(P.length!==want||lw!==W){lw=W;P=Array.from({length:want},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))}
    const col=light?'40,150,100':'124,224,168',base=light?.16:.13;
    for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;const d=Math.hypot(p.x-mx,p.y-my);if(d<170&&d>1){p.x+=(p.x-mx)/d*.35;p.y+=(p.y-my)/d*.35}}
    x.lineWidth=1;
    for(let i=0;i<P.length;i++){const a=P[i];for(let j=i+1;j<P.length;j++){const b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<120){x.strokeStyle=`rgba(${col},${(1-d/120)*base})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
      const dm=Math.hypot(a.x-mx,a.y-my);if(dm<190){x.strokeStyle=`rgba(${col},${(1-dm/190)*.55})`;x.beginPath();x.moveTo(mx,my);x.lineTo(a.x,a.y);x.stroke()}
      x.fillStyle=`rgba(${col},${dm<190?.85:.35})`;x.beginPath();x.arc(a.x,a.y,dm<190?2.2:1.4,0,6.283);x.fill()}
  });
}
window.Neural={sphere,field};
function auto(){document.querySelectorAll('[data-neural="sphere"]').forEach(el=>sphere(el));if(document.body.hasAttribute('data-neural-field'))field()}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',auto):auto();
})();

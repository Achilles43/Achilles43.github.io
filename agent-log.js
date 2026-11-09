(function(){
const FEED=[
["ads-report","▸","pulling Meta Ads data · Mon–Sun"],["ads-report","▸","week-over-week comparison done"],["ads-report","✓","report.pptx built & delivered"],
["ads-ops","▸","pacing check · Meta + Google Ads"],["ads-ops","!","CPA above target on 1 ad set → Telegram alert"],["ads-ops","✓","monthly ad plan drafted"],
["content","▸","drafting caption in brand voice"],["content","▸","brand check passed"],["content","✓","post scheduled · Instagram + Facebook"],
["tg-bot","▸","customer asked about delivery"],["tg-bot","✓","answered from policy knowledge"],
["inbox","▸","unread mail · filtering real people"],["inbox","✓","reply drafted in Giorgi's voice"],
["news","✓","digest ready · only new since last run"],["cv-agent","▸","KA question → routed to Gemini"],["cv-agent","✓","EN answer → Claude Haiku"]];
const CSS=`.al{font-family:'JetBrains Mono',ui-monospace,monospace;color:#C9D2DF;background:#0B1018;border:1px solid #202836;border-radius:14px;overflow:hidden}
.al-h{display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:1px solid #202836;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#6B7789}
.al-dot{width:7px;height:7px;border-radius:50%;background:#7CE0A8;box-shadow:0 0 0 0 rgba(124,224,168,.6);animation:alp 1.8s infinite;flex:none}
@keyframes alp{0%{box-shadow:0 0 0 0 rgba(124,224,168,.55)}70%{box-shadow:0 0 0 7px rgba(124,224,168,0)}100%{box-shadow:0 0 0 0 rgba(124,224,168,0)}}
.al-h b{color:#7CE0A8;font-weight:600}.al-h .sp{flex:1}
.al-b{padding:10px 14px 12px;display:flex;flex-direction:column;justify-content:flex-end;gap:5px;overflow:hidden}
.al-l{display:grid;grid-template-columns:62px 86px 14px minmax(0,1fr);gap:8px;font-size:12px;line-height:1.5;animation:ali .25s ease}
@keyframes ali{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.al-t{color:#4F5B6C}.al-a{color:#8FA0B5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.al-s{color:#6B7789}.al-s.ok{color:#7CE0A8}.al-s.w{color:#F2C46D}.al-x{color:#DDE4EE;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.al-l.hl .al-x{color:#A8F0C8}
.al-f{display:flex;justify-content:space-between;gap:10px;padding:9px 14px;border-top:1px solid #202836;font-size:10.5px;color:#4F5B6C;letter-spacing:.06em}
.al-f a{color:#7CE0A8;text-decoration:none}.al-f a:hover{color:#A8F0C8}
.al-cur{display:inline-block;width:6px;height:12px;background:#7CE0A8;vertical-align:-2px;margin-left:2px;animation:alc 1s steps(1) infinite}@keyframes alc{50%{opacity:0}}
.al-pill{position:fixed;z-index:56;display:flex;flex-direction:column;align-items:flex-end;gap:8px}
.al-pill .al-btn{display:flex;align-items:center;gap:9px;max-width:280px;white-space:nowrap;font:600 10.5px/1 'JetBrains Mono',monospace;letter-spacing:.06em;color:#C9D2DF;background:rgba(11,16,24,.92);backdrop-filter:blur(8px);border:1px solid #2E3A4C;border-radius:999px;padding:9px 13px;cursor:pointer}
.al-pill .al-btn:hover{border-color:#7CE0A8}
.al-pill .al-btn span.m{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#8FA0B5;font-weight:500}.al-pill .al-btn>span:not(.m){flex:none}
.al-pill .al{width:min(420px,calc(100vw - 36px));box-shadow:0 18px 50px rgba(0,0,0,.45)}
.al-pill:not(.open) .al{display:none}
@media print{.al-pill{display:none!important}}body.printing .al-pill{display:none!important}`;
function css(){if(document.getElementById('al-css'))return;const s=document.createElement('style');s.id='al-css';s.textContent=CSS;document.head.appendChild(s)}
const ts=()=>new Date().toTimeString().slice(0,8);
function mount(host,o){
  css();o=o||{};const max=o.max||7;let wrap=host;
  if(o.mode==='pill'){wrap=document.createElement('div');wrap.className='al-pill';Object.assign(wrap.style,o.pos||{right:'18px',bottom:'18px'});if(!(o.pos&&o.pos.top))wrap.style.flexDirection='column-reverse';host.appendChild(wrap);
    const b=document.createElement('button');b.className='al-btn';b.innerHTML='<span class="al-dot"></span><span>AGENTS LIVE</span><span class="m"></span>';wrap.appendChild(b);b.onclick=()=>wrap.classList.toggle('open');o._m=b.querySelector('.m')}
  const box=document.createElement('div');box.className='al';
  box.innerHTML=`<div class="al-h"><span class="al-dot"></span><b>agents</b><span>· live</span><span class="sp"></span><span>${o.title||'simulated feed · real pipelines'}</span></div><div class="al-b" style="height:${max*23+16}px"></div>${o.link!==false?`<div class="al-f"><span>claude · meta · google · telegram</span><a href="${o.href||'Automation.html'}">${o.linkText||'See the system →'}</a></div>`:''}`;
  wrap.appendChild(box);const body=box.querySelector('.al-b');
  let i=(Math.random()*FEED.length)|0,hold=0;
  function line(a,s,t,hl){const el=document.createElement('div');el.className='al-l'+(hl?' hl':'');el.innerHTML=`<span class="al-t">${ts()}</span><span class="al-a"></span><span class="al-s ${s==='✓'?'ok':s==='!'?'w':''}">${s}</span><span class="al-x"></span>`;el.querySelector('.al-a').textContent=a;const x=el.querySelector('.al-x');body.appendChild(el);while(body.children.length>max)body.firstChild.remove();
    let k=0;const cur=document.createElement('span');cur.className='al-cur';x.appendChild(cur);const ty=setInterval(()=>{k+=2;x.textContent=t.slice(0,k);if(k<t.length)x.appendChild(cur);else clearInterval(ty)},16);
    if(o._m)o._m.textContent=a+' '+s+' '+t}
  function next(){if(!document.hidden&&Date.now()>hold){const [a,s,t]=FEED[i++%FEED.length];line(a,s,t)}setTimeout(next,1500+Math.random()*1300)}
  for(let k=0;k<Math.min(3,max)&&o.feed!==false;k++){const [a,s,t]=FEED[i++%FEED.length];line(a,s,t)}
  if(o.feed!==false)setTimeout(next,1200);
  return{clear(){body.innerHTML=''},print(lines,gap){hold=Date.now()+lines.length*(gap||700)+2500;lines.forEach((l,k)=>setTimeout(()=>line(l[0],l[1],l[2],true),k*(gap||700)))}};
}
window.AgentLog={mount};
})();

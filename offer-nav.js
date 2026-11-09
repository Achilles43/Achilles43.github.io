(function(){
if(/Business\.html|\/for-you\//i.test(location.pathname))return;
const KEY='gk_offer_tip';
const css=`.nav-offer{position:relative;background:rgba(124,224,168,.12)!important;color:#7CE0A8!important;box-shadow:inset 0 0 0 1px rgba(124,224,168,.55);display:inline-flex!important;align-items:center;gap:7px}
.nav-offer:before{content:"";width:6px;height:6px;border-radius:50%;background:#7CE0A8;box-shadow:0 0 0 0 rgba(124,224,168,.6);animation:offPulse 1.8s ease-out infinite;flex:none}
.nav-offer:hover{background:rgba(124,224,168,.2)!important}
@keyframes offPulse{0%{box-shadow:0 0 0 0 rgba(124,224,168,.6)}100%{box-shadow:0 0 0 8px rgba(124,224,168,0)}}
.offer-tip{position:fixed;z-index:60;width:min(250px,calc(100vw - 24px));background:#111722;border:1px solid #7CE0A8;border-radius:12px;padding:12px 13px 11px;color:#EAEEF5;font:500 12.5px/1.45 Manrope,'Noto Sans Georgian',system-ui,sans-serif;box-shadow:0 18px 50px rgba(0,0,0,.5);opacity:0;transform:translateY(-6px);transition:opacity .25s,transform .25s;pointer-events:none}
.offer-tip.on{opacity:1;transform:none;pointer-events:auto}
.offer-tip:before{content:"";position:absolute;top:-6px;left:var(--ax,50%);width:10px;height:10px;background:#111722;border-left:1px solid #7CE0A8;border-top:1px solid #7CE0A8;transform:translateX(-50%) rotate(45deg)}
.offer-tip b{display:block;font-size:13.5px;font-weight:800;margin-bottom:3px;letter-spacing:-.01em}
.offer-tip p{margin:0;color:#9AA6B6}
.offer-tip .row{display:flex;gap:6px;align-items:center;margin-top:10px}
.offer-tip a{font:600 10px/1 'JetBrains Mono','Noto Sans Georgian',monospace;letter-spacing:.08em;text-transform:uppercase;padding:8px 10px;border-radius:9px;background:#7CE0A8;color:#0A0E14;text-decoration:none}
.offer-tip button{font:600 10px/1 'JetBrains Mono','Noto Sans Georgian',monospace;letter-spacing:.08em;text-transform:uppercase;padding:8px 8px;border-radius:9px;border:0;background:transparent;color:#9AA6B6;cursor:pointer}
.offer-tip button:hover{color:#EAEEF5}
@media (prefers-reduced-motion:reduce){.nav-offer:before{animation:none}}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const T={en:{h:'Not sure what you need?',p:'Answer 8 short questions about your business — get a concrete plan with results from real projects. Free, 2 minutes.',a:'Try it →',x:'Later'},ka:{h:'არ იცი, რა გჭირდება?',p:'უპასუხე 8 მოკლე კითხვას შენს ბიზნესზე და მიიღე კონკრეტული გეგმა რეალური პროექტების შედეგებით. უფასოა, 2 წუთი.',a:'სცადე →',x:'მოგვიანებით'}};
const lang=()=>document.documentElement.lang==='ka'?'ka':'en';
let tip=null,link=null,shown=false;
const find=()=>[...document.querySelectorAll('a[href]')].find(a=>/Business\.html|\/for-you\//.test(a.getAttribute('href'))&&a.closest('nav'));
function mark(){const l=find();if(l){l.classList.add('nav-offer');link=l}if(tip&&tip.classList.contains('on'))place()}
function place(){if(!link||!tip)return;const r=link.getBoundingClientRect(),w=tip.offsetWidth;let x=Math.min(Math.max(12,r.left+r.width/2-w/2),innerWidth-w-12);tip.style.left=x+'px';tip.style.top=(r.bottom+12)+'px';tip.style.setProperty('--ax',(r.left+r.width/2-x)+'px')}
function fill(){const t=T[lang()];tip.innerHTML=`<b>${t.h}</b><p>${t.p}</p><div class="row"><a href="${link.getAttribute('href')}">${t.a}</a><button type="button">${t.x}</button></div>`;
 tip.querySelector('button').onclick=hide;tip.querySelector('a').onclick=()=>{try{localStorage.setItem(KEY,'1')}catch(e){}}}
function show(){if(!link)return;if(!tip){tip=document.createElement('div');tip.className='offer-tip';tip.setAttribute('role','dialog');document.body.appendChild(tip)}fill();place();requestAnimationFrame(()=>tip.classList.add('on'));shown=true}
function hide(){if(tip)tip.classList.remove('on');try{localStorage.setItem(KEY,'1')}catch(e){}}
mark();setInterval(mark,800);
addEventListener('resize',place);addEventListener('scroll',place,{passive:true});
new MutationObserver(()=>{if(tip&&tip.classList.contains('on'))fill()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
let seen=false;try{seen=localStorage.getItem(KEY)==='1'}catch(e){}
if(!seen)setTimeout(()=>{if(!shown)show()},document.querySelector('.site-sw')||document.getElementById('root')?7000:2500);
})();

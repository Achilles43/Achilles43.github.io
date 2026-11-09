(function(){
const WORKER="https://snowy-fire-6121.kvaratskhelia-giorgi777.workers.dev";
const S={
en:{k:"Free tool",h:"Is your advertising actually being measured?",sub:"Paste your site — 10 seconds, no sign-up.",tabs:["Break-even ROAS","Budget planner","Tracking check"],
price:"Average order value",cost:"Product + delivery cost per order",cpa:"Current cost per sale (optional)",beCpa:"Max you can pay per sale",beRoas:"Break-even ROAS",profit:"Profit per sale now",note:"Any ROAS above break-even is profit. Below it, every sale loses money.",lowMargin:"Margin is too thin for paid ads — fix pricing or bundles first.",
budget:"Monthly ad budget",cpc:"Cost per click",cr:"Site conversion rate",aov:"Average order value",clicks:"Visitors",orders:"Sales",rev:"Revenue",roas:"ROAS",ex:"Example values — replace with yours.",
url:"Your website",check:"Check →",checking:"Checking…",found:"tracking tools found",verdictGood:"Solid tracking base — the next step is clean events and server-side (CAPI).",verdictMid:"Partly tracked — ad platforms are optimising half-blind.",verdictBad:"Ads are flying blind — results can't be measured or optimised.",fail:"Couldn't check that site right now. Try again later.",limit:"Daily limit reached — try again tomorrow.",help:"Want this fixed? →",resp:"Server response",intro:"We check for GA4, Google Tag Manager, Meta Pixel, TikTok Pixel and Clarity/Hotjar — the tools that let ads learn who buys."},
ka:{k:"უფასო ხელსაწყო",h:"შენი რეკლამის შედეგი საერთოდ იზომება?",sub:"ჩასვი საიტი — 10 წამი, რეგისტრაციის გარეშე.",tabs:["უზარალობის ROAS","ბიუჯეტის გეგმა","ტრეკინგის შემოწმება"],
price:"საშუალო შეკვეთის ღირებულება",cost:"პროდუქტის + მიწოდების ხარჯი შეკვეთაზე",cpa:"ახლანდელი ხარჯი ერთ გაყიდვაზე (არასავალდ.)",beCpa:"მაქსიმუმი, რაც შეგიძლია გადაიხადო გაყიდვაზე",beRoas:"უზარალობის ROAS",profit:"მოგება ერთ გაყიდვაზე ახლა",note:"ამ ROAS-ზე მაღლა ყველაფერი მოგებაა. ქვემოთ — ყოველი გაყიდვა ზარალზეა.",lowMargin:"მარჟა ფასიანი რეკლამისთვის ძალიან დაბალია — ჯერ ფასი ან ნაკრებები უნდა შეიცვალოს.",
budget:"თვიური სარეკლამო ბიუჯეტი",cpc:"ფასი ერთ კლიკზე",cr:"საიტის კონვერსია",aov:"საშუალო შეკვეთის ღირებულება",clicks:"ვიზიტორი",orders:"გაყიდვა",rev:"შემოსავალი",roas:"ROAS",ex:"მაგალითის ციფრებია — ჩაწერე შენი.",
url:"შენი საიტი",check:"შემოწმება →",checking:"მოწმდება…",found:"ტრეკინგის ხელსაწყო ნაპოვნია",verdictGood:"ტრეკინგის კარგი საფუძველია — შემდეგი ნაბიჯი სუფთა ივენთები და server-side (CAPI).",verdictMid:"ნაწილობრივ იზომება — სარეკლამო პლატფორმები ნახევრად ბრმად ოპტიმიზირდება.",verdictBad:"რეკლამა ბრმად მუშაობს — შედეგს ვერც გაზომავ და ვერც გააუმჯობესებ.",fail:"ახლა საიტის შემოწმება ვერ მოხერხდა. სცადე მოგვიანებით.",limit:"დღის ლიმიტი ამოიწურა — სცადე ხვალ.",help:"გინდა, რომ მოვაწესრიგო? →",resp:"სერვერის პასუხი",intro:"ვამოწმებთ GA4-ს, Google Tag Manager-ს, Meta Pixel-ს, TikTok Pixel-ს და Clarity/Hotjar-ს — ხელსაწყოებს, რომლებითაც რეკლამა სწავლობს, ვინ ყიდულობს."}};
const css=`.qt{margin-top:56px}.qt-h{display:flex;justify-content:space-between;align-items:end;gap:16px;flex-wrap:wrap;border-bottom:1px solid var(--line);padding-bottom:14px;margin-bottom:18px}
.qt-h h2{margin:10px 0 0;font-size:clamp(22px,2.6vw,30px);font-weight:800;letter-spacing:-.025em;text-wrap:balance}.qt-h p{margin:0;color:var(--dim);font-size:13.5px}
.qt-tabs{display:flex;gap:4px;padding:4px;border:1px solid var(--line2);border-radius:11px;background:#0F1520;width:max-content;max-width:100%;overflow-x:auto;margin-bottom:14px}
.qt-tabs button{font:600 11px/1 'JetBrains Mono',monospace;letter-spacing:.08em;text-transform:uppercase;padding:10px 13px;border-radius:8px;border:0;background:transparent;color:#C9D2DF;cursor:pointer;white-space:nowrap}
.qt-tabs button.on{background:var(--acc);color:#0A0E14}
.qt-p{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:22px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:24px;align-items:start}
.qt-in{display:flex;flex-direction:column;gap:14px}
.qt-in label{display:flex;flex-direction:column;gap:7px;font:600 10.5px/1.3 'JetBrains Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}
.qt-in .row{display:flex;align-items:center;gap:8px}
.qt-in input[type=number],.qt-in input[type=text]{flex:1;min-width:0;font:600 16px/1 Manrope,'Noto Sans Georgian',sans-serif;color:var(--text);background:#0B1018;border:1px solid var(--line2);border-radius:10px;padding:12px 13px;outline:none}
.qt-in input:focus{border-color:var(--acc)}
.qt-in .u{font:600 12px/1 'JetBrains Mono',monospace;color:var(--dim);width:22px}
.qt-out{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.qt-m{background:#0D121B;border:1px solid var(--line);border-radius:12px;padding:16px}
.qt-m .n{font-size:clamp(24px,3vw,32px);font-weight:800;letter-spacing:-.03em;color:var(--acc);line-height:1.1}
.qt-m .n.w{color:var(--warn)}.qt-m .n.b{color:var(--bad)}
.qt-m .l{font-size:12.5px;color:var(--muted);margin-top:6px;line-height:1.4}
.qt-m.big{grid-column:1/-1}
.qt-note{grid-column:1/-1;margin:2px 0 0;font-size:13px;color:var(--muted);line-height:1.5}
.qt-note a{font-weight:600}
.qt-chips{grid-column:1/-1;display:flex;flex-wrap:wrap;gap:6px}
.qt-chips span{font:600 11px/1 'JetBrains Mono',monospace;padding:8px 10px;border-radius:7px;background:#0D121B;border:1px solid var(--line)}
.qt-chips .y{color:var(--acc);border-color:rgba(124,224,168,.35)}.qt-chips .n{color:var(--dim)}
.qt-empty{grid-column:1/-1;color:var(--dim);font-size:13.5px;line-height:1.5;margin:0}
@media (max-width:860px){.qt-p{grid-template-columns:1fr;padding:18px}}`;
const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
const host=document.getElementById("tools");if(!host)return;
let tab=2;const v={price:120,cost:55,cpa:"",budget:1500,cpc:0.35,cr:1.5,aov:120,url:""};let chk=null,busy=false;
const L=()=>S[document.documentElement.lang==="ka"?"ka":"en"];
const f=(n,d=0)=>isFinite(n)?n.toLocaleString("en-US",{maximumFractionDigits:d,minimumFractionDigits:d}):"—";
const inp=(k,lab,u,step)=>`<label>${lab}<span class="row"><input type="number" inputmode="decimal" min="0" step="${step||"any"}" data-k="${k}" value="${v[k]}"><span class="u">${u}</span></span></label>`;
function out(){const t=L();
  if(tab===0){const m=(+v.price)-(+v.cost),be=m>0?(+v.price)/m:NaN,cpa=+v.cpa;let h=`<div class="qt-m"><div class="n${m<=0?" b":""}">₾${f(Math.max(m,0))}</div><div class="l">${t.beCpa}</div></div><div class="qt-m"><div class="n${be>4?" w":""}">${m>0?f(be,2)+"×":"—"}</div><div class="l">${t.beRoas}</div></div>`;
    if(v.cpa!==""&&cpa>0){const p=m-cpa;h+=`<div class="qt-m big"><div class="n${p<0?" b":""}">${p<0?"−":""}₾${f(Math.abs(p))}</div><div class="l">${t.profit}</div></div>`}
    h+=`<p class="qt-note">${m>0&&be<=4?t.note:t.lowMargin} <a href="https://calendly.com/kvaratskhelia-giorgi777/intro-call-15-min" target="_blank" rel="noopener noreferrer">${t.help}</a></p>`;return h}
  if(tab===1){const c=(+v.budget)/(+v.cpc),o=c*(+v.cr)/100,r=o*(+v.aov),ro=r/(+v.budget);
    return `<div class="qt-m"><div class="n">${f(c)}</div><div class="l">${t.clicks}</div></div><div class="qt-m"><div class="n">${f(o)}</div><div class="l">${t.orders}</div></div><div class="qt-m"><div class="n">₾${f(r)}</div><div class="l">${t.rev}</div></div><div class="qt-m"><div class="n${ro<1?" b":ro<2?" w":""}">${f(ro,2)}×</div><div class="l">${t.roas}</div></div><p class="qt-note">${t.ex}</p>`}
  if(!chk)return `<p class="qt-empty">${busy?t.checking:t.intro}</p>`;
  if(chk.err)return `<p class="qt-empty">${chk.err}</p>`;
  const tools=[["GA4","ga4"],["GTM","gtm"],["Meta Pixel","metaPixel"],["TikTok Pixel","tiktokPixel"],["Clarity / Hotjar","heatmaps"]],extra=[["HTTPS","https"],["Schema","schemaJsonLd"],["OG tags","openGraph"],["Canonical","canonical"]];
  const n=tools.filter(x=>chk[x[1]]).length,core=(chk.ga4||chk.gtm)+!!chk.metaPixel;
  return `<div class="qt-m"><div class="n${core<2?(core?" w":" b"):""}">${n}/5</div><div class="l">${t.found}</div></div><div class="qt-m"><div class="n${chk.responseMs>1500?" w":""}">${f(chk.responseMs/1000,2)}s</div><div class="l">${t.resp}</div></div><div class="qt-chips">${[...tools,...extra].map(x=>`<span class="${chk[x[1]]?"y":"n"}">${chk[x[1]]?"✓":"✗"} ${x[0]}</span>`).join("")}</div><p class="qt-note">${core>=2?t.verdictGood:core?t.verdictMid:t.verdictBad} <a href="https://calendly.com/kvaratskhelia-giorgi777/intro-call-15-min" target="_blank" rel="noopener noreferrer">${t.help}</a></p>`}
function render(){const t=L();
  const ins=tab===0?inp("price",t.price,"₾")+inp("cost",t.cost,"₾")+inp("cpa",t.cpa,"₾"):tab===1?inp("budget",t.budget,"₾",50)+inp("cpc",t.cpc,"₾",0.01)+inp("cr",t.cr,"%",0.1)+inp("aov",t.aov,"₾"):`<label>${t.url}<span class="row"><input type="text" data-k="url" value="${v.url.replace(/"/g,"")}" placeholder="yourbusiness.ge"></span></label><button class="btn p" id="qtGo" type="button"${busy?" disabled":""}>${busy?t.checking:t.check}</button>`;
  host.innerHTML=`<div class="qt-h"><div><span class="k">${t.k}</span><h2>${t.h}</h2></div><p>${t.sub}</p></div><div class="qt-p"><div class="qt-in">${ins}</div><div class="qt-out" id="qtOut">${out()}</div></div>`}
host.addEventListener("click",e=>{const b=e.target.closest("[data-t]");if(b){tab=+b.dataset.t;render();return}if(e.target.id==="qtGo")run()});
host.addEventListener("input",e=>{const k=e.target.dataset.k;if(!k)return;v[k]=e.target.value;if(k!=="url")document.getElementById("qtOut").innerHTML=out()});
host.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.dataset.k==="url"){e.preventDefault();run()}});
async function run(){if(busy||!v.url.trim())return;busy=true;chk=null;render();
  try{const r=await fetch(WORKER+"/audit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target:v.url.trim()})});const d=await r.json();chk=r.status===429?{err:L().limit}:d&&!d.error&&d.status<400?d:{err:L().fail}}catch(e){chk={err:L().fail}}
  busy=false;render()}
new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
render();
})();

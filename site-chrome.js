/* site-chrome.js — shared header bits for the static pages:
   GK logo → home, light/dark toggle (remembered across pages as gk_theme). */
(function(){
var GKM=document.querySelector('meta[name="gk-lang"]');var HOME=GKM?(GKM.content==='ka'?'/ka/':'/'):'Home A.html';
var root=document.documentElement;
function getT(){try{return localStorage.getItem('gk_theme')||'dark'}catch(e){return 'dark'}}
function setT(t){root.setAttribute('data-theme',t);try{localStorage.setItem('gk_theme',t)}catch(e){}
  document.querySelectorAll('.thm').forEach(function(b){b.setAttribute('aria-pressed',t==='light');b.title=t==='light'?'Dark mode':'Light mode'})}
root.setAttribute('data-theme',getT());

var CSS=`
.gk-left{display:flex;align-items:center;gap:12px;min-width:0}
.gk-logo{display:inline-flex!important;align-items:center;gap:10px;color:var(--text)!important;text-decoration:none}
.gk-mark{width:36px;height:36px;border-radius:10px;border:1.5px solid var(--acc);display:flex;align-items:center;justify-content:center;font:700 13px/1 'JetBrains Mono',ui-monospace,monospace;letter-spacing:-.02em;color:var(--acc);transition:background .25s,color .25s,transform .25s}
.gk-logo:hover .gk-mark{background:var(--acc);color:var(--bg);transform:rotate(-6deg)}
.top .name.gk-logo{display:inline-flex!important}
@media (max-width:640px){.top .wrap{justify-content:space-between!important;flex-wrap:wrap;height:auto!important;padding-top:8px;padding-bottom:8px;row-gap:8px}.top .tr{flex-wrap:wrap;justify-content:flex-end;gap:6px}.gk-mark{width:32px;height:32px;font-size:12px}.thm{width:32px;height:32px}}
@media (max-width:480px){.top .wrap{column-gap:6px}.top .tr,.top .gk-left{display:contents}.top .lg{order:1;margin-left:auto}.top .thm{order:2}.top .sw{order:3;width:100%;justify-content:space-between}}
.thm{flex:none;width:36px;height:36px;border-radius:9px;border:1px solid var(--line2);background:transparent;color:var(--text);font-size:15px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:border-color .2s,transform .3s}
.thm:hover{border-color:var(--acc);transform:rotate(180deg)}
.thm:focus-visible,.gk-logo:focus-visible{outline:2px solid var(--acc);outline-offset:3px}
/* ── light theme ── */
html[data-theme="light"]{--bg:#F5F6F8;--card:#FFFFFF;--card2:#F1F3F6;--line:#E2E6EC;--line2:#CBD2DC;--text:#0F1724;--muted:#4A5568;--dim:#667085;--acc:#15804F}
html[data-theme="light"],html[data-theme="light"] body{background:var(--bg);color:var(--text)}
html[data-theme="light"] a:hover{color:#0F6B41}
html[data-theme="light"] .top{background:rgba(245,246,248,.88)}
html[data-theme="light"] .sw{background:#fff}
html[data-theme="light"] .sw a{color:#3A4555}
html[data-theme="light"] .sw a:not(.on):hover{background:#EEF1F5;color:var(--text)}
html[data-theme="light"] .sw a.on{color:#fff}
html[data-theme="light"] .sw a.hl,html[data-theme="light"] .sw a[href="Business.html"]:not(.on){color:var(--acc)}
html[data-theme="light"] .lg button{color:#3A4555}
html[data-theme="light"] .lg button.on{background:#E3F3EA;color:var(--acc)}
html[data-theme="light"] .btn{background:#fff;color:var(--text)}
html[data-theme="light"] .btn.p,html[data-theme="light"] .btn.p:hover{color:#fff}
html[data-theme="light"] .chips span,html[data-theme="light"] .offers span{background:#EEF1F5;color:#3A4555}
html[data-theme="light"] .opt{background:#fff;color:#1F2937}
html[data-theme="light"] .opt.on i:after{background:#fff}
html[data-theme="light"] .opt.m.on i:after{background:none;border-color:#fff}
html[data-theme="light"] .fld input{background:#fff}
html[data-theme="light"] .st,html[data-theme="light"] .sig span,html[data-theme="light"] .stat{background:#F1F3F6}
html[data-theme="light"] .prog{background:#E2E6EC}
/* home page */
html[data-theme="light"] .path{background-color:#fff;background-image:radial-gradient(rgba(15,23,36,.07) 1px,transparent 1px)}
html[data-theme="light"] .path.biz{background-color:#EEF8F2;background-image:radial-gradient(110% 75% at 100% 0%,rgba(21,128,79,.16),transparent 58%),radial-gradient(rgba(21,128,79,.12) 1px,transparent 1px)}
html[data-theme="light"] .pn{-webkit-text-stroke-color:rgba(15,23,36,.18)}
html[data-theme="light"] .pa{color:var(--text);background:#fff}
html[data-theme="light"] .biz .pa{color:#fff}
html[data-theme="light"] .cv:hover .pa{color:#fff;background:var(--text)}
html[data-theme="light"] .pc{border-top-color:rgba(15,23,36,.08)}
html[data-theme="light"] .chips span{border-color:var(--line2)}
html[data-theme="light"] .hlt .w{color:#C3CAD4}
html[data-theme="light"] .hlt .w.on{color:var(--text)}
html[data-theme="light"] .bfl{background:rgba(255,255,255,.85);color:var(--text)}
html[data-theme="light"] .bnm{color:#3A4555}
html[data-theme="light"] .gw{background-image:linear-gradient(90deg,#15804F 0%,#2B6CB0 35%,#2E9E6B 60%,#15804F 100%)}
html[data-theme="light"] .foot small{color:var(--muted)}
@media print{.thm{display:none!important}}
`;
var st=document.createElement('style');st.id='gk-chrome';st.textContent=CSS;document.head.appendChild(st);

function mount(){
  var n=document.querySelector('.top .name');
  if(n&&!n.classList.contains('gk-logo')){
    n.classList.add('gk-logo');n.setAttribute('href',HOME);n.setAttribute('aria-label','Giorgi Kvaratskhelia — home');
    n.innerHTML='<span class="gk-mark" aria-hidden="true">GK</span>';
  }
  var sw=document.querySelector('.top .sw');
  if(n&&sw&&!document.querySelector('.gk-left')){var g=document.createElement('div');g.className='gk-left';n.parentNode.insertBefore(g,n);g.appendChild(n);g.appendChild(sw)}
  var tr=document.querySelector('.top .tr');
  if(tr&&!tr.querySelector('.thm')){
    var b=document.createElement('button');b.type='button';b.className='thm';b.setAttribute('aria-label','Toggle light / dark mode');b.textContent='◐';
    b.addEventListener('click',function(){setT(root.getAttribute('data-theme')==='light'?'dark':'light')});
    tr.appendChild(b);
  }
  setT(root.getAttribute('data-theme'));
}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',mount):mount();
})();

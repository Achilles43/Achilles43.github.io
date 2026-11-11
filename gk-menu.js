/* gk-menu.js — replaces the inline page switcher with a vertical dropdown menu (all pages, incl. the React CV). */
(function(){
var GKM=document.querySelector('meta[name="gk-lang"]');
function lang(){return (GKM?GKM.content:(document.documentElement.lang||'en'))==='ka'?'ka':'en'}
var ROUTES={home:['','Home A.html'],shop:['online-shop/','OnlineShop.html'],ads:['advertising/','Advertising.html'],you:['for-you/','Business.html'],web:['websites/','Work.html'],cv:['cv/','Resume.html']};
function href(k){var r=ROUTES[k];if(!GKM)return r[1];return (lang()==='ka'?'/ka/':'/')+r[0]}
var T={ka:{btn:'მენიუ',home:['მთავარი','გიორგი კვარაცხელია'],shop:['ონლაინ მაღაზია','მაღაზია გადახდებით — 14 დღეში'],ads:['რეკლამა','Meta და Google Ads, რომელიც ყიდის'],you:['შენთვის','უფასო გეგმა 2 წუთში'],web:['საიტები','ნამუშევრები'],cv:['CV','გამოცდილება და შედეგები'],contact:'დამიკავშირდი'},
       en:{btn:'Menu',home:['Home','Giorgi Kvaratskhelia'],shop:['Online store','A store with payments — in 14 days'],ads:['Advertising','Meta & Google Ads that sell'],you:['For you','A free plan in 2 minutes'],web:['Websites','Work I’ve built'],cv:['CV','Experience and results'],contact:'Contact me'}};
function current(){var p=location.pathname;
  if(/online-shop|OnlineShop/.test(p))return 'shop';if(/advertising|Advertising/.test(p))return 'ads';if(/for-you|Business/.test(p))return 'you';if(/websites|Work/.test(p))return 'web';if(/\/cv\/|Resume/.test(p))return 'cv';return 'home'}
var CSS=`
.gkm-btn{display:inline-flex;align-items:center;gap:9px;height:40px;padding:0 14px;border-radius:11px;border:1px solid var(--gkm-line);background:var(--gkm-bg2);color:var(--gkm-text);font:700 12.5px/1 'JetBrains Mono','Noto Sans Georgian',ui-monospace,monospace;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:border-color .2s}
.gkm-btn:hover,.gkm-btn[aria-expanded="true"]{border-color:var(--gkm-acc)}
.gkm-ico{width:16px;height:12px;position:relative;display:inline-block}
.gkm-ico i{position:absolute;left:0;right:0;height:2px;border-radius:2px;background:currentColor;transition:transform .25s,opacity .2s,top .25s}
.gkm-ico i:nth-child(1){top:0}.gkm-ico i:nth-child(2){top:5px}.gkm-ico i:nth-child(3){top:10px}
.gkm-btn[aria-expanded="true"] .gkm-ico i:nth-child(1){top:5px;transform:rotate(45deg)}
.gkm-btn[aria-expanded="true"] .gkm-ico i:nth-child(2){opacity:0}
.gkm-btn[aria-expanded="true"] .gkm-ico i:nth-child(3){top:5px;transform:rotate(-45deg)}
.gkm-panel{position:fixed;z-index:90;width:320px;max-width:calc(100vw - 24px);padding:8px;border-radius:16px;border:1px solid var(--gkm-line);background:var(--gkm-bg);box-shadow:0 24px 60px rgba(0,0,0,.35);opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .2s,transform .2s;font-family:Manrope,'Noto Sans Georgian',system-ui,sans-serif}
.gkm-panel.open{opacity:1;transform:none;pointer-events:auto}
.gkm-panel a{display:flex;align-items:center;gap:12px;padding:12px 12px;border-radius:11px;color:var(--gkm-text)!important;text-decoration:none!important}
.gkm-panel a:hover{background:var(--gkm-hover)}
.gkm-panel a.on{background:var(--gkm-on)}
.gkm-panel .n{font-size:15px;font-weight:800;letter-spacing:-.01em;display:block}
.gkm-panel .d{font-size:12.5px;color:var(--gkm-muted);display:block;margin-top:3px}
.gkm-panel .dot{flex:none;width:8px;height:8px;border-radius:50%;background:var(--gkm-line)}
.gkm-panel a.on .dot,.gkm-panel a.hot .dot{background:var(--gkm-acc)}
.gkm-panel .sep{height:1px;background:var(--gkm-line);margin:6px 8px}
.gkm-panel .ct{display:flex;gap:6px;padding:6px 4px 2px}
.gkm-panel .ct a{flex:1;justify-content:center;padding:10px 8px;font:700 12.5px/1 Manrope,sans-serif;border:1px solid var(--gkm-line)}
.gkm-panel .ct a.wa{background:#25D366;border-color:#25D366;color:#06210f!important}
.gkm-panel .ct a.tg{background:#2AABEE;border-color:#2AABEE;color:#04192A!important}
.gkm-panel .ct a.ph:hover{border-color:var(--gkm-acc)}
:root{--gkm-bg:#0F1520;--gkm-bg2:#0F1520;--gkm-line:#2E3A4C;--gkm-text:#EAEEF5;--gkm-muted:#9AA6B6;--gkm-acc:#7CE0A8;--gkm-hover:#18202D;--gkm-on:rgba(124,224,168,.12)}
html.gkm-light{--gkm-bg:#FFFFFF;--gkm-bg2:#FFFFFF;--gkm-line:#CBD2DC;--gkm-text:#0F1724;--gkm-muted:#4A5568;--gkm-acc:#15804F;--gkm-hover:#EEF1F5;--gkm-on:#E3F3EA}
@media print{.gkm-btn,.gkm-panel{display:none!important}}
`;
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
function syncTheme(){var t=document.documentElement.getAttribute('data-theme'),light;
  if(t)light=t==='light';else{var c=getComputedStyle(document.body).backgroundColor.match(/\d+/g)||[10,14,20];light=(+c[0]+ +c[1]+ +c[2])/3>140}
  document.documentElement.classList.toggle('gkm-light',!!light)}
function build(nav){
  if(nav.dataset.gkm)return;nav.dataset.gkm='1';nav.style.display='none';
  var L=T[lang()],cur=current();
  var btn=document.createElement('button');btn.type='button';btn.className='gkm-btn';btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-haspopup','true');
  btn.innerHTML='<span class="gkm-ico" aria-hidden="true"><i></i><i></i><i></i></span>'+L.btn;
  nav.parentNode.insertBefore(btn,nav.nextSibling);
  var p=document.createElement('nav');p.className='gkm-panel';p.setAttribute('aria-label',L.btn);
  var h='';['home','shop','ads','you','web','cv'].forEach(function(k){h+='<a href="'+href(k)+'" class="'+(k===cur?'on':'')+(k==='shop'||k==='ads'||k==='you'?' hot':'')+'"><span class="dot"></span><span><span class="n">'+L[k][0]+'</span><span class="d">'+L[k][1]+'</span></span></a>'});
  h+='<div class="sep"></div><div class="ct"><a class="wa" href="https://wa.me/995557077373" target="_blank" rel="noopener noreferrer">WhatsApp</a><a class="tg" href="https://t.me/+995557077373" target="_blank" rel="noopener noreferrer">Telegram</a><a class="ph" href="tel:+995557077373">'+(lang()==='ka'?'დარეკე':'Call')+'</a></div>';
  p.innerHTML=h;document.body.appendChild(p);
  function place(){var r=btn.getBoundingClientRect(),w=Math.min(320,innerWidth-24);var left=Math.min(Math.max(12,r.left),innerWidth-w-12);p.style.top=(r.bottom+10)+'px';p.style.left=left+'px'}
  function open(o){syncTheme();if(o)place();p.classList.toggle('open',o);btn.setAttribute('aria-expanded',o?'true':'false')}
  btn.addEventListener('click',function(e){e.stopPropagation();open(!p.classList.contains('open'))});
  document.addEventListener('click',function(e){if(!p.contains(e.target)&&e.target!==btn)open(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')open(false)});
  addEventListener('resize',function(){if(p.classList.contains('open'))place()});
  addEventListener('scroll',function(){if(p.classList.contains('open'))place()},{passive:true});
}
function find(){var n=document.querySelector('.top .sw, .topbar .site-sw');if(n)build(n);return !!n}
function start(){syncTheme();if(!find()){var mo=new MutationObserver(function(){if(find())mo.disconnect()});mo.observe(document.body,{childList:true,subtree:true})}}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',start):start();
})();

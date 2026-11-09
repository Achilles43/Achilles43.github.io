(function(){
const M=document.querySelector('meta[name="gk-lang"]'),P=M?M.content:new URLSearchParams(location.search).get('lang');
let lang=(P==='ka'||P==='en')?P:(localStorage.getItem('gk_lang')||((navigator.language||'').toLowerCase().startsWith('ka')?'ka':'en'));
let dict={},reg=[],subs=[],title0=null;
function url(){if(M)return;try{const u=new URL(location.href);u.searchParams.set('lang',lang);history.replaceState(null,'',u)}catch(e){}}
function apply(){document.documentElement.lang=lang;
 if(title0==null)title0=document.title;document.title=lang==='ka'&&dict.__title?dict.__title:title0;
 reg.forEach(r=>{r.e.innerHTML=lang==='ka'?r.ka:r.en});
 document.querySelectorAll('.lg button').forEach(b=>b.classList.toggle('on',b.dataset.l===lang));
 subs.forEach(f=>f(lang))}
function init(d){dict=d||{};
 document.body.querySelectorAll('*').forEach(e=>{if(/^(SCRIPT|STYLE|SVG|CANVAS)$/i.test(e.tagName))return;const h=e.innerHTML.trim();if(h&&dict[h]!=null)reg.push({e,en:e.innerHTML,ka:dict[h]})});
 document.querySelectorAll('.lg button').forEach(b=>b.addEventListener('click',()=>set(b.dataset.l)));
 apply();url()}
function set(l){if(l!=='ka'&&l!=='en')return;if(M){if(l===lang)return;try{localStorage.setItem('gk_lang',l)}catch(e){}const a=document.querySelector('link[rel="alternate"][hreflang="'+l+'"]');if(a){location.href=new URL(a.href).pathname+location.hash;return}}lang=l;try{localStorage.setItem('gk_lang',l)}catch(e){}apply();url()}
window.I18N={get lang(){return lang},init,set,on:f=>subs.push(f),t:(en,ka)=>lang==='ka'?ka:en};
})();

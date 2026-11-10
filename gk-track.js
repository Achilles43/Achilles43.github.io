/* gk-track.js — tiny dataLayer helper for GTM (events: quiz_start, generate_lead, contact_click, cv_download, cv_ask) */
(function(){
window.dataLayer=window.dataLayer||[];
var lang=(document.querySelector('meta[name="gk-lang"]')||{}).content||document.documentElement.lang||'en';
window.gkTrack=function(ev,p){try{var o={event:ev,page_lang:lang};for(var k in p||{})o[k]=p[k];window.dataLayer.push(o)}catch(e){}};
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href')||'',m=null;
  if(/wa\.me|whatsapp/i.test(h))m='whatsapp';else if(/t\.me\//i.test(h))m='telegram';else if(/^tel:/i.test(h))m='phone';else if(/^mailto:/i.test(h))m='email';else if(/calendly\.com/i.test(h))m='calendly';
  if(m)gkTrack('contact_click',{method:m,link_url:h})},true);
})();

/* ═══════════════ SHARED UTILITIES (ALL PAGES) ═══════════════ */
/* Lightweight script for common functionality across all pages */

// ═══ NAV / THEME / MOBILE ═══
function toggleTheme(){const d=document.documentElement.getAttribute('data-theme')==='dark';document.documentElement.setAttribute('data-theme',d?'light':'dark');document.getElementById('themeBtn').textContent=d?'🌙':'☀️';}
function toggleMob(){const o=document.getElementById('mobDrawer').classList.contains('on');document.getElementById('mobDrawer').classList.toggle('on',!o);document.getElementById('mobVeil').classList.toggle('on',!o);document.getElementById('burger').classList.toggle('open',!o);document.body.style.overflow=o?'':'hidden';}
function closeMob(){document.getElementById('mobDrawer').classList.remove('on');document.getElementById('mobVeil').classList.remove('on');document.getElementById('burger').classList.remove('open');document.body.style.overflow='';}

// ═══ WA ═══
let waOn=false;
function toggleWa(){waOn=!waOn;document.getElementById('waBox').classList.toggle('on',waOn);}
function sendWa(){const v=document.getElementById('waIn').value.trim();if(!v)return;document.getElementById('waMsg').textContent='Thank you! Our team will reach you on WhatsApp shortly. God bless you! 🙏';document.getElementById('waIn').value='';}

// ═══ TOAST ═══
let toastT;
function toast(msg){const t=document.getElementById('toast')||document.getElementById('toastEl');if(!t)return;t.textContent=msg;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),3800);}

// ═══ NAV2 (page navigation) ═══
function nav2(url){window.location.href=url;}

// ═══ COOKIE / POPUP ═══
function acceptCookie(){localStorage.setItem('cookie_accepted','1');document.getElementById('cookieBar').classList.remove('on');}
function dismissCookie(){document.getElementById('cookieBar').classList.remove('on');}
function closePopup(){document.getElementById('popupVeil').classList.remove('on');}

// ═══ INIT COMMON ═══
document.addEventListener('DOMContentLoaded',()=>{
  // Remove loader faster
  setTimeout(()=>document.getElementById('loader').classList.add('out'),800);
  
  // Show popup only once per session
  setTimeout(()=>{if(!sessionStorage.getItem('popup_shown')){document.getElementById('popupVeil').classList.add('on');sessionStorage.setItem('popup_shown','1');}},1500);
  
  // Show cookie bar if not accepted
  if(!localStorage.getItem('cookie_accepted'))document.getElementById('cookieBar').classList.add('on');
  
  // Start countdowns if they exist
  if(typeof CountdownManager!=='undefined'){
    if(document.getElementById('pcd'))CountdownManager.animateCountdown('pcd',CountdownManager.getNextEventCountdown());
  }
});

// ═══ NAV SCROLL EFFECT ═══
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('mainNav');
  if(nav)nav.classList.toggle('scrolled',scrollY>60);
  const btt=document.getElementById('bttBtn')||document.getElementById('btt');
  if(btt)btt.classList.toggle('on',scrollY>500);
  const donate=document.getElementById('stickyDonate');
  if(donate)donate.classList.toggle('on',scrollY>700);
});

// ═══ SMOOTH SCROLL ═══
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}});});

// ═══ KEYBOARD ═══
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=document.getElementById('sModal');if(m)m.classList.remove('on');closePopup();closeMob();}});

// ═══ POPUP CLICK CLOSE ═══
const pv=document.getElementById('popupVeil');
if(pv)pv.addEventListener('click',e=>{if(e.target===pv)closePopup();});

// ═══ MODAL CLICK CLOSE ═══
const sm=document.getElementById('sModal');
if(sm)sm.addEventListener('click',e=>{if(e.target===sm)sm.classList.remove('on');});

// ═══ MICRO INTERACTIONS ═══
document.querySelectorAll('.btn').forEach(b=>{
  b.addEventListener('mousedown',()=>b.style.transform='scale(.97)');
  b.addEventListener('mouseup',()=>b.style.transform='');
  b.addEventListener('mouseleave',()=>b.style.transform='');
});

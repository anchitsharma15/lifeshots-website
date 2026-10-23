const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
function setMenu(open){menu.setAttribute('aria-expanded',String(open));menu.innerHTML=open?'Close <span>✕</span>':'Menu <span>☰</span>';nav.classList.toggle('open',open)}
menu.onclick=()=>setMenu(menu.getAttribute('aria-expanded')!=='true');
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))setMenu(false)});
addEventListener('resize',()=>{if(matchMedia('(min-width:641px)').matches)setMenu(false)});

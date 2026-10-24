// Each restored photo remains a normal image link when JavaScript is unavailable.
const photoLinks=[...document.querySelectorAll('[data-photo]')];
if(photoLinks.length){
 const viewer=document.createElement('dialog');viewer.className='archive-viewer';viewer.setAttribute('aria-label','Photography viewer');
 viewer.innerHTML='<button type="button" class="archive-close" aria-label="Close photography viewer">✕</button><figure><img alt=""><figcaption aria-live="polite"></figcaption></figure><div class="archive-controls"><button type="button" data-step="-1" aria-label="Previous photograph">←</button><a target="_blank" rel="noopener">Open photograph ↗</a><button type="button" data-step="1" aria-label="Next photograph">→</button></div>';
 document.body.append(viewer);let index=0,opener;
 function show(){const link=photoLinks[index];viewer.querySelector('img').src=link.href;viewer.querySelector('img').alt=link.querySelector('img').alt;viewer.querySelector('figcaption').textContent=`${index+1} / ${photoLinks.length}`;viewer.querySelector('a').href=link.href}
 function step(n){index=(index+n+photoLinks.length)%photoLinks.length;show()}
 photoLinks.forEach((link,i)=>link.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();index=i;opener=link;show();viewer.showModal();document.body.style.overflow='hidden'}));
 viewer.querySelector('.archive-close').onclick=()=>viewer.close();
 viewer.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>step(Number(b.dataset.step)));
 viewer.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();step(e.key==='ArrowRight'?1:-1)}});
 viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});
 viewer.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus({preventScroll:true})});
}

const photos=[
 {file:'d5aedc82b98ad3d2',title:'Close to forever',category:'wedding',label:'WEDDING',alt:'Bride and groom sharing a quiet embrace',post:'DecSqxDmXSH'},
 {file:'d0d550f8c194cb7f',title:'A world of our own',category:'prewedding',label:'PRE-WEDDING',alt:'Couple standing beneath pink palace arches',post:'DbGRfRtj6IG'},
 {file:'43c5a6677b013999',title:'The bridal chapter',category:'wedding',label:'BRIDAL PORTRAIT',alt:'Bride in red at a historic stone doorway',post:'DcBpkuPErB-'},
 {file:'20597b1c45c51673',title:'In your company',category:'prewedding',label:'COUPLE PORTRAIT',alt:'Couple smiling together, groom wearing a bright pink turban',post:'DbDmeE8j-IG'},
 {file:'88d291c0bc639451',title:'Somewhere with you',category:'prewedding',label:'PRE-WEDDING',alt:'Couple in a lush courtyard beside a wooden door',post:'DbgWYS9IBUd'},
 {file:'329f343487a29455',title:'A little blue magic',category:'portrait',label:'FASHION',alt:'Woman in a blue floral dress against a dark background',post:'Dc_cv44I61Y'},
 {file:'4ee3b279d446e698',title:'Quiet elegance',category:'portrait',label:'PORTRAIT',alt:'Elegant portrait of a woman in a blue dress',post:'Dc8qqfHCcYA'},
 {file:'da94f632e5f9c3fd',title:'An everyday muse',category:'portrait',label:'FASHION',alt:'Woman in blue dress and white hat seated in a city setting',post:'Dc_hkZ4o-_0'}
];
let filtered=[...photos],current=0,galleryOpener;const gallery=document.querySelector('#gallery'),dialog=document.querySelector('#lightbox');
function render(){gallery.replaceChildren(...filtered.map((p,i)=>{const b=document.createElement('button');b.className='gallery-card';b.setAttribute('aria-label','View '+p.title);b.innerHTML=`<div class="image-wrap"><img loading="lazy" src="assets/${p.file}.jpg" alt="${p.alt}" decoding="async" width="512" height="640"></div><div class="card-meta"><h3>${p.title}</h3><span>${p.label}</span></div>`;b.setAttribute('aria-haspopup','dialog');b.setAttribute('aria-controls','lightbox');b.onclick=()=>{galleryOpener=b;current=i;showImage();dialog.showModal();document.querySelector('.floating-dock')?.classList.remove('is-visible');document.querySelector('.floating-dock').inert=true;document.body.style.overflow='hidden'};return b}))}
function showImage(){const p=filtered[current];const im=document.querySelector('#lb-image');im.src=`assets/${p.file}.jpg`;im.alt=p.alt;document.querySelector('#lb-caption').textContent=`${p.title} · ${current+1} / ${filtered.length}`;document.querySelector('#lb-source').href=`https://www.instagram.com/lifeshots4u/p/${p.post}/`}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));filtered=photos.filter(p=>b.dataset.filter==='all'||p.category===b.dataset.filter);render();document.querySelector('#gallery-status').textContent=`${filtered.length} ${filtered.length===1?'story':'stories'} shown`;requestAnimationFrame(updateGalleryControls)});
function closeGallery(){dialog.close();document.body.style.overflow=''}document.querySelector('.close').onclick=closeGallery;dialog.addEventListener('close',()=>{document.body.style.overflow='';galleryOpener?.focus({preventScroll:true})});document.querySelector('.lb-prev').onclick=()=>{current=(current+filtered.length-1)%filtered.length;showImage()};document.querySelector('.lb-next').onclick=()=>{current=(current+1)%filtered.length;showImage()};dialog.addEventListener('click',e=>{if(e.target===dialog)closeGallery()});dialog.addEventListener('keydown',e=>{if(e.key==='Home'||e.key==='End'){e.preventDefault();current=e.key==='Home'?0:filtered.length-1;showImage()}if(e.key==='ArrowLeft'){e.preventDefault();document.querySelector('.lb-prev').click()}if(e.key==='ArrowRight'){e.preventDefault();document.querySelector('.lb-next').click()}});render();
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
function setMenu(open){menu.setAttribute('aria-expanded',String(open));menu.innerHTML=open?'Close <span>✕</span>':'Menu <span>☰</span>';nav.classList.toggle('open',open)}
menu.onclick=()=>setMenu(menu.getAttribute('aria-expanded')!=='true');
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus()}});
document.addEventListener('click',e=>{if(!e.composedPath().includes(document.querySelector('header')))setMenu(false)});
addEventListener('resize',()=>{if(matchMedia('(min-width:1001px)').matches)setMenu(false)});
// Google review cards share the same dated, attributed selection as the reviews page.
const reviewTrack=document.querySelector('#google-review-track'),reviewCards=[...reviewTrack.children];
const reviewPrev=document.querySelector('#google-review-prev'),reviewNext=document.querySelector('#google-review-next');
function updateReviewControls(){
 const position=Math.round(reviewTrack.scrollLeft/(reviewCards[0].getBoundingClientRect().width+20));
 const visible=Math.max(1,Math.round(reviewTrack.clientWidth/(reviewCards[0].getBoundingClientRect().width+20)));
 reviewPrev.disabled=reviewTrack.scrollLeft<=2;
 reviewNext.disabled=reviewTrack.scrollLeft>=reviewTrack.scrollWidth-reviewTrack.clientWidth-2;
 document.querySelector('#google-review-position').textContent=`${visible===1?position+1:(position+1)+"–"+Math.min(position+visible,reviewCards.length)} of ${reviewCards.length} reviews`;
}
function moveReviews(direction){reviewTrack.scrollBy({left:direction*(reviewTrack.clientWidth+20),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}
reviewPrev.onclick=()=>moveReviews(-1);reviewNext.onclick=()=>moveReviews(1);
reviewTrack.addEventListener('scroll',updateReviewControls,{passive:true});addEventListener('resize',updateReviewControls);
reviewTrack.addEventListener('keydown',event=>{if(event.target===reviewTrack&&(event.key==='ArrowLeft'||event.key==='ArrowRight')){event.preventDefault();moveReviews(event.key==='ArrowRight'?1:-1)}});
updateReviewControls();
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#service').value=a.dataset.service;invalidateInquiry()}));
const form=document.querySelector('#inquiry');
let inquiryText='';
const date=form.elements.date;
function updateMinDate(){const now=new Date();date.min=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-')}
updateMinDate();date.addEventListener('focus',updateMinDate);document.addEventListener('visibilitychange',updateMinDate);
const result=document.querySelector('#inquiry-result'),preview=document.querySelector('#inquiry-preview'),copyButton=document.querySelector('#copy-inquiry'),copyStatus=document.querySelector('#copy-status');
function invalidateInquiry(){result.hidden=true;inquiryText='';copyStatus.textContent='';copyButton.textContent='Copy inquiry'}
form.addEventListener('input',invalidateInquiry);form.addEventListener('change',invalidateInquiry);
const requestedOccasion=new URLSearchParams(location.search).get('occasion');
if([...form.elements.service.options].some(o=>o.value===requestedOccasion))form.elements.service.value=requestedOccasion;
form.addEventListener('submit',e=>{
 e.preventDefault();updateMinDate();
 for(const field of ['name','email','phone','location','message'])form.elements[field].value=form.elements[field].value.trim();
 if(!form.reportValidity())return;
 const f=new FormData(form);
 inquiryText=`Hello Lifeshots! I'd love to discuss a shoot.\n\nName: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')||'Not provided'}\nOccasion: ${f.get('service')}\nDate: ${f.get('date')}\nLocation: ${f.get('location')}\n\n${f.get('message')||''}`;
 preview.value=inquiryText;
 document.querySelector('#whatsapp-inquiry').href='https://wa.me/919465573973?text='+encodeURIComponent(inquiryText);
 document.querySelector('#email-inquiry').href='mailto:lifeshots4u@gmail.com?subject='+encodeURIComponent('Photography inquiry — '+f.get('service'))+'&body='+encodeURIComponent(inquiryText);
 copyStatus.textContent='';copyButton.textContent='Copy inquiry';result.hidden=false;
 result.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});
 preview.focus({preventScroll:true});
});
copyButton.onclick=async function(){
 try{await navigator.clipboard.writeText(inquiryText);copyStatus.textContent='Inquiry copied.'}
 catch{preview.focus();preview.select();copyStatus.textContent='Select and copy the prepared message above using your device’s copy command.'}
};

// Cinematic story selector, with user-controlled motion.
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let sceneIndex=0,slideshowPaused=reducedMotion.matches,sceneTimer;
const sceneNames=['The wedding chapter','Somewhere. Just the two of you.','A little more you.'];
const sceneButtons=[...document.querySelectorAll('[data-scene]')];
function selectScene(index){sceneIndex=index;document.querySelectorAll('.hero-scene').forEach((el,i)=>el.classList.toggle('is-active',i===index));sceneButtons.forEach((el,i)=>el.setAttribute('aria-pressed',String(i===index)));document.querySelector('#scene-label').textContent=sceneNames[index]}
function scheduleScenes(){clearInterval(sceneTimer);if(!slideshowPaused&&!document.hidden)sceneTimer=setInterval(()=>selectScene((sceneIndex+1)%3),6500)}
sceneButtons.forEach(b=>b.addEventListener('click',()=>{selectScene(Number(b.dataset.scene));scheduleScenes()}));
const motionButton=document.querySelector('#motion-toggle');
function syncMotion(){motionButton.textContent=slideshowPaused?'▶':'Ⅱ';motionButton.setAttribute('aria-label',slideshowPaused?'Play slideshow':'Pause slideshow');scheduleScenes()}
motionButton.addEventListener('click',()=>{slideshowPaused=!slideshowPaused;syncMotion()});document.addEventListener('visibilitychange',scheduleScenes);reducedMotion.addEventListener('change',e=>{slideshowPaused=e.matches;syncMotion()});syncMotion();
// Horizontal collection controls keep touch, trackpad and keyboard browsing native.
for(const [selector,direction]of [['#gallery-prev',-1],['#gallery-next',1]])document.querySelector(selector).addEventListener('click',()=>gallery.scrollBy({left:direction*(gallery.querySelector('.gallery-card')?.getBoundingClientRect().width+24||360),behavior:reducedMotion.matches?'instant':'smooth'}));
gallery.addEventListener('keydown',e=>{if(e.target!==gallery)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();gallery.scrollBy({left:(e.key==='ArrowRight'?1:-1)*360,behavior:reducedMotion.matches?'instant':'smooth'})}});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>gallery.scrollTo({left:0,behavior:'instant'})));
// Content reveals and a contextual floating navigation dock.
const revealTargets=document.querySelectorAll('.intro>*,.section-heading,.services,.process>div,.film-copy,.testimonial>*,.inquire-info,form,.faq>div');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});revealTargets.forEach(el=>{el.classList.add('reveal');observer.observe(el)})}
const dock=document.querySelector('.floating-dock');let scrollQueued=false;
function updateScroll(){const visible=scrollY>document.querySelector('.hero').offsetHeight*.75&&!dialog.open;dock.classList.toggle('is-visible',visible);dock.inert=!visible;scrollQueued=false}
addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateScroll)}},{passive:true});dialog.addEventListener('close',updateScroll);updateScroll();

// Show when the horizontal collection has reached either end.
function updateGalleryControls(){
 const maxScroll=gallery.scrollWidth-gallery.clientWidth;
 document.querySelector('#gallery-prev').disabled=gallery.scrollLeft<=2;
 document.querySelector('#gallery-next').disabled=gallery.scrollLeft>=maxScroll-2;
}
gallery.addEventListener('scroll',updateGalleryControls,{passive:true});
addEventListener('resize',updateGalleryControls);
updateGalleryControls();

// Keep the shared photography dropdown and mobile menu predictable.
const photographyMenu=document.querySelector('.nav-photography');
function closePhotographyMenu(){photographyMenu.open=false}
document.addEventListener('click',event=>{if(!event.target.closest('.nav-photography'))closePhotographyMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&photographyMenu.open){event.stopImmediatePropagation();closePhotographyMenu();photographyMenu.querySelector('summary').focus()}},true);
photographyMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closePhotographyMenu));
document.querySelector('.menu').addEventListener('click',closePhotographyMenu);

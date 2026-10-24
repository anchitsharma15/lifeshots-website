const reviewCards=[...document.querySelectorAll('.review-card')];
const search=document.querySelector('#review-search'),rating=document.querySelector('#review-rating'),more=document.querySelector('#more-reviews'),status=document.querySelector('#review-status');
let limit=12;
document.querySelector('.review-tools').hidden=false;
function displayReviews(){
 const query=search.value.trim().toLocaleLowerCase();
 const matches=reviewCards.filter(card=>(rating.value==='all'||card.dataset.rating===rating.value)&&card.textContent.toLocaleLowerCase().includes(query));
 const shown=new Set(matches.slice(0,limit));reviewCards.forEach(card=>{card.hidden=!shown.has(card)});
 more.hidden=matches.length<=limit;
 status.textContent=`Showing ${Math.min(limit,matches.length)} of ${matches.length} matching reviews · ${reviewCards.length} total`;
}
search.addEventListener('input',()=>{limit=12;displayReviews()});rating.addEventListener('change',()=>{limit=12;displayReviews()});
more.addEventListener('click',()=>{const visible=reviewCards.filter(c=>!c.hidden).length;limit+=12;displayReviews();reviewCards.filter(c=>!c.hidden)[visible]?.querySelector('a')?.focus({preventScroll:true})});
displayReviews();

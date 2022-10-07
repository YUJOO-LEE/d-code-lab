const skipNave = document.querySelectorAll('#skipNavi li a');

for (let el of skipNave){
  el.addEventListener('focusin', ()=>{
    el.classList.add('on');
  })
  el.addEventListener('focusout', ()=>{
    el.classList.remove('on');
  })
}
const wrap = document.querySelector('#wrap');
const btns = document.querySelectorAll('li');

btns.forEach((btn, idx)=>{
  btn.addEventListener('click', ()=>{
    wrap.className = '';
    wrap.classList.add(`face${idx + 1}`);
  })
})
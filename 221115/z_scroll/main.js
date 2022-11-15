const boxs = document.querySelectorAll('section article');
const btns = document.querySelectorAll('ul li');
const h1 = document.querySelector('h1');
const distance = 3000;

window.addEventListener('scroll', ()=>{
  const scroll = window.scrollY;
  h1.innerText = scroll;

  boxs.forEach((box, idx)=>{
    box.style.transform = `translateZ(${distance * idx * -1 + scroll}px)`;

    if (scroll >= idx * distance) {
      for (const btn of btns) {
        btn.classList.remove('on');
      }
      btns[idx].classList.add('on');
    }
  })
})

btns.forEach((btn, idx)=>{
  btn.addEventListener('click', ()=>{
    new Anime(window, {
      prop: 'scroll',
      value: distance * idx,
      duration: 1000,
    })
  })
})
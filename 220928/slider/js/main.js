const frame = document.querySelector('#slider');
const btns = frame.querySelectorAll('.btns li');
const panel = frame.querySelector('.panel');
let playIndex = 0;

btns.forEach((btn, index) => {
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    for (let el of btns) {
      el.classList.remove('on');
    }
    btns[index].classList.add('on');

    new Anim(panel, {
      prop: 'margin-left',
      value: `${index * -100}%`,
      duration: '500',
    })
  })
})
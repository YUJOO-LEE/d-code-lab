const frame = document.querySelector('#slider');
const btns = frame.querySelectorAll('.btns li');
const panel = frame.querySelector('.panel');

btns.forEach((btn, index) => {
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    for (let el of btns) {
      el.classList.remove('on');
    }
    btns[index].classList.add('on');
    // 나중에 prev, next 버튼 등 활용하기 위해 index 사용

    new Anim(panel, {
      prop: 'margin-left',
      value: `${index * -100}%`,
      duration: '500',
    })
  })
})
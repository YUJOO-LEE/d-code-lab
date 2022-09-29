const slider = document.querySelector('#slider');
const btns = slider.querySelectorAll('.btns li');
const panel = slider.querySelector('.panel');
const ring = slider.querySelector('#ring');


btns.forEach((btn, index) => {
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    activation(index);
  })
})


/* 
함수 패키징 : 이벤트 함수 분리
함수 : 자주 사용하는 코드를 묶어두는 행위
의존성이 있는 것끼리 묶음
 */

function activation(index) {
  for (let el of btns) {
    el.classList.remove('on');
  }
  btns[index].classList.add('on');

  new Anim(panel, {
    prop: 'margin-left',
    value: `${index * -100}%`,
    duration: '500',
  })

  ring.className = `rot${index}`;
}
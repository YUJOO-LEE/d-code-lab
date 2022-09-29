const main = document.querySelector('main');
const btns = main.querySelectorAll('nav ul li');
const boxes = main.querySelectorAll('section article');

btns.forEach((btn, index) => {
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    activation(index, btns);
    activation(index, boxes);
  })
})

function activation(index, arr) {
  for (let el of arr) {
    el.classList.remove('on');
  }
  arr[index].classList.add('on');
}
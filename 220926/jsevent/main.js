/* 
 
  이벤트대상.addEventListener('이벤트명', 함수);

*/

const link = document.querySelector('a');
link.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log('Clicked');
})

const box = document.querySelector('#box');
box.addEventListener('mouseenter', ()=>{
  box.style.backgroundColor = 'pink';
})
box.addEventListener('mouseleave', ()=>{
  box.style.backgroundColor = 'lightblue';
})

const list = document.querySelectorAll('ul li');
for (let el of list) {
  el.addEventListener('click', (e)=>{
    e.preventDefault();
    e.currentTarget.innerText = 'Hi!';
  })
}

const btnPlus = document.querySelector('.btnPlus');
const btnMinus = document.querySelector('.btnMinus');
let num = 0;

btnPlus.addEventListener('click', (e)=>{
  e.preventDefault();

  num++;
  console.log(num);
})

btnMinus.addEventListener('click', (e)=>{
  e.preventDefault();

  num--;
  console.log(num);
})
const h1 = document.querySelector('h1');
const sections = document.querySelectorAll('section');
const lis = document.querySelectorAll('ul li');

const posArr = [];
let clickable = true;

for (let el of sections) posArr.push(el.offsetTop);

window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY || window.pageYOffset;
  // scrollY, pageYOffset : 문서 수직으로 얼마나 스크롤 되었는지 px 단위로 반환
  // scrollY : 익스 9 이전 적용안됨

  h1.innerText = scroll;

  posArr.forEach((top, index) => {
    if (scroll >= top && scroll < (posArr[index + 1] || top + 1)) {
      lis[index].parentElement.querySelector('.on')?.classList.remove('on');
      lis[index].classList.add('on');
    }
  })
})

lis.forEach((li, index)=>{
  li.addEventListener('click', (e)=>{
    clickable = false;
    
    new Anim(window, {
      prop: 'scroll',
      value: posArr[index],
      duration: 500,
      callback: ()=>{
        clickable = true;
      }
    })
  })
})
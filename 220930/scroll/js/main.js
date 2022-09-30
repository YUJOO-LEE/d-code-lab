const h1 = document.querySelector('h1');
const sections = document.querySelectorAll('section');
const lis = document.querySelectorAll('ul li');
const box2P = document.querySelector('p');
const box3Fishs = document.querySelectorAll('.fish');

const posArr = [];
let clickable = true;

for (let el of sections) posArr.push(el.offsetTop);

window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY || window.pageYOffset;
  // scrollY, pageYOffset : 문서 수직으로 얼마나 스크롤 되었는지 px 단위로 반환
  // scrollY : 익스 9 이전 적용안됨

  h1.innerText = scroll;

  // article 2
  box2P.style.left = `${(scroll - posArr[1] + (box2P.parentElement.clientHeight / 2)) / posArr[1] * 100}%`;

  //article 3
  box3Fishs[0].style.left = `${(scroll - posArr[2] + 100) * 1.8}px`;
  box3Fishs[1].style.left = `${(scroll - posArr[2]) * 1.5}px`;
  box3Fishs[2].style.left = `${scroll - posArr[2]}px`;
  box3Fishs[3].style.left = `${(scroll - posArr[2] + 300) * 1.2}px`;
  box3Fishs[4].style.left = `${(scroll - posArr[2]) * 2}px`;


  sections.forEach((article, index) => {
    if (scroll >= posArr[index] - (article.clientHeight / 2)) {
      for (let el of lis) {
        el.classList.remove('on');
      }
      for (let el of sections) {
        el.classList.remove('on');
      }
      lis[index].classList.add('on');
      article.classList.add('on');
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
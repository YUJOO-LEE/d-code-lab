const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('#slider');
const slider2 = document.querySelector('#slider2');

let clickable = true;

init(slider);
init(slider2);

prevBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  if (!clickable) return;
  clickable = false;
  sliding(slider, 'prev');
  sliding(slider2, 'prev');
})

nextBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  if (!clickable) return;
  clickable = false;
  sliding(slider, 'next');
  sliding(slider2, 'next');
})

function sliding(frame, event) {
  const ul = frame.querySelector('ul');
  const leftSize = event === 'prev' ? '0%' : '-200%';
  // 지정한 event가 prev라면 0%, 아니면(next) -200%
  
  new Anim(ul, {
    prop: 'margin-left',
    value: leftSize,
    duration: 1000,
    callback: ()=>{
      if (event === 'prev') {
        ul.prepend(ul.lastElementChild);
      } else{
        ul.append(ul.firstElementChild);
      }
      ul.style.marginLeft = "-100%";
      clickable = true;
    }
  })
}

function init(frame) {
  const ul = frame.querySelector('ul');
  const lis = ul.querySelectorAll('li');
  const len = lis.length;

  ul.prepend(ul.lastElementChild);
  ul.style.marginLeft = '-100%';
  ul.style.width = `${100 * len}%`;
  lis.forEach((el)=>{
    el.style.width = `${100 / len}%`;
  })
}
const articles = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const closeBtn = aside.querySelector('span');

for (let el of articles) {
  el.addEventListener('mouseenter', (e)=>{
    e.currentTarget.querySelector('video').play();
  })
  el.addEventListener('mouseleave', (e)=>{
    e.currentTarget.querySelector('video').pause();
  })
  el.addEventListener('click', (e)=>{
    const tit = e.currentTarget.querySelector('h2').innerText;
    const txt = e.currentTarget.querySelector('p').innerText;
    const videoSrc = e.currentTarget.querySelector('video').getAttribute('src');

    aside.querySelector('h2').innerText = tit;
    aside.querySelector('p').innerText = txt;
    aside.querySelector('video').setAttribute('src', videoSrc);
    // setAttribute(바꿀 속성 선택, 바뀔 내용 입력)

    aside.classList.add('on');
    aside.querySelector('video').play();
  })
}

closeBtn.addEventListener('click', ()=>{
  aside.classList.remove('on');
  aside.querySelector('video').pause();
})
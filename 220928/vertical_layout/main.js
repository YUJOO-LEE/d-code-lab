window.addEventListener('load', ()=>{  // 페이지 로드 후 함수 실행
  // vanilla JS
  const grid = new Isotope('section', {
    // options...
    itemSelector: 'article',
    columnWidth: 'article',
    transitionDuration: '0.5s',
  });

  const btns = document.querySelectorAll('main ul li');

  for (let el of btns) {
    el.addEventListener('click', (e)=>{
      e.preventDefault();

      const sort = e.currentTarget.querySelector('a').getAttribute('href');
      grid.arrange({
        filter: sort,
      });

      for (let el of btns) {
        el.classList.remove('on');
      }
      el.classList.add('on');
    })
  }
})

/*
  BOM : 브라우저 모델(window, document, screen)
  - window.onload 웹 브라우저의 모든 객체가 로드 되었을 때 실행

  DOM : 문서 모델
  - 
*/

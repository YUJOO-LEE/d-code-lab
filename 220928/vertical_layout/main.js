window.addEventListener('load', ()=>{  // 페이지 로드 후 함수 실행

  const grid = new Isotope('section', { // 인스턴스 생성
    itemSelector: 'article',
    columnWidth: 'article', // article의 width 값 가져옴
    transitionDuration: '0.5s', // 모션 진행시간 (transition)
  });

  const main = document.querySelector('main');
  // document 한번만 읽어와서 속도 저하 방지
  const articles = main.querySelectorAll('section article');
  // article들을 유사배열로 가져옴
  const btns = main.querySelectorAll('ul li');
  // li들을 유사배열로 가져옴

  for (let el of btns) {
    // 배열 길이만큼 반복하며 '값'을 하나씩 꺼내 사용

    el.addEventListener('click', function(e) {
      // 선택 요소에 이벤트 부여

      e.preventDefault();
      // 클릭한 대상은 a태그 이므로 기본 기능 해제

      const sort = e.target.getAttribute('href');
      // 클릭한 a태그의 href 속성값 가져옴

      grid.arrange({  // isotope 지정 메서드 
        filter: sort, // 지정한 값을 가지는 요소만 filter
      });

      /*
      for (let el of btns) {  // btns 돌면서
        el.classList.remove('on');  // on class 찾아서 해제
      }
      */
      el.parentElement.querySelector('.on').classList.remove('on');
      // on은 한개니까 이런식으로도 되지 않을까?
      e.currentTarget.classList.add('on');
      // 현재 버튼에 on class 부여
    })
  }

  for (let el of articles) {
    el.querySelector('a').addEventListener('click', function(e) {
      // favorite 버튼 클릭 이벤트 부여
      e.preventDefault();

      e.currentTarget.classList.toggle('on');
      // 해당 버튼에 on 클래스 토글
      el.classList.toggle('favorite');
      // 해당 article에 favorite 클래스 토글
    })
  }
})

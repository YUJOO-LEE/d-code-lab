
window.addEventListener('load', () => {
  const btn = document.querySelector('button');
  const box = document.querySelector('#box');
  btn.addEventListener('click', ()=>{
    new Anim(box, {
      prop: 'margin-left',
      value: 500,
      duration: 1000,
      callback: ()=>{
        new Anim(box, {
          prop: 'margin-top',
          value: 200,
          duration: 1000
        })
      }
    })
  })
})
/* 

콜백함수

함수에 매개변수로 들어가는 함수
함수 안에 매개변수 자리에 함수를 넣은 것

비동기 방식 처리의 가장 기초
Promise, async/await

순차적인 실행, 비동기화를 위해 사용
자바스크립트는 호이스팅으로 모든 함수를 위로 끌어올리기 때문에 순차적이지 않음

addEventListener 또한 파라미터를 받는 콜백함수이다.

버튼을 클릭했을 때, 반드시 그 다음순서로 콜백함수 순차적으로 실행하라는 뜻

*단점
코드가 길어지고 가독성이 떨어짐

- 해결
1. Promise
2. async / await

*/
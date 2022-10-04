const divs = document.querySelectorAll('div');

divs.forEach((el)=>{
  el.addEventListener('click', (e)=>{
    console.log(e.currentTarget.className);
  })
})

/*

이벤트 버블링

브라우저는 특정 화면 요소에서 이벤트가 발생하였을 때,
그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파시킨다.
따라서 three를 클릭하면 상위에있는 one까지 거슬러 올라가 이벤트를 전파시킨다.


이벤트 캡쳐

버블링과 반대방향으로 진행되는 전파방식


이벤트 위임

하위 요소에 각각 이벤트를 붙이지 않고 상위요소에서 하위 요소의 이벤트를 제어하는 방식


*/

const lis = document.querySelectorAll('li');

lis.forEach((el)=>{
  el.addEventListener('click', ()=>{

  })
})

/*

li가 100개이면 이벤트 리스너를 100개 붙여야 함
이벤트 위임을 이용해 상위 요소인 ul에 이벤트 리스너를 부여해서 하위 요소에 전가시켜야 함
이후 li가 얼마나 추가가 되던지 따로 부여하지 않아도 알아서 이벤트가 하위 요소에 전가되어 부여됨


*/

const itemList = document.querySelector('.itemList');

itemList.addEventListener(('click'), ()=>{
  console.log('click');
})
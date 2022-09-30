const slider = document.querySelector('#slider');
const ul = slider.querySelector('ul');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

ul.style.left = "-100%";

next.addEventListener('click', (e)=>{
  e.preventDefault();

  new Anim(ul, {
    prop: 'left',
    value: '-200%',
    duration: 1000,
    callback: ()=>{
      ul.append(ul.firstElementChild);
      ul.style.left = "-100%";
    }
  })
})

prev.addEventListener('click', (e)=>{
  e.preventDefault();

  new Anim(ul, {
    prop: 'left',
    value: '0%',
    duration: 1000,
    callback: ()=>{
      ul.prepend(ul.lastElementChild);
      ul.style.left = "-100%";
    }
  })
})

/*
DOM 구조 변경
문서와 기존 구조를 js를 통해 변경

부모 요소명.append(자식요소)
- 부모요소 안쪽 가장 뒤에 자식요소 삽입

부모요소명.prepend(자식요소)
- 부모요소 안쪽의 사장 앞쪽에 자식요소 삽입

loop slider
- 프레임을 기준으로 양쪽에 적어도 한 개 이상의 패널 li가 있어야 함
- 즉, li 적어도 3개 이상 필요

1. 초기 ul 위치값 설정

2. 슬라이드 기본 모션
prev 버튼 클릭 : ul left: -100% => 0%로 이동
next 버튼 클릭 : ul left: -100% => -200%로 이동

3. 이동이 끝난 뒤 쌓인 li를 ul 안이나 뒤로 재배치 필요

4. ul의 초기 위치 left 값 -100%으로 초기화

*/
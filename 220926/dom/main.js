const ul = document.getElementsByTagName('ul')[0];
// ul 태그를 모두 불러와 0번 인덱스(첫번째 ul)를 값으로 가져옴

const item = document.getElementsByClassName('item1');
// class 로 해당 값을 가진 요소를 모두 불러옴

const item3 = document.getElementById('item3');
// 해당 id만 1개 가져옴

const _ul = document.querySelector('ul');
const _item = document.querySelectorAll('.item');

for (let el of _item) {
  el.addEventListener('click', () => {
    console.log('clicked!');
  })
}

const _itemli = document.querySelectorAll('ul li');
for (let i = 0; i < _itemli.length; i++) {
  _itemli[i].addEventListener('click', ()=>{
    console.log(`clicked! ${_itemli[i].textContent}`);
  })
}

// 부모요소 선택
console.log(item3.parentElement); // li의 부모인 ul선택
item3.closest('main'); // 가장 가까운 상위 요소 선택

// 형제요소 선택
item3.previousElementSibling; // 이전 요소
item3.nextElementSibling; // 다음 요소

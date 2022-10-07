/*
  쿠키

  클라이언트 자원 사용

  name: 식별자
  value: 값
  domain: 사이트 도메인
  path: 사이트 내 경로
  expires: 만기 날짜

  실행 시 서버에서 클라이언트에 저장된 쿠키 확인 후 없으면 생성
*/

const $popup = document.querySelector('#popup');
const $today = $popup.querySelector('#today');
const $btnClose = $popup.querySelector('.close');
const $btnDel = document.querySelector('.del');
const $btnView = document.querySelector('.view');

// 팝업창 실행
viewPopup('today=done');

// 닫기 버튼
$btnClose.addEventListener('click', (e)=>{
  e.preventDefault();
  const isChecked = $popup.querySelector('input[type=checkbox]').checked;
  if (isChecked) setCookie('today', 'done', 1);
  $popup.style.display = 'none';
})

// 쿠키 삭제 버튼
$btnDel.addEventListener('click', (e)=>{
  e.preventDefault();
  setCookie('today', 'done', 0);
})

// 쿠키 보기 버튼
$btnView.addEventListener('click', (e)=>{
  e.preventDefault();
})

// 팝업창
function viewPopup(name) {
  const cookieIndex = document.cookie.indexOf(name);
  if (cookieIndex === -1) $popup.style.display = "block";
}

// 쿠키 세팅
function setCookie(name, value, due) {
  const today = new Date();
  const date = today.getDate();
  today.setDate(date + due);
  const duedate = today.toGMTString();

  document.cookie = `${name}=${value}; path="/"; expires=${duedate}`;
}
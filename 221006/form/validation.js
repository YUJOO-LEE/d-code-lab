/*

  **가입 폼 확인 요소**

  1. text 길이
  2. email @ 포함
  3. 체크박스 선택
  4. select 선택
  5. 비밀번호 길이, 특수문자, 숫자 포함

  함수 별 조건 만족 여부에 따라 return true / false 이후, 결과 값 false 있으면 e.preventDefault()로 페이지 이동 막음.
  모든 결과값이 true 여야 result.html로 이동

*/

const $form = document.querySelector('#member');

// SUBMIT 버튼
$form.addEventListener('submit',(e)=>{

  errorReset();

  if (!checkLen('userId', 5)) {
    e.preventDefault();
    errorMsg('userId', '5글자 이상 입력하세요.');
  }

  if (!checkPw('pw1', 6)) {
    e.preventDefault();
    errorMsg('pw1', '비밀번호는 영문자, 숫자, 특수기호를 포함한 6자 이상으로 입력하세요.');
  }

  if (!checkSamePw('pw1', 'pw2')) {
    e.preventDefault();
    errorMsg('pw2', '같은 비밀번호를 입력하세요.');
  }

  if (!checkEmail('email')) {
    e.preventDefault();
    errorMsg('email', '이메일 주소를 입력하세요.');
  }

  if (!checkLen('edu')) {
    e.preventDefault();
    errorMsg('edu', '최종 학력을 선택하세요.');
  }

  if (!checkCheck('gender')) {
    e.preventDefault();
    errorMsg('gender', '성별을 선택하세요.');
  }

  if (!checkCheck('hobby')) {
    e.preventDefault();
    errorMsg('hobby', '취미를 선택하세요.');
  }

  if (!checkLen('comments', 20)) {
    e.preventDefault();
    errorMsg('comments', '20글자 이상 입력하세요.');
  }

})

// 리셋 버튼
$form.addEventListener('reset',()=>{
  errorReset();
})

// 입력 길이 확인
function checkLen(name, len = 1) {
  const $input = $form.querySelector(`[name=${name}]`);
  const txt = $input.value.trim();

  return txt.length >= len ? true : false;
}

// 비밀번호 양식 확인
function checkPw(name, len = 6) {
  const $input = $form.querySelector(`[name=${name}]`);
  const txt = $input.value.trim();

  const regEng = /[a-zA-Z]/;
  const regNum = /[0-9]/;
  const regSc = /[~!@#$%^&*()_+?<>₩]/;
  const checkReg = regEng.test(txt) && regNum.test(txt) && regSc.test(txt) ? true : false;

  return txt.length >= len && checkReg ? true : false;
}

// 비밀번호 같은지 확인
function checkSamePw(pw1, pw2) {
  pw1 = $form.querySelector(`[name=${pw1}]`).value.trim();
  pw2 = $form.querySelector(`[name=${pw2}]`).value.trim();

  return pw2 && pw1 === pw2 ? true : false;
}

// 이메일 조건 확인
function checkEmail(name){
  const $input = $form.querySelector(`[name=${name}]`);
  const txt = $input.value.trim();
  const regexp = /@/;

  return regexp.test(txt) ? true : false;
}

// 체크 유무 확인
function checkCheck(name){
  const $inputs = $form.querySelectorAll(`[name=${name}]`);
  let isChecked = false;

  for (let input of $inputs) if (input.checked) isChecked = true;
  return isChecked ? true : false;
}

// 셀렉트 선택 여부 확인 (checkLen()으로도 동작함)
function checkSelect(name){
  const $select = $form.querySelector(`[name=${name}]`);
  const selectId = $select.options.selectedIndex; // 선택된 옵션의 Index 반환
  const value = $select[selectId].value;

  return value ? true : false;
}

// 에러 메세지 출력
function errorMsg(name, msg) {
  const el = $form.querySelector(`[name=${name}]`);
  const errMsg = document.createElement('p');
  errMsg.innerText = msg;
  el.closest('td').append(errMsg);
}

// 전체 에러 메세지 삭제
function errorReset() {
  const $p = document.querySelectorAll('p');
  for (p of $p) p.remove();
}
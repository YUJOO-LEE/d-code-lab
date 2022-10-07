const $pwd = document.getElementById('pwd');
const $toggleBtn = document.getElementById('toggleBtn');
const $lowerCase = document.getElementById('lower');
const $upperCase = document.getElementById('upper');
const $number = document.getElementById('number');
const $specialChar = document.getElementById('special');
const $length = document.getElementById('length');

$toggleBtn.addEventListener('click', ()=>{
  if ($pwd.type === 'password') {
    $pwd.type = 'text';
    $toggleBtn.classList.add('hide');
  } else {
    $pwd.type = 'password';
    $toggleBtn.classList.remove('hide');
  }
})

$pwd.addEventListener('keyup', (e)=>{
  console.log($pwd.value, e);
  checkPw($pwd.value);
})

function checkPw(data) {
  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const spercialChar = new RegExp('(?=.*[!@#\$%\^&\*])');
  const length = new RegExp('(?=.{8,})');

  lower.test(data) ? setClass($lowerCase, true) : setClass($lowerCase, false);
  upper.test(data) ? setClass($upperCase, true) : setClass($upperCase, false);
  number.test(data) ? setClass($number, true) : setClass($number, false);
  spercialChar.test(data) ? setClass($specialChar, true) : setClass($specialChar, false);
  length.test(data) ? setClass($length, true) : setClass($length, false);
}

function setClass(el, show = false) {
  if(show) {
    el.classList.add('valid');
  } else {
    el.classList.remove('valid');
  }
}
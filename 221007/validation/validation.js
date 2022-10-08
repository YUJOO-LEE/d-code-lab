const $pwd = document.querySelector('#pwd');
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

  setClass($lowerCase, lower.test(data));
  setClass($upperCase, upper.test(data));
  setClass($number, number.test(data));
  setClass($specialChar, spercialChar.test(data));
  setClass($length, length.test(data));
}

function setClass(el, show = false) {
  if(show) {
    el.classList.add('valid');
  } else {
    el.classList.remove('valid');
  }
}
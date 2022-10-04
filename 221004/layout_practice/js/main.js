const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.menuMo');

btnCall.onclick = function(e){
  e.preventDefault(); //링크 이동 방지

  btnCall.classList.toggle('on');
  menuMo.classList.toggle('on');
}
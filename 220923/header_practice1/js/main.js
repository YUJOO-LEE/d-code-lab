const btnCall = document.querySelector('.btnCall');
const mobileNav = document.querySelector('.mobileNav');

btnCall.onclick = function(e){
  e.preventDefault(); //링크 이동 방지

  mobileNav.classList.toggle('on');
}
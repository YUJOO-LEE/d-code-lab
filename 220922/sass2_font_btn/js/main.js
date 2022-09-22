const $btnCall = document.querySelector('.btncall');

$btnCall.addEventListener('click', (e) => {
  e.preventDefault();
  e.currentTarget.classList.toggle('on');
})
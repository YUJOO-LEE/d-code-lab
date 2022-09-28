const btn = document.querySelector('button');
const gallery = document.querySelector('.gallery');

btn.addEventListener('click', ()=>{
  gallery.classList.toggle('on');
})
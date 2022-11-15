const cursor = document.querySelector('.cursor');
const h1 = document.querySelector('h1');

const mouseMove = (e)=>{
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
}

window.addEventListener('mousemove', mouseMove);
h1.addEventListener('mouseenter', ()=>{
  cursor.style.transform = 'scale(5)';
})
h1.addEventListener('mouseleave', ()=>{
  cursor.style.transform = 'scale(1)';
})
const main = document.querySelector('main');
const menus = main.querySelectorAll('nav ul li');
const articles = main.querySelectorAll('section article');

menus.forEach((btn, index) => {
  btn.addEventListener('click', (e)=>{
    e.preventDefault();

    for (let i = 0; i < menus.length ; i++) {
      menus[i].classList.remove('on');
      articles[i].classList.remove('on');
    }
    menus[index].classList.add('on');
    articles[index].classList.add('on');

  })
})
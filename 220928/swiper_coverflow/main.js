const swiper = new Swiper('.gallery', {
  // Optional parameters
  effect: 'coverflow',
  grapCurcor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 0,
  speed: 1000,

  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },

  coverflowEffect: {
    rotate: 50,
    stretch: -100,
    depth: 400,
    modifier: 1,
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');

btnStart.addEventListener('click', ()=>{
  swiper.autoplay.start();
});
btnStop.addEventListener('click', ()=>{
  swiper.autoplay.stop();
});
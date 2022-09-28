const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 0,
  slidesPerView: 1,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    // true : 자동 롤링 중 스와이핑 하면 자동롤링 중지
    // false : 스와이핑 여부와 상관 없이 계속 자동 롤링
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// 롤링 시작, 롤링 정지 버튼
const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');

swiper.autoplay.stop();
btnStart.addEventListener('click', ()=> swiper.autoplay.start());
btnStop.addEventListener('click', ()=> swiper.autoplay.stop());
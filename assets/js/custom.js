// Custom JS
var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 6,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.fa-arrow-circle-right',
    prevEl: '.fa-arrow-circle-left',
  },
  breakpointsInverse: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },
});
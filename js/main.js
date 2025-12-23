const testimonialsSwiper = new Swiper('.testimonials-swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 30,
    },
  },
});

const brandsSwiper = new Swiper('.brands-swiper', {
  slidesPerView: 'auto',
  loop: true,
  loopAdditionalSlides: 10,

  freeMode: true,
  freeModeMomentum: false,
  allowTouchMove: false,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  speed: 5000,

  breakpoints: {
    0: {
      spaceBetween: 32,
      speed: 3000,
    },

    480: {
      spaceBetween: 48,
      speed: 3500,
    },

    768: {
      spaceBetween: 64,
      speed: 4000,
    },

    1024: {
      spaceBetween: 96,
      speed: 5000,
    },
  },
});

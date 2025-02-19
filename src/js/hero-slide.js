var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true, // Enable looping
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return `
      <div class="swiper-pagination-custom">
        <span class="slide-count">${(current < 10 ? '0' : '') + current}</span>
        <div class="swiper-pagination-line"></div>
        <span class="slide-count">${(total < 10 ? '0' : '') + total}</span>
      </div>
    `;
    },
  },
});

// Functions to handle slide navigation
function nextSlide() {
  swiper.slideNext();
}

function prevSlide() {
  swiper.slidePrev();
}
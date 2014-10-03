var APP = APP || {};
APP.Slide = {
  setUp: function() {
    this.activeSlide();
  },

  activeSlide: function() {
    $('#nav-list').slick({
        arrows: true,
        easing: 'linear',
        slidesToShow: 3,
        slidesToScroll: 3,
        slide: 'li',
        infinite: false
    });
  }
}

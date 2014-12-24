var APP = APP || {};
APP.Slide = {
  setUp: function() {
    this.activeSlide();
    // this.viewport();
  },

  viewport: function() {
    window.onresize = function(event) {
      var largura = window.innerWidth;

      if (largura <= 854) {
        console.log('MENOR!');
      } else {
        console.log('MAIOR!');
      }
    };
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

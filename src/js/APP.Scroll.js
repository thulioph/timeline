var APP = APP || {};
APP.Scroll = {
  setUp: function() {
    this.startScroll();
  },

  startScroll: function() {
    window.sr = new scrollReveal({
      reset: true,
      move: '50px',
      mobile: true
    });
  }
}

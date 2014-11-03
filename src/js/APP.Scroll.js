var APP = APP || {};
APP.Scroll = {
  setUp: function() {
    this.startScroll();
    APP.Timeline.setUp();
  },

  startScroll: function() {
    var config = {
      mobile: false,
      reset: true,
      move: '50px',
      mobile: true
    }

    window.sr = new scrollReveal(config);
  }
}

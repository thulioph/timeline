var APP = APP || {};
APP.Scroll = {
  setUp: function() {
    this.startScroll();
    APP.Timeline.setUp();
  },

  startScroll: function() {
    var config = {
      mobile: false
    }

    window.sr = new scrollReveal(config);
  }
}

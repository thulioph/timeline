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
  },

  getUserAgent: function() {
    var iPad, agent;

    iPad = navigator.userAgent.match(/iPad/i);
    agent = navigator.userAgent;

    if (agent !== iPad) {
      console.log('IF: ' + navigator.userAgent);
      APP.Scroll.startScroll();
    } else {
      console.log('ELSE: ' + navigator.userAgent);
    }
  }
}

var APP = APP || {};
APP.Timeline = {
  setUp: function() {
    this.addClass();
    this.trigger();
  },

  addClass: function() {
    $('#header-primary').addClass('js-closed');
  },

  stateOne: function() {
    $('#header-primary').removeClass('js-closed');
    $('#click-animation').css('bottom', '165px');
    $('#header-primary').addClass('js-open');
  },

  stateTwo: function() {
    $('#header-primary').removeClass('js-open');
    $('#click-animation').css('bottom', '-5px');
    $('#header-primary').addClass('js-closed');
  },

  trigger: function() {
    $('#click-animation').on('click', function(event) {

      if ($('#header-primary').hasClass('js-closed')) {
        APP.Timeline.stateOne();
      } else {
        APP.Timeline.stateTwo();
      }

    });
  }
}

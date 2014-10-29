var APP = APP || {};
APP.Timeline = {
  setUp: function() {
    this.addClass();
    this.trigger();
  },

  addClass: function() {
    $('#header-primary').addClass('js-closed');
    $('.text-complementary').addClass('js-hide');
    // APP.Timeline.hideLegend();
  },

  stateOne: function() {
    $('#header-primary').removeClass('js-closed');
    $('#click-animation').css('bottom', '165px');
    $('#header-primary').addClass('js-open');
    APP.Timeline.showLegend();
  },

  stateTwo: function() {
    $('#header-primary').removeClass('js-open');
    $('#click-animation').css('bottom', '170px');
    $('#header-primary').addClass('js-closed');
    APP.Timeline.hideLegend();
  },

  hideLegend: function() {
    $('.text-complementary').removeClass('js-show');
    $('.text-complementary').addClass('js-hide');
  },

  showLegend: function() {
    $('.text-complementary').removeClass('js-hide');
    $('.text-complementary').addClass('js-show');
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

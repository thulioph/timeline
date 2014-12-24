var APP = APP || {};
APP.Timeline = {
  setUp: function() {
    this.addClass();
    this.trigger();
  },

  addClass: function() {
    $('#header-primary').addClass('js-closed');
    $('.text-complementary').addClass('js-hide');
  },

  stateOne: function() {
    $('#header-primary').removeClass('js-closed');
    $('#click-animation').css('bottom', '165px');
    $('#header-primary').addClass('js-open');
    APP.Timeline.showLegend();
    APP.Timeline.addPaddingContent();
    APP.Timeline.hideBody();
  },

  stateTwo: function() {
    $('#header-primary').removeClass('js-open');
    $('#click-animation').css('bottom', '170px');
    $('#header-primary').addClass('js-closed');
    APP.Timeline.hideLegend();
    APP.Timeline.removePaddingContent();
    APP.Timeline.showBody();
  },

  hideLegend: function() {
    $('.text-complementary').removeClass('js-show');
    $('.text-complementary').addClass('js-hide');
  },

  showLegend: function() {
    $('.text-complementary').removeClass('js-hide');
    $('.text-complementary').addClass('js-show');
  },

  hideBody: function() {
    var mask;
    mask = document.querySelector('#mask-modal');
    mask.classList.add('js-visible-modal');
  },

  showBody: function() {
    var mask;
    mask = document.querySelector('#mask-modal');
    mask.classList.remove('js-visible-modal');
  },

  addPaddingContent: function() {
    $('#content').addClass('js-padding');
  },

  removePaddingContent: function() {
    $('#content').removeClass('js-padding');
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

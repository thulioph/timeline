var APP = APP || {};
APP.General = {
  setUp: function() {
    this.getClick();
  },

  getClick: function() {
    var href;

    $('.nav-list').on('click', 'a', function(event) {
      event.preventDefault();

      href = $(this).attr('href');

      APP.General.request(href);
    });
  },

  request: function(href) {
    $.ajax({
      url: href,

      beforeSend: function() {
        APP.Timeline.stateTwo();
        $('#content').html('Carregando conteúdo...');
      },

      success: function(href) {
        $('#content').html(href);
      },

      error: function() {
        console.log('Ocorreu um erro!');
      }
    });
  }
}

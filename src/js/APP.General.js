var APP = APP || {};
APP.General = {
  setUp: function() {
    this.getClick();
  },

  getClick: function() {
    var href, url;

    $('.nav-list').on('click', 'a', function(event) {
      event.preventDefault();

      href = $(this).attr('href');
      url = location.href;
      console.log(url+href);

      APP.General.request(href);
    });
  },

  request: function(href) {
    $.ajax({
      url: href,

      beforeSend: function() {
        $('#content').html('Carregando conteúdo...');
      },

      success: function(href) {
        $('#content').html(href);
      },

      error: function() {
        console.log('Não carregou!');
      }
    });
  }
}

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
    var that = this;

    $.ajax({
      url: href,

      beforeSend: function() {
        APP.Timeline.stateTwo();
        $('#content').html('Carregando conteúdo...');
        
        // Insert dynamic script with page in request;
        href = href.replace('.html', '');
        // that.insertFirstScript(href);
        // that.insertSecondScript(href);
        // that.removeFirstScript(href);
      },

      success: function(href) {
        $('#content').html(href);
      },

      error: function() {
        console.log('Ocorreu um erro!');
      }
    });
  },

  // Insert dynamic script with page in request;
  insertFirstScript: function(page) {
    var script, content;

    script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'script-' + page;
    script.src = 'js/'+page+'/' + page + '_edgeActions.js';

    content = document.querySelector('#content');
    content.parentNode.insertBefore(script, content);
  },

  insertSecondScript: function(page) {
    var script, content;

    script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'script-0' + page;
    script.src = 'js/'+page+'/' + page + '_edge.js';

    content = document.querySelector('#content');
    content.parentNode.insertBefore(script, content);
  },

  // Remove script after init;
  removeFirstScript: function(page) {
    var script, value;

    script = $('#script-'+page)[0].remove();
  },

  removeSecondScript: function(page) {
    var script, value;

    script = $('#script-0'+page)[0].remove();
  }
}

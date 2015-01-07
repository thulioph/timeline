var APP = APP || {};
APP.FancyBox = {
  setUp: function() {
  },

  // Open modal text with click;
  modal: function() {
    $(".various").fancybox({
      maxWidth  : 800,
      maxHeight : 600,
      fitToView : false,
      width   : '70%',
      height    : '70%',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
  },

  // Open modal image with click;
  lightbox: function() {
    $(".fancybox-button").fancybox({
      prevEffect    : 'none',
      nextEffect    : 'none',
      closeBtn    : true,
      index: 2,
      helpers   : {
        title : { type : 'inside' },
        buttons : {}
      }
    });
  },

  // Abrir o texto passando o ID;
  openText: function(id) {
    var element;

    element = $('#'+id).attr('id');
    $.fancybox.open('#'+element);
  },

  // Abrir a imagem passando o ID;
  openImage: function(id) {
    var element;

    element = $('#'+id).attr('href');

    $.fancybox.open(element, {
      helpers : { 
        title : { type : 'inside' }
      }, 
      // Insert title in element;
      beforeLoad: function() {
        this.title = $('#'+id).attr('title');
      }
    });

    // APP.FancyBox.varrer(id)
  },

  // Abrir a imagem passando a posição dela pra continuar o carrossel.
  varrer: function(id) {
    $('.lightbox a').each(function(index) {
      if (id == $(this).attr('id')) {
        console.log('A posição é: ' + index);
        // APP.FancyBox.openImage(id).jumpto([index]);
        // $.fancybox.open(id).jumpto([index]);
      }
    });
  }
}
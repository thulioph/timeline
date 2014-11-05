var APP = APP || {};
APP.Modal = {
  setUp: function() {
    this.clickOpen();
    this.clickClose();
  },

  openModal: function(href) {
    var href, element;

    href = href.replace(location.href, '');
    element = document.querySelector(href);
    element.style.visibility = 'visible';
    element.classList.add('open');

    APP.Modal.setStyleBody();
  },

  setStyleBody: function() {
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.classList.add('bg-modal');

    var header = document.getElementById('header-primary');
    header.classList.add('js-modal');
  },

  closeModal: function(element) {
    element.style.visibility = 'hidden';
    element.classList.remove('open');

    document.body.style.overflow = 'visible';
    document.body.classList.remove('bg-modal');

    var header = document.getElementById('header-primary');
    header.classList.remove('js-modal');
  },

  clickOpen: function() {
    $('.reference').on('click', function(event){
      event.preventDefault();
      APP.Modal.openModal(this.href);
      APP.Modal.escModal();
    });
  },

  clickClose: function() {
    $('.close-modal').on('click', function(event) {
      event.preventDefault();
      var element = this.parentNode.parentNode; // div pai ou .modal

      APP.Modal.closeModal(element);
    });
  },

  escModal: function() {
    var element;
    element = document.querySelector('.open');

    $(document).keyup(function(event) {
      if(event.keyCode == 27) {
        APP.Modal.closeModal(element);
      }

    });
  }
}

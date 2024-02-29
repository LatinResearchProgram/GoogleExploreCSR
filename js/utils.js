$( document ).ready(function() {

      let path = window.location.pathname.replace('/','').split('/');
      let classActive = 'home'; 
      if(path.length > 1 && path[1] != ''){
          classActive =  path[1];
      }

      $('#navbarSupportedContent .active').removeClass('active');
      $('.nav-item[data-item="'+classActive+'"]').addClass('active');

});
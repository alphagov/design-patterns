$(document).ready(function () {

  // EXAMPLE - GRID HIGHLIGHT
  if ($('.js-highlight-grid').length>0) {
      
      $('.js-highlight-grid').click(function(e){
          e.preventDefault();
          
          var html = $('html');
          
          if (html.hasClass('example-highlight-grid')) {
              html.removeClass('example-highlight-grid');
          } else {
              html.addClass('example-highlight-grid');
          }
          
      });
  }
  
});
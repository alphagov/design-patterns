$(document).ready(function () {
    
  // Example - Grid highlight
  if ($('.js-highlight-grid').length>0) {
    
    $('.js-highlight-grid').click(function(e) {

      e.preventDefault();
      var html = $('html');
      
      if ($('.is-inner-block-highlight').length>0) {
        // Don't add more than once
      } else {
        $('.grid .inner-block').wrapInner('<div class="is-inner-block-highlight"></div>');
      }
      
      if (html.hasClass('example-highlight-grid')) {
          html.removeClass('example-highlight-grid');
      } else {
          html.addClass('example-highlight-grid');
      }
      
    });
  }
  
  // Convert a text field to a 'Title' select box
    
    jQuery.fn.convertToTitleSelect = function() {
    var titles = ['', 'Mr', 'Ms', 'Mrs', 'Miss', 'Dr'];
    if($(this).val()==''){
      $(this).attr('id', 'title-hide');
    } else if (!jQuery.inArray($(this).val(), titles)) {
      return;
    }    
    titles.push("Other...");

    var el = $(this[0]);
    var textVal = $(el).val();

    // Build selectbox

    var titleSelectBox = $('<select id="title" name="title" class="title-select"></select>');
    $.each(titles, function(key, value) {   
      titleSelectBox
        .append($('<option>', { value : value })
        .text(value)); 
    }); 

    $(el)
      .hide()
      .after(titleSelectBox);

    if (textVal == ''){
      $(el).val(titles[0]);
    } else if (jQuery.inArray( textVal, titles ) != -1){
      titleSelectBox.val(textVal);
    } else {
      $(el).show();
      titleSelectBox.hide();
    }

    $('.title-select')
    .change(function () {
      var value = $(this).val();
      if (value == 'Other...'){
        $(this).prev().val('').show().focus().attr('id','title');
        $(this).remove();
      } else {
        $(this).prev().val(value);
      }
    });

  };
  
  $('#name-title').convertToTitleSelect();
  
  // DETAILS TAG POLYFILL
  
  // Add conditional classname based on support
  $('html').addClass($.fn.details.support ? 'details' : 'no-details');
  // Emulate <details> where necessary and enable open/close event handlers
  $('details').details();
  
});
$(document).ready(function () {
    
  // Example - Grid highlight
  if ($('.js-highlight-grid').length>0) {
    
    $('.js-highlight-grid').click(function(e) {
      
      e.preventDefault();
      var html = $('html');
      
      if (html.hasClass('example-highlight-grid')) {
          html.removeClass('example-highlight-grid');
          $('.grid .inner-block').unwrapInner();
      } else {
          html.addClass('example-highlight-grid');
          $('.grid .inner-block').wrapInner('<div class="is-inner-block-highlight"></div>');
      }
      
    });
  }
  
  // Example - Postcode lookup
  if ($('.js-address-finder').length>0) {
    
    // Hide manual address entry
    $('.js-enter-address label').hide();
    $('.js-enter-address textarea').hide();
    
    // Hide address select
    $('.js-select-address label').hide();
    $('.js-select-address select').hide();
    
    // Show address 
    $('.js-button-find-address').click(function(e) {
      e.preventDefault();
      $('.js-select-address label').show();
      $('.js-select-address select').show();
    });
    
    $('.js-enter-address a').click(function(e) {
      e.preventDefault();
      $(this).hide();
      
      $('.js-enter-address label').show();
      $('.js-enter-address textarea').show();
      
      var selected = $('.js-select-address select').find(":selected").text();
      $('.js-enter-address textarea').val(selected);
      
    });
  
  };
  
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
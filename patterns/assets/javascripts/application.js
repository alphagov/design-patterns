$(document).ready(function () {

  // Convert a text field to a 'Title' select box

  jQuery.fn.convertToTitleSelect = function() {
    var titles = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'];
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


  // POSTCODE LOOKUP

  jQuery.fn.postcodeLookup = function() {
  
    // Add the control above the address fields
    $(this).before(
        '<div class="control">' +
        '<label for="postcode-lookup">Postcode</label> ' +
        '<input type="text" id="postcode-lookup" class="postcode"><span id="find-uk-address" class="button">Find UK address</span>' +    
        '</div>' +
        '<p id="enter-address-manually"><span class="link-style">Enter address manually</span></p>'
    );  
    // Hide the address fields by default
    $(this).hide();
    $('#select-address').hide();

    // 'Enter address manually' link
    $('#enter-address-manually span').click(function() {
      $('.js-address-finder').toggle();
      $(this).hide();
    });

    // Find addresses
    $('#find-uk-address').click(function() {
      $(this).after(
        '<div class="control" id="select-address"><label for="address-list">Select an address</label>' +
        '<select class="address-list" id="address-list" size="15">' + 
        '<option>1 Borough High Street, London, SE1 6PQ</option>' +
        '<option>2 Borough High Street, London, SE1 6PQ</option>' +
        '<option>3 Borough High Street, London, SE1 6PQ</option>' +
        '<option>4 Borough High Street, London, SE1 6PQ</option>' +
        '<option>5 Borough High Street, London, SE1 6PQ</option>' +
        '<option>6 Borough High Street, London, SE1 6PQ</option>' +
        '<option>7 Borough High Street, London, SE1 6PQ</option>' +
        '<option>8 Borough High Street, London, SE1 6PQ</option>' +
        '<option>9 Borough High Street, London, SE1 6PQ</option>' +
        '<option>10 Borough High Street, London, SE1 6PQ</option>' +
        '<option>11 Borough High Street, London, SE1 6PQ</option>' +
        '<option>12 Borough High Street, London, SE1 6PQ</option>' +
        '<option>13 Borough High Street, London, SE1 6PQ</option>' +
        '<option>14 Borough High Street, London, SE1 6PQ</option>' +
        '<option>15 Borough High Street, London, SE1 6PQ</option>' +
        '</select>' + 
        '</div>'
      );
    });

    // Select address
    $(document.body).on( "change", "#address-list", function() {
      var selectedAddress = $('#address-list').val();
      selectedAddress = selectedAddress.replace(/, /g, "\n")
      $('.js-address-finder').show();
      $('#enter-address-manually, #select-address').hide();
      $('#address-list').attr('size', '1');
      $('#address2').val(selectedAddress).focus();
    });
    
  };

  $('.js-address-finder').postcodeLookup();



  // DETAILS TAG POLYFILL

  // Add conditional classname based on support
  $('html').addClass($.fn.details.support ? 'details' : 'no-details');
  // Emulate <details> where necessary and enable open/close event handlers
  $('details').details();



  // HTML snippets for live examples

  /*
  $('.pattern-example').each(function(){
    var htmlString = $(this).html();
    var el = $('<code>').text(htmlString);
    el = $('<pre class="html-example">').append(el);
    $(this).after(el);
  });
*/



});
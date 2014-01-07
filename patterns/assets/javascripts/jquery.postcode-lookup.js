/**
 * JQuery Postcode Lookup plugin for OPG-LPA project
 * Relies on /postcode/lookup route
 * 
 * @copyright The Engine Group
 * @author Chris Moreton <chris.moreton@netsensia.com>
 */

(function( $ ) {
  $.fn.opgPostcodeLookup = function() {


    // add a common class to elements that we will be hiding and revealing as a group
    $('#address-addr1').parent().addClass('address-hideable');
    $('#address-addr2').parent().addClass('address-hideable');
    $('#address-addr3').parent().addClass('address-hideable');
    $('#address-town').parent().addClass('address-hideable');
    $('#address-county').parent().addClass('address-hideable');
    $('#address-country').parent().addClass('address-hideable');
    $('#address-postcode').parent().addClass('address-hideable');

    $('#dxExchange').parent().addClass('dxaddress-hideable');
    $('#dxNumber').parent().addClass('dxaddress-hideable');

    var dxLink = '';
    if ($('#dxExchange')[0]) {
        dxLink = '<li class="link-style" id="enter_dx_address">Enter DX address</li>'
    }
    
    // Add the Lookup control above the address fields
    $('.address-fieldset').prepend(
        '<p class="group">' +
        '<label for="address-postcode">Postcode</label> ' +
        '<input type="text" id="postcode-lookup" class="postcode"><a href="#" id="find_uk_address" class="postcode-lookup button-secondary">Find UK address</a>' +    
        '</p>' +
        '<p class="group" id="pick_an_address"><label for="address_list">Pick an address</label><select class="address-list"></select>' +
        '<ul class="address-fields-link hint">' +
        '<li class="link-style" id="enter_address_manually">Enter address manually</li>' + 
        dxLink +
        '</ul>'
    );

    // Hide the address fields by default
    $('#pick_an_address').hide();

    // if an address has previously been entered, then show all boxes,
    // otherwise, wait for country selection before deciding which address lines to display
    var address1 = $('#address-addr1').val();
    var country = $('#address-country').val();
    if (address1 == '') {
        $('.address-hideable').hide();
        $('.dxaddress-hideable').hide();
    } else {
        $('.address-hideable').show();
        $('.dxaddress-hideable').show();
    }
    
    $('#enter_address_manually').on('click', function () {
    	$('.address-hideable').show();
        $('.dxaddress-hideable').hide();
        $('#address-postcode').val($('#postcode-lookup').val());
        $('#enter_dx_address').addClass('link-style');
    	$(this).removeClass('link-style');
    });

    $('#enter_dx_address').on('click', function () {
        $('.dxaddress-hideable').show();
        $('.address-hideable').hide();
        $('#enter_address_manually').addClass('link-style');
        $(this).removeClass('link-style');
    });
    
    // declare the function to be called when the Lookup button is clicked
    $('#find_uk_address').on('click', function () {
    	var postcode = $('#postcode-lookup').val();
        // extract the postcode and call the lookup service
        // postcode validation is carried out on the server
        $.ajax({
            url:'/postcode/lookup',
            data: {postcode:postcode},
            dataType: "json",
            success:function(data) {
            	if (data.success) {
                    // add the SELECT element if necessary, or empty it if it already exists
                	$('#pick_an_address').show();
                    $('.address-list').children().remove();
                    $('.address-list').append($('<option value="-1">Please select your address...</option>'));

                    // add options to the SELECT element, including the full address details as the value
                    for (var i = 0; i < data.addresses.length; i++) {
                        var addressID = data.addresses[i].id;
                        var parts = addressID.split(".");
                        addressID = parts[0];
                        var shortAddress = data.addresses[i].description;
                        
                        $('.address-list').append($('<option value="' + addressID + '">' + shortAddress + '</option>'));
                    }

                    // declare the function to be called when an address is selected
                    $('.address-list').change(function() {
                    	var selectedID = $('.address-list').val();
                    	if (selectedID != -1) {
	                    	$.ajax({
	                            url:'/postcode/lookup',
	                            data: {postcode:selectedID},
	                            dataType: "json",
	                            success:function(data) {
	                                $('#address-addr1').val(data.lineOne);
	                                $('#address-addr2').val(data.lineTwo);
	                                $('#address-addr3').val(data.lineThree);
	                                $('#address-town').val(data.city);
	                                $('#address-county').val(data.county);
	                                $('#address-postcode').val(postcode);
	                            	
	                                $('.address-hideable').show();
	                                $('.dxaddress-hideable').hide();
	
	                                $('#enter_dx_address').addClass('link-style');
	                                $('#enter_address_manually').removeClass('link-style');
	                                
	                                $('#pick_an_address').hide();
	                                
	                                $('#address-addr1').trigger('change');
	                            	
	                            }
	                    	});
                    	}
                    });
                } else {
                    if (data.isPostcodeValid) {
                        if (confirm('No addresses were found for the postcode ' + postcode + '.  Would you like to enter the address manually?')) {
                            $('.address-hideable').show();
                        }
                    } else {
                        alert('Please enter a valid UK postcode');
                    }
                }
            }
        });
        return false;
    });
  };
})( jQuery );
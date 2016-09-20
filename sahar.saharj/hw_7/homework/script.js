/*
    Use the zippopotam.us service to look up and display the city and state for a zip code that users enter in the
    Postal Code box on the form.
    zippopotam.us does not require an API key. See the website zippopotam.us for API documentation for the U.S.
    Start by logging the city and state to the console. If you wish, you can enhance your code using
    DOM manipulation to populate the City andState input boxes with the data.
    Convert your event handler code to an IIFE and verify that your app still works the same way.
    Convert all of your JS code to a single IIFE and verify that the app still works the same way. 
    Bonus: 
      Instead of responding to a button click, add code to listen for the keyup event in the Postal Code box after a keyboard key is pressed and
      released, and check if the Postal Code box contains sufficient characters for a zip code before performing a search automatically.
*/

"use strict";

(function() {

	$('#zip').on('keyup', function() {
		var zipCode = $('#zip').val();
		var url = 'http://api.zippopotam.us/us/' + zipCode;

		console.log('url: ' + url);
		process(url, cityAndState);
	});

	function process(url, callback) {
		$.ajax({
			url: url,
			success: function(r) {
				callback(r)
			},
			error: function() {
				console.log('There was an error occured');
			}
		});
	};

	function cityAndState(r) {
		var city = r.places[0]['place name'];
		var state = r.places[0]['state abbreviation'];
		console.log(city + ', ' + state);
		$('#city').val(city);
		$('#state').val(state);
	}
})();

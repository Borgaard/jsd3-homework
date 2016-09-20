/*
    Use the zippopotam.us service to look up and display the city and state for a zip code that users enter in the Postal Code box on the form.
    zippopotam.us does not require an API key. See the website zippopotam.us for API documentation for the U.S.
    Start by logging the city and state to the console. If you wish, you can enhance your code using DOM manipulation to populate the City and State input boxes with the data.
    Convert your event handler code to an IIFE and verify that your app still works the same way.
    Convert all of your JS code to a single IIFE and verify that the app still works the same way. 
    Bonus: 
      Instead of responding to a button click, add code to listen for the keyup event in the Postal Code box after a keyboard key is pressed and released, and check if the Postal Code box contains sufficient characters for a zip code before performing a search automatically.
*/

"use strict";

(function($, window, document) {
  $(document).ready (function() {
    var $zipCodeBox = $("#zip");
    var $lookupButton = $("#lookup");

    $zipCodeBox.on('focus keyup', function(event) {
      switch (event.type) {
        case 'focus':
          $zipCodeBox.val('');
          break;
        case 'keyup':
          if ($zipCodeBox.val().length >= 5) {
            $lookupButton.triggerHandler('click');
          };
      };
    });

    $lookupButton.on('click', function(event) {
      event.preventDefault();
      var query = "http://api.zippopotam.us/us/" + $zipCodeBox.val();
      $.get(query, function(response) {
        var cityName = response.places["0"]["place name"];
        var stateName = response.places["0"]["state abbreviation"];
        $("#city").val(cityName);
        $("#state").val(stateName);
        console.log(`City: ${cityName}\nState: ${stateName}`);
      });
    });
  });
})(window.jQuery, window, document);

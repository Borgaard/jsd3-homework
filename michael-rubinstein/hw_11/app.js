$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: 'c095a1ed8923d151066ec81a6569a9dd1195e5c5'
  });
  $('#login').click(function() {
    _500px.login();
  });
  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(`lat: ${lat}`);
        console.log(`long: ${long}`);
        var radius = '10mi';
        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes'
        };

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            // no results
            console.log("No photos found.");
          } else {
            console.log("I found photos!");
            handleResponseSuccess(response.data.photos);
          };
        });
      });
    } else {
      $('.images').append("Sorry, your pathetic browser doth not geolocate!");
    }
  });

  function handleResponseSuccess(photos) {
    // thing
    var imageSet = "";
    $.each(photos, function(index, value) {
      // display image
      console.log(`<img class="image" src="${value.image_url}">`);
      $('.images').append(`<img class="image" src="${value.image_url}">`);
    });
  };
});

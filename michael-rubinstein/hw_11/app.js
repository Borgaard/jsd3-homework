$(function() {
  // var firstName = "Somebody";
  // DOM is now ready
  _500px.init({
    sdk_key: 'c095a1ed8923d151066ec81a6569a9dd1195e5c5'
  });

  // Event handler for clicking login button
  $('#login').click(function() {
    _500px.login();
  });

  // Event handler for successful login
  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        getUser();
        getPhotos(position);
        $('.image-results-view').show();
      });
    } else {
      $('.images').append("Sorry, your pathetic browser doth not geolocate!");
    }
  });

  // Get current user info
  function getUser() {
    _500px.api('/users', function (response) {
      firstName = response.data.user.firstname;
      $('.image-results-view > h3').before(`<h3>Greatings, ${firstName}!</h3>`);
    });
  }

  // Create query for photos and send it to 500px
  function getPhotos(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var radius = '10mi';
    var searchOptions = {
      geo: lat + ',' + long + ',' + radius,
      only: 'Landscapes',
      sort: 'rating',
      rpp: 28
    };

    // Ask 500px for photos and check if we got any back
    _500px.api('/photos/search', searchOptions, function(response) {
      if (response.data.photos.length === 0) {
        // no results
        console.log("No photos found.");
      } else {
        console.log("I found photos!");
        handePhotoArray(response.data.photos);
      };
    });
  }

  // Display the photos on the page
  function handePhotoArray(photos) {
    var imageSet = "";
    $.each(photos, function(index, value) {
      // display image
      console.log(`Image "${value.name}", rating: ${value.rating}`);
      $('.images').append(`<img class="image" src="${value.image_url}">`);
    });
  };
});

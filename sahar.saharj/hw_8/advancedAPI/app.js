$(function() {
  // DOM is now ready
  _500px.init({
  	sdk_key: 'c095a1ed8923d151066ec81a6569a9dd1195e5c5'
  })

  $('#login').click(function(){
  	_500px.login();
  });

	var user = {
		username: 'shrjafari'
	};

  _500px.on('authorization_obtained', function() {
  	$('.sign-in-view').hide();
  	$('.image-results-view').show();
  	$('#user-info').show();

		_500px.api('/users/show', user, function(response) {
			$('#user-info').append($('<p>')
				.html('Welcome ' + response.data.user['firstname'] + ' ' + response.data.user['lastname']));
		}); 
  });

  if(navigator.geolocation) {
  	navigator.geolocation.getCurrentPosition(function(position) {
  		var lat = position.coords.latitude;
  		var long = position.coords.longitude;
  		var radius = '10mi';

  		var searchOptions = {
  			geo: lat + ',' + long + ',' + radius,
  			only: 'Landscapes',
  			sort: 'rating',
  			rpp: 28,
  			image_size: 200
  		};

  		_500px.api('/photos/search', searchOptions, function(response) {
  			if(response.data.photos.length === 0) {
  				console.log('There is no photos in your area.');
  			} else {
  				$.each(response.data.photos, function(index, photo) {
  					$('.images').append($('<img>').attr('src', photo['image_url']).css('margin', '5px'));
  				})
  			}
  		});
  	});
  } else {
  	$('.images').append('Sorry! Your browser does not support geolocation.');
  }
});

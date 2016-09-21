/*
- Before we start using our access token to make requests to 500px, let's first take care of our view. 
- We know that once the user logs in and our app has the access token, we no longer need to prompt the user to log in. 
- Add code to app.js so the login prompt isn’t shown, and the section that will display the images is shown.
- Try to use jQuery if possible.
- Hint: This involves DOM manipulation. Remember the two elements we looked at earlier where our content is displayed. Think about which should be displayed at what point.
- Hint: jQuery includes methods that let you display and hide elements; look up `hide()` and `show()` on `api.jquery.com`.
*/


$(function() {
  // DOM is now ready
  // this is jQuery short hand for 'document is ready'
_500px.init({
  sdk_key:"c095a1ed8923d151066ec81a6569a9dd1195e5c5"
})
// _500px. above indicates we're using this SDK library 
// also, we're calling an object because of curly braces
// not a function because we didn't type 'function'
// next, let's log in, triggered by onClick on web page
// use <a> with 'login' ID 
$("#login").click(function() {     // 'login' is the ID of the button in the html page
  _500px.login();   // login is a method given in the _500px library
})
// next, setting up an event listener
// in the background we received the token for auth obtained
_500px.on("authorization_obtained", function() {
// ???? Need to change Class to image-results-view to get new layout to show 
// DOM manipulation in jQuery needed 
// use jQuery .show()  and   .hide()  
$('.sign-in-view').hide();
$('.image-results-view').show();
// next we need location in order to dispay photos by location 
// https://github.com/500px/api-documentation/blob/master/endpoints/photo/GET_photos_search.md 
// see: geo — A geo-location point of the format latitude,longitude,radius<units>. Acceptable units are km or mi.
// see: only — String name of the category to return photos from. Note: Multiple categories may be given, separated by commas, e.g. Fashion,Black and White
// category for 'landscapes' ID 8
// for geo-location, see https://developer.mozilla.org/en-US/docs/Web/API/Navigator, then
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation
// FYI geolocation is built into modern browsers 

// first test if user's browser can support use of geo-location
  if (navigator.geolocation) {  //testing if navigator.geolocation exists (is true) (but not comparing it)
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      console.log("lat: " + lat);
      console.log("long: " + long);

      // next, construct an object to send to the _500px SDK 
      // property one is 'geo' with string latitude,longitude,radius<units>
      /*
      geo: lat + "," + long + "," + "10mi",
      only: "Landscapes"
      */
      // note we're creating an object below for search options 

      var radius = '10mi';

      var searchOptions = {
        geo: lat + "," + long + "," + "10mi",
        only: "Landscapes"
      };

      _500px.api('/photos/search', searchOptions, function(response) {       // sdk.api (endpoint, object, function) -- from documentation example this SDK needs 
        if (response.data.photos.length === 0 ) {      // from documentation, see Response Object, also length === 0 says we want at least 1 photo 
          console.log ("No photos found");
        }  else {
          console.log(response.data.photos); // <<< REPLACE THIS WITH FUNCTION FOR SUCCESS, WRITE FUNCTION BELOW 
        }
      }) 

    })
  } else {
    $(".images").append("Sorry, your browser does not support geolocation.");
  }

// now parse the resulting array
/*
- Now that we can successfully call upon the 500px API for resources, it is up to you to define the `handleResponseSuccess` function.
- Your function should iterate through your response data, creating an `img` element each time with the given image url from the API.
- Add a class `image` to the image and append it to `.images` which already exists in the HTML.
- Once again, use as much jQuery as possible.
- Hint: Check out `jquery.each()`, which is similar to but different from the `.each()` method we used previously.
*/

/*
found some code online........
var img = $('<img>').addClass("image");
img.attr('src', responseObject.imgurl);
img.appendTo('#imagediv');
*/




  });
});

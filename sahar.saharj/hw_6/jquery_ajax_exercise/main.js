/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

var weatherUrl = "api.openweathermap.org/data/2.5/weather?id=5391997&APPID=";
var apiKey = "4ec0b3cb7c9603901ba1957a71ad488d";

var url = 'http://' + weatherUrl + apiKey;

$.get(url, function(r) {
	var temp = ((r.main.temp * 9) / 5) - 459.67;
	console.log(temp);
});

// $(document).ready(function() {
// 	var form = $(<input>)
// 	$('body').append();
// });
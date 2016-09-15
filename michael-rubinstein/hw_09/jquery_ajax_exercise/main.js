/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

var WEATHERSTR01 = "http://api.openweathermap.org/data/2.5/weather?id=";
var WEATHERSTR02 = "&appid=";
var WEATHERSTR03 = "&units=imperial";
var ID_SF = "5391959";
var ID_NY = "5128638";
var API_KEY = "6615f08a3cb745396a7b6a4cf8531bc9";
var WEATHER_SF = WEATHERSTR01 + ID_SF + WEATHERSTR02 + API_KEY + WEATHERSTR03;
var WEATHER_NY = WEATHERSTR01 + ID_NY + WEATHERSTR02 + API_KEY + WEATHERSTR03;

var FIO_SF = "https://accesscontrolalloworiginall.herokuapp.com/https://api.forecast.io/forecast/40b581943e736a8ddb1b6d0beda5a155/37.774929,-122.419416"
var FIO_NY = "https://accesscontrolalloworiginall.herokuapp.com/https://api.forecast.io/forecast/40b581943e736a8ddb1b6d0beda5a155/40.712784,-74.005941"

function getOWMWeatherData(dSource) {
    $.get(dSource, function(response) {
        console.log(response);
        var tempString = `Open Weather Map says the current temperature in the city of ${response.name} is ${response.main.temp}&deg; Fahrenheit.`;
        console.log(tempString);
        $("#OpenWeatherMap").html(tempString);
    });
}

function getFIOWeatherData(dSource, cityName) {
    $.get(dSource, function(response) {
        console.log(response);
        var tempString = `Forecast.io says the current temperature in the city of ${cityName} is ${response.currently.temperature}&deg; Fahrenheit.`;
        console.log(tempString);
        $("#ForecastIO").html(tempString);
    });
}

$(document).ready (function() {
  var $button1 = $("#getWeatherButton_SF");
  var $button2 = $("#getWeatherButton_NYC");

  $button1.on("click", function(event) {
    event.preventDefault();
    getOWMWeatherData(WEATHER_SF);
    getFIOWeatherData(FIO_SF, "San Francisco");
  });

  $button2.on("click", function(event) {
    event.preventDefault();
    getOWMWeatherData(WEATHER_NY);
    getFIOWeatherData(FIO_NY, "New York");
  });
});

var App = {};

// Data is usually obtained from an online source
App.forecast = { // an object
    "weather" : [ // weather is a key, the value of the key is an Array
      { // more object - 3 total in this array 
        "city" : "San Francisco",
        "high" : 65,
        "low" : 48,
        "precip" : 20,
        "uv" : "moderate"
      },
      {
        "city" : "Omaha",
        "high" : 91,
        "low" : 62,
        "precip" : 45,
        "uv" : "high"
      },
      {
        "city" : "Boston",
        "high" : 87,
        "low" : 54,
        "precip" : 30,
        "uv" : "high"
      }
    ]
  };

App.build = function() {
  var source = $("#weatherTemplate").html();
  // Handlebars compiles the template into a callable function
  var template = Handlebars.compile(source);
  
  // call the compiled function with the template data
  var compiledTemplate = template(App.forecast);
  return compiledTemplate;
};

$("document").ready(function() { 
  $("body").append(App.build);
});

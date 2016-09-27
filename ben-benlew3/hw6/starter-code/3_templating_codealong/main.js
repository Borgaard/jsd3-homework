var App = {};

App.forecast = {
  "weather":[
    {
      "city" : "Novato",
      "high" : 95,
      "low" : 48,
      "precip" : 10,
      "uv" : "moderate"
    },
    {
      "city" : "San Francisco",
      "high" : 65,
      "low" : 52,
      "precip" : 30,
      "uv" : "low"
    }
  ]
};

App.build = function(){
  var source = $("#weatherTemplate").html();
  var template = Handlebars.compile(source);
  var compileTemplate = template(App.forecast);
  return compileTemplate;
}

$("document").ready(function(){
  $("body").append(App.build);
})

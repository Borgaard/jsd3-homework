var App = {}; // created empty object here

App.forcast = {
    "high" : 65,
    "low" : 48,
    "precip" : 20,
    "uv" : "moderate"
    // json style here, because later we will call json from outside sources
};

App.build = function() {
    var source = $("#weatherTemplate").html(); //gets our template stored in variable
    var template = Handlebars.compile(source);
    var compiledTemplate = template(App.forecast);
    //   $("body").append(compiledTemplate);
    return compiledTemplate;
};

$("document").ready(function() {
    $("body").append(App.build);

})
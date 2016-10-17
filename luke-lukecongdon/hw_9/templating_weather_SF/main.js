(function() {
    var forecast = { //creating object
        high: 65,
        low: 48,
        precip: 20,
        uv: "moderate"
    };

App.buile = function() {
    var source = $("#weather_template").html(); //reference template here

    //now we compile it

    var template = Hanlebars.compile(source); 

    //now execute the template 

    var processData = template(forecast); // result of this is html 
    return compiledTemplate;

    // final step, append to body
};
    $("document").ready(function() {
    $("body").append(processData);
})(); // turned this function into an IFFE (self-called function)

// remember that there are two ways to create an IFFE
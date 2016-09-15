/* Convert the existing web page, which contains data hard coded in HTML,
 * to instead pull the data from a data object into a structure created by a 
 * Handlebars template.
 * Specify your JavaScript app using an object rather than a set of functions.
 */

var App = {};

App.cookbook = {
    "recipes" : [
        {
            "name" : "Shakshuka",
            "serves" : 4,
            "meal" : "breakfast"
        },
        {
            "name" : "Black Bean Chili",
            "serves" : 8,
            "meal" : "dinner"
        },
        {
            "name" : "Classic Peanut Butter Cookies",
            "serves" : 36,
            "meal" : "dessert"
        }
    ]
};

App.build = function() {
    var source = $("#cookbookTemplate").html();
    var templateProcessor = Handlebars.compile(source);
    var output = templateProcessor(App.cookbook);
    return output;
}

$("document").ready(function() {
  $("body").append(App.build);
});

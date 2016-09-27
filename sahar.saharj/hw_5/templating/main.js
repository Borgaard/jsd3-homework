/* Convert the existing web page, which contains data hard coded in HTML,
 * to instead pull the data from a data object into a structure created by a 
 * Handlebars template.
 * Specify your JavaScript app using an object rather than a set of functions.
 */

(function(){
	var recipes = {
		items: [
			{name: "Shakshuka", serve: "4", meal: "breakfast"},
			{name: "Black Bean Chili", serve: "8", meal: "dinner"},
			{name: "Classic Peanut Butter Cookies", serve: "3 dozen", meal: "dessert"}
		]
	};

	var source = $('#recipe-template').html();

	var template = Handlebars.compile(source);
	
	var compileTemplate = template(recipes);

	$('body').append(compileTemplate);
})();

/*
Convert your app.js code from the 01-make-a-person folder
to a JavaScript module
*/

var makePerson = (function(name, age) {

	var kids = [];

	// Return an object that has the following methods...

	// a method get the list of kids
	// a method to have a new kid
	// a method to get the person's name
	// a method to get the person's age
	// a method to celebrate the person's birthday (make then a year older)

	return {
		getKids: function() {
			kids.forEach(function(elem) {
				console.log(elem);
			});
		},
		newKid: function(kid) {
			kids.push(kid);
		},
		getName: function() {
			return name;
		},
		getAge: function() {
			return age;
		},
		celebrate: function() {
			age++;
			console.log('Happy ' + age + 'th birthday ' + name + '!');
		}
	}
})('Sahar', 29);


makePerson.celebrate();

makePerson.newKid('Kido');
makePerson.getKids();
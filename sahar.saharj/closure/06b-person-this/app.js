/*
Convert your app.js code from the 01-make-a-person folder
to use the this keyword instead of the existing variable references
*/

function makePerson(name, age) {

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
			console.log('Happy ' + this.getAge() + 'th birthday ' + this.getName() + '!');
		}
	}
}

var sahar = new makePerson('Sahar', 29);
sahar.celebrate();
sahar.newKid('kido');
sahar.newKid('kido2');
sahar.getKids();
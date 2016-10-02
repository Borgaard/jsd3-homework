/*
Convert your app.js code from the 01-make-a-person folder
to a JavaScript module
*/

function makePerson(name, age) {

	var kids = [];
	console.log(`Poof! ${name} exists.`);

	// Return an object that has the following methods...

	// a method get the list of kids
	// a method to have a new kid
	// a method to get the person's name
	// a method to get the person's age
	// a method to celebrate the person's birthday (make then a year older)

	return {
		getKidsList: function() {
			return kids;
		},
		haveNewKid: function(kidname) {
			kids.push(kidname);
			console.log(`*** ${name} is having a child named ${kidname} ***`);
		},
		getMyName: function() {
			return name;
		},
		getMyAge: function() {
			return age;
		},
		celebrateBirthday: function() {
			console.log(`*** Celebrating ${name}'s birthday!!! ***`);
			age += 1;
		}
	};
}

var donald = makePerson("Donald Duck", 35);
donald.haveNewKid("Huey");

console.log(`${donald.getMyName()} is ${donald.getMyAge()} years old.`);
console.log(`${donald.getMyName()}'s kids are: ${donald.getKidsList()}`);

donald.haveNewKid("Dewey");
donald.haveNewKid("Louie");
donald.celebrateBirthday();

console.log(`${donald.getMyName()} is ${donald.getMyAge()} years old.`);
console.log(`${donald.getMyName()}'s kids are: ${donald.getKidsList()}`);

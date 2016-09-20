/* Work with a partner to create objects for three different monkeys (called monkey1, monkey2, monkey3), each with the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Choose which partner will initially take the pair programming role of driver and who will be the observer. Switch roles after creating the first object, then again after creating the second. Also be sure each partner takes a turn in each role during the exercise steps below.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

/*
var monkey1 = {
    name: "Harold",
    species: "Cappucin",
    foodsEaten: ["pineapple", "banana"],
    eatSomething: function (thingAsString) {
        console.log("I just ate a " + thingAsString);
    },
    introduce: function () {
        console.log("I am " + monkey1.name + " and I am a " + monkey1.species + " monkey, and I ate a " + monkey1.foodsEaten);
    }
};
// try using a loop to separate the food names 

// CREATE A CONSTRUCTOR function

var Superhero = function(fn, ln, shn) {
    this.firstName = fn;
    this.lastName = ln;
    this.superheroName = shn;
    this.identity = function() {
        console.log(this.firstName + " " + this.lastName + " is " + this.superheroName);
    };
};

var blackwidow = new Superhero('Natasha', 'Romanov', 'Black Widow');

var spiderman = new Superhero('Peter', 'Parker', "Spiderman");

// in browser console 
// spiderman.identity()
// result is 'Peter Parker is Spiderman'

*/



var monkey = function(nm, sp, food) {
    this.name = nm;
    this.species = sp;
    this.foodsEaten = food;
    this.introduce = function() {
        console.log(this.name + " is a " + this.species + " monkey who eats " + this.foodsEaten);
    };
};


var monkey1 = new monkey("Peter", "small", "pineapples");
var monkey2 = new monkey("Juan", "big", "bananas");
var monkey3 = new monkey("Wanda", "medium", ["pickles", "pineapple", "potatoes"]);

// in browser console
// monkey3.introduce()
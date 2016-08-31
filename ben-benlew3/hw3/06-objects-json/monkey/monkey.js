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

// var monkey1 = {
//   name: "noEyes",
//   species: "Spider",
//   foodsEaten: [],
//   eatSomething: function(foodstuff) {
//     monkey1.foodsEaten.push(foodstuff);
//   },
//   introduce: function() {
//     console.log("Hi, my name is " + monkey1.name + ", I am a " + monkey1.species + " monkey, and I have eaten " + monkey1.foodsEaten);
//   }
// };
//
//
// var monkey2 = {
//   name: "noMouth",
//   species: "Bonobo",
//   foodsEaten: [],
//   eatSomething: function(foodstuff) {
//     monkey2.foodsEaten.push(foodstuff);
//   },
//   introduce: function() {
//     console.log("Hi, my name is " + monkey2.name + ", I am a " + monkey2.species + " monkey, and I have eaten " + monkey2.foodsEaten);
//   }
// };
//
//
// var monkey2 = {
//   name: "noEyes",
//   species: "Baboon",
//   foodsEaten: [],
//   eatSomething: function(foodstuff) {
//     monkey3.foodsEaten.push(foodstuff);
//   },
//   introduce: function() {
//     console.log("Hi, my name is " + monkey3.name + ", I am a " + monkey3.species + " monkey, and I have eaten " + monkey3.foodsEaten);
//   }
// }


var monkey = function(name, species, foodsEaten){
  this.Name = name;
  this.Species = species;
  this.foods = foodsEaten[];
  this.eat = function(foodstuff) {
      this.foods.push(foodstuff);
    };
  this.identify = function() {
    console.log("Hi, my name is " + this.Name + ". I am a " + this.Species + " kind of monkey. Today I have eaten " + this.foods + " today.")
  }
}

// var tiny = new monkey ("George", "Spider", foodseaten);

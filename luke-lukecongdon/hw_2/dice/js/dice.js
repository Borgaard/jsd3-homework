/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly 
updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.
*/

// GENERATE A RANDOM NUMBER BETWEEN 1 - 6

// Math.random() * 10 gives # between 0 - 10
// we want a # between 1-6
// Math.random() * 5 // get #s between 0-5
// Math.floor() // gives us integers 0-5
// add 1 to get integers 1-6




function rollDie() {
// this above got added last to create the function 

    var random1 = Math.floor(Math.random() * 6 ) + 1;
    // gives you 0 - 'just under 6', rouding it down, then adds 1 to give you 1-6

    var random2 = Math.floor(Math.random() * 6 ) + 1;
    // gives you 0 - 'just under 6', rouding it down, then adds 1 to give you 1-6

    var firstDie = ("dice-" + random1);
    // we're concatenating above, taking 'dice-'' and adding a random number from random1 
    // we've only assembled the string above. It's not called yet.

    var secondDie = ("dice-" + random2);

    // now get the element by ID 
    // then update the class names from the CSS file
    var element1 = document.getElementById("first-die");
    element1.className = firstDie;

    var element2 = document.getElementById("second-die");
    element2.className = secondDie;

// now create a function next that will change the die images when clicked
// go back to top, we created a function 

}

document.getElementById("roll-dice").onclick = rollDie;
// above was added to call the function 'rollDie' we made





/*
//this below is from the index.html document to find the IDs

        <span class="dice dice-2" id="first-die"></span>
        <span class="dice dice-3" id="second-die"></span>
*/
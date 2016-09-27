/*
Remember the 99 Bottles of Beer assignment? For this assignment, you'll be creating a website that programatically displays the lyrics to that song. (The lyrics are available at http://www.99-bottles-of-beer.net/lyrics.html)
You'll need to create both an .html file and a .js file
In your HTML file, you'll want to have an unordered list (`<ul>`) that contains all of your lyrics
Each line of the song should appear inside of a list item (`<li>`) within that unordered list
Your JavaScript file should programatically append each line of the song to the page--no hard-coding lyrics in HTML!
*/

// idea: start with code from original 99 bottles exercise
// this iterates numerically from 99 downwards and displays lyrics in console.log 


/*
for(var i = 99; i > 0; i--) {
    if (i > 1){
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. \n" + "Take one down and pass it around, " + ( i - 1) + " bottles of beer on the wall. \n");
    } else if (i = 1){
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. \n" + "Take one down and pass it around, no more bottles of beer on the wall. \n \nNo more bottles of beer on the wall, no more bottles of beer. \n" + "Go to the store and buy some more, 99 bottles of beer on the wall. \n");
    }
}
*/

// new exercise 

// var newUl = document.querySelector("#song_ul"); // could use simply ul, but is more specific
// above is JS, not jQuery
var $newUl = $("#song_ul"); 

for(var i = 99; i >= 0; i--) {
    
    var $newLi = $("<li></li>"); // this tells jQuery that I'm CREATING a li 

    if (i >= 2){

        $newLi.text(i +  " bottles of beer on the wall, " + i + " bottles of beer. \n" + "Take one down and pass it around, " + ( i - 1) + " bottles of beer on the wall. \n");

        // console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. \n" + "Take one down and pass it around, " + ( i - 1) + " bottles of beer on the wall. \n");

    } else if (i === 1){

        $newLi.text(i + " bottle of beer on the wall, " + i + " bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall.");

    } else {

        $newLi.text("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.\n");
        
    }

    $newUl.append($newLi);  
}






/*
RAW LYRICS 

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

// REPEAT, DECREMENTING

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
// singlular example above 

No more bottles of beer on the wall, no more bottles of beer. 
Go to the store and buy some more, 99 bottles of beer on the wall.
// end of bottles above 
*/




// ---------
// appendChild to <li> example code, from Favorite Things example 
/*
  function addToList(list, newThing) {
    var newListItem = document.createElement("li");
    var newText = document.createTextNode(newThing);
    newListItem.appendChild(newText);
    list.appendChild(newListItem);
}

window.onload = function() {
  var button = document.getElementById("new-thing-button");
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing'); //''

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    addToList(thingList, newThing);
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};
*/
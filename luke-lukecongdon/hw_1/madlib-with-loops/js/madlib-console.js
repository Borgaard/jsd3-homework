/*

INSTRUCTIONS FOR EXERCISE 

Have you ever heard someone describe a startup as being "Like Uber for puppies" or "Like Amazon for kittens"? In this exercise, you'll be building a website that auto-generates madlib sayings like "A startup that is X but for Y". Here's what we've given you to get started:

A JavaScript file ("madlib-console.js") that contains two arrays (startupX and startupY) that are pre-populated with startup names (feel free to add some of your own as well!). The JavaScript file also contains two variables (random1 and random2) that will randomly select startup names from those arrays. Finally, at the bottom of the JavaScript file, there's a line of code that will log "A startup that is X but for Y" out to the console.

An HTML file that contains a few elements you will want to use:

An h1 with an ID of XforY--this is where your finished madlib saying will go.
Buttons that are labeled "Create new startup," "Favorite Startup" and "Print favorites".
A CSS file, which contains some basic styling. You shouldn't need to do anything with this file (unless you want to tweak the styling).

Minimum Requirements

Your job is to add code to the JavaScript file that makes the "Create new startup" button work. Basically, when the user clicks that buttons, your JavaScript should generate a new madlib saying, which should appear inside the XforY h1.

In order to complete this task, you will need to know a little bit about DOM manipulation. If this isn't something you've covered yet in class, you may want to wait until you've covered DOM manipulation before you try to tackle this exercise. If, however, you'd like to get a head start, feel free to check out this tutorial, which should contain everything you need to get started.
Stretch Goals

Were you able to meet the minimum requirements for the exercise? Want an additional challenge? Here are two more features you can implement in your JavaScript:

Add functionality to make the "Favorite Startup" button work--when the "Favorite Startup" button is clicked, it should save that madlib saying to an array.

Add functionality to make the "Print favorites" button work--when the "Print favorites" button is clicked, it should display all of the favorited startups in the array underneath the h2 with an ID of favorites.

*/
/*
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
*/


// HOMEWORK

//get a reference to the element
var button1 = document.getElementById('create');

//add event listener
button1.addEventListener('click', function(event) {
    // window.location.href='http://www.yahoo.com'; // ok this worked

    var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    // NOTE: added these below inside to ensure that every button click the random1 and random2 variables would get generated 
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
    
    var createH1 = document.createElement("h1");
    var heading_text = document.createTextNode('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
    createH1.appendChild(heading_text);
    document.body.appendChild(createH1);

});





// DOM CODEALONG EXAMPLE CODEALONG FOR REFERENCE

/*
var button = document.getElementById("add-content");

window.onload = function() {
    var main_heading = document.createElement("h1");
    var heading_text = document.createTextNode("DOM manipulation");
    main_heading.appendChild(heading_text);
    document.body.appendChild(main_heading);
    button.className = "button-branding";
}


button.onclick = function(event) {
    event.preventDefault();

    var campusContainer = document.getElementById("gaCampuses");
    var campuses = campusContainer.getElementsByTagName("li");

    for (var i = 0; i < campuses.length; i++) {
        campuses[i].className = "list-elements";
    }
}

*/
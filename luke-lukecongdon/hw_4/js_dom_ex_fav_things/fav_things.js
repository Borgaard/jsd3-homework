/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/



  function addToList(list, newThing) {
    var newListItem = document.createElement("li");
    var newText = document.createTextNode(newThing);
    newListItem.appendChild(newText);
    list.appendChild(newListItem);
}

window.onload = function() {
  var button = document.getElementById("new-thing-button");
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    addToList(thingList, newThing);
  }





  // when someone clicks the button...

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};



/*







Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)


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

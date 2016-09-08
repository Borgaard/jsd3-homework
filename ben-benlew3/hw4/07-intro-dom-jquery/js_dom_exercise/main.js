  /* Independent Practice

  Making a favorites list: DOM manipulation


  - When the user clicks the submit button, take the value they've typed
    into the input box and add it to the list (remember: appendChild)

  - Also, when a new item is added to the list, clear the input box.

  */
  var click = document.getElementById("new-thing-button");
  function addToList(list, newThing) {
    var newListItem = document.createElement("li");
    var newText = document.createTextNode(newThing);
    newListItem.appendChild(newText);
    list.appendChild(newListItem);
  }

  window.onload = function() {

    // when someone clicks the button...

      var newItems = document.getElementById("fav-list");
      var newThingInput = document.getElementById("new-thing");
      click.onclick = function(event){
        event.preventDefault();
        var newThing = newThingInput.value;
        addToList(newItems, newThing);
  }
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  };

  /*

  Bonus:

  When they click submit without typing anything, alert the user
  "you must type in a value!"
    (Hint: the `value` property of the input box, before anyone types in it,
    is the empty string.)

  */

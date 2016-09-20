// Convert favorites list to jQuery:


function addToList($list, $newThing) {
  // var newThingLi = document.createElement('li');
  var $newThingLi = $("<li>");

  // var newThingText = document.createTextNode(newThing);
  // newThingLi.appendChild(newThingText);
  $newThingText.text($newThing);
  
  // list.appendChild(newThingLi);
  $list.append($newThingLi);
}

// window.onload = function() {
  $(document).ready(function() {

  // var button = document.getElementById('new-thing-button');
  var $button = $("#new-thing-button");

  // var thingList = document.getElementById('fav-list');
  var $thingList = $("#fav-list");

  //var newThingInput = document.getElementById('new-thing');
  var $newThingInput = $("#new-thing");

  // button.onclick = function(event) {
    $button.on("click", function(event) {

    event.preventDefault(); //no change here

    // var newThing = newThingInput.value;
    var $newThing = $newThingInput.val();
    
    if ($newThing === '') { // no change here 
      alert('You must type in a value!'); // no change here 
    } else {
      // addToList(thingList, newThing);
      addToList($thingList, $newThing);

      // newThingInput.value = '';
      $newThingInput.val("");
    }
  });

});




//unchanged original code below for reference

/*
function addToList(list, newThing) {
  var newThingLi = document.createElement('li');
  var newThingText = document.createTextNode(newThing);
  newThingLi.appendChild(newThingText);
  list.appendChild(newThingLi);
}

window.onload = function() {
  var button = document.getElementById('new-thing-button');
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList(thingList, newThing);
      newThingInput.value = '';
    }
  };

};
*/
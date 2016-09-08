// Convert favorites list to jQuery:

window.onload = function(){
  // var main_heading = document.createElement("li");

  // var heading_text = document.createTextNode("Some Text");
  // main_heading.appendChild(heading_text);

  // document.body.appendChild(main_heading);


}

// function addToList(list, newThing) {
function addToList($list, $newThing){                                           //jQuery version of line above
//   var newThingLi = document.createElement('li');
  var $newThingLi = $("<li>");                                                  //jQuery version of line above
//   var newThingText = document.createTextNode(newThing);
//   newThingLi.appendChild(newThingText);
  $newThingLi.text($newThing);                                                  //jQuery version of line above
  // list.appendChild(newThingLi);
  $list.append($newThingLi);                                                    //jQuery version of line above
}

// window.onload = function() {
$(document).ready(function(){                                                   //jQuery version of line above
  // var button = document.getElementById('new-thing-button');
  var $button = $("#new-thing-button");                                         //jQuery version of line above
  // var thingList = document.getElementById('fav-list');
  var $thingList = $("#fav-list");                                              //jQuery version of line above
  // var newThingInput = document.getElementById('new-thing');
  var $newThingInput = $("#new-thing");                                         //jQuery version of line above

  // button.onclick = function(event) {
  $button.on("click", function(event){                                          //jQuery version of line above
    event.preventDefault();
    // var newThing = newThingInput.value;
    var $newThing = $newThingInput.val();                                       //jQuery version of line above
    if ($newThing === '') {
      alert('You must type in a value!');
    } else {
      // addToList(thingList, newThing);
      addToList($thingList, $newThing);                                         //jQuery version of line above
      // newThingInput.value = '';
      $newThingInput.val("");                                                   //jQuery version of line above
    }
  });

});

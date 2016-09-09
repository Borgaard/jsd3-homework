/* Independent Practice

Making a favorites list: event delegation


Refactor the code below.

The difference will be: use event delegation so that you only have
to set one event listener for all the items once, when the
code first runs, and you don't have to add any others whenever
someone adds an item.

Bonus: When the user mouses over each item, the item should turn grey. Don't use CSS hovering for this.

Bonus 2: Add another link, after each item, that allows you to delete the item.

*/

function addToList($list, thing) {
  var $thingLi = $('<li>').html(thing).addClass('fav-thing');
  addCrossOffLink($thingLi);
  $list.append($thingLi);
}

function addCrossOffLink($li) {
  var $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');
  $li.append($crossOffLink);
  // EVENT DELEGATION REFACTOR
  // REMOVED BY MNR
  // $crossOffLink.on('click', function(event) {
  //   $li.addClass('crossed-off');
  //   $crossOffLink.html('');
  // });
  // END OF REMOVED BLOCK
}

$(document).ready(function() {
  var $thingList = $('#fav-list');
  var $things = $('.fav-thing');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    addCrossOffLink($(li));
  });

  // EVENT DELEGATION REFACTOR
  // ADDED BY MNR
  $thingList.on('click', 'li', function(event) {
    $(this).addClass('crossed-off');
    $(this).children().html('');
    console.log("List item clicked on");
  });
  // END OF ADDED BLOCK

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });
});

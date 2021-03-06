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
  addCrossOffAndDeleteLinks($thingLi);
  $list.append($thingLi);
}

function addCrossOffAndDeleteLinks($li) {
  $li.append($('<span>').html(' cross off').addClass('cross-off'));
  $li.append($('<span>').html(' delete').addClass('delete'));
}

$(document).ready(function() {
  var $thingList = $('#fav-list');
  var $things = $('.fav-thing');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    addCrossOffAndDeleteLinks($(li));
  });

  $thingList.on('mouseenter mouseleave', 'li', function(event) {
    switch (event.type) {
      case 'mouseenter':
        $(this).addClass('mousing-over');
        $(this).siblings().removeClass('mousing-over');
        break;
      case 'mouseleave':
        $(this).removeClass('mousing-over');
        break;
    }
  });

  $thingList.on('click', '.cross-off', function(event) {
    $(this).parent().addClass('crossed-off');
    $(this).html('');
  });

  $thingList.on('click', '.delete', function(event) {
    $(this).parent().remove();
  });

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

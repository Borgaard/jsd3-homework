function addToList($list, item) {
  var $itemLi = $('<li>').text(item);
  $list.append($itemLi);
  addCompleteLinks($itemLi);
}

/*
function addCompleteLinks($lis) {
  $lis.each(function() {
    var $newLink = $('<span>');
    var $linkWithText = $newLink.html(' complete task');
    var $completedLink = $linkWithText.addClass('complete-task');
    $(this).append($completedLink);
  });
*/

// convert code above to chain it - see below

function addCompleteLinks($lis) {
//  $lis.each(function() {

/*    var $newLink = $('<span>');
    var $linkWithText = $newLink.html(' complete task');
    var $completedLink = $linkWithText.addClass('complete-task');
*/
    var $completedLink = $('<span>').html(' complete task').addClass('complete-task');
   // $(this).append($completedLink);
    $lis.append($completedLink);
 // });








  $('.complete-task').on('click', function(event) {
    // We don't need `event.preventDefault()` here
    // because there is no weird default action
    // when clicking on a `span` element.
    $(this).parent().addClass('completed');
  });
}

var $todoList = $('#todo-list');
var $button = $('#new-item-button');
var $newItemInput = $('#new-item');

// The following statement results in a collection
var $todoListItems = $('#todo-list .todo-item');
addCompleteLinks($todoListItems);

$button.on('click', function(event) {
  event.preventDefault();
  var newItem = $newItemInput.val();
  if (newItem === '') {
    alert('You must type in a value!');
  } else {
    addToList($todoList, newItem);
    $newItemInput.val('');
  }
});


// below from Sasha in Slack

// var $todoListItems = $('#todo-list li');

var $todoList = $('#todo-list');

  $todoListItems.on('mouseenter mouseleave', 'li', function(event) {
    if (event.type === 'mouseenter') {
      $(this).removeClass('inactive')

    }

    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $todoList.on('mouseleave', function(event) {
    $(this).siblings().removeClass('inactive');
  });

// THIS SECTION ABOVE IS TOTALLY FUCKED UP - SEE SOLUTIONS LATER


function addToList($list, strText) {
  var $newThingLi = $("<li>");
  $newThingLi.text(strText);
  $list.append($newThingLi);
}

$(document).ready (function() {
  var $button = $("#generate-lyrics-button");
  var $lyricsList = $("#lyrics-list");

  $button.on("click", function(event) {
    event.preventDefault();
    for (var i = 99; i > 0; i--) {
      addToList($lyricsList, `${i} bottle${i!=1?'s':''} of beer on the wall, ${i} bottle${i!=1?'s':''} of beer.\nTake one down and pass it around, ${i - 1} bottle${i!=2?'s':''} of beer on the wall.`);
    }
  });
});

$(function() {

	var count = 0;

	$('#list').css('margin', 'auto');
	$('#list').css('width', '500px');

	for(var i = 99; i >= 0; i--) {
		var listItem = $('<li>');

		if(i === 1) {
			count = i + ' bottle';
		} else if(i ===  0) {
			count = 'No more bottles';
		} else {
			count = i + ' bottles';
		}

		listItem.append(count + ' of beer on the wall, ' + count + ' of beer.<br>Take one down and pass it around, '
			+ count + ' of beer on the wall.');
		
		$('#list').append(listItem);
		listItem.css('list-style', 'none');
		listItem.css('margin-top', '20px');
	}


});
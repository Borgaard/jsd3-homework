$(document).ready(function() {

	var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
	var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

	var favs = [];


	$('#create').on('click', function() {
		var random1 = Math.floor((Math.random() * startupX.length));
		var random2 = Math.floor((Math.random() * startupY.length));
		$('#xForY').html('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
	});

	$('#save').on('click', function() {
		favs.push($('#xForY').text());
		$('#xForY').html('');
	});

	$('#print').on('click', function() {
		var favsHeader = $('#favorites');
		var text = '';

		for(var i = 0; i < favs.length; i++) {
			text += favs[i] + '<br>';
		}
		favsHeader.html(text);
	});
	
});


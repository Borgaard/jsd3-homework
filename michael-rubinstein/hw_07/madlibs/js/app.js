var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var arrFavorites = [];

function rndElement (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

$(document).ready (function() {
    var $btnCreate = $("#create");
    var $btnSave = $("#save");
    var $btnPrint = $("#print");

    $btnCreate.on("click", function(event) {
        event.preventDefault();
        var mlText = `A startup that's like ${rndElement(startupX)}, but for ${rndElement(startupY)}!`
        $('h1').replaceWith(`<h1 id="xForY">${mlText}</h1>`);
    });

    $btnSave.on("click", function(event) {
        event.preventDefault();
        arrFavorites.push($("#xForY").text());
    });

    $btnPrint.on("click", function(event) {
        event.preventDefault();
        $("#favorites").text(arrFavorites);
    });

});

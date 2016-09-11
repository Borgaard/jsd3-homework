var button = document.getElementById("add-content");

window.onload = function() {
    var main_heading = document.createElement("h1");
    var heading_text = document.createTextNode("DOM manipulation");
    main_heading.appendChild(heading_text);
    document.body.appendChild(main_heading);
    button.className = "button-branding";
}


button.onclick = function(event) {
    event.preventDefault();

    var campusContainer = document.getElementById("gaCampuses");
    var campuses = campusContainer.getElementsByTagName("li");

    for (var i = 0; i < campuses.length; i++) {
        campuses[i].className = "list-elements";
    }
}
var poo = document.getElementById("add-content");

window.onload = function(){
  var main_heading = document.createElement("h1");
  var heading_text = document.createTextNode("Some Text");
  main_heading.appendChild(heading_text);
  document.body.appendChild(main_heading);

  poo.className = "button-branding";
}

poo.onclick = function(event){                //check notes for class 7
  event.preventDefault();                     //check notes for class 7
  var campusesContainer = document.getElementById("gaCampuses");
  var campuses = campusesContainer.getElementsByTagName("li");

  for (var i = 0; i < campuses.length; i++){
    campuses[i].className = "list-elements";
  }
}

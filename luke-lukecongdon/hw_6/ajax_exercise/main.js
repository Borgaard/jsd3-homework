/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.

- Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
*/

'use strict';
/*
var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if(httpRequest.readyState === 4)  {  //4 = the code for a DONE state request
        if (httpRequest.status === 200) {   // 200 = OK status code 
            console.log(httpRequest.responseText);
        } else {
            console.log("There was a problem");
        }
    }      
};
// custom function above to handle request


httpRequest.open("GET", "http://data.consumerfinance.gov/api/views.json");

httpRequest.send(); //this takes no arguments 
*/







// new attempt below, procedure idea 

// need button.onclick intrinsic event
// need to pull new data via httpRequest
// need to attach it to DOM manipulation on button click? So get button ID, use getElementById? 

var getFnceData = document.getElementById("getDataButton");
var getCustData = document.getElementById("getCustomDataButton");
var dataUrl1 = "http://data.consumerfinance.gov/api/views.json";
var dataUrl2 = "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD";

// button ID = 
//	getDataButton
//	getCustomDataButton


function newData(URL) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === 4)  {  //4 = the code for a DONE state request
            if (httpRequest.status === 200) {   // 200 = OK status code 
                console.log(httpRequest.responseText);
            } else {
                console.log("There was a problem.");
            }
        }      
    };
    // custom function above to handle request

    httpRequest.open("GET", URL);

    httpRequest.send(); //this takes no arguments 
};

getFnceData.onclick = newData(dataUrl1);
getCustData.onclick = newData(dataUrl2);

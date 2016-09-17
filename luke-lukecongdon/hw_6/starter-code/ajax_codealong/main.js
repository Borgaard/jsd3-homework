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


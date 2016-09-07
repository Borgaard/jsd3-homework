var streetNumbers = [11, 337, 17, 135, 37];
var streetNames = ["Crestwood Way", "Elm Street", "Galivant Avenue", "Sunrise Boulevard", "Yellow Brick Road", "Lost Highway"];
var cityNames = ["Dark City", "Adventureland", "Pleasantville", "Skara Brae", "Springfield", "Otisburg"];
var stateNames = ["CA", "VA", "WA", "NY", "AK"];
var zipCodes = ["90101", "10203", "40404", "01812", "90210"]

function rndElement (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(`${rndElement(streetNumbers)} ${rndElement(streetNames)}, ${rndElement(cityNames)} ${rndElement(stateNames)}, ${rndElement(zipCodes)}`);

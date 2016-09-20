// Assignment 2: Random Address Generator

// Write a script that can generate random addresses
// As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
// Your script should randomly select one item from each of these arrays and then use them to construct a random address
// Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
// node random-address.js
// => 34578 Dolphin Street, Wonka NY, 44506

// start with some arrays below

var stNum = [
    "23",
    "33",
    "57",
    "103",
    "883"
];
var stName = [
    "Mercy Street",
    "Whipple Avenue",
    "Van Ness Avenue",
    "Great America",
    "Pennsylvania Avenue"
];
var cityName = [
    "Washington",
    "San Francisco",
    "Sunnyvale",
    "San Mateo",
    "Napa"
];
var stateName = [
    "CA",
    "WA",
    "OR",
    "AZ",
    "CO"
];
var zipCode = [
    "94110",
    "94111",
    "94112",
    "94113",
    "94114"
];


// idea, create random numbers for array elements below

/*
var randStNum = Math.floor(Math.random() * 5) + 1;
    // console.log(randStNum);   // test, yes, getting numbers between 1-5
var randStName = Math.floor(Math.random() * 5) + 1;
var randCityName = Math.floor(Math.random() * 5) + 1;
var randStateName = Math.floor(Math.random() * 5) + 1;
var randZipCode = Math.floor(Math.random() * 5) + 1;

*/
// procedure above. choose random number between 0-1, multiply it times 5 to get number between 0 and 'less than 5', then use Math.floor to chop off decimals without rounding up. this gets whole numbers between 0-4 randomly. Last add 1 to all results to get random whole numbers between 1-5. 
// referred to Rolling Dice example

// NEXT, can I take a random 1-5 number and apply it to an array position to randomly select addresses, street numbers, etc? 


// lost
// checking Google, this seems simple, need to do this for each part of the street address 
// e.g.    var item = items[Math.floor(Math.random()*items.length)];
// my arrays are stNum, stName, cityName, stateName, zipCode
// so...

var number = stNum[Math.floor(Math.random()*stNum.length)];
//    console.log(number);
// array name function and length must match 
var name = stName[Math.floor(Math.random()*stName.length)];
//    console.log(name);
var city = cityName[Math.floor(Math.random()*cityName.length)];
//    console.log(city);
var state = stateName[Math.floor(Math.random()*stateName.length)];
//    console.log(state);
var zip = zipCode[Math.floor(Math.random()*zipCode.length)];
//    console.log(zip);

console.log(number + " " + name + ", " + city + " " + state + ", " + zip);


// FINAL FOR NOW: This works in browser console, but not in node CLI mode
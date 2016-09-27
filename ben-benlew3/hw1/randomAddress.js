var number = [12,14,16,18,20];
var street = ["Inglewood", "Brentwood", "Homewood", "Oakwood", "Burntwood"];
var cityName = ["San Diego", "San Francisco", "San Carlos", "San Rafael", "San Quinton"];
var states = ["AL", "CA", "DE", "FL", "GA"];
var zipCode = [00121, 00223, 12345, 54321, 15234];

function randomElement (arr){
  return arr[Math.floor(Math.random() * arr.length)];
};

console.log(randomElement(number) +  " " + randomElement(street) + " " + randomElement(cityName) + " " + randomElement(states) + " " + randomElement(zipCode));

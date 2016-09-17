/*
setTimeout(function(){
    console.log("hello world");
}, 1000) //1 second
*/

/*
var numbers = [[1, 2], [8, 6], [5, 9]];
//array with 3 arrays in it

var processor = function() {
    var result = [];
    numbers.forEach(function(element, index) {
        result.push(element[0] + element[1]);
    });
    return result;
}
// now use the above as a call back function 

function reduceArray(callback) {
    var summedArray = callback(); // new varialble calls the callback function 
    console.log("The result is " + summedArray);
}

//now call the reduceArray function 
reduceArray(processor);
*/





// modify above to make a function that returns another function 

var footballScores = [[7,23],[14,7],[11,2]];
var baseballScores = [[3,1],[5,3],[11,2]]

var processor = function(array){
  var result = [];
  array.forEach(function(element) {
    result.push(element[0] + element[1]);
  });
  return result;
}

function makeArrayReducer(values, callback) {
  return function(){
    var summedArray = callback(values);
    console.log("The result is " + summedArray);
  };
}

var reduceFootballScores = makeArrayReducer(footballScores, processor)(); //immediately call this with ();
var reduceBaseballScores = makeArrayReducer(baseballScores, processor)(); //immediately call this with ();

// reduceFootballScores();  //don't need to call since immediately called above with '();'
// reduceBaseballScores(); //same comment as above 
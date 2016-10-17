// var numbers = [[1,2], [8,6], [5,9]];
//
// var processor = function(){   //function expression
//   var result = [];
//   numbers.forEach(function(element) {
//     result.push(element[0] + element[1]);
//   });
//   return result;
// }
//
// function reduceArray(callback) {
//   var summedArray = callback();
//   console.log("The result is " + summedArray);
// }
//
// reduceArray(processor);

                                                                                //Steps
// var numbers = [[1,2], [8,6], [5,9]];                                            (1)
//
// var processor = function(array){                                                (5)
//   var result = [];
//   array.forEach(function(element) {
//     result.push(element[0] + element[1]);
//   });
//   return result;
// }
//
// function reduceArray(values, callback) {                                        (3)
//   var summedArray = callback(values);                                           (4)
//   console.log("The result is " + summedArray);
// }
//
// reduceArray(numbers, processor);                                                (2)


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

var reduceFootballScores = makeArrayReducer(footballScores, processor)();
var reduceBaseballScores = makeArrayReducer(baseballScores, processor)();

// reduceFootballScores();
// reduceBaseballScores();

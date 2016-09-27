var countDown = function(){
  var counter;
  for (counter = 3; counter > 0; counter--){
    console.log(counter);
  }
}();
///////////////////////does the same thing but written 2 different ways
(function countDown(){
  var counter;
  for (counter = 3; counter > 0; counter--){
    console.log(counter);
  }
})();

////////////////////////how it works as a function. start's parameter is the last set of parethasis
(function countDown(start){
  var counter;
  for (counter = start; counter > 0; counter--){
    console.log(counter);
  }
})(5);

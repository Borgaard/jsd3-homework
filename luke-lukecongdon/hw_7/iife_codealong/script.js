/*
var countDown = function() {
    var counter;
    for(counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
}
// in browser you'll need to type 'countDown()' for it to run

*/


/*
var countDown = function() {
    var counter;
    for(counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
}();
*/



// next turn this into a function declaration 
/*
function countDown(() {
    var counter;
    for(counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
})();
*/



// take out 'countDown' to make an anonymous function 

(function countDown(start) {
    var counter;
    for(counter = start; counter > 0; counter--) {
        console.log(counter);
    }
})(10);   // run this with a value of '10'



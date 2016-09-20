/*  Write an IIFE function that counts up to an end time in seconds that's passed as a parameter.
    For each second that passes, the function should log the number of elapsed seconds to the console (1, then 2, then 3, etc.).
    The function will automatically execute and count up every second until it reaches the specified parameter value.
    Use the setTimeout function to count up.
    Hint: a second is the timer passed * 1000 (milliseconds).

    Suggestions for getting started: 
    1. Write a function that logs a value to the console after 1 second has elapsed.
    2. Next make that function self-executing.
    3. Then figure out how to make that function repeat a set number of times.
*/



//example code
/*
(function countDown(start) {
    var counter;
    for(counter = start; counter > 0; counter--) {
        console.log(counter);
    }
})(10);   // run this with a value of '10'
*/


/*
// this is the base form

setTimeout(function() {
    <do someting> 
}, <delay>);
*/


/*
// my crap below 
(setTimeout countUp(start); {
    var counter;
    for(counter = start; counter > 0; counter++) {
        console.log(counter);
    }
}, 1000)();
*/

//Sasha answer below

(function timedCountDown(endTime) {
    for (var i = 1; i < endTime; i++) {
        (function (j) {
            setTimeout(function() {
            console.log(j);
        }, i*1000);
     })(i);
        
    }
})(5);
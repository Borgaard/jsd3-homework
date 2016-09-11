
// Relying on your newfound knowledge of loops, combine loops and 
// if/else statements together and incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging 
// the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" 
// should be logged.

// Follow the steps below.






// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, 
// numbers 1 - 100.

/*
for(var i = 1; i <= 100; i++) {
    console.log(i);
}
// this above gave the right answer to Q1
*/


// ##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being 
// iterated over is divisible by `3`; otherwise, log out the value.

/*
for(var i = 1; i <= 100; i++) {
    if ((i % 3) === 0) {
        console.log("Fizz");
    }
else {console.log(i);}
}
*/



// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being 
// iterated over is divisible by `5`.


/*
for(var i = 1; i <= 100; i++) {
    if ((i % 5) === 0) {
        console.log("Buzz");
    }
else {console.log(i);}
}
*/





// Adding steps 2 and 3 together, fizz + buzz

/*
for(var i = 1; i <= 100; i++) {
    if ((i % 3) === 0) {
        console.log("Fizz");
    } else if ((i % 5) === 0){
        console.log("Buzz");
    }
    else {console.log(i);}
}
*/



// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the 
// value being iterated over is divisible by both `3` and `5`.


/*
for(var i = 1; i <= 100; i++) {
    if ((i % 3) === 0) {
        console.log("Fizz");
    } else if ((i % 5) === 0){
        console.log("Buzz");
    } else if (((i % 3) && (i % 5) === 0)){
        console.log("FizzBuzz");
    }
    else {console.log(i);}
}
*/


for(var i = 1; i <= 100; i++) {
  //  if ((i % 3) && (i % 5) === 0){    // funny but didn't work
    if (((i % 3) === 0) && ((i % 5) === 0)){
        console.log("FizzBuzz");
    } else if ((i % 3) === 0){
        console.log("Fizz");
    } else if ((i % 5) === 0){
        console.log("Buzz");
    }
    else {console.log(i);}
}





//	Use if/else conditionals to control program flow based on boolean tests.
//	Use boolean logic to combine and manipulate conditional tests.
//	Use switch/case conditionals to control program flow based on matching explicit values. 
//	Differentiate among true, false, truth-y, and false-y.
//	Review loop iteration using for and forEach, and introduce while and do/while loops. 





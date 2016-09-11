// Assignment 1: 99 Bottles of Beer

// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here: http://www.99-bottles-of-beer.net/lyrics.html
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

/*
NOTES

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

// TEST ONE
// This broke because 'less than 99' can go into negative #s infinitely

for(var i = 1; i <= 99; i--) {
    console.log(i);
}

// TEST TWO, BASED ON FIZZ BUZZ
// OK this works because 1-100 is a discrete range with an end in it 

for(var i = 1; i <= 100; i++) {
    if (((i % 3) === 0) && ((i % 5) === 0)){
        console.log("test");
    }
    else {console.log(i);}
}

// TEST THREE
// Yeah! Got a negative count to 1 done.

for(var i = 99; i > 0; i--) {
    console.log(i);
    }

// TEST FOUR
// Try getting entire simple lyric done. No single vs plural handled yet
// Try using new line \n syntax. Add to string " ". 


for(var i = 99; i > 0; i--) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. \n" + "Take one down and pass it around, " + i + " bottles of beer on the wall. \n");
    }
// next, subtract i - 1 from second line 


// TEST FIVE 
// fix line 2 for i - 1 bottles
// add if else statements
// result pretty good but last verse not shown
// idea, just add to verse two with more \n breaks


for(var i = 99; i > 0; i--) {
    if (i > 1){
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. \n" + "Take one down and pass it around, " + ( i - 1) + " bottles of beer on the wall. \n");
    } else if (i = 1){
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. \n" + "Take one down and pass it around, no more bottles of beer on the wall. \n");
    } else if (i = 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer. \n" + "Go to the store and buy some more, 99 bottles of beer on the wall. \n");

    }
}
*/

// TEST SIX

for(var i = 99; i > 0; i--) {
    if (i > 1){
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. \n" + "Take one down and pass it around, " + ( i - 1) + " bottles of beer on the wall. \n");
    } else if (i = 1){
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. \n" + "Take one down and pass it around, no more bottles of beer on the wall. \n \nNo more bottles of beer on the wall, no more bottles of beer. \n" + "Go to the store and buy some more, 99 bottles of beer on the wall. \n");
    }
}
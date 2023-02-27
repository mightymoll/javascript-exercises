/* EXERCISE 1 - Looping a Triangle
create a triangle of # symbols 7 levels high in the console log
1. define string as # symbol
2. run 'for' loop as long as string length is less than or equal to 7
3. during each run add another "#" to the existing string and console log results
*/

function triangle() {
  for (let string = "#"; string.length <= 7; string += "#") {
    console.log(string)
  }
};

triangle();

/* EXERCISE 2 - FizzBuzz
write a program that uses console.log to print all the numbers from 1 to 100
two exceptions: 
1. for numbers divisible by 3, print 'Fizz'
2. for numbers divisible by 5 (and not 3), print 'Buzz'

then modify the program to print "FizzBuzz" for numbers that are both divisible by 3 and 5 */

function fizzBuzz() {
  for (let count = 1; count <= 100; count++) {
    // print "Fizz" if remainder is 0 when divided by 3
    if (count % 3 == 0) {
      console.log("Fizz")
    }
    // print "Buzz" if remainder is 0 when divided by 5
    else if (count % 5 == 0) {
      console.log("Buzz")
    }
    // print number if neither case above is true
    else {
      console.log(count)
    }
  }
};
fizzBuzz();

function fizzBuzzModified() {
  for (let count = 1; count <= 100; count++) {
    // print "FizzBuzz" if remainder is 0 when divided by 3 and 5
    if ((count % 3 == 0) && (count % 5 == 0)) {
      console.log("FizzBuzz")
    }
    // print "Fizz" if remainder is 0 when divided by 3
    else if (count % 3 == 0) {
      console.log("Fizz")
    }
    // print "Buzz" if remainder is 0 when divided by 5
    else if (count % 5 == 0) {
      console.log("Buzz")
    }
    else {
      console.log(count)
    }
  }
};
fizzBuzzModified();
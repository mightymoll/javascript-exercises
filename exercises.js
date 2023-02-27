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

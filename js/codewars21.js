/*
[8 kyu]
Description:
Complete the method that takes a boolean value and 
return a "Yes" string for true, or a "No" string for false.
*/
const boolToWord = (bool) => (bool ? "Yes" : "No");

console.log(boolToWord(false));

/*
[8 kyu]
Description:
The cockroach is one of the fastest insects. Write a function which takes its speed 
in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. 
The result should be an Integer.
*/

const cockroachSpeed = (kph) => {
  return Math.floor(kph * (100000 / 3600));
};

console.log(cockroachSpeed(1.08));

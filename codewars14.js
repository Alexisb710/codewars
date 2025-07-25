/*
[6 kyu]
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
*/
// My thought process:
// Input: a positive number
// Goal: Return how many times we must multiply the digits of num until the result is a single-digit (i.e., less than 10)
// Evaluation steps:
//  if num is already a single digit, return 0
//  initialize a count variable to keep track of how many multiplication steps are performed
//  use a while loop that runs as long as num has more than one digit
//    in while loop:
//      convert num to a string
//      split the string into individual digit chars
//      convert each char back to a number and multiply them together using .reduce()
//      update the num with the result
//      increment count
//       again, break out of while loop when num has only one digit
// once num is a single-digit, return count

const persistence = num => {
  let count = 0;
  let val = num
  while (val >= 10) {
    val = val.toString().split('').reduce((acc, digit) => acc * +digit, 1);
    count++;
  }

  return count;
}


console.log(persistence(39))  // 3: 3*9=27 → 2*7=14 → 1*4=4
console.log(persistence(999))  // 4: 9*9*9=729 → 7*2*9=126 → 1*2*6=12 → 1*2=2
console.log(persistence(4))  // 0: already a single digit

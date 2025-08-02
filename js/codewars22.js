/*
[8 kyu]
Description:
Terminal game move function
In this game, the hero moves from left to right. The player rolls the die and moves the 
number of spaces indicated by the die two times.

Create a function for the terminal game that takes the current position of the hero and 
the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/
const move = (position, roll) => {
  return position + roll * 2;
};
// console.log(move(3, 6));

/*
[8 kyu]
Description:
Complete the function that takes a non-negative integer n as input, and 
returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/
const powersOfTwo = (n) => {
  return Array.from({ length: n + 1 }, (_, i) => Math.pow(2, i));
};

console.log(powersOfTwo(1));

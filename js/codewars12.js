/*
[6 kyu]
A child is playing with a ball on the nth floor of a tall building. The height of this 
floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its 
height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's 
falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the 
window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/

const bouncingBall = (h,  bounce,  window) => {
  // your code here
  let height = h
  let count = 1

  if(h < 0 || (bounce < 0 || bounce >= 1.0) || window >= h){
    return -1
  }
  while (height * bounce > window){
    count += 2
    height = height * bounce
  } 
  return count
}
// console.log(bouncingBall(3,0.66, 1.5))
// console.log(bouncingBall(30.0, 0.66, 1.5))
// console.log(bouncingBall(3.0, 1.0, 1.5))


/*
[8 kyu]
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]
*/
const countBy = (x, n) => {
  return Array(n).fill(x).map((x, i) => x * (i+1))
}

console.log(countBy(1,10)) // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)) // [2,4,6,8,10]
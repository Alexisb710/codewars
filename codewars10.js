/*
[6 kyu]
Description:
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given two positive integers n and p, we want to find a positive integer k, if it exists, 
such that the sum of the digits of n raised to consecutive powers starting from p is equal 
to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such 
that :
(a^p + b^(p+1)+c^(p+2)+d^(p+3)+...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

/*
  MY THOUGHT PROCESS:
  // we get a number and p
  // convert that number into a string
  // split that number so that all numbers are an element in an array
  // after this, the numbers will be strings in the array
  // convert each string number into a number using a for loop and parseInt
  // now we should have an array of the individual numbers in the original whole number
  // moving on to p
  // we need to raise each number in the array starting with p, 
  // then to p+1... up to p+(however many it takes to reach the last number)
  // Then, we need to see the result and we have to do: result / original number
  // and we have to check if that value is a whole number because if it is, then 
  // we reach n * k.... then we need to return k if its a whole number, return -1 otherwise
  // how to check if it's a whole number? k % 1 === 0
*/
const findK = (number, p) => {
  let arr = number.toString().split('')
  for(let i = 0; i < arr.length; i++){
    arr[i] = Math.pow((parseInt(arr[i])), p+i)
  }
  let arrSum = arr.reduce((acc, val)=> acc + val, 0)
  let k = arrSum / number
  if(k % 1 === 0){
    return k
  } 
  else {
    return -1
  }
}

// console.log(findK(123, 3))
console.log(findK(89, 1))
console.log(findK(92, 1))
console.log(findK(695, 2))
console.log(findK(46288, 3))

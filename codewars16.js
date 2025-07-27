/*
[8 kyu]
Description:
Create a function that takes 2 integers in form of a string as an input, 
and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
*/
const sumStr = (a,b) => {
  return (+a + +b).toString()
}

/*
[7 kyu]

Description:
Task
Your task is to write a function which returns the n-th term of the following series, 
which is the sum of the first n terms of the sequence (n is the input parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...

You will need to figure out the rule of the series to complete this.

Rules
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

Examples (Input --> Output)
n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

const SeriesSum = num => {
  let sum = 0
  for(let i = 0; i < num; i++){
    sum += (1 / (1 + i * 3))
  }
  return sum.toFixed(2)
}

console.log(SeriesSum(1)) // "1.00"
console.log(SeriesSum(2)) // "1.25"
console.log(SeriesSum(5)) // "1.57"
/*
The goal of this exercise is to convert a string to a new string where each character in the 
new string is "(" if that character appears only once in the original string, or ")" if that 
character appears more than once in the original string. Ignore capitalization when determining 
if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read 
"...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// function duplicateEncode(word){
//     // ...
//     let lowercaseWord = word.toLowerCase()
//     let newArr = []
//     lowercaseWord.split('').forEach((letter, i, array) => {
//       let letterCount = array.filter(l => l === letter).length
//       if(letterCount > 1){
//         newArr.push(')')
//       } else {
//         newArr.push('(')
//       }
//     })
//     return newArr.join('');
// }

// REFACTOR CODE
// function duplicateEncode(word){
//   let lower = word.toLowerCase().split('')
//   let count = {}
//   for (let letter of lower){
//     count[letter] = (count[letter] || 0) + 1
//   }
//   console.log(count)
//   return lower.map(letter => count[letter] > 1 ? ')' : '(').join('')
// }

// console.log((duplicateEncode("din")))
// console.log((duplicateEncode("recede")))
// console.log((duplicateEncode("Success")))
// console.log((duplicateEncode("(( @")))


/*
[8 kyu]
Complete the square sum function so that it squares each number passed into it and then 
sums the results together.

For example, for [1, 2, 2] it should return 9 
*/

// const squareSum = n => {
//   return n.reduce((acc, val) => acc + val**2, 0)
// }


/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by 
a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
For example: ["3:1", "2:2", "0:1", ...]
*/
const totalPoints = scores => {
  let total = 0
  for(let score of scores){
    if(score[0] > score[2]){
      total += 3
    } else if(score[0] < score[2]){
      continue
    } else {
      total += 1
    }
  }
  return total
}
const totalPointss = scores => {
  return scores.map(e => {
    if(e[0]>e[2]){
      return 3
    } else if(e[0]<e[2]){
      return 0
    } else {
      return 1
    }
  }).reduce((acc, val)=> acc + val, 0)
}
// console.log(totalPointss(["3:1", "2:2", "0:1"]))

/*
[7 kyu]
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. 
Also, your function will always get an array or a list, you don't have to check for null, 
undefined or similar.
*/
function minMax(arr){
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return [min,max]; // fix me!
}
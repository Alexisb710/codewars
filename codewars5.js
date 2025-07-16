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
function duplicateEncode(word){
  let lower = word.toLowerCase().split('')
  let count = {}
  for (let letter of lower){
    count[letter] = (count[letter] || 0) + 1
  }
  console.log(count)
  return lower.map(letter => count[letter] > 1 ? ')' : '(').join('')
}

console.log((duplicateEncode("din")))
console.log((duplicateEncode("recede")))
console.log((duplicateEncode("Success")))
console.log((duplicateEncode("(( @")))
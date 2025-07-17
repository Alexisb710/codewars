/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. The input string can be assumed 
to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
function duplicateCount(text){
  let temp = text.toLowerCase().split('')
  let count = {}
  for(let char of temp){
    count[char] = (count[char] || 0) + 1
  }
  let duplicates = 0
  for(let char in count){
    if(count[char] > 1){
      duplicates++
    }
  }
  return duplicates
}

// REFACTORED INTO "ONE" LINE
// function duplicateCount(text){
//   return Object.values([...text.toLowerCase()].reduce((obj, char) => {
//     obj[char] = (obj[char] || 0) + 1
//     return obj
//   }, {})).filter(count => count > 1).length
// }

console.log(duplicateCount("abcde"))
console.log(duplicateCount("indivisibility"))
console.log(duplicateCount("Indivisibilities"))
console.log(duplicateCount("aA11"))
console.log(duplicateCount("ABBA"))

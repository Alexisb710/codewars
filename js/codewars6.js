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

// console.log(duplicateCount("abcde"))
// console.log(duplicateCount("indivisibility"))
// console.log(duplicateCount("Indivisibilities"))
// console.log(duplicateCount("aA11"))
// console.log(duplicateCount("ABBA"))


/*
[6 kyu]
Description:
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to 
calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a 
customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as 
soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.
*/

function queueTime(customers, tills) {
  // Create an array to track the workload (time) of each till
  const tillTimes = new Array(tills).fill(0);

  for (let time of customers) {
    // Find the index of the till that will be free the earliest (least busy)
    let nextAvailableTill = tillTimes.indexOf(Math.min(...tillTimes));

    // Assign this customer to that till
    tillTimes[nextAvailableTill] += time;
  }

  // The total time is the time when the last till finishes
  return Math.max(...tillTimes);
}


// console.log(queueTime([5,3,4], 1)) //12
// console.log(queueTime([10,2,3,3], 2)) // 10
// console.log(queueTime([2,3,10], 2)) // 12
// console.log(queueTime([2,2,3,3,4,4], 2)) // 9
// console.log(queueTime([1,2,3,4,5], 100)) // 

/*
[7 kyu]
Description:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

// function binToInt(arr){
//   let val = 0
//   let pow = 0
//   for(let i = arr.length-1; i>=0; i--){
//     val += (arr[i] * 2**pow)
//     pow++
//   }
//   return val
// }
function binToInt(arr){
  return [...arr].reverse().reduce((acc, current, i) => acc + current * 2**i)
}

function binToInt(arr){
  return arr.reduce((acc, bit) => acc * 2 + bit, 0)
}
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
}
// console.log(binToInt([0, 0, 0, 1])) // 1
// console.log(binToInt([1, 0, 1, 0])) // 10
// console.log(binToInt([0, 1, 1, 0])) // 6
// console.log(binToInt([1, 1, 1, 1])) // 15
// console.log(binToInt([1, 0, 1, 1])) // 11


/*
[8 kyu]
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at 
position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/
function findNeedle(arr){
  let position = arr.indexOf("needle")
  if(position !== -1){
    return `found the needle at position ${position}`
  }
}
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))


/*
[8 kyu]
Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

Examples
removeChar('eloquent') // -> 'loquen'
removeChar('country')  // -> 'ountr' 
removeChar('person')   // -> 'erso'
removeChar('ab')       // -> '' (empty string)
removeChar('xyz')      // -> 'y'
*/
function removeChar(str) {
  return str.slice(1,-1)
}
// removeChar('eloquent') // -> 'loquen'
// removeChar('country')  // -> 'ountr' 
// removeChar('person')   // -> 'erso'
// removeChar('ab')       // -> '' (empty string)
// removeChar('xyz')      // -> 'y'

/*
[7 kyu]
Description:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and 
carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function 
receives one side of the DNA (string, except for Haskell); you need to return 
the other complementary side. DNA strand is never empty or there is no DNA at 
all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// function dna(strand){
//   let temp = strand.split('')
//   let string = []
//   for(let letter of temp){
//     if(letter == 'A'){
//       string.push('T')
//     } else if(letter == 'T'){
//       string.push('A')
//     } else if(letter == 'C'){
//       string.push('G')
//     } else if(letter == 'G'){
//       string.push('C')
//     }
//   }
//   return string.join('')
// }

// REFACTOR
function dna(strand) {
  const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
  return strand.split('').map(letter => pairs[letter]).join('');
}


// console.log(dna("ATTGC")) // -> TAACG
// console.log(dna("GTAT")) // -> CATA

/*
You probably know the "like" system from Facebook and other pages. People can 
"like" blog posts, pictures or other items. We want to create the text that 
should be displayed next to such an item.

Implement the function which takes an array containing the names of people that 
like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
function likes(people){
  if(people.length == 0){
    return 'no one likes this'
  } else if(people.length == 1){
    return `${people[0]} likes this`
  } else if(people.length === 2){
    return `${people[0]} and ${people[1]} like this`
  } else if(people.length === 3){
    return `${people[0]}, ${people[1]} and ${people[2]} like this`
  } else {
    return `${people[0]}, ${people[1]} and ${people.length - 2} others like this`
  }
}
// console.log(likes(["Peter"]))
// console.log(likes(["Jacob", "Alex"]))
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

/*
[7 kyu]
Description:
Given a string, capitalize the letters that occupy even indexes and odd indexes
 separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for 
more examples.
The input will be a lowercase string with no spaces.
Good luck!
*/
function capitalize(string){
  let temp = ['','']
  for(let i = 0; i < string.length; i++){
    const char = string[i]
    if(i % 2 === 0){
      temp[0] += char.toUpperCase()
      temp[1] += char
    } else {
      temp[0] += char
      temp[1] += char.toUpperCase()
    }
  }

  return temp
}
// REFACTORED
// function capitalize(string){
//   const str = string.split('')
//   let even = str.map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter).join('')
//   let odd = str.map((letter, i) => i % 2 !== 0 ? letter.toUpperCase() : letter).join('')
//   return [even, odd]
// }
// console.log(capitalize("abcdef"))

/*
[8 kyu]
Description:
You will be given an array a and a value x. All you need to do is check whether 
the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/
function check(arr, x){
  return arr.includes(x)
}
// console.log(check([66, 101], 66))
// console.log(check([101, 45, 75, 105, 99, 107], 107))
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'))

/*
[7 kyu]
Description:
Instructions
Write a function that takes a single non-empty string of only lowercase and 
uppercase ascii letters (word) as its argument, and returns an ordered list 
containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/
// function findCapitals(string){
//   return string.split('').map((letter, i) => {
//     if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
//       return i
//     }
//   }).filter(number => number >= 0)
// }

// REFACTORED
function findCapitals(string){
  return string.split('').reduce((arr, val, i) => {
    if(val === val.toUpperCase()){
      arr.push(i)
    }
    return arr
  }, [])
}
console.log(findCapitals("CodEWaRs"))

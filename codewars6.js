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


console.log(queueTime([5,3,4], 1)) //12
console.log(queueTime([10,2,3,3], 2)) // 10
console.log(queueTime([2,3,10], 2)) // 12
console.log(queueTime([2,2,3,3,4,4], 2)) // 9
console.log(queueTime([1,2,3,4,5], 100)) // 
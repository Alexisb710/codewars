/*
Description:
Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only 
contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
const order = str => {
  if(str == '') return '';
  let arr = str.split(' ')
  return arr.sort((a, b) => {
    const numA = a.match(/\d/); // gets the digit in 'a'
    const numB = b.match(/\d/); // gets the digit in 'b'
    return numA - numB;         // sort based on that number
  }).join(' ')
}
// console.log(order("is2 Thi1s T4est 3a"))
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))

/*
[8 kyu]
Description:
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest 
element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if 
there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16 // because you exclude 1 and 10
{ 1, 1, 11, 2, 3 } => 6 // because you exclude 1 and 11
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or 
the given array is an empty list or a list with only 1 element, return 0.
*/
const sumExc = arr => {
  if(arr == '' || arr == null) return 0
  return arr.sort((a,b) => a - b).filter((e, i, arr) => {
    if(i == 0){
      return false
    } else if(i == arr.length-1) {
      return false
    } else {
      return true
    }
  }).reduce((acc, val) => acc + val, 0)
}

// let val = []
console.log(sumExc([6, 2, 1, 8, 10]))
console.log(sumExc([1, 1, 11, 2, 3]))
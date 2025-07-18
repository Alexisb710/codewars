/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the 
two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member 
is the number of times it appears). "Same" means, here, that the elements in b are the elements 
in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/

// console.log(121/11)
// can check whether there is a number in B that is equal to that number in A divided A
// B / A = A ?
// console.log(20736/144 === 144)

// function comp(array1,array2){
//   if(!array1 || !array2){
//     return false
//   }
//   if(array1.length !== array2.length){
//     return false
//   }
//   let tempA = array1.sort((x,y) => x-y)
//   let tempB = array2.sort((x,y) => x-y)
//   console.log(tempA)
//   console.log(tempB)
//   return tempA.every((val, index) => {
//     if(val === 0 && tempB[index] === 0) return true
//     return val === (tempB[index] / val)
//   })
// }
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b) // Sort method sorts in place
  array2.sort((a, b) => a - b)
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

// const a = [121, 144, 19, 161, 19, 144, 19, 11,0]  
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361,0]
// const a = [121, 144, 19, 161, 19, 144, 19, 11]  
// const b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// const a = null  
// const b = []
const a = [6, 1, 6, 0, 0, 7, 5, 4, 3, 1, 8, 1, 5, 0] 
const b = [25, 16, 36, 9, 1, 1, 36, 0, 49, 0, 25, 1, 1, 64]
console.log(comp(a,b))
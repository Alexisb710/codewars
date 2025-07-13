/*
You are given the length and width of a 4-sided polygon. The polygon can either
be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its 
length and width are equal, otherwise it is a rectangle.
*/

// const areaOrPerimeter = function(l , w) {
//   // Return your answer
//   return l == w ? l*w : 2*(l+w)
// };


/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// const solution = str => str.split('').reverse().join('')

/*
Complete the function that accepts a string parameter, and reverses each 
word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
const reverseWords = str => {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log(reverseWords("This is an example!"))
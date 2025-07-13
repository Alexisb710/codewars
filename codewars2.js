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
// const reverseWords = str => {
//   return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
// }

// console.log(reverseWords("This is an example!"))


/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in 
the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/
const alphabetPosition = text => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let positions = []
  let temp = text.toLowerCase().split('')
  temp.forEach(letter => {
    const index = alphabet.indexOf(letter);
    if(index === -1){
      return
    } else {
      positions.push(index + 1)
    }
  })
  return positions.join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

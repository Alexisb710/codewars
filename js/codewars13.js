/*
[8 kyu]
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads 
the same backwards as forwards, such as madam or racecar.
*/
const isPalindrome = str => {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}

// console.log(isPalindrome("Abba"))

/*
[8 kyu]
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/
const stringToArray = string => {
  return string.split(' ')
}
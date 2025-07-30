/*
[6 kyu]
Description:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in 
Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
*/

const expandedForm = (num) => {
  let temp = num.toString().split("");
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "0") {
      temp[i] = null;
    } else {
      temp[i] += "0".repeat(temp.length - i - 1);
    }
  }
  // Remove nulls with filter method
  return temp.filter(Boolean).join(" + ");
};

// REFACTORED:
// function expandedForm(num) {
//   return num
//     .toString()
//     .split('')
//     .map((digit, index, arr) => {
//       // Multiply digit by its place value (power of 10)
//       const zeros = arr.length - index - 1;
//       return digit === '0' ? null : digit + '0'.repeat(zeros);
//     })
//     .filter(Boolean)
//     .join(' + ');
// }

console.log(expandedForm(45));

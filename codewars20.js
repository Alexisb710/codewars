/*
[6 kyu]
Description:
The main idea is to count all the occurring characters in a string. If you have a 
string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
const count = (str) => {
  if (str == "") return {};
  let temp = str.split("");
  let obj = {};
  for (let letter of temp) {
    obj[letter] = (obj[letter] || 0) + 1;
  }
  return obj;
};

console.log(count("aba"));

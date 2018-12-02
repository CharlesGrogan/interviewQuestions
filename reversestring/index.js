// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

// function reverse(str) {
// let revStr = "";
//   for (let i = 0; i < str.length; i++) {
//     revStr = str[i] + revStr;
//   }
//   return revStr;
// }

// function reverse(str) {
// let reversed = "";
// now way to write a for loop - this is ES6 syntax get hip
//   for (let character of str) {
// reversed = character + reversed;
//   }
//   return reversed;
// }
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }
                                              
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("");

  return str === reversed;
}

module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str
//     .split("")
//     .reverse()
//     .join("");
//   if (reversed == str) {
//     return true;
//   }
//   false;
// }

// function palindrome(str) {
//     const reversed = str
//       .split("")
//       .reverse()
//       .join("");

//     return str === reversed;
//   }

// This is not the ideal solution but makes use of array helpers - show you know what your talking about/give you smemthing to talk about
// function palindrome(str) {
//     return str.split("").every((char, i) => {
//       return char === str[str.length - i - 1];
//     });
//   }

// Reverse a string multiple methods

// Most basic route
function reverseBasic(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
console.log(reverseBasic("basic"));

// For loop method
function reverse(str) {
  let revStr = "";
  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }
  return revStr;
}
console.log(reverse("reverse that string!"));

// ES6 method

function revStr(str) {
  let newStr = "";
  str.split("").forEach(char => (newStr = char + newStr));
  return newStr;
}
console.log(revStr("happy"));

// Impressive way
function fancyRevStr(str) {
  return str.split("").reduce(function(revString, char) {
    return char + revString;
  }, "");
}
console.log(fancyRevStr("hello"));

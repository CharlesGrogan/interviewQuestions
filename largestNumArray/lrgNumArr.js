function largestOfFour(arr) {
  let results = [];
  for (let n = 0; n < arr.length; n++) {
    let largestNum = arr[n][0];
    for (let sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNum) {
        largestNum = arr[n][sb];
      }
    }
    results[n] = largestNum;
  }
  console.log(results);
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

function confirmEnding(str, target) {
  let NewStr = str.substring(str.length - 1);
  if (NewStr === target) {
    return true;
  }
}

console.log(confirmEnding("Bastian", "n"));

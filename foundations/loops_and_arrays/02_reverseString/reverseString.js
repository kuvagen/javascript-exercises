const reverseString = function (str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
};

console.log(reverseString("Привет"));

// Do not edit below this line
module.exports = reverseString;

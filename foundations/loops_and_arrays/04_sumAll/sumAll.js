const sumAll = function (start, end) {
  if (
    !(Number.isInteger(start) && start > 0) ||
    !(Number.isInteger(end) && end > 0)
  ) {
    return "ERROR";
  }

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  let totalSum = 0;
  for (let i = start; i <= end; i++) {
    totalSum+=i;
  }
  return totalSum;
};


// Do not edit below this line
module.exports = sumAll;

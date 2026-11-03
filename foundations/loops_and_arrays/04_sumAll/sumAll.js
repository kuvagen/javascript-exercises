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
  count = start;
  while (start <= end) {
    totalSum += start;
    start += 1;
  }
  return totalSum;
};


// Do not edit below this line
module.exports = sumAll;

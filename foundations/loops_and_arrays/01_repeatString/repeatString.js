const repeatString = function(str, count) {
    let repeatedString = ""
    if (count < 0) { return "ERROR"}
    while (count > 0) {
        repeatedString += str;
        count--;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

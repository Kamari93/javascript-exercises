const reverseString = function (string) {
    let reverse = ""
    if (string.length === 0) {
        return reverse;
    } else if (string.length >= 0) {
        for (i = string.length - 1; i >= 0; i--) {
            reverse += string[i];
        }
        return reverse;
    }
};

// Do not edit below this line
module.exports = reverseString;

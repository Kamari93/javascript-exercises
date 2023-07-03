const repeatString = function (string, num) {
    let stringRepeat = '';

    if (num < 0) {
        return 'ERROR';
    } else if (num === 0) {
        return stringRepeat;
    } else {
        for (let i = 1; i <= num; i++) {
            stringRepeat += string;
        }
        return stringRepeat;
    }
};

// Do not edit below this line
module.exports = repeatString;


// first solution
const leapYears = function (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Second solution
// exclude multipes of 100
// const leapYears = function (year) {
//     return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
// }

// Do not edit below this line
module.exports = leapYears;

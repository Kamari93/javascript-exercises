const sumAll = function (min, max) {

    if (typeof (min) !== "number" || typeof (max) !== "number") {
        return "ERROR";
    } else if (min < 0 || max < 0) {
        return "ERROR";
    } else {
        // if the larger value is inputted first switch the vals
        if (min > max) {
            [min, max] = [max, min];
        };
        // create a var that takes in all vals
        let total = 0;
        // loop through a range starting from min and ending at max 
        for (let i = min; i < max + 1; i++) {
            total += i;
        };
        return total;
    }

};

// Do not edit below this line
module.exports = sumAll;

const palindromes = function (str) {
    // remove all unwanted chars, spaces, etc lowercase convert to arr split by space
    let arr = str.toString().replace(/[^A-Za-z0-9_]/g, "").toLowerCase().split('');
    // convert back to str after clean-up
    let newStr = arr.join("");
    // create backwards str (from end to beginning)
    let reverse = arr.reverse().join("");

    // compare the forward and backwards str's
    return newStr === reverse;

    // // pointer for end of str
    // let j = str.length - 1;
    // for (let i = 0; i < j / 2; i++) {
    //     let a = str[i];
    //     let b = str[j - i];
    //     if (a !== b) {
    //         return false;
    //     }
    // }
    // return true;
};

// Do not edit below this line
module.exports = palindromes;

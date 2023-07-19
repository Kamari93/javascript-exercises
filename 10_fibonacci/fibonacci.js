const fibonacci = function (n) {
    // 1, 1, 2, 3, 5, 8, etc.
    // Fn = Fn-1 + Fn-2
    // the first 2 indexes of fib are always 1
    if (n < 0) { return 'OOPS' };
    if (typeof n === "string") { parseInt(n) };
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        // shift to the right for next calculation..remeber ab -> c, ab -> c
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

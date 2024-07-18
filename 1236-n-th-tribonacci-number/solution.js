/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n < 3) {
        if (n == 0) return 0
        return 1
    }
    let a = 0, b = 1, c = 1
    for (let i = 0; i < n-2; i++) {
        const sum = a + b + c
        a = b
        b = c
        c = sum
    }
    return c
};

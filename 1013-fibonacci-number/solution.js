/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const goldenRatio = (1+Math.sqrt(5))/2
    return Math.round(Math.pow(goldenRatio, n)/Math.sqrt(5))
};

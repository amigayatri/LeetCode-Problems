/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let ans = 1
    for (let f = 2; f <= Math.min(a, b); f++) {
        if (a%f == 0 && b%f == 0) {
            ans++
        }
    }
    return ans
};

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    out = 0
    while (n > 0) {
        out += n&1
        n = n >>1
    }
    return out
};

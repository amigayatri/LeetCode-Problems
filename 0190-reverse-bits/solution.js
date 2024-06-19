/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let out = 0, power = 32
    while (power--) {
        out <<= 1
        out += n&1
        n >>>= 1
    }
    return out >>> 0
};

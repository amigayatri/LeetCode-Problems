/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        const carry = a & b
        a ^= b
        b = carry << 1
    }
    return a
};

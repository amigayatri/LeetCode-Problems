/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if (!(low&1)) {
        low++
        if (low > high) return 0
    }
    return ((high-low)>>1)+1
};

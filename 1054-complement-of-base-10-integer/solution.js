/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    if (n == 0) return 1
    let bitmask = n
    bitmask |= (bitmask >> 1)
    bitmask |= (bitmask >> 2)
    bitmask |= (bitmask >> 4)
    bitmask |= (bitmask >> 8)
    bitmask |= (bitmask >> 16)
    return bitmask ^ n
};

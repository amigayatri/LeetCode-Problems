/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1]-b[1])
    let currEnd = Number.MIN_SAFE_INTEGER
    let ans = 0
    for (let [start, end] of pairs) {
        if (start > currEnd) {
            ans++
            currEnd = end
        }
    }
    return ans
};

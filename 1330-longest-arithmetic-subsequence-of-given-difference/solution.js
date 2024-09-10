/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let dp = new Map(), answer = 1
    for (const el of arr) {
        const sz = dp.has(el-difference) ? 1 + dp.get(el-difference) : 1
        dp.set(el, sz)
        answer = Math.max(answer, sz)
    }
    return answer
};

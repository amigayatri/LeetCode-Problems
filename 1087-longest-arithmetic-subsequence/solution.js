/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length    
    let dp = Array.from({length: n}, () => new Map())
    let maxLength = 0
    for (let right = 0; right < n; right++) {
        dp[right] = new Map()
        for (let left = 0; left < right; left++) {
            const diff = nums[left] - nums[right]
            const prevSz = dp[left].has(diff) ? dp[left].get(diff) : 1
            const sz = prevSz+1
            dp[right].set(diff, sz)
            if (sz > maxLength) maxLength = sz
        }
    }
    return maxLength
};

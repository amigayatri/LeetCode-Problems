/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target+1).fill(0)
    dp[0] = 1
    for (let combSum = 1; combSum <= target; combSum++) {
        for (const num of nums) {
            if (combSum-num >= 0) {
                dp[combSum] += dp[combSum-num]
            }
        }
    }
    return dp[target]
};

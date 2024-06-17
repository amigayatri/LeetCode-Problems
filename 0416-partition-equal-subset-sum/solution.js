/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let totalSum = 0
    for (let number of nums) {
        totalSum += number
    }
    if(totalSum%2 != 0) return false
    let subSetSum = totalSum >> 1
    const n = nums.length
    let memo = new Array(n+1)
    for (let i = 0; i < n+1; i++) {
        memo[i] = new Array(subSetSum+1).fill(null)
    }
    const dfs = (nums, n, subSetSum, memo) => {
        if (subSetSum == 0) return true
        if (n == 0 || subSetSum < 0) return false
        if (memo[n][subSetSum] != null) return memo[n][subSetSum]
        let result = dfs(nums, n-1, subSetSum-nums[n-1], memo) || dfs(nums, n-1, subSetSum, memo)
        memo[n][subSetSum] = result
        return result
    }
    return dfs(nums, n-1, subSetSum, memo)
};

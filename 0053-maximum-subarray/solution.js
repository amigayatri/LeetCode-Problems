/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayBruteForce = function(nums) {
    const n = nums.length
    let maxSum = -Infinity
    for (let start = 0; start < n; start++) {
        let currentSubarray = 0
        for (let i = start; i < n; i++) {
            currentSubarray+=nums[i]
            maxSum = Math.max(maxSum, currentSubarray)
        }
    }
    return maxSum
};
var maxSubArray = function(nums) {
    const n = nums.length
    let maxSum = currentSum = nums[0]
    for (let i = 1; i < n; i++) {
        const num = nums[i]
        currentSum = Math.max(num, currentSum+num)
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
};

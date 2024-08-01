/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let curMax = curMin = 0
    let maxSum = minSum = nums[0]
    let totalSum = 0
    for (let num of nums) {
        curMax = Math.max(curMax, 0) + num
        maxSum = Math.max(maxSum, curMax)
        curMin = Math.min(curMin, 0) + num
        minSum = Math.min(minSum, curMin)
        totalSum += num
    }
    if (totalSum == minSum) return maxSum
    return Math.max(maxSum, totalSum-minSum)
};

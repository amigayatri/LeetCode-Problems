/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    const n = nums.length
    let averageSum = 0
    for (let i = 0; i < k; i++) {
        averageSum += nums[i]
    }
    let maxAverage = averageSum

    for (let i = k; i < n; i++) {
        averageSum += nums[i] - nums[i - k]
        if (averageSum > maxAverage) {
            maxAverage = averageSum
        }
    }
    return maxAverage / k
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => a-b)
    let left = 0, right = nums.length-1, answer = -1
    while (left < right) {
        if (nums[left] + nums[right] < k) {
            if (nums[left] + nums[right] > answer) answer = nums[left] + nums[right]
            left++
        } else {
            right--
        }
    }
    return answer
};

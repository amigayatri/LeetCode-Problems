/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums, i = 0, count = 0, max = 0) {
    if (i === nums.length) {
        if (count > max) max = count
        return max
    }
    if (nums[i] === 1) count++
    else {
        if (count > max) max = count
        count = 0
    }
    return findMaxConsecutiveOnes(nums, i+1, count, max)
};

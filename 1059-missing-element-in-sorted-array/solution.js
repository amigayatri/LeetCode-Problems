/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    let left = 0, right = nums.length-1
    while (left < right) {
        const mid = right- Math.floor((right-left)/2)
        if (nums[mid]-mid-nums[0] < k) {
            left = mid
        } else {
            right = mid-1
        }
    }
    return nums[0]+left+k
};

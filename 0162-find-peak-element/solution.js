/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const n = nums.length
    let left = 0, right = n-1
    while (left < right) {
        const mid = left+((right-left)>>1)
        if (nums[mid] > nums[mid+1]) right = mid
        else left = mid+1
    }
    return left
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length-1
    while (l <= r) {
        const p = (l+r)>>1
        if (nums[p] == target) return p
        else if (nums[p] < target) l = p + 1
        else r = p-1
    }
    return l
};

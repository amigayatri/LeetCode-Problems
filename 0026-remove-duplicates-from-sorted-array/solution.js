/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length
    let insertIndex = 1
    for (let i = 1; i < n; i++) {
        if (nums[i-1] != nums[i]) {
            nums[insertIndex] = nums[i]
            insertIndex++
        }
    }
    return insertIndex
};

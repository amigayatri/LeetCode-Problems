/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length
    let insertIndex = 1, count = 1
    for (let i = 1; i < n; i++) {
        if (nums[i-1] != nums[i]) {
            nums[insertIndex] = nums[i]
            insertIndex++
            count = 1
        } else if (count < 2) {
            nums[insertIndex] = nums[i]
            insertIndex++
            count++
        }
    }
    for (let i = insertIndex; i < n; i++) {
        nums.pop()
    }
    return insertIndex
};

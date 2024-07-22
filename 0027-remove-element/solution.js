/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let n = nums.length
    let i = 0
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n-1]
            n--
        } else {
            i++
        }
    }

    return n
};

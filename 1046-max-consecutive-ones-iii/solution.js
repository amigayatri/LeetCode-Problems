/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    const n = nums.length
    let left, right
    for (left = right = 0; right < n; right++) {
        const num = nums[right]
        if (num == 0) {
            k--
        }
        if (k < 0) {
            k += 1 - nums[left]
            left++
        }
    }
    return right - left
};

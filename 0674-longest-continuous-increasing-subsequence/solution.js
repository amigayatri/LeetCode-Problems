/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    const n = nums.length
    let longest = 1, size = 1
    for (let i = n-2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            size++
            if (size > longest) longest = size
        } else {
            size = 1
        }
    }
    return longest
};

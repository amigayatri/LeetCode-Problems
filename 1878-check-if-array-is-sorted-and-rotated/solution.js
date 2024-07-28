/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const n = nums.length
    let count = 0
    for(let i = 1; i < n; i++) {
        if (nums[i-1] > nums[i]) count++
    }
    if (nums[n-1] > nums[0]) count++
    return count <= 1
};
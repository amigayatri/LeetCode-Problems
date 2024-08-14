/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const n = nums.length
    if (n == 1) return true
    let increasing = false, decreasing = false
    for (let i = 0; i < n-1; i++) {
        if (nums[i] < nums[i+1]) {
            if (decreasing) return false
            increasing = true
        }
        if (nums[i] > nums[i+1]) { 
            if (increasing) return false
            decreasing = true
        }
    }
    return !increasing || !decreasing
};

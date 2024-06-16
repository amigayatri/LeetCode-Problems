/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 1) return nums[0]
    const n = nums.length
    let robNext = nums[n-1], robNextPlusOne = 0, current
    for (let i = n-2; i >= 0; i--) {
        current = Math.max(robNext, robNextPlusOne+nums[i])
        robNextPlusOne = robNext
        robNext = current
    }
    return robNext
};

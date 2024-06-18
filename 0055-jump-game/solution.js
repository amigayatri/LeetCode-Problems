/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length
    let lastPos = n -1
    for (let i = n - 1; i >= 0; i--) {
        if (i + nums[i] >= lastPos) lastPos = i
    }
    return lastPos == 0
};

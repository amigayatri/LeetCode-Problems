/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b)=>b-a)
    const n = nums.length
    for (let i = 0; i < n-2; i++) {
        if (nums[i] < nums[i+1]+nums[i+2]) {
            return nums[i]+nums[i+1]+nums[i+2]
        }
    }
    return 0
};

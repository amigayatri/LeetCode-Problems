/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length
    let missing = n
    for (let i = 0; i < n; i++) {
        missing ^= i ^ nums[i]
    }
    return missing
};

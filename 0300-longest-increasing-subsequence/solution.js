/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length
    let length = new Array(n).fill(1)
    let maxLength = 1
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                length[i] = Math.max(length[i], length[j]+1)
                maxLength = Math.max(maxLength, length[i])
            } 
        }
    }
    return maxLength
};

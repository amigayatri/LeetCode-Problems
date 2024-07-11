/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let iNZ = 0
    const n = nums.length
    for (let i = 0; i < n; i++){
        if (nums[i] != 0) {
            const aux = nums[iNZ]
            nums[iNZ++] = nums[i]
            nums[i] = aux
        } 
    }
};

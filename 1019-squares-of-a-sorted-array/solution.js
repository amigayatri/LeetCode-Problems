/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let leftPtr = 0, rightPtr = nums.length-1
    let res = new Array(nums.length)
    while (leftPtr <= rightPtr) {
        if (Math.abs(nums[leftPtr]) >= Math.abs(nums[rightPtr])) {
            res[rightPtr-leftPtr] = Math.abs(nums[leftPtr])*Math.abs(nums[leftPtr++])
        } else {
            res[rightPtr-leftPtr] = Math.abs(nums[rightPtr])*Math.abs(nums[rightPtr--])
        }
    }
    return res
};

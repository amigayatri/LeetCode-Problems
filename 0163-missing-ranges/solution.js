/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const n = nums.length
    let start = lower
    let res = []
    for (let num of nums) {
        if (num > start) {
            res.push([start, num-1])
        }
        start = num+1
    }
    if (start <= upper) {
        res.push([start, upper])
    }
    return res
};

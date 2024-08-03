/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let currMax = 0, lastZero = -1
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currMax++
        } else {
            if (lastZero > -1) {
                if (result < currMax) result = currMax
                currMax = i - (lastZero + 1)
            }
            lastZero = i
        }
    }
    if (lastZero < 0) currMax--
    if (result < currMax) result = currMax
    return result
};

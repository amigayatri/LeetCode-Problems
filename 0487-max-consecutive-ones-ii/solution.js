/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let prev = -1, curr = 0, max = 0
    for (let num of nums) {
        if (num == 0) {
            prev = curr
            curr = 0
        } else {
            curr++
        }
        max = Math.max(max, prev+curr+1)
    }
    return max
};

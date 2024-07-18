/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    const n = nums.length
    let sumLeft = new Array(n), sumRight = new Array(n)
    sumLeft[0] = 0
    sumRight[n - 1] = 0
    for (let i = 1; i < n; i++) {
        sumLeft[i] = sumLeft[i - 1] + nums[i - 1]
    }
    for (let i = n - 2; i >= 0; i--) {
        sumRight[i] = sumRight[i + 1] + nums[i + 1]
    }
    for (let i = 0; i < n; i++) {
        if (sumLeft[i] === sumRight[i]) return i
    }
    return -1
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let minVal = Number.MAX_VALUE, maxVal = Number.MIN_VALUE
    for (const num of nums) {
        if (num > maxVal) maxVal = num
        if (num < minVal) minVal = num
    }
    const check = (mid) => {
        let sum = 0, prev = 0, minSum = 0
        for (let i = 0; i < k; i++) {
            sum+=nums[i]-mid
        }
        if (sum >= 0) return true
        for (let i = k; i < nums.length; i++) {
            sum+=nums[i]-mid
            prev+=nums[i-k]-mid
            minSum = Math.min(prev, minSum)
            if (sum >= minSum) return true
        }
        return false
    }
    let prevMid = maxVal, error = Number.MAX_VALUE
    while (error > 0.00001) {
        const mid = (maxVal+minVal)*0.5
        if (check(mid)) {
            minVal = mid
        } else {
            maxVal = mid
        }
        error = Math.abs(prevMid-mid)
        prevMid = mid
    }
    return minVal
};

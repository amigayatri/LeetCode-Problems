/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const n = nums.length
    const hasSAOfLengthWithSumLarger = (length) => {
        let currSum = 0
        for (let i = 0; i < length; i++) {
            currSum += nums[i]
            if (currSum >= target) {
                return true
            }
        }
        for (let i = length; i < n; i++) {
            currSum += nums[i]
            const toRemove = i - length
            currSum -= nums[toRemove]     
            if (currSum >= target) {
                return true
            }
        }
        return false
    }
    let lo = 1, hi = n
    while (lo < hi) {
        const mid = (hi + lo) >> 1
        if (hasSAOfLengthWithSumLarger(mid)) hi = mid
        else lo = mid + 1
    }
    if (hasSAOfLengthWithSumLarger(lo)) {
        return lo
    }
    return 0
};

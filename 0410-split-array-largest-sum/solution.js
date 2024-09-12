/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    let sum = 0, maxEl = Number.MIN_SAFE_INTEGER
    for (const num of nums) {
        sum += num
        if (num > maxEl) maxEl = num
    }
    const minSubRequired = (maxSumAllowed) => {
        let currSum = 0, splitsRequired = 0
        for (const num of nums) {
            if (currSum+num <= maxSumAllowed) {
                currSum += num
            } else {
                currSum = num
                splitsRequired++
            }
        }
        return splitsRequired+1
    }
    let left = maxEl, right = sum, minLargestSplitSum = 0
    while (left <= right) {
        const maxSumAllowed = (left+right)>>1
        if (minSubRequired(maxSumAllowed) <= k) {
            right = maxSumAllowed-1
            minLargestSplitSum = maxSumAllowed
        } else {
            left = maxSumAllowed+1
        }
    }
    return minLargestSplitSum
};

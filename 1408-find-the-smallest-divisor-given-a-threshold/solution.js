/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    const getDivisionSum = (divisor) => {
        let sum = 0
        for (const num of nums) {
            sum += Math.ceil(num/divisor)
        }
        return sum
    }
    let ans = -1
    let left = 1, right = Math.max(...nums)
    while (left <= right) {
        const mid = (left+right)>>1
        const midSum = getDivisionSum(mid)
        if (midSum <= threshold) {
            ans = mid
            right = mid-1
        } else {
            left = mid+1
        }
    }
    return ans
};

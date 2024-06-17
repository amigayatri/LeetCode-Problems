/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n = nums.length
    if (n == 0) return 0
    let max = min = result = nums[0]
    for (let i = 1; i < n; i++) {
        const num = nums[i]
        let temp_max = Math.max(num, num*max, num*min)
        min = Math.min(num, max*num, min*num)
        max = temp_max
        result = Math.max(max, result)
    }
    return result
};

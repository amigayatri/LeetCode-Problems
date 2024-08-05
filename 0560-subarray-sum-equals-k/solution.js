/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const n = nums.length
    let map = new Map()
    map.set(0, 1)
    let count = 0, sum = 0
    for (let i = 0; i < n; i++) {
        sum += nums[i]
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        const preCount = map.has(sum) ? map.get(sum) : 0
        map.set(sum, preCount + 1)
    }
    return count
};

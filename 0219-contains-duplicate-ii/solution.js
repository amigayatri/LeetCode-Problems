/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const n = nums.length
    let hash = new Set()
    for (let i = 0; i < n; i++) {
        if (hash.has(nums[i])) return true
        hash.add(nums[i])
        if (i >= k) hash.delete(nums[i-k])
    }
    return false
};

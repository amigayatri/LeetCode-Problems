/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            return [hashMap.get(nums[i]), i]
        } else {
            hashMap.set(target-nums[i], i)
        }
    }
    return []
};

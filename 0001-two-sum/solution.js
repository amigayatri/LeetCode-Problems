/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            return [hashMap[nums[i]], i]
        } else {
            hashMap[target-nums[i]] = i
        }
    }
    console.log(hashMap)
    return []
};

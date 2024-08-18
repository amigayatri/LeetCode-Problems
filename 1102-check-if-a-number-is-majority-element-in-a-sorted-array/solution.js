/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
    const n = nums.length
    const findStart = () => {
        let left = 0, right = n-1
        while (left <= right) {
            const mid = (left+right) >> 1
            if (nums[mid] >= target) {
                right = mid-1
            } else {
                left = mid+1
            }
        }
        return left
    }
    let start = findStart()
    const half = n >> 1
    return (start+half < n) && nums[start+half] == target
};

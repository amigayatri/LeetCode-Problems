/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var search = function (nums, target) {
    const n = nums.length
    if (n == 0) return false
    let left = 0, right = n - 1
    while (left <= right && nums[left] == nums[right]) {
        if (nums[left] == target) return true
        left++
        right--
    }
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] == target) return true
        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target <= nums[right] && target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return false
};

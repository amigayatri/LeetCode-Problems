/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const n = nums.length
    let left = 0, right = n-1
    if (nums[left] < nums[right]) return nums[left]
    while (left <= right) {
        const mid = left + ((right-left)>>1)
        const prev = mid-1, next = mid+1
        if (next < n && nums[mid] > nums[next]) return nums[next]
        if (mid >= 0 && nums[mid] < nums[prev]) return nums[mid]
        if (nums[mid] > nums[right]) left = next
        else if (nums[mid] < nums[left]) right = prev
        else right--
    }
    return nums[left]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    const n = nums.length
    let left = 0, right = n - 1
    while (left < right) {
        let mid = (right + left) >> 1
        if ((mid & 1) == 1) mid--
        if (nums[mid] == nums[mid + 1]) {
            left = mid + 2
        } else {
            right = mid
        }
    }
    return nums[left]
};

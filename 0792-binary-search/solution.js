/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0, end = nums.length-1
    while (start <= end) {
        if (nums[start] > target || nums[end] < target) {
            return -1
        } else if (nums[start] == target) {
            return start
        } else if (nums[end] == target) {
            return end
        } else {
            let middle = (end + start) >> 1
            if (nums[middle] == target) {
                return middle
            } else if (nums[middle] < target) {
                start = middle + 1
                end--
            } else {
                end = middle -1
                start++
            }
        }
    }
    return -1
};

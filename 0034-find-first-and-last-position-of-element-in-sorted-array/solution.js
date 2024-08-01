/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const N = nums.length
    const findFirst = () => {
        const N = nums.length
        let begin = 0, end = N - 1
        while (begin <= end) {
            const mid = (begin + end) >> 1
            if (nums[mid] == target) {
                if (mid == begin || nums[mid - 1] != target) {
                    return mid
                }
                end = mid - 1
            } else if (nums[mid] > target) {
                end = mid - 1
            } else {
                begin = mid + 1
            }
        }
        return -1
    }
    const findLast = (first) => {
        let begin = first, end = N - 1
        while (begin <= end) {
            const mid = (begin + end) >> 1
            if (nums[mid] == target) {
                if (mid == end || nums[mid + 1] != target) {
                    return mid
                }
                begin = mid + 1
            } else if (nums[mid] > target) {
                end = mid - 1
            } else {
                begin = mid + 1
            }
        }
        return -1
    }
    const first = findFirst()
    if (first == -1) return [-1, -1]
    const last = findLast(first)
    return [first, last]
};

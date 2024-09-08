/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length
    const length = Array(n).fill(1), count = Array(n).fill(1)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (length[j]+1 > length[i]) {
                    length[i] = length[j]+1
                    count[i] = 0
                }
                if (length[j] + 1 == length[i]) {
                    count[i] += count[j]
                }
            }
        }
    }
    const maxLength = Math.max(...length)
    let res = 0
    for (let i = 0; i < n; i++) {
        if (length[i] == maxLength) {
            res += count[i]
        }
    }
    return res
};

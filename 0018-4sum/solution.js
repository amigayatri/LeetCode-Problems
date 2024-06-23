/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
    const n = nums.length
    function twoSum(start, target) {
        let res = []
        let s = new Set()
        for (let i = start; i < n; i++) {
            if (res.length === 0 || res[res.length - 1][1] != nums[i]) {
                const complement = target - nums[i]
                if (s.has(complement)) {
                    res.push([complement, nums[i]])
                }
            }
            s.add(nums[i])
        }
        return res
    };
    function kSum(start, target, k) {
        let res = []
        if (start === n) return res
        let averageValue = Math.floor(target / k)
        if (nums[start] > averageValue || averageValue > nums[n - 1]) return res
        if (k == 2) return twoSum(start, target)
        for (let i = start; i < n; i++) {
            if (i === start || nums[i - 1] !== nums[i]) {
                kSum(i + 1, target - nums[i], k - 1).forEach((set) => {
                    res.push([nums[i]].concat(set))
                })
            }
        }
        return res
    }
    nums.sort((a, b) => a - b)
    return kSum(0, target, 4)
};

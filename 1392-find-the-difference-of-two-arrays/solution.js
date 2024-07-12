/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let nums1Set = new Set(nums1)
    let nums2Set = new Set(nums2)
    const findDiff = (arr, set) => {
        let diff = new Set()
        for (let num of arr) {
            if (!set.has(num)) diff.add(num)
        }
        return Array.from(diff)
    }
    return [findDiff(nums1, nums2Set), findDiff(nums2, nums1Set)]
};

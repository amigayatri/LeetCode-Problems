/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    const n = nums1.length
    const res = []
    let valMapping = new Map()
    for (let i = 0; i < n; i++) {
        valMapping.set(nums2[i], i)
    }
    for (let i = 0; i < n; i++) {
        res.push(valMapping.get(nums1[i]))
    }
    return res
};

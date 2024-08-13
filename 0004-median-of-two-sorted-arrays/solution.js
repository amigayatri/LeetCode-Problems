/**
 * @param {numsber[]} numss1
 * @param {numsber[]} numss2
 * @return {numsber}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    const m = nums1.length, n = nums2.length
    let left = 0, right = m
    while (left <= right) {
        const partA = (left + right) >> 1
        const partB = ((m + n + 1) >> 1) - partA
        let maxLeftA = (partA === 0) ? Number.MIN_SAFE_INTEGER : nums1[partA - 1]
        const minRightA = (partA === m) ? Number.MAX_SAFE_INTEGER : nums1[partA]
        const maxLeftB = (partB === 0) ? Number.MIN_SAFE_INTEGER : nums2[partB - 1]
        const minRightB = (partB === n) ? Number.MAX_SAFE_INTEGER : nums2[partB]
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            const max = Math.max(maxLeftA, maxLeftB)
            if (((m + n) & 1) === 0) {
                const min = Math.min(minRightA, minRightB)
                return (max + min) / 2
            } else {
                return max
            }
        } else if (maxLeftA > minRightB) {
            right = partA-1
        } else {
            left = partA+1
        }
    }
};

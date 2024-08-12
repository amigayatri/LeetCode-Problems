/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

var kSmallestPairs = function (nums1, nums2, k) {
    const m = nums1.length, n = nums2.length
    let ans = [], visited = new Set()
    const generatePair = (i, j) => {
        return {sum: nums1[i] + nums2[j], i, j}
    }
    const pqOptions = {
        compare: (a, b) => a.sum - b.sum
    }
    let minSum = new PriorityQueue(pqOptions)
    minSum.enqueue(generatePair(0, 0))
    visited.add('0-0')
    while (k > 0 && !minSum.isEmpty()) {
        const {i, j} = minSum.dequeue()
        ans.push([nums1[i], nums2[j]])
        if (i+1 < m && !visited.has(`${i+1}-${j}`)) {
            minSum.enqueue(generatePair(i+1, j))
            visited.add(`${i+1}-${j}`)
        }
        if (j+1 < n && !visited.has(`${i}-${j+1}`)) {
            minSum.enqueue(generatePair(i, j+1))
            visited.add(`${i}-${j+1}`)
        }
        k--
    }
    return ans
};

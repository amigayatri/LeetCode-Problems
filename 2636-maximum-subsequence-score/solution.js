/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const indices = Array.from({length: nums1.length}, (_, i) => i);
    indices.sort((i, j) => nums2[j] - nums2[i]);
    let sum = 0, pq = new PriorityQueue({compare: (a, b) => a - b});
    for (let i = 0; i < k; i++) {
        sum += nums1[indices[i]];
        pq.enqueue(nums1[indices[i]]);
    }
    let res = sum * nums2[indices[k - 1]];
    for (let i = k; i < nums1.length; i++) {
        sum += nums1[indices[i]];
        sum -= pq.dequeue();
        pq.enqueue(nums1[indices[i]]);
        res = Math.max(res, sum * nums2[indices[i]]);
    }
    return res;
};

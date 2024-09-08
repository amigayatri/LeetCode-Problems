/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const sortedIntervals = intervals.toSorted((a, b) => a[0]-b[0])
    const binarySearch = (target, start, end) => {
        if (start >= end) {
            if (sortedIntervals[start][0] >= target) {
                return sortedIntervals[start]
            }
            return null
        }
        const mid = (start+end)>>1
        if (sortedIntervals[mid][0] < target) {
            return binarySearch(target, mid+1, end)
        } else {
            return binarySearch(target, start, mid)
        }
    }
    const n = intervals.length, hash = new Map()
    const res = new Array(n).fill(0)
    for (let i = 0; i < n; i++) hash.set(intervals[i], i)
    for (let i = 0; i < n; i++) {
        let interval = binarySearch(sortedIntervals[i][1], 0, sortedIntervals.length-1)
        res[hash.get(sortedIntervals[i])] = interval == null ? -1 : hash.get(interval)
    }
    return res
};

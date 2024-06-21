/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const n = intervals.length
    if (n == 0) return [newInterval]
    const S = 0, E = 1
    let target = newInterval[S]
    let left = 0, right = n-1
    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        if (intervals[mid][S] < target) {
            left = mid+1
        } else {
            right = mid-1
        }
    }
    intervals.splice(left, 0, newInterval)
    let res = []
    for (let interval of intervals) {
        if (res.length === 0 || res[res.length-1][E] < interval[S]) {
            res.push(interval)
        } else {
            res[res.length-1][E] = Math.max(res[res.length-1][E], interval[E])
        }
    }
    return res
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    let removed = 0, prevEnd = -Infinity
    for (let interval of intervals) {
        if (interval[0] >= prevEnd) {
            prevEnd = interval[1]
        } else {
            removed++
        }
    }
    return removed
};

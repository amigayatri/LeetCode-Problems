var removeInterval = function(intervals, toBeRemoved) {
    const res = []
    const [removeStart, removeEnd] = toBeRemoved
    for (const [start, end] of intervals) {
        if (start > removeEnd || end < removeStart) {
            res.push([start, end])
        } else {
            if (start < removeStart) {
                res.push([start, removeStart])
            }
            if (end > removeEnd) {
                res.push([removeEnd, end])
            }
        }
    }
    return res
};

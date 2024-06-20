/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    let pq = new MinPriorityQueue()
    for (let [start, end] of intervals) {
        pq.enqueue({start, end}, start)
    }
    let prevEnd = -1
    while (!pq.isEmpty()) {
        const meeting = pq.dequeue()
        const start = meeting.element.start
        const end = meeting.element.end
        if (start < prevEnd) return false
        prevEnd = end
    }
    return true
};

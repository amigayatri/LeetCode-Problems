/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let pq = new MinPriorityQueue()
    for (let [start, end] of intervals) {
        pq.enqueue({start, end}, start)
    }
    let rooms = new MinPriorityQueue()
    while (!pq.isEmpty()) {
        const meeting = pq.dequeue().element
        const possibleRoom = rooms.front()
        if (!rooms.isEmpty() && meeting.start >= possibleRoom.priority) {
            rooms.dequeue()
        }
        rooms.enqueue(meeting.end)
    }
    return rooms.size()
};

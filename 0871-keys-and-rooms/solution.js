var canVisitAllRooms = function(rooms) {
    let visited = new Set()
    let toVisit = new Queue()
    toVisit.enqueue(0)
    while (!toVisit.isEmpty()) {
        const idx = toVisit.dequeue()
        if (visited.has(idx)) continue
        const keys = rooms[idx]
        for(const key of keys) {
            toVisit.enqueue(key)
        }
        visited.add(idx)
    }
    return visited.size == rooms.length
};

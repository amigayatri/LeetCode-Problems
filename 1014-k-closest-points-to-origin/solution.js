var kClosest = function(points, k) {
    let heap = new MaxPriorityQueue()
    const calculateDistance = (x, y) => {
        return x**2+y**2
    }
    for (let [x, y] of points) {
        const distance = calculateDistance(x, y)
        if (heap.size() < k) {
            heap.enqueue([x, y], distance)
        } else if (distance < heap.front().priority) {
            heap.dequeue()
            heap.enqueue([x, y], distance)
        }
    }
    return heap.toArray().map(el => el.element)
};

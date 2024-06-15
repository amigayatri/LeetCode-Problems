var lastStoneWeight = function (stones) {
    let heap = new MaxPriorityQueue()
    for (let stone of stones) {
        heap.enqueue(stone)
    }
    while (heap.size() > 1) {
        const max1 = heap.dequeue().element
        const max2 = heap.dequeue().element
        if (max1 !== max2) heap.enqueue(max1-max2)
    }
    if (heap.size() == 0) return 0
    return heap.front().element
};

class MinHeap {
    constructor () {
        this.heap = new PriorityQueue({compare: (a, b) => a.size-b.size})
    }

    push(val) {
        this.heap.enqueue({size: val})
    }

    pop() {
        return this.heap.dequeue()
    }

    popTwoandSum() {
        const first = this.pop()
        const second = this.pop()
        return first.size+second.size
    }

    size() {
        return this.heap.size()
    }
}

const connectSticks = function(sticks) {
    const heap = new MinHeap()
    for(let i = 0; i < sticks.length; i++) {
        heap.push(sticks[i])
    }
    let totalCost = 0
    while (heap.size() > 1) {
        const size = heap.popTwoandSum()
        totalCost += size
        heap.push(size)
    }
    return totalCost
};

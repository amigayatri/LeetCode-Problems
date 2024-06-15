class KthLargest {
    constructor(k, nums) {
        this.k = k
        this.heap = this.initializeHeap(nums)
    }

    initializeHeap(values) {
        let heap = new MinPriorityQueue()
        for (let value of values) {
            if (heap.size() < this.k) heap.enqueue(value)
            else if (value > heap.front().priority) {
                heap.dequeue()
                heap.enqueue(value)
            }
        }
        return heap
    }

    add(val) {
        if (this.heap.size() < this.k) this.heap.enqueue(val)
        else if (val > this.heap.front().priority) {
            this.heap.dequeue()
            this.heap.enqueue(val)
        }
        return this.heap.front().element
    }
};

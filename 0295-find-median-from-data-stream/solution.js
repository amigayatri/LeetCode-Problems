class MedianFinder {
    constructor () {
        this.lo = new MaxPriorityQueue()
        this.hi = new MinPriorityQueue()
    }

    addNum (num) {
        this.lo.enqueue(num, num)
        const larger = this.lo.dequeue().element
        this.hi.enqueue(larger, larger)
        if (this.hi.size() > this.lo.size()) {
            const smaller = this.hi.dequeue().element
            this.lo.enqueue(smaller, smaller)
        }
    }

    findMedian () {
        if (this.lo.size() > this.hi.size()) {
            return this.lo.front().element
        } else {
            return 0.5*(this.lo.front().element+this.hi.front().element)
        }
    }
};

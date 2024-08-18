class MovingAverage {
    constructor(size) {
        this.memory = new Queue()
        this.limit = size
        this.sum = 0
    }

    next(val) {
        if (this.memory.size() < this.limit) {
            this.sum += val
            this.memory.push(val)
        } else {
            this.sum += val
            const oldFirst = this.memory.pop()
            this.memory.push(val)
            this.sum -= oldFirst
        }
        return this.sum/this.memory.size()
    }
}

class MyCircularQueue {
    constructor(k) {
        this.memory = new Array(k).fill(null)
        this.firstEl = 0
        this.count = 0
        this.capacity = k
    }

    enQueue(value) {
        if (this.isFull()) return false
        const tail = (this.firstEl + this.count) % this.capacity
        this.memory[tail] = value
        this.count++
        return true
    }

    deQueue() {
        if (this.isEmpty()) return false
        this.memory[this.firstEl] = null
        this.firstEl = (this.firstEl + 1) % this.capacity
        this.count--
        return true
    }

    Front() {
        if (this.isEmpty()) return -1
        return this.memory[this.firstEl]
    }

    Rear() {
        if (this.isEmpty()) return -1
        const tail = (this.firstEl+this.count-1)%this.capacity
        return this.memory[tail]
    }

    isEmpty() {
        return (this.count == 0)
    }

    isFull() {
        return (this.capacity === this.count)
    }
}


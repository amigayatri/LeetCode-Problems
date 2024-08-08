class MyStack {
    constructor() {
        this._queue = new Queue()
    }

    push(element) {
        this._queue.enqueue(element)
        for (let i = 0; i < this._queue.size() - 1; i++) {
            this._queue.enqueue(this._queue.dequeue())
        }
    }

    pop() {
        return this._queue.dequeue()
    }

    top() {
        return this._queue.front()
    }

    empty() {
        return this._queue.isEmpty()
    }
}

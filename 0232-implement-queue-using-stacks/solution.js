class MyQueue {
    constructor(elements) {
        this._stack1 = []
        this._stack2 = []
    }

    enqueue(element) {
        this._stack1.push(element)
        return this
    }

    push(element) {
        return this.enqueue(element)
    }

    dequeue() {
        if (this._stack2.length === 0) this.transferStacks()
        return this._stack2.pop()
    }

    pop() {
        return this.dequeue()
    }

    peek() {
        if (this._stack2.length === 0) this.transferStacks()
        const last = this._stack2.length-1
        return this._stack2[last]
    }

    empty() {
        return this._stack1.length === 0 && this._stack2.length === 0
    }

    transferStacks() {
        while (this._stack1.length > 0) {
            const el = this._stack1.pop()
            this._stack2.push(el)
        }
    }

    size() {
        return this._stack1.length + this._stack2.length
    }
}

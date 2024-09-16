class MinStack {
    constructor () {
        this.stack = []
        this.minStack = []
    }

    push(x) {
        this.stack.push(x)
        if (this.minStack.length === 0 || x < this.minStack.at(-1)[0]) {
            this.minStack.push([x, 1])
        } else if (x === this.minStack.at(-1)[0]) {
            this.minStack.at(-1)[1]++
        }
    }

    pop() {
        if (this.minStack.at(-1)[0] === this.stack.at(-1)) {
            this.minStack.at(-1)[1]--
        }
        if (this.minStack.at(-1)[1] === 0) {
            this.minStack.pop()
        }
        return this.stack.pop()
    }

    top() {
        return this.stack.at(-1);
    }

    getMin() {
        return this.minStack.at(-1)[0]
    }
}

class MaxStack {
    constructor() {
        this.stack = []
        this.id = 0
        this.heap = new PriorityQueue({compare: (a, b) => {
            if (a.el === b.el) return b.id-a.id
            return b.el-a.el
        }})
        this.removed = new Set()
    }

    push(x) {
        const obj = {el: x, id: this.id}
        this.stack.push(obj)
        this.heap.enqueue(obj)
        this.id++
    }

    pop() {
        while (this.removed.has(this.stack.at(-1).id)) {
            this.stack.pop()
        }
        const top = this.stack.pop()
        this.removed.add(top.id)
        return top.el
    }

    top() {
        while (this.removed.has(this.stack.at(-1).id)) {
            this.stack.pop()
        }
        return this.stack.at(-1).el
    }

    peekMax() {
        while (this.removed.has(this.heap.front().id)) {
            this.heap.dequeue()
        }
        return this.heap.front().el
    }

    popMax() {
        while (this.removed.has(this.heap.front().id)) {
            this.heap.dequeue()
        }
        const top = this.heap.dequeue()
        this.removed.add(top.id)
        return top.el
    }
}

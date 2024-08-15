class Nodezinho {
    constructor(val, prev = null, next = null) {
        this.val = val !== undefined ? val : 0
        this.prev = prev
        this.next = next
    }
}
class MyLinkedList {
    constructor() {
        this.head = new Nodezinho(-1)
        this.tail = new Nodezinho(-1)
        this.tail.prev = this.head
        this.head.next = this.tail
        this.size = 0
    }

    #getPredNode(index) {
        let pred
        if (index + 1 < this.size - index) {
            pred = this.head
            for (let i = 0; i < index; i++) pred = pred.next
        } else {
            pred = this.tail.prev
            for (let i = 0; i < this.size - index; i++) pred = pred.prev
        }
        return pred
    }

    #addNode(val, pred) {
        const node = new Nodezinho(val, pred, pred.next)
        pred.next = node
        node.next.prev = node
        this.size++
    }

    get(index) {
        if (index < 0 || index >= this.size) return -1
        const pred = this.#getPredNode(index)
        return pred.next.val
    }

    addAtHead(val) {
        this.#addNode(val, this.head)
    }

    addAtTail(val) {
        this.#addNode(val, this.tail.prev)
    }

    addAtIndex(index, val) {
        if (index > this.size) return
        if (index < 0) index = 0
        const pred = this.#getPredNode(index)
        this.#addNode(val, pred)
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return
        let pred = this.#getPredNode(index)
        pred.next = pred.next.next
        pred.next.prev = pred
        this.size--
    }
}


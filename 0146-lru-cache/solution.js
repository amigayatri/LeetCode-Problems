class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}
class LRUCache {
    constructor(capacity) {
        this.mapping = new Map()
        this.capacity = capacity
    }

    get(key) {
        if (!this.mapping.has(key)) return -1
        const val = this.mapping.get(key)
        this.mapping.delete(key)
        this.mapping.set(key, val)
        return val
    }

    put(key, value) {
        if (this.mapping.has(key)) {
            this.mapping.delete(key)
        }
        this.mapping.set(key, value)

        if (this.mapping.size > this.capacity) {
            const toDel = this.mapping.keys().next().value
            this.mapping.delete(toDel)
        }
    }
}

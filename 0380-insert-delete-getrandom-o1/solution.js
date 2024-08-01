class RandomizedSet {
    constructor() {
        this.hash = new Map()
        this.arr = []
    }

    insert(val) {
        if (this.hash.has(val)) return false
        this.hash.set(val, this.arr.length)
        this.arr.push(val)
        return true
    }

    remove(val) {
        if (!this.hash.has(val)) return false
        if (this.arr.length > 1) {
            const idx = this.hash.get(val)
            const valLast = this.arr[this.arr.length - 1]
            this.arr[idx] = valLast
            this.arr.pop()
            this.hash.set(valLast, idx)
        } else {
            this.arr = []
        }
        this.hash.delete(val)
        return true
    }

    getRandom() {
        const idx = Math.trunc(Math.random()*this.arr.length)
        return this.arr[idx]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

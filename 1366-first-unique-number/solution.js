class FirstUnique {
    constructor(nums) {
        this.setQueue = new Set()
        this.isUnique = new Map()
        for (const num of nums) {
            this.add(num)
        }
    }

    showFirstUnique() {
        if (this.setQueue.size > 0) {
            const [first] = this.setQueue
            return first
        }
        return -1
    }

    add(value) {
        if (!this.isUnique.has(value)) {
            this.isUnique.set(value, true)
            this.setQueue.add(value)
        } else if (this.isUnique.get(value)) {
            this.isUnique.set(value, false)
            this.setQueue.delete(value)
        }
    }
}

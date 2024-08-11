class MyHashMap {
    constructor() {
        this.memory = new Array(1000001)
    }

    put(key, value) {
        this.memory[key] = value
    }

    remove(key) {
        this.memory[key] = undefined
    }

    get(key) {
        return this.memory[key] === undefined ? -1 : this.memory[key]
    }
}

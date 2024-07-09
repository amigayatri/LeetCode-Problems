class TimeLimitedCache {
    constructor () {
        this.map = new Map()
    }
    set (key, value, duration) {
        const previous = this.map.has(key)
        if (previous) {
            const {timeoutId} = this.map.get(key)
            clearTimeout(timeoutId)
        }
        const timeoutId = setTimeout(()=>{this.map.delete(key)}, duration)
        this.map.set(key, {value, timeoutId})
        return previous
    }

    get (key) {
        if (this.map.has(key)) {
            const {value} = this.map.get(key)
            return value
        } else return -1
    }
    count () {
        return this.map.size
    }
};

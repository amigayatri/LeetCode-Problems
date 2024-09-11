class TimeMap {
    constructor() {
        this.keys = new Map()
    }

    set(key, value, timestamp) {
        !this.keys.has(key) && this.keys.set(key, [])
        this.keys.get(key).push({value, timestamp})
    }

    get(key, timestamp) {
        const keyTimes = this.keys.get(key)
        if (keyTimes == undefined) return ""
        if (timestamp < keyTimes[0].timestamp) return ""
        let left = 0, right = keyTimes.length
        while (left < right) {
            const mid = (left+right) >> 1
            if (keyTimes[mid].timestamp <= timestamp) {
                left = mid+1
            } else {
                right = mid
            }
        }
        if (right == 0) return ""
        return keyTimes[right-1].value
    }
}


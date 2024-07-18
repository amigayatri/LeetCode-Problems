const buffer = 3000

class RecentCounter {
    constructor() {
        this.requestList = []
    }

    ping(t) {
        this.requestList.push(t)
        for (let i = 0; i < this.requestList.length; i++) {
            const req = this.requestList[i]
            if (req >= t - buffer) {
                break
            } else {
                this.requestList.shift()
                i--
            }
        }
        return this.requestList.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

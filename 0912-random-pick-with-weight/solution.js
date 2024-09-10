class Solution {
    constructor(w) {
        const n = w.length
        this.prefixSums = new Array(n)
        let prefixSum = 0
        for (let i = 0; i < n; i++) {
            prefixSum += w[i]
            this.prefixSums[i] = prefixSum
        }
        this.totalSum = prefixSum
    }

    pickIndex() {
        const target = this.totalSum*Math.random()
        let low = 0, high = this.prefixSums.length
        while (low < high) {
            const mid = (low+high)>>1
            if (target > this.prefixSums[mid]) {
                low = mid+1
            } else {
                high = mid
            }
        }
        return low
    }
}

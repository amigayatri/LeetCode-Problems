/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const n = arr.length
    let count = new Map()
    let maxFrequency = 1
    for (let i = 0; i < n; i++) {
        const c = arr[i]
        if (!count.has(c)) {
            count.set(c, 1)
        } else {
            count.set(c, count.get(c) + 1)
            maxFrequency = Math.max(maxFrequency, count.get(c))
        }
    }
    let countOfFrequencies = new Array(maxFrequency+1).fill(0)
    for (let [c, quantity] of count.entries()) {
        countOfFrequencies[quantity]++
    }
    let remainingUniqueElements = count.size
    for (let frequency = 1; frequency < maxFrequency+1; frequency++) {
        const count = countOfFrequencies[frequency]
        const numElementsToRemove = Math.min(Math.floor(k/frequency), count)
        k -= frequency*numElementsToRemove
        remainingUniqueElements -= numElementsToRemove
        if (k < frequency) return remainingUniqueElements
    }
    return 0
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let charCount = new Map()
    for (let char of arr) {
        if (!charCount.has(char)) charCount.set(char, 0)
        const count = charCount.get(char) + 1
        charCount.set(char, count)
    }
    let occurences = new Set()
    for (let count of charCount.values()) {
        if (occurences.has(count)) return false
        occurences.add(count)
    }
    return true
};

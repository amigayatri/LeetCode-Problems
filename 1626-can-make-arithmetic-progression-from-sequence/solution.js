/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    const n = arr.length
    let uniques = new Set()
    let max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER
    for (let num of arr) {
        if (num > max) max = num
        if (num < min) min = num
        uniques.add(num)
    }
    if (max == min) return true
    if (((max - min) % (n - 1) != 0) || uniques.size !== n) return false
    let diff = (max - min) / (n - 1)
    for (let i = 0; i < n; i++) {
        if (((arr[i] - min) % diff) != 0) return false
    }
    return true
};

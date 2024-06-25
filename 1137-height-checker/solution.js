/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const n = heights.length
    let counting = new Map()
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER
    for (let height of heights) {
        if (height < min) min = height
        if (height > max) max = height
        if(!counting.has(height)) counting.set(height, 0)
        const count = counting.get(height)
        counting.set(height, count+1) 
    }
    let expected = []
    for (let i = min; i < max+1; i++) {
        if (counting.has(i)) {
            const count = counting.get(i)
            for (let e = 0; e < count; e++) expected.push(i)
        }
    }
    let diff = 0
    for (let i = 0; i < n; i++) {
        if (heights[i] !== expected[i]) diff++
    }
    return diff
};

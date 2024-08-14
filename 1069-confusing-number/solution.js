/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    let rotated = 0
    const invalid = new Set([2, 3, 4, 5, 7])
    const change = new Map([[6, 9],[9, 6]])
    let cpy = n
    while (cpy > 0) {
        const d = cpy%10
        if (invalid.has(d)) return false
        rotated *= 10
        if (!change.has(d)) rotated += d
        else rotated += change.get(d)
        cpy = Math.floor(cpy/10)
    }
    return rotated !== n
};

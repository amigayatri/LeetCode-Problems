/**
 * @param {number} n
 * @return {number}
 */
const intDiv = (q, d) => ~~(q/d)
var rotatedDigits = function (n) {
    const map = new Map([
        [0, 0],
        [1, 1],
        [8, 8],
        [2, 5],
        [5, 2],
        [6, 9],
        [9, 6]
    ])
    let dp = new Array(n+1).fill(0)
    let count = 0
    for (let i = 0; i <= n; i++) {
        if (i < 10) {
            if (map.get(i) == i) dp[i] = 1
            else if (map.has(i)) {
                dp[i] = 2
                count++
            }
        } else {
            const div = intDiv(i,10), mod = i % 10
            let a = dp[div], b = dp[mod]
            if (a == 1 && b == 1) dp[i] = 1
            else if (a >= 1 && b >= 1) {
                dp[i] = 2
                count++
            }
        }
    }
    return count
};

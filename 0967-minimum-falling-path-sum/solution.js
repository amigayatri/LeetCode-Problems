/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    const n = matrix.length
    let dp = Array(n).fill(0)
    for (let r = n - 1; r >= 0; r--) {
        let currRow = Array(n)
        for (let c = 0; c < n; c++) {
            let prevSum = dp[c]
            if (n > 1) {
                if (c == 0) prevSum = Math.min(dp[c], dp[c + 1])
                else if (c == n - 1) prevSum = Math.min(dp[c], dp[c - 1])
                else prevSum = Math.min(dp[c - 1], dp[c], dp[c + 1])
            }
            currRow[c] = prevSum + matrix[r][c]
        }
        dp = currRow
    }
    let minSum = Number.MAX_SAFE_INTEGER
    for (let c = 0; c < n; c++) {
        if (dp[c] < minSum) minSum = dp[c]
    }
    return minSum
};

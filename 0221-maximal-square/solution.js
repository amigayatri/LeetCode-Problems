/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length
    const dp = Array(cols+1).fill(0)
    let maxSquare = 0, prev = 0
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const temp = dp[j]
            if (matrix[i-1][j-1] == '1') {
                const sq = Math.min(dp[j-1], dp[j], prev) + 1
                dp[j] = sq
                if (sq > maxSquare) maxSquare = sq
            } else {
                dp[j] = 0
            }
            prev = temp
        }
    }
    return maxSquare*maxSquare
};

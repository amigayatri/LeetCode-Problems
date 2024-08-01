/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let rows = obstacleGrid.length, cols = obstacleGrid[0].length
    let dp = Array(cols)
    dp[0] = obstacleGrid[0][0] == 1 ? 0 : 1
    for (let c = 1; c < cols; c++) dp[c] = obstacleGrid[0][c] == 1 ? 0 : dp[c-1]
    for (let r = 1; r < rows; r++) {
        let temp = Array(cols)
        temp[0] = obstacleGrid[r][0] == 1 ? 0 : dp[0]
        for (let c = 1; c < cols; c++) {
            if (obstacleGrid[r][c] == 1) {
                temp[c] = 0
            } else {
                temp[c] = dp[c] + temp[c - 1]
            }
        }
        dp = temp
    }
    return dp[cols-1]
}

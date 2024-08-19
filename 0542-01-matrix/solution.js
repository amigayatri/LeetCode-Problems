var updateMatrix = function (mat) {
    const m = mat.length, n = mat[0].length
    const dp = Array.from({length: m}, () => new Array(n))
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] == 0) {
                dp[r][c] = 0
                continue
            }
            let minNeighbor = m*n
            if (r > 0) minNeighbor = Math.min(minNeighbor, dp[r-1][c])    
            if (c > 0) minNeighbor = Math.min(minNeighbor, dp[r][c-1])
            dp[r][c] = minNeighbor+1
        }
    }
    for (let r = m-1; r >= 0; r--) {
        for (let c = n-1; c >= 0; c--) {
            if (dp[r][c] == 0) continue
            let minNeighbor = m*n
            if (r < m-1) minNeighbor = Math.min(minNeighbor, dp[r+1][c])
            if (c < n-1) minNeighbor = Math.min(minNeighbor, dp[r][c+1])
            dp[r][c] = Math.min(dp[r][c], minNeighbor+1)
        }
    }
    return dp
};

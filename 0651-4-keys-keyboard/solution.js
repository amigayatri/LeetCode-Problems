var maxA = function (n) {
    const dp = Array.from({ length: n + 1 }, (_, i) => i)
    for (let i = 0; i <= n-3; i++) {
        for (let j = i+3; j <= Math.min(n, i+6); j++) {
            dp[j] = Math.max(dp[j], (j-i-1)*dp[i])
        }
    }
    return dp[n]
};

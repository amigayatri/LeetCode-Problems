/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = new Array(n+1).fill(0)
    dp[0] = 1, dp[1] = 1
    for (let num = 2; num <= n; num++) {
        for (let prev = 1; prev <= num; prev++) {
            dp[num] += dp[prev-1]*dp[num-prev]
        }
    }
    return dp[n]
};

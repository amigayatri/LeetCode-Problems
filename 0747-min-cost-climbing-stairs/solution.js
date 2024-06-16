/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length
    let dp = new Array(n).fill(0)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i < n; i++) {
        dp[i] = Math.min(dp[i-2], dp[i-1]) + cost[i]
    }
    return Math.min(dp[n-2], dp[n-1])
};

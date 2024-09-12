/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    const n = piles.length
    const dp = Array.from({length: n+1}, () => Array.from({length: k+1}, () => 0))
    for(let i = 1; i <= n; i++) {
        for (let coins = 0; coins <= k; coins++) {
            let currSum = 0
            for (let currCoins = 0; currCoins <= Math.min(piles[i-1].length, coins); currCoins++) {
                if (currCoins > 0) {
                    currSum += piles[i-1][currCoins-1]
                }
                dp[i][coins] = Math.max(dp[i][coins], dp[i-1][coins-currCoins]+currSum)
            }
        }
    }
    return dp[n][k]
};

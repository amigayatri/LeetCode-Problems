/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let i = coins.length-1; i >= 0; i--) {
        for (let value = coins[i]; value <= amount; value++) {
            dp[value] += dp[value-coins[i]]
        }
    }
    return dp[amount]
};

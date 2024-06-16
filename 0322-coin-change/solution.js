/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount < 1) return 0
    const max = amount + 1
    let prev = new Array(max).fill(0)
    for (let target = 0; target < max; target++) {
        if (target % coins[0] == 0) {
            prev[target] = target/coins[0]
        } else {
            prev[target] = max
        }
    }
    for (let i = 1; i < coins.length; i++) {
        let temp = new Array(max).fill(0)
        for (let target = 0; target < max; target++) {
            let take = max
            if (target-coins[i] >= 0) {
                take = 1 + temp[target-coins[i]]
            }
            let notTake = prev[target]
            temp[target] = Math.min(take, notTake)
        }
        prev = temp
    }
    return prev[amount] > amount ? -1 : prev[amount]
};

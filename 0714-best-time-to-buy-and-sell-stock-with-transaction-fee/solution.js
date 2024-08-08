/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const n = prices.length
    let free = 0, hold = -prices[0]
    for (let i = 1; i < n; i++) {
        const tmp = hold
        hold = Math.max(hold, free-prices[i])
        free = Math.max(free, tmp+prices[i]-fee)
    }
    return free
};

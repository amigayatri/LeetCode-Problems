/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const profit = [0]
    const n = prices.length
    for (let i = 1; i < n; i++) {
        profit[i] = profit[i-1] + Math.max(prices[i] - prices[i-1], 0)
    }
    return profit[n - 1]
};

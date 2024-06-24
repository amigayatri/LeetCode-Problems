/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    if (k == 0) return 0
    let profit = new Array(k+1).fill(0)
    let cost = new Array(k+1).fill(Number.MAX_SAFE_INTEGER)
    profit[0] = 0
    for (let price of prices) {
        for (let i = 0; i < k; i++) {
            cost[i+1] = Math.min(cost[i+1], price - profit[i])
            profit[i+1] = Math.max(profit[i+1], price - cost[i+1])
        }
    }
    return profit[k]
};

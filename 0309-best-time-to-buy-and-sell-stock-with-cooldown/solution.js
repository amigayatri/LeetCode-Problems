/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sold = Number.MIN_SAFE_INTEGER, held = Number.MIN_SAFE_INTEGER, reset = 0
    for (let price of prices) {
        let preSold = sold
        sold = held+price
        held = Math.max(held, reset-price)
        reset = Math.max(reset, preSold)
    }
    return Math.max(sold, reset)
};

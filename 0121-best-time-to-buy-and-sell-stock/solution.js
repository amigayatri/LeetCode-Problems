/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cheapest = Infinity, bestProfit = 0, profit
    for (price of prices) {
        if(price < cheapest) cheapest = price
        else {
            profit = price - cheapest
            if (profit > bestProfit) bestProfit = profit
        } 
    }
    return bestProfit
};

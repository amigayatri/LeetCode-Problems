/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length
    if (n <= 1) return 0
    let leftProfits = new Array(n).fill(0)
    let rightProfits = new Array(n+1).fill(0)
    let leftMin = prices[0], rightMax = prices[n-1]
    for (let l = 1; l < n; l++) {
        const r = n - 1 - l
        leftProfits[l] = Math.max(leftProfits[l-1], prices[l] - leftMin)
        if (prices[l] < leftMin) leftMin = prices[l]
        rightProfits[r] = Math.max(rightProfits[r+1], rightMax - prices[r])
        rightMax = Math.max(rightMax, prices[r])
    }
    let maxProfit = 0
    for (let i = 0; i < n; i++) {
        const localProfit = leftProfits[i] + rightProfits[i+1]
        if (localProfit > maxProfit) maxProfit = localProfit
    }
    return maxProfit
};

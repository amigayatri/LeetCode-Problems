/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const length = costs.length
    const colors = [0, 1, 2]
    for (let n = length-2; n >= 0; n--) {
        for (let color of colors) {
            let prevMin = Number.MAX_SAFE_INTEGER
            for (let prevColor of colors) {
                if (color !== prevColor) {
                    prevMin = Math.min(prevMin, costs[n+1][prevColor])
                }
            }
            costs[n][color] += prevMin
        }
    }
    if (length == 0) return 0
    return Math.min(...costs[0])
};

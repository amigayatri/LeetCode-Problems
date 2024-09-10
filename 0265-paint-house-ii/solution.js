/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function (costs) {
    if (costs.length == 0) return 0
    const k = costs[0].length, n = costs.length
    const newMin = (cost = Number.MAX_SAFE_INTEGER, color = -1) => {
        return { cost, color }
    }
    const findPrevMin = (row, prevMin, prevSecondMin) => {
        let min = newMin(), secondMin = newMin()
        for (let color = 0; color < k; color++) {
            let cost = costs[row][color]
            if (row > 0) {
                if (color == prevMin.color) {
                    cost += prevSecondMin.cost
                } else {
                    cost += prevMin.cost
                }
            }
            if (cost < min.cost) {
                secondMin = newMin(min.cost, min.color)
                min = newMin(cost, color)
            } else if (cost < secondMin.cost) {
                secondMin = newMin(cost, color)
            }
        }
        return [min, secondMin]
    }
    let [prevMin, prevSecondMin] = findPrevMin(0)
    for (let house = 1; house < n; house++) {
        [prevMin, prevSecondMin] = findPrevMin(house, prevMin, prevSecondMin)
    }
    return prevMin.cost
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const pointMap = new Map()
    for (let num of nums) {
        pointMap.set(num, (pointMap.get(num) || 0) + num)
    }
    const n = pointMap.size
    let elements = Array.from(pointMap.keys()).sort((a, b) => a - b)
    let twoBack = 0, oneBack = (pointMap.get(elements[0]) || 0)
    for (let i = 1; i < n; i++) {
        const oldOne = oneBack
        const elPoints = pointMap.get(elements[i])
        if (elements[i - 1] + 1 == elements[i]) {
            oneBack = Math.max(oldOne, twoBack + elPoints)
        } else {
            oneBack += elPoints
        }
        twoBack = oldOne
    }

    pointMap.clear()
    return oneBack
};

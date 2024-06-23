/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const getOrDefault = (map, target, def) => {
        if (!map.has(target)) return def
        return map.get(target)
    }
    let resultCount = new Map()
    resultCount.set(0, 1)
    for (let num of nums) {
        let newResultCount = new Map()
        for (let [result, count] of resultCount) {
            newResultCount.set(result+num, count + getOrDefault(newResultCount, result+num, 0))
            newResultCount.set(result-num, count + getOrDefault(newResultCount, result-num, 0))
        }
        resultCount = newResultCount
    }
    return getOrDefault(resultCount, target, 0)
};

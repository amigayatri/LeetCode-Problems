/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
    let countMap = new Map()
    let total = 0
    for (let num of arr) {
        countMap.set(num, (countMap.get(num)||0)+1)
    }
    for (let [num, count] of countMap.entries()) {
        if (countMap.has(num+1)) total+=count
    }
    return total
};

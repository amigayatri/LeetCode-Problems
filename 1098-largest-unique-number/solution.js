/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
    const repeated = new Set(), uniques = new Set()
    for (let num of nums) {
        if (!repeated.has(num)) {
            if (!uniques.has(num)) {
                uniques.add(num)
            } else {
                uniques.delete(num)
                repeated.add(num)
            }
        }
    }
    repeated.clear()
    let max = -1
    for (let num of uniques) {
        if (num > max) max = num
    }
    return max
};

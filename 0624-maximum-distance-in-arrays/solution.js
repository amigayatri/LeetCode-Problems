/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    const nArr = arrays.length
    let res = 0, min = arrays[0][0], max = arrays[0].at(-1)
    for (let i = 1; i < nArr; i++) {
        const localMin = arrays[i][0]
        const localMax = arrays[i].at(-1)
        res = Math.max(res, Math.abs(localMax - min), Math.abs(max- localMin))
        max = Math.max(max, localMax)
        min = Math.min(min, localMin)
    }
    return res
};

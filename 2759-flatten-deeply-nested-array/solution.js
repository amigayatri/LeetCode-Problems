/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let res = []
    const flattening = (nums, level) => {
        for (const num of nums) {
            if (Array.isArray(num) && level > 0) {
                flattening(num, level-1)
            } else {
                res.push(num)
            }
        }
    }
    flattening(arr, n)
    return res
};

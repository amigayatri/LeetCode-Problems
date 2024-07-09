/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const n = arr.length
    if (n == 0) return []
    if (size >= n) return [arr]
    let res = []
    let subarrayNumber = Math.ceil(n/size)
    for (let i = 0; i < subarrayNumber; i++) {
        let subarray = []
        for (let j = 0; j < size; j++) {
            const index = i * size + j
            if (index >= n) break
            subarray.push(arr[index])
        }
        res.push(subarray)
    }
    return res
};


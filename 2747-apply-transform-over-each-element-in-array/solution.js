/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const n = arr.length
    let answer = new Int32Array(n)
    for (let i = 0; i < n; i++) {
        answer[i] = fn(arr[i], i)
    }
    return answer
};

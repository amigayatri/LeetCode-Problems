/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const n = arr.length
    let answer = new Array()
    for (let i = 0; i < n; i++) {
        const value = fn(arr[i], i)
        const castedValue = Boolean(value)
        if (castedValue) answer.push(arr[i])
    }
    return answer
};

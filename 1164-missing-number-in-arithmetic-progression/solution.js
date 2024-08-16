/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
    const n = arr.length
    const first = arr[0]
    const diff = (arr[n-1]-first)/n
    let left = 0, right = n-1
    while (left < right) {
        const mid = (left+right)>>1
        const expected = first+mid*diff
        if (arr[mid] == expected) {
            left++
        } else {
            right--
        }
    }
    return first+left*diff
};

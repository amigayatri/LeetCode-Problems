/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    const n = arr.length
    let left = 0, right = n-k
    while (left < right) {
        const mid = (left+right)>>1
        if (x-arr[mid] > arr[mid+k]-x) {
            left = mid+1
        } else {
            right = mid
        }
    }
    return arr.slice(left, left+k)
};

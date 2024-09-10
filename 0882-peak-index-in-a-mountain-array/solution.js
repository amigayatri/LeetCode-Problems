/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    const n = arr.length
    let left = 0, right = n-1
    while (left < right) {
        const mid = (left+right)>>1
        if (arr[mid] < arr[mid+1]) {
            left = mid+1
        } else {
            right = mid
        }
    }
    return left
};

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    let left = 0, right = 1, secret
    while (reader.get(right) < target) {
        left = right + 1
        right <<=1
    }
    while (left <= right) {
        const mid = left + ((right-left) >> 1)
        secret = reader.get(mid)
        if (secret == target) return mid
        else if (secret > target) {
            right = mid-1
        } else {
            left = mid+1
        }
    }
    return -1
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const r = matrix.length, c = matrix[0].length
    let low = 0, high = (r*c) - 1
    while (low <= high) {
        if (matrix[Math.floor(low/c)][low%c] > target || matrix[Math.floor(high/c)][high%c] < target) {
            return false
        } else if (matrix[Math.floor(low/c)][low%c] == target || matrix[Math.floor(high/c)][high%c] == target) {
            return true
        } else {
            let mid = (low+high)>>1
            if (matrix[Math.floor(mid/c)][mid%c] == target) {
                return true
            } else if (matrix[Math.floor(mid/c)][mid%c] < target) {
                low = mid + 1
                high--
            } else {
                high = mid -1
                low++
            }
        }
    }
    return false
};

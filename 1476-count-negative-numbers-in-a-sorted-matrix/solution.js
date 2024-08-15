/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    const m = grid.length, n = grid[0].length
    let currRowFirstNeg = n - 1, count = 0, currEnd = n - 1
    const countLineNegs = (i, currEnd) => {
        const row = grid[i]
        let left = 0, right = currEnd
        while (left <= right) {
            const mid = (left + right) >> 1
            if (row[mid] >= 0) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return left
    }
    for (let i = 0; i < m; i++) {
        if (currEnd > 0) currEnd = countLineNegs(i, currEnd)
        if (grid[i][currEnd] < 0) count += (n - (currEnd))
    }
    return count
};

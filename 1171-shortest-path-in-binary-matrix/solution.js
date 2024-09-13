/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [-1, -1],
        [-1, 1],
        [1, 1],
        [1, -1]
    ]
    const rows = grid.length, cols = grid[0].length
    const seen = Array.from({length: rows}, () => Array(cols).fill(false))
    const isValid = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols
    const toVisit = new Queue()
    toVisit.push({row: 0, col: 0, size: 1})
    seen[0][0] = true
    while (!toVisit.isEmpty()) {
        const {row, col, size} = toVisit.pop()
        if (grid[row][col] == 1) continue
        if (row == rows-1 && col == cols-1) return size
        for(const [rowOff, colOff] of directions) {
            if (isValid(row+rowOff, col+colOff) && grid[row+rowOff][col+colOff] == 0 && !seen[row+rowOff][col+colOff]) {
                seen[row+rowOff][col+colOff] = true
                toVisit.push({row: row+rowOff, col: col+colOff, size: size+1})
            }
        }
    }
    return -1
};

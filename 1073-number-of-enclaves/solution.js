/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    const rows = grid.length, cols = grid[0].length
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const visit = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))
    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col>=cols || grid[row][col] == 0 || visit[row][col]) {
            return
        }
        visit[row][col] = true
        for (const [rowOff, colOff] of directions) {
            dfs(row+rowOff, col+colOff)
        }
        return
    }
    for (let r = 0; r < rows; r++) {
        if (grid[r][0] == 1 && !visit[r][0]) {
            dfs(r, 0)
        }
        if (grid[r][cols-1] == 1 && !visit[r][cols-1]) {
            dfs(r, cols-1)
        }
    }
    for (let c = 0; c < cols; c++) {
        if(grid[0][c] == 1 && !visit[0][c]) {
            dfs(0, c)
        }
        if (grid[rows-1][c] == 1 && !visit[rows-1][c]) {
            dfs(rows-1, c)
        }
    }
    let count = 0
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if(grid[r][c] == 1 && !visit[r][c]) count++
        }
    }
    return count
};

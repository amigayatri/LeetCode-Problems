/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const directions = [
        [0, 1],
        [1, 0], 
        [0, -1],
        [-1, 0],
    ]
    dfs = function(grid, r, c) {
        grid[r][c] = '0'
        for (let [rowOffset, colOffset] of directions) {
            const posR = r + rowOffset
            const posC = c + colOffset
            if (posR < 0 || posC < 0 || posR > rows - 1 || posC > columns-1) continue
            if (grid[posR][posC] == '1') {
                dfs(grid, posR, posC)
            }
            
        }
    }
    const rows = grid.length, columns = grid[0].length
    let num = 0
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (grid[row][col] == '1') {
                num++
                dfs(grid, row, col)
            }
        }
    }
    return num
};

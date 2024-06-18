/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (board == null || board.length == 0) return
    const rows = board.length, cols = board[0].length
        const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1,0]
    ]
    let borders = []
    for (let r = 0; r < rows; r++) {
        borders.push([r, 0])
        borders.push([r, cols - 1])
    }
    for (let c = 0; c < cols; c++) {
        borders.push([0, c])
        borders.push([rows - 1, c])
    }
    function dfs(board, row, col) {
        console.log(row, col, 'function', board[row][col])
        if (board[row][col] != 'O') return
        board[row][col] = 'E'
        for (let [rowOffset, colOffset] of directions) {
            const r = row + rowOffset
            const c = col + colOffset
            if (r < 0 || c < 0 || r > rows - 1 || c > cols - 1) continue
            dfs(board, r, c)
        }
    }
    console.log(borders)
    for(let [r, c] of borders) {
        dfs(board,  r, c)
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] == "O") board[r][c] = "X"
            if (board[r][c] == "E") board[r][c] = "O"
        }
    }
};

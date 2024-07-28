/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rows = board.length
    const cols = board[0].length
    const status = (r, c) => {
        if (r < 0 || c < 0 || c > cols-1 || r > rows-1) return 0
        return board[r][c] % 2
    }
    const livesToNext = (r, c) => {
        let count = 0
        const neighboors = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
            [-1, -1],
            [-1, 1],
            [1, 1],
            [1, -1]
        ]
        for (let i = 0; i < 8 && count <= 4; i++) {
            const rMod = neighboors[i][0], cMod = neighboors[i][1]
            count += status(r + rMod, c+cMod)
        }
        if (board[r][c] == 0) return count == 3
        else {
            if (count < 2 || count > 3) return false
            return true
        }
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (livesToNext(r, c)) board[r][c] += 2
        }
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            board[r][c] >>= 1
        }
    }
};

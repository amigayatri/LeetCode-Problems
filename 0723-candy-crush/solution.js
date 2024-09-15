var candyCrush = function(board) {
    const rows = board.length, cols = board[0].length
    const findAndCrush = () => {
        let complete = true
        const compareAbs = (a, b, c) => {
            return Math.abs(a) === Math.abs(b) && Math.abs(b) === Math.abs(c)
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] == 0) continue
                if (r > 0 && r < rows-1 && compareAbs(board[r-1][c], board[r][c], board[r+1][c])) {
                    const negVal = -Math.abs(board[r][c])
                    board[r][c] = negVal
                    board[r-1][c] = negVal
                    board[r+1][c] = negVal
                    complete = false
                }
                if (c > 0 && c < cols-1 && compareAbs(board[r][c-1], board[r][c], board[r][c+1])) {
                    const negVal = -Math.abs(board[r][c])
                    board[r][c] = negVal
                    board[r][c-1] = negVal
                    board[r][c+1] = negVal
                    complete = false
                }
            }
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] < 0) board[r][c] = 0
            }
        }
        for (let c = 0; c < cols; c++) {
            let lowestZero = -1
            for (let r = rows-1; r >= 0; r--) {
                if (board[r][c] == 0) {
                    lowestZero = Math.max(lowestZero, r)
                } else if (lowestZero >= 0) {
                    const temp = board[r][c]
                    board[r][c] = board[lowestZero][c]
                    board[lowestZero][c] = temp
                    lowestZero--
                }
            }
        }
        return complete
    }
    let complete = false
    while (!complete) {
        complete = findAndCrush()
    }
    return board
};

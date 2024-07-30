/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    const m = board.length, n = board[0].length
    const rClick = click[0], cClick = click[1]
    if (board[rClick][cClick] == 'M') {
        board[rClick][cClick] = 'X'
        return board
    }
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

    const cangetValue = (r, c) => {
        if (r < 0 || c < 0 || r > m - 1 || c > n - 1) return false
        return true
    }

    const setAdjacent = (row, col) => {
        for (let i = 0; i < neighboors.length; i++) {
            const r = row + neighboors[i][0], c = col + neighboors[i][1]
            set(r, c)
        }
    }

    const set = (r, c) => {
        if (!cangetValue(r, c)) return false
        const val = board[r][c]
        if (val == 'E') {
            const count = countMines(r, c)
            if (count == 0) {
                board[r][c] = 'B'
                setAdjacent(r, c)
            } else {
                board[r][c] = count.toString()
            }
        }
    }

    const countMines = (row, col) => {
        let count = 0
        for (let i = 0; i < neighboors.length; i++) {
            const r = row + neighboors[i][0], c = col + neighboors[i][1]
            if (cangetValue(r, c) && board[r][c] == 'M') count++
        }
        return count
    }

    set(rClick, cClick)
    return board
};

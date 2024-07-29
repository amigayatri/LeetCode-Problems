/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const n = 9
    let rows = Array(n).fill(0)
    let columns = Array(n).fill(0)
    let boxes = Array(n).fill(0)
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] == '.') continue
            const val = Number(board[r][c])
            const pos = 1 << (val-1)
            if (rows[r] & pos) return false
            rows[r] |= pos
            if (columns[c] & pos) return false
            columns[c] |= pos
            const idx = Math.trunc(r/3)*3 + Math.trunc(c/3)
            if (boxes[idx]&pos) return false
            boxes[idx] |= pos
        }
    }
    return true
};

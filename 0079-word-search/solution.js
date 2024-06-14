/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const directions = [
        [0, 1],
        [1, 0], 
        [0, -1],
        [-1, 0],
    ]
    const backtrack = (row, col, suffix) => {
        if (suffix.length === 0) return true
        if ( row < 0 || row == rows ||
             col < 0 || col == columns ||
             board[row][col] != suffix.charAt(0)) return false
        let ret = false
        board[row][col] = "#"
        for (let [rowOffset, colOffset] of directions) {
            ret = backtrack(row+rowOffset, col+colOffset, suffix.slice(1))
            if (ret) break
        }
        board[row][col] = suffix.charAt(0)
        return ret
    }
    const rows = board.length, columns = board[0].length
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if(backtrack(row, col, word)) return true
        }
    }
    return false
};

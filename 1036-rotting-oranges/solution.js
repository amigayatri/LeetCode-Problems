/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    if (grid.length == 0) return -1
    const ROWS = grid.length, COLUMNS = grid[0].length
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]
    let distance = new Array(ROWS).fill().map(() => new Array(COLUMNS).fill(false))
    let rotten = 0, fresh = 0
    let queue = []
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLUMNS; c++) {
            if (grid[r][c] == 1) fresh++
            else if (grid[r][c] == 2) {
                rotten++
                queue.push([r, c])
            }
        }
    }
    if (fresh == 0) return 0
    queue.push([-1, -1])
    let minutes = -1
    while (queue.length > 0) {
        const [row, col] = queue.shift()
        if (row == -1) {
            minutes++
            if (queue.length > 0) queue.push([-1, -1])
        } else {
            for (let [rowOffset, colOffset] of directions) {
                const r = row + rowOffset
                const c = col + colOffset
                if (r < 0 || r > ROWS - 1 || c < 0 || c > COLUMNS - 1 || grid[r][c] != 1) continue
                grid[r][c] = 2
                fresh--
                queue.push([r, c])
            }
        }
    }
    return fresh == 0 ? minutes : -1
};

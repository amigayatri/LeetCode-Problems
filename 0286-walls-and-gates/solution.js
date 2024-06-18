/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if (rooms.length == 0) return
    const EMPTY = 2147483647
    const GATE = 0
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]
    const rows = rooms.length, columns = rooms[0].length
    let queue = []
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if(rooms[r][c] == GATE) {
                queue.push([r, c])
            }
        }
    }
    while (queue.length > 0) {
        const [row, col] = queue.shift()
        for (let [rowOffset, colOffset] of directions) {
            const r = row + rowOffset
            const c = col + colOffset
            if (r < 0 || r > rows -1 || c < 0 || c > columns -1 || rooms[r][c] != EMPTY) continue
            rooms[r][c] = rooms[row][col] + 1
            queue.push([r, c])
        }
    }
};

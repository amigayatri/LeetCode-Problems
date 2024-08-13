/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    const n = board.length, square = n*n, last = n-1
    let seen = new Set()
    const gridCord = (pos) => {
        let row = Math.floor((pos-1)/n)
        let col = (pos-1) % n
        if (row&1) col = last - col
        row = last - row
        return [row, col]
    }
    let toVisit = new Queue([[1, 0]])
    while (!toVisit.isEmpty()) {
        [curr, dist] = toVisit.pop()
        for (let i = 0; i < 6; i++) {
            let next = curr+i+1
            let [r, c] = gridCord(next)
            if (board[r][c] !== -1) next = board[r][c]
            if (next === square) return dist+1
            if (!seen.has(next)) {
                seen.add(next)
                toVisit.push([next, dist+1])
            }
        }
    }
    return -1
};

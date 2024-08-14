/**
 * @param {number[][]} moves
 * @return {string}
 */

var tictactoe = function (moves) {
    const n = moves.length, sz = 3
    const newCounter = () => [0, 0]
    let rowCount = [0, 0, 0]
    let colCount = [0, 0, 0]
    let posDiag = 0
    let negDiag = 0
    let player = 1
    for (let i = 0; i < n; i++) {
        const [r, c] = moves[i]
        rowCount[r] += player
        colCount[c] += player
        if (r == c) posDiag += player
        if (r + c == sz - 1) negDiag += player
        if (Math.abs(rowCount[r]) == sz ||
            Math.abs(colCount[c]) == sz ||
            Math.abs(posDiag) === sz ||
            Math.abs(negDiag) === sz) {
            return (player == 1) ? 'A' : 'B'
        }
        player *= -1
    }
    if (n == sz * sz) return 'Draw'
    return 'Pending'
};

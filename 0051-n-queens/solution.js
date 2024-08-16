/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const solutions = []
    const emptyBoard = Array.from({length: n}, ()=>Array(n).fill('.'))
    const createBoard = (state) => {
        const board = []
        for (let r = 0; r < n; r++) {
            board.push(state[r].join(''))
        }
        return board
    }
    const backtrack = (r, diags, antiDiags, cols, state = emptyBoard) => {
        if (r == n) {
            solutions.push(createBoard(state))
            return
        }
        for (let c = 0; c < n; c++) {
            const currDiag = r-c
            const currAntiDiag = r+c
            if (cols.has(c) || diags.has(currDiag) || antiDiags.has(currAntiDiag)) {
                continue
            }
            cols.add(c)
            diags.add(currDiag)
            antiDiags.add(currAntiDiag)
            state[r][c] = 'Q'
            backtrack(r+1, diags, antiDiags, cols, state)
            cols.delete(c)
            diags.delete(currDiag)
            antiDiags.delete(currAntiDiag)
            state[r][c] = '.'
        }
    }
    backtrack(0, new Set(), new Set(), new Set(), emptyBoard)
    return solutions
};

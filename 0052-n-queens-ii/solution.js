/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let solutions = 0
    const backtrack = (r, diags, antiDiags, cols) => {
        if (r == n) {
            solutions++
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
            backtrack(r+1, diags, antiDiags, cols)
            cols.delete(c)
            diags.delete(currDiag)
            antiDiags.delete(currAntiDiag)
        }
    }
    backtrack(0, new Set(), new Set(), new Set())
    return solutions
};

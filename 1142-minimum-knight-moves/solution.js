/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    const memo = new Map()
    const dfs = (row, col) => {
        const [rowAbs, colAbs] = [Math.abs(row), Math.abs(col)]
        const key = `${rowAbs},${colAbs}`
        if (memo.has(key)) return memo.get(key)
        if (rowAbs+colAbs === 0) {
            return 0
        } else if (rowAbs+colAbs == 2) {
            return 2
        } else {
            const answer = 1 + Math.min(
                dfs(rowAbs-1, colAbs-2),
                dfs(rowAbs-2, colAbs-1)
            )
            memo.set(key, answer)
            return answer
        }
    }
    return dfs(x, y)
};

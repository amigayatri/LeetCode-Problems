/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    const nRows = maze.length, nCols = maze[0].length
    const visit = Array.from({length: nRows}, () => Array.from({length: nCols}, () => false))
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const [rowDest, colDest] = destination
    const isValid = (row, col) => !(row < 0 || row >= nRows || col < 0 || col >= nCols)
    const dfs = (row, col) => {
        if(visit[row][col]) return false
        if (row === rowDest && col === colDest) return true
        visit[row][col] = true
        for (const [rowOff, colOff] of directions) {
            let newRow = row+rowOff, newCol = col+colOff
            while (isValid(newRow, newCol) && maze[newRow][newCol] == 0) {
                newRow += rowOff
                newCol += colOff
            }
            const prevRow = newRow-rowOff, prevCol = newCol-colOff
            if (dfs(prevRow, prevCol)) {
                return true
            }
        }
        return false
    }
    const [rowStart, colStart] = start
    return dfs(rowStart, colStart)
};

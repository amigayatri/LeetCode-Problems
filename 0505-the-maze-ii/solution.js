/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
    const nRows = maze.length, nCols = maze[0].length
    const distance = Array.from({length: nRows}, () => Array.from({length: nCols}, () => Number.MAX_SAFE_INTEGER))
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    distance[start[0]][start[1]] = 0
    const dfs = (start) => {
        const [rowStart, colStart] = start
        for (const [rowOff, colOff] of directions) {
            let newRow = rowStart+rowOff, newCol = colStart+colOff, count = 0
            while (newRow >= 0 && newCol >= 0 && newRow < nRows && newCol < nCols && maze[newRow][newCol] == 0) {
                newRow+=rowOff
                newCol+=colOff
                count++
            }
            const prevRow = newRow-rowOff, prevCol = newCol-colOff
            if (distance[rowStart][colStart] + count < distance[prevRow][prevCol]) {
                distance[prevRow][prevCol] = distance[rowStart][colStart] + count
                dfs([prevRow, prevCol])
            }
        }
    }
    dfs(start)
    const destDistance = distance[destination[0]][destination[1]]
    return destDistance == Number.MAX_SAFE_INTEGER ? -1 : destDistance
};

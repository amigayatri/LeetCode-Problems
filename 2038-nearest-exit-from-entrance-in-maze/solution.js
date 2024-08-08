/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    const rows = maze.length, cols = maze[0].length
    let toVisit = new Queue(), visited = new Set()
    let startRow = entrance[0], startCol = entrance[1]
    visited.add(`${startRow}-${startCol}`)
    toVisit.enqueue([startRow, startCol, 0])
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    while (!toVisit.isEmpty()) {
        const [currRow, currCol, currDistance] = toVisit.dequeue()
        for (let [rOffset, cOffset] of directions) {
            const nextRow = currRow + rOffset, nextCol = currCol + cOffset
            if (0 <= nextRow && nextRow < rows && 0 <= nextCol && nextCol < cols && maze[nextRow][nextCol] == '.' && !visited.has(`${nextRow}-${nextCol}`)) {
                if (nextRow === 0 || nextRow === rows - 1 || nextCol === 0 || nextCol === cols - 1) {
                    return currDistance + 1
                }
                visited.add(`${nextRow}-${nextCol}`)
                toVisit.enqueue([nextRow, nextCol, currDistance + 1])
            }
        }
    }
    return -1
};

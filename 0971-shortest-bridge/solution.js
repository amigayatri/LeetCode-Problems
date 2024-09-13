/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
    const n = grid.length
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let queue = new Queue()
    const isValid = (row, col) => {
        if (row < 0 || row >= n || col < 0 || col >= n) {
            return false
        }
        return true
    }
    const exploreIslandsDFS = (row, col) => {
        if (!isValid(row, col) || grid[row][col] !== 1) {
            return false
        }
        queue.push([row, col])
        grid[row][col] = 2
        for (const [rowOff, colOff] of directions) {
            exploreIslandsDFS(row+rowOff, col+colOff)
        }
        return true
    }
    const buildBridgeBFS = () => {
        let distance = -1
        while(!queue.isEmpty()) {
            const size = queue.size()
            for (let i = 0; i < size; i++) {
                const [row, col] = queue.pop()
                for(const [rowOff, colOff] of directions) {
                    const rowNext = row+rowOff
                    const colNext = col+colOff
                    if (isValid(rowNext, colNext) && grid[rowNext][colNext] != 2) {
                        if (grid[rowNext][colNext] == 1) {
                            return distance+1
                        }
                        queue.push([rowNext, colNext])
                        grid[rowNext][colNext] = 2
                    }
                }
            }
            distance++
        }
        return -1
    }
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if(exploreIslandsDFS(r, c)) {
                return buildBridgeBFS()
            }
        }
    }
    return -1
};

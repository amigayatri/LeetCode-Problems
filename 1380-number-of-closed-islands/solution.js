/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const m = grid.length, n = grid[0].length
    const visited = Array.from({length: m}, () => Array.from({length: n}, () => false))
    const neighbours = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let count = 0
    const bfs = (x, y) => {
        const toVisit = new Queue()
        toVisit.push([x, y])
        let isClosed = true
        visited[x][y] = true
        while (!toVisit.isEmpty()){
            [x, y] = toVisit.pop()
            for (let [rOff, cOff] of neighbours) {
                const r = x+rOff, c = y+cOff
                if(r < 0 || r >= m || c < 0 || c >= n) {
                    isClosed = false
                } else if (grid[r][c] == 0 && !visited[r][c]) {
                    toVisit.push([r, c])
                    visited[r][c] = true
                }
            }
        }
        return isClosed
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0 && !visited[i][j] && bfs(i, j)) {
                count++
            }
        }
    }
    return count
};

class Position {
    constructor(row, col) {
        this.row = row
        this.col = col
    }

    getKey() {
        return `(r:${this.row}-c:${this.col})`
    }
}
class Island {
    constructor(origin) {
        this.cellKeys = new Set()
        this.origin = origin
    }

    size() {
        return this.cellKeys.size
    }

    addCell(row, col) {
        const newPos = new Position(row-this.origin.row, col-this.origin.col)
        this.cellKeys.add(newPos.getKey())
    }

    getKey() {
        return Array.from(this.cellKeys).join('&')
    }
}
var numDistinctIslands = function (grid) {
    const rows = grid.length, cols = grid[0].length
    const seen = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const islands = new Set()
    const isInvalidToExplore = (row, col) => (row < 0 || row >= rows || col < 0 || col >= cols)
    const dfs = (row, col, currIsland) => {
        if (isInvalidToExplore(row, col)) return
        if (grid[row][col] == 0 || seen[row][col]) return
        seen[row][col] = true
        currIsland.addCell(row, col)
        directions.forEach(([rowOff, colOff]) => dfs(row + rowOff, col + colOff, currIsland))
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                const currOrigin = new Position(r, c, false)
                const currIsland = new Island(currOrigin)
                dfs(r, c, currIsland)
                if (currIsland.size() > 0) {
                    islands.add(currIsland.getKey())
                }
            }
        }
    }
    return islands.size
};

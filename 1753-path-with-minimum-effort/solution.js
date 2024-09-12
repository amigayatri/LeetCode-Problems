/**
 * @param {number[][]} heights
 * @return {number}
 */
class Cell {
    constructor (row, col, diff) {
        this.row = row
        this.col = col
        this.diff = diff
    }

    isSamePos (cell) {
        return this.row == cell.row && this.col == cell.col
    }

    compareDiff (newDiff, diffMatrix) {

    }
}

class Matrix {
    constructor (rows, cols, startDiff = Number.MAX_SAFE_INTEGER) {
        this.rows = rows
        this.cols = cols
        this.diffs = Array.from({length: rows}, () => Array.from({length: cols}, () => startDiff))
        this.visited = Array.from({length: rows}, () => Array.from({length: cols}, () => false))
        this.dest = new Cell(rows-1, cols-1)
    }

    isValidCell = (row, col) => {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols
    }

    canVisit = ({row, col}) => {
        return this.isValidCell(row, col) && !this.visited[row][col]
    }

    visit = (cell) => {
        this.visited[cell.row][cell.col] = true
    }

    isDestination = (cell) => {
        return this.dest.isSamePos(cell)
    }

    setDiff = (cell, newDiff) => {
        if (newDiff < this.diffs[cell.row][cell.col]) {
            this.diffs[cell.row][cell.col] = newDiff
            return true
        }
        return false
    }

    getMaxDiff = ({row, col}, newDiff = false) => {
        let diff = this.diffs[row][col]
        if (newDiff !== false) {
            diff = Math.max(diff, newDiff)
        }
        return diff
    }
}
var minimumEffortPath = function(heights) {
    const matrix = new Matrix(heights.length, heights[0].length)
    const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]]
    const start = new Cell(0, 0, 0)
    const queue = new PriorityQueue({compare: (el1, el2) => el1.diff < el2.diff ? -1 : 1})
    matrix.setDiff(start, 0)
    queue.enqueue(start)
    const getDiff = (currCell, newCell) => {
        return Math.abs(heights[newCell.row][newCell.col]-heights[currCell.row][currCell.col])
    }
    while (!queue.isEmpty()) {
        const curr = queue.dequeue()
        matrix.visit(curr)
        if (matrix.isDestination(curr)) {
            return curr.diff
        }
        for (const [rowOff, colOff] of dir) {
            const newCell = new Cell(curr.row+rowOff, curr.col+colOff)
            if (matrix.canVisit(newCell)) {
                const currDiff = getDiff(curr, newCell)
                const maxDiff = matrix.getMaxDiff(curr, currDiff)
                if (matrix.setDiff(newCell, maxDiff)) {
                    newCell.diff = maxDiff
                    queue.enqueue(newCell)
                }
            }
        }
    }
    return matrix.dest.diff
};
